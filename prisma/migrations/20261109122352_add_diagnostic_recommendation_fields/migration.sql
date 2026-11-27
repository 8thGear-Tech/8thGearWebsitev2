-- Hand-written (not a straight `prisma migrate dev`-generated drop/recreate):
-- one real row already existed (submitted through the old flat form before
-- this migration), so `phone` is backfilled from the old `whatsappPhone`
-- column instead of being dropped, and the new recommendation-engine columns
-- are backfilled with explicit "legacy, not computed" markers rather than a
-- fabricated-looking result, before being made NOT NULL.

-- phone: backfill from whatsappPhone, then enforce NOT NULL.
ALTER TABLE "BusinessCheckupSubmission" ADD COLUMN "phone" TEXT;
UPDATE "BusinessCheckupSubmission" SET "phone" = "whatsappPhone";
ALTER TABLE "BusinessCheckupSubmission" ALTER COLUMN "phone" SET NOT NULL;

ALTER TABLE "BusinessCheckupSubmission" DROP COLUMN "callPhone";
ALTER TABLE "BusinessCheckupSubmission" DROP COLUMN "whatsappPhone";

-- Recommendation-engine outputs (spec Part D) — new columns.
ALTER TABLE "BusinessCheckupSubmission" ADD COLUMN "stage" TEXT;
ALTER TABLE "BusinessCheckupSubmission" ADD COLUMN "mainService" TEXT;
ALTER TABLE "BusinessCheckupSubmission" ADD COLUMN "flags" TEXT[] NOT NULL DEFAULT '{}';
ALTER TABLE "BusinessCheckupSubmission" ADD COLUMN "extrasPrescribeNow" TEXT[] NOT NULL DEFAULT '{}';
ALTER TABLE "BusinessCheckupSubmission" ADD COLUMN "extrasLater" TEXT[] NOT NULL DEFAULT '{}';
ALTER TABLE "BusinessCheckupSubmission" ADD COLUMN "alsoFlagged" TEXT[] NOT NULL DEFAULT '{}';
ALTER TABLE "BusinessCheckupSubmission" ADD COLUMN "gatesTriggered" TEXT[] NOT NULL DEFAULT '{}';
ALTER TABLE "BusinessCheckupSubmission" ADD COLUMN "advisorNotes" TEXT[] NOT NULL DEFAULT '{}';
ALTER TABLE "BusinessCheckupSubmission" ADD COLUMN "nextStepType" TEXT;
ALTER TABLE "BusinessCheckupSubmission" ADD COLUMN "urgency" TEXT;
ALTER TABLE "BusinessCheckupSubmission" ADD COLUMN "leadSource" TEXT;
ALTER TABLE "BusinessCheckupSubmission" ADD COLUMN "sector" TEXT;
ALTER TABLE "BusinessCheckupSubmission" ADD COLUMN "cacStatus" TEXT;

-- Backfill the pre-existing row(s) with explicit legacy markers, then enforce NOT NULL.
UPDATE "BusinessCheckupSubmission"
SET "stage" = 'Unclassified',
    "mainService" = 'MANUAL_REVIEW',
    "advisorNotes" = ARRAY['Submitted via the earlier flat form, before the diagnostic engine — recommendation not computed.'],
    "nextStepType" = 'Non-paid',
    "urgency" = 'Low'
WHERE "stage" IS NULL;

ALTER TABLE "BusinessCheckupSubmission" ALTER COLUMN "stage" SET NOT NULL;
ALTER TABLE "BusinessCheckupSubmission" ALTER COLUMN "mainService" SET NOT NULL;
ALTER TABLE "BusinessCheckupSubmission" ALTER COLUMN "nextStepType" SET NOT NULL;
ALTER TABLE "BusinessCheckupSubmission" ALTER COLUMN "urgency" SET NOT NULL;

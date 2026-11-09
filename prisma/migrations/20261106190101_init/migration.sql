-- CreateTable
CREATE TABLE "BusinessCheckupSubmission" (
    "id" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "whatsappPhone" TEXT NOT NULL,
    "callPhone" TEXT NOT NULL,
    "businessName" TEXT NOT NULL,
    "answers" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "BusinessCheckupSubmission_pkey" PRIMARY KEY ("id")
);

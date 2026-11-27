import { createHmac } from "node:crypto";

/**
 * Notifies 8thGear Internal Tools of a form submission from this site — its
 * /api/form-submissions route (branch feat/webhooks there), which files it as a
 * reviewable FormSubmission. Shared by every form on this site that should surface
 * in that admin dashboard, not just the Business Checkup.
 *
 * The body is signed with HMAC-SHA256 (shared secret via FORM_SUBMISSIONS_WEBHOOK_SECRET)
 * rather than sent as a plain shared-secret header: the signature is over the exact
 * request body, so it also catches tampering in transit, not just the absence of the
 * secret, and a constant-time comparison on the receiving end avoids a timing attack
 * leaking the secret one byte at a time. Signing — not the choice of hash — is what
 * makes this secure; SHA-256 is simply the standard, well-supported digest for it
 * (MD5 is cryptographically broken and shouldn't be used for anything security-sensitive).
 *
 * FORM_SUBMISSIONS_WEBHOOK_SECRET is required in every environment (local, dev, prod)
 * whenever FORM_SUBMISSIONS_WEBHOOK_URL is set — the receiving route now fails closed
 * (503) without it, so an unsigned request would only ever be rejected. Required here
 * too rather than silently sending one: a misconfigured secret should be loud in the
 * logs, not a webhook that quietly never arrives.
 */
export async function notifyFormSubmission(submission: {
  id: string;
  formName: string;
  payload: Record<string, unknown>;
  submitterEmail?: string | null;
}): Promise<void> {
  const webhookUrl = process.env.FORM_SUBMISSIONS_WEBHOOK_URL;
  if (!webhookUrl) return;

  const secret = process.env.FORM_SUBMISSIONS_WEBHOOK_SECRET;
  if (!secret) {
    console.error("formSubmissionWebhook: FORM_SUBMISSIONS_WEBHOOK_SECRET is not set — skipping webhook call.");
    return;
  }

  const body = JSON.stringify(submission);
  const signature = createHmac("sha256", secret).update(body).digest("hex");
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    "x-webhook-signature": `sha256=${signature}`,
  };

  await fetch(webhookUrl, { method: "POST", headers, body });
}

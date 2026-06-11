import { Resend } from "resend";
import {
  buildClinicNotificationEmail,
  buildPatientConfirmationEmail,
  type ClinicNotificationPayload,
} from "@/lib/email/lead-email-templates";

function logEmailResult(kind: "clinic" | "patient", leadId: string, ok: boolean, detail?: string) {
  if (ok) {
    console.log(`[EMAIL:${kind}]`, leadId, "sent");
    return;
  }
  console.error(`[EMAIL:${kind}]`, leadId, detail ?? "send_failed");
}

function getResendClient(): Resend | null {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return null;
  return new Resend(apiKey);
}

function getNotifyFrom(): string | null {
  return process.env.LEAD_NOTIFY_FROM?.trim() || null;
}

function getNotifyTo(): string | null {
  return process.env.LEAD_NOTIFY_TO?.trim() || null;
}

export async function sendLeadNotificationEmail(
  leadId: string,
  payload: ClinicNotificationPayload
): Promise<void> {
  const resend = getResendClient();
  const to = getNotifyTo();
  const from = getNotifyFrom();

  if (!resend || !to || !from) {
    if (process.env.NODE_ENV === "development") {
      console.log("[EMAIL:clinic] skipped — configure RESEND_API_KEY, LEAD_NOTIFY_TO, LEAD_NOTIFY_FROM");
    }
    return;
  }

  const { subject, html } = buildClinicNotificationEmail(payload);

  try {
    const { error } = await resend.emails.send({ from, to, subject, html });
    logEmailResult("clinic", leadId, !error, error?.message);
  } catch (error) {
    const message = error instanceof Error ? error.message : "unknown_error";
    logEmailResult("clinic", leadId, false, message);
  }
}

export async function sendPatientConfirmationEmail(
  leadId: string,
  email: string,
  firstName: string
): Promise<void> {
  const resend = getResendClient();
  const from = getNotifyFrom();

  if (!resend || !from) return;

  const { subject, html } = buildPatientConfirmationEmail(firstName);

  try {
    const { error } = await resend.emails.send({ from, to: email, subject, html });
    logEmailResult("patient", leadId, !error, error?.message);
  } catch (error) {
    const message = error instanceof Error ? error.message : "unknown_error";
    logEmailResult("patient", leadId, false, message);
  }
}

export async function sendLeadEmails(
  leadId: string,
  clinicPayload: ClinicNotificationPayload,
  patientEmail: string | null,
  firstName: string
): Promise<void> {
  await sendLeadNotificationEmail(leadId, clinicPayload);
  if (patientEmail) {
    await sendPatientConfirmationEmail(leadId, patientEmail, firstName);
  }
}

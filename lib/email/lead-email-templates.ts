import { SITE } from "@/lib/constants";
import { getSiteUrl } from "@/lib/site-url";
import {
  contactPreferenceLabel,
  formatLeadDateTime,
  serviceLabel,
} from "@/lib/email/lead-labels";
import { phoneToTelHref, phoneToWhatsAppHref } from "@/lib/email/phone-links";

const BRAND = "#534AB7";

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function row(label: string, value: string): string {
  return `<tr>
    <td style="padding:10px 12px;border-bottom:1px solid #eee;color:#666;width:38%;vertical-align:top;">${escapeHtml(label)}</td>
    <td style="padding:10px 12px;border-bottom:1px solid #eee;color:#222;vertical-align:top;">${value}</td>
  </tr>`;
}

export type ClinicNotificationPayload = {
  lastName: string;
  firstName: string;
  phone: string;
  email: string | null;
  service: string;
  message: string | null;
  contactPreference: string | null;
  submittedAt: string;
};

export function buildClinicNotificationEmail(payload: ClinicNotificationPayload): {
  subject: string;
  html: string;
} {
  const fullName = `${payload.firstName} ${payload.lastName}`;
  const telHref = phoneToTelHref(payload.phone);
  const waHref = phoneToWhatsAppHref(payload.phone);
  const service = serviceLabel(payload.service);
  const preference = contactPreferenceLabel(payload.contactPreference);
  const when = formatLeadDateTime(payload.submittedAt);

  const subject = `Solicitare nouă: ${fullName} — ${service}`;

  const actionButtons = `
    <p style="margin:24px 0 0;">
      <a href="${escapeHtml(telHref)}" style="display:inline-block;background:${BRAND};color:#fff;text-decoration:none;padding:12px 20px;border-radius:10px;font-weight:600;margin-right:10px;">Sună acum</a>
      ${
        waHref
          ? `<a href="${escapeHtml(waHref)}" style="display:inline-block;background:#25D366;color:#fff;text-decoration:none;padding:12px 20px;border-radius:10px;font-weight:600;">Deschide WhatsApp</a>`
          : ""
      }
    </p>`;

  const html = `<!DOCTYPE html>
<html lang="ro">
<head><meta charset="utf-8" /></head>
<body style="margin:0;padding:0;background:#f6f5fb;font-family:Segoe UI,Roboto,Helvetica,Arial,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="padding:24px 12px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(83,74,183,0.12);">
          <tr>
            <td style="background:${BRAND};padding:20px 24px;">
              <h1 style="margin:0;color:#fff;font-size:20px;font-weight:700;">Solicitare nouă de pe implantik.ro</h1>
            </td>
          </tr>
          <tr>
            <td style="padding:8px 8px 0;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;font-size:15px;">
                ${row("Nume complet", escapeHtml(fullName))}
                ${row("Telefon", `<a href="${escapeHtml(telHref)}" style="color:${BRAND};text-decoration:none;">${escapeHtml(payload.phone)}</a>`)}
                ${row(
                  "Email",
                  payload.email
                    ? `<a href="mailto:${escapeHtml(payload.email)}" style="color:${BRAND};text-decoration:none;">${escapeHtml(payload.email)}</a>`
                    : "—"
                )}
                ${row("Serviciul de interes", escapeHtml(service))}
                ${row("Mențiuni", escapeHtml(payload.message || "—"))}
                ${row("Preferința de contact", escapeHtml(preference))}
                ${row("Data și ora", escapeHtml(when))}
              </table>
              ${actionButtons}
            </td>
          </tr>
          <tr>
            <td style="padding:20px 24px 24px;color:#888;font-size:12px;line-height:1.5;">
              Detalii complete și istoricul solicitărilor: în baza de date a clinicii.
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

  return { subject, html };
}

export function buildPatientConfirmationEmail(firstName: string): {
  subject: string;
  html: string;
} {
  const subject = "Am primit solicitarea ta — Implantik";
  const privacyUrl = `${getSiteUrl()}/ro/confidentialitate`;

  const html = `<!DOCTYPE html>
<html lang="ro">
<head><meta charset="utf-8" /></head>
<body style="margin:0;padding:0;background:#f6f5fb;font-family:Segoe UI,Roboto,Helvetica,Arial,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="padding:24px 12px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(83,74,183,0.12);">
          <tr>
            <td style="background:${BRAND};padding:20px 24px;">
              <h1 style="margin:0;color:#fff;font-size:20px;font-weight:700;">Implantik by Dr. Chirap</h1>
            </td>
          </tr>
          <tr>
            <td style="padding:24px;color:#222;font-size:15px;line-height:1.6;">
              <p style="margin:0 0 16px;">Mulțumim, ${escapeHtml(firstName)}! Am primit solicitarea ta și te contactăm în cel mai scurt timp (program: Luni–Vineri, 8:00–19:30).</p>
              <p style="margin:0;">Dacă e urgent, ne găsești la <a href="${escapeHtml(SITE.phoneHref)}" style="color:${BRAND};">${escapeHtml(SITE.phone)}</a> sau pe <a href="${escapeHtml(SITE.whatsappHref)}" style="color:${BRAND};">WhatsApp</a>.</p>
            </td>
          </tr>
          <tr>
            <td style="padding:0 24px 24px;color:#666;font-size:13px;line-height:1.5;">
              ${escapeHtml(SITE.address)}<br />
              <a href="${escapeHtml(privacyUrl)}" style="color:${BRAND};">Politica de confidențialitate</a>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

  return { subject, html };
}

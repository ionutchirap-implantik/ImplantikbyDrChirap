import { SITE } from "@/lib/constants";

type LeadEmailPayload = {
  lastName: string;
  firstName: string;
  phone: string;
  service: string;
  message: string | null;
  locale: string;
  eventId: string;
};

export async function sendLeadNotificationEmail(
  lead: LeadEmailPayload
): Promise<{ sent: boolean }> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    if (process.env.NODE_ENV === "development") {
      console.log("[EMAIL — configurează RESEND_API_KEY]", SITE.email, lead.eventId);
    }
    return { sent: false };
  }

  const from = process.env.RESEND_FROM_EMAIL ?? "Implantik <onboarding@resend.dev>";
  const subject = `Lead nou: ${lead.firstName} ${lead.lastName} — ${lead.service}`;
  const text = [
    `Nume: ${lead.lastName} ${lead.firstName}`,
    `Telefon: ${lead.phone}`,
    `Specialitate: ${lead.service}`,
    `Mențiuni: ${lead.message || "—"}`,
    `Limbă: ${lead.locale}`,
    `Event ID: ${lead.eventId}`,
  ].join("\n");

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: SITE.email,
        subject,
        text,
        reply_to: lead.phone.includes("@") ? lead.phone : undefined,
      }),
    });

    return { sent: res.ok };
  } catch {
    return { sent: false };
  }
}

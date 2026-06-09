import { generateEventId } from "./event-id";

export type DataLayerEvent =
  | { event: "whatsapp_click"; page: string; location?: string; event_id: string }
  | { event: "phone_call"; page: string; location?: string; event_id: string }
  | { event: "generate_lead"; form_name: string; event_id: string }
  | { event: "Lead"; event_id: string; content_name?: string }
  | { event: "Contact"; method: "whatsapp" | "phone"; page: string; event_id: string }
  | { event: "ViewContent"; page: string; content_name: string; event_id: string };

declare global {
  interface Window {
    dataLayer?: DataLayerEvent[];
  }
}

export function pushDataLayer(event: DataLayerEvent) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(event);
}

export function trackWhatsAppClick(page: string, location?: string) {
  const event_id = generateEventId();
  pushDataLayer({ event: "whatsapp_click", page, location, event_id });
  pushDataLayer({ event: "Contact", method: "whatsapp", page, event_id });
}

export function trackPhoneCall(page: string, location?: string) {
  const event_id = generateEventId();
  pushDataLayer({ event: "phone_call", page, location, event_id });
  pushDataLayer({ event: "Contact", method: "phone", page, event_id });
}

export function trackLead(formName: string, serverEventId?: string) {
  const event_id = serverEventId || generateEventId();
  pushDataLayer({ event: "generate_lead", form_name: formName, event_id });
  pushDataLayer({ event: "Lead", event_id, content_name: formName });
}

export function trackViewContent(page: string, contentName: string) {
  const event_id = generateEventId();
  pushDataLayer({ event: "ViewContent", page, content_name: contentName, event_id });
}

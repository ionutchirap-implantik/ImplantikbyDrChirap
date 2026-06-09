export type DataLayerEvent =
  | { event: "whatsapp_click"; location: string }
  | { event: "phone_call"; location: string }
  | { event: "generate_lead"; form_name: string };

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

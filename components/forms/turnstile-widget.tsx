"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    turnstile?: {
      render: (el: HTMLElement, options: { sitekey: string; theme?: string }) => string;
      remove: (id: string) => void;
    };
  }
}

type TurnstileWidgetProps = {
  siteKey: string;
};

export function TurnstileWidget({ siteKey }: TurnstileWidgetProps) {
  const ref = useRef<HTMLDivElement>(null);
  const widgetId = useRef<string | null>(null);

  useEffect(() => {
    if (!ref.current || !siteKey) return;

    const render = () => {
      if (!ref.current || !window.turnstile) return;
      widgetId.current = window.turnstile.render(ref.current, {
        sitekey: siteKey,
        theme: "light",
      });
    };

    if (window.turnstile) {
      render();
      return;
    }

    const script = document.createElement("script");
    script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
    script.async = true;
    script.onload = render;
    document.head.appendChild(script);

    return () => {
      if (widgetId.current && window.turnstile) {
        window.turnstile.remove(widgetId.current);
      }
    };
  }, [siteKey]);

  return <div ref={ref} />;
}

"use client";

import { useEffect } from "react";
import { captureAttributionFromUrl } from "@/lib/tracking/attribution";

export function ConsentScripts() {
  useEffect(() => {
    captureAttributionFromUrl();
  }, []);

  return null;
}

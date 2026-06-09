"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function HtmlLang() {
  const pathname = usePathname();

  useEffect(() => {
    const locale = pathname.split("/")[1];
    if (locale === "ro" || locale === "en") {
      document.documentElement.lang = locale;
    }
  }, [pathname]);

  return null;
}

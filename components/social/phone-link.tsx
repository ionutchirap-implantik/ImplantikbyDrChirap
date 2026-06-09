"use client";

import type { ReactNode } from "react";
import { SITE } from "@/lib/constants";
import { trackPhoneCall } from "@/lib/tracking/data-layer";

type PhoneLinkProps = {
  page: string;
  location?: string;
  className?: string;
  children: ReactNode;
};

export function PhoneLink({ page, location, className, children }: PhoneLinkProps) {
  return (
    <a
      href={SITE.phoneHref}
      className={className}
      onClick={() => trackPhoneCall(page, location)}
    >
      {children}
    </a>
  );
}

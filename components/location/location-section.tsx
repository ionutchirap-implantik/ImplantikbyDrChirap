import { MapPin, Clock, Phone } from "lucide-react";
import { SITE } from "@/lib/constants";
import { MapEmbed } from "./map-embed";
import { NavigationButtons } from "./navigation-buttons";
import { PhoneLink } from "@/components/social/phone-link";
import type { Dictionary } from "@/lib/i18n/get-dictionary";

type LocationSectionProps = {
  dict: Dictionary;
  page: string;
  variant?: "footer" | "contact";
};

export function LocationSection({ dict, page, variant = "footer" }: LocationSectionProps) {
  const t = dict.location;
  const isContact = variant === "contact";

  return (
    <section className={isContact ? "" : "border-t bg-background"}>
      <div className={isContact ? "" : "container-narrow section-padding pt-12"}>
        {isContact && (
          <h2 className="font-display text-xl font-semibold">{t.title}</h2>
        )}
        {!isContact && (
          <h2 className="mb-6 font-display text-2xl font-semibold">{t.findUs}</h2>
        )}

        <div className={isContact ? "mt-6 space-y-6" : "space-y-6"}>
          <MapEmbed title={t.mapTitle} aspect={isContact ? "large" : "compact"} />

          <NavigationButtons dict={dict} page={page} location={variant} />

          <div className="grid gap-4 rounded-2xl border bg-secondary/20 p-5 text-sm sm:grid-cols-3">
            <div className="flex gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <div>
                <p className="font-medium">{dict.footer.address}</p>
                <p className="text-muted-foreground">{SITE.address}</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <div>
                <p className="font-medium">{dict.footer.schedule}</p>
                <p className="text-muted-foreground">{SITE.hours}</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <div>
                <p className="font-medium">{t.phones}</p>
                <PhoneLink page={page} location={variant} className="block text-primary hover:underline">
                  {SITE.phone}
                </PhoneLink>
                <a
                  href={SITE.phoneLandlineHref}
                  className="block text-muted-foreground hover:text-foreground"
                >
                  {SITE.phoneLandline}
                </a>
                <p className="mt-1 text-xs text-muted-foreground">{SITE.phoneNote}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

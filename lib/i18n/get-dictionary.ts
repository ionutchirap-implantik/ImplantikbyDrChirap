import type { Locale } from "./config";

import type { dictionary as roDictionary } from "./dictionaries/ro";

const dictionaries = {
  ro: () => import("./dictionaries/ro").then((m) => m.dictionary),
  en: () => import("./dictionaries/en").then((m) => m.dictionary),
};

export type Dictionary = typeof roDictionary;

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  return dictionaries[locale]() as Promise<Dictionary>;
}

/** Plain text for JSON-LD — strips markdown links, keeps visible meaning. */
export function plainTextForSchema(text: string): string {
  return text
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/\s+/g, " ")
    .trim();
}

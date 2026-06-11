export type LegalSection = {
  id: string;
  title: string;
  paragraphs: string[];
  subsections?: LegalSection[];
};

export type LegalDocumentType = "privacy" | "cookies" | "terms";

export type LegalDocument = {
  type: LegalDocumentType;
  title: string;
  description: string;
  lastUpdated: string;
  tocTitle: string;
  sections: LegalSection[];
};

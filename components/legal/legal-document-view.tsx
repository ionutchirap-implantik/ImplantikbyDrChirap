import { LegalPlaceholder } from "@/components/legal/legal-placeholder";
import type { LegalDocument, LegalSection } from "@/lib/legal/types";

type LegalDocumentViewProps = {
  document: LegalDocument;
};

function renderParagraphs(paragraphs: string[]) {
  return paragraphs.map((paragraph, index) => (
    <p key={index} className="leading-relaxed text-muted-foreground">
      <LegalPlaceholder text={paragraph} />
    </p>
  ));
}

function renderSection(section: LegalSection, level: 2 | 3 = 2) {
  const Heading = level === 2 ? "h2" : "h3";
  const headingClass =
    level === 2
      ? "font-display text-2xl font-semibold scroll-mt-24"
      : "font-display text-xl font-semibold scroll-mt-24";

  return (
    <section key={section.id} id={section.id} className="scroll-mt-24">
      <Heading className={headingClass}>{section.title}</Heading>
      <div className="mt-4 space-y-4">{renderParagraphs(section.paragraphs)}</div>
      {section.subsections?.length ? (
        <div className="mt-6 space-y-8 border-l-2 border-primary/20 pl-6">
          {section.subsections.map((subsection) => renderSection(subsection, 3))}
        </div>
      ) : null}
    </section>
  );
}

export function LegalDocumentView({ document }: LegalDocumentViewProps) {
  return (
    <article className="container-narrow max-w-3xl">
      <header>
        <h1 className="font-display text-3xl font-semibold sm:text-4xl">{document.title}</h1>
        <p className="mt-4 text-muted-foreground">
          <LegalPlaceholder text={document.description} />
        </p>
        <p className="mt-2 text-sm text-muted-foreground">
          {document.lastUpdated}
        </p>
      </header>

      <nav
        aria-label={document.tocTitle}
        className="mt-10 rounded-2xl border border-border bg-secondary/30 p-6"
      >
        <h2 className="font-display text-lg font-semibold">{document.tocTitle}</h2>
        <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm">
          {document.sections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className="text-primary underline-offset-4 hover:underline"
              >
                {section.title}
              </a>
              {section.subsections?.length ? (
                <ol className="mt-2 list-[lower-alpha] space-y-1 pl-5">
                  {section.subsections.map((subsection) => (
                    <li key={subsection.id}>
                      <a
                        href={`#${subsection.id}`}
                        className="text-primary underline-offset-4 hover:underline"
                      >
                        {subsection.title}
                      </a>
                    </li>
                  ))}
                </ol>
              ) : null}
            </li>
          ))}
        </ol>
      </nav>

      <div className="prose prose-neutral mt-12 max-w-none space-y-12">
        {document.sections.map((section) => renderSection(section))}
      </div>
    </article>
  );
}

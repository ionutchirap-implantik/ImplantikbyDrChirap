const PLACEHOLDER_SPLIT = /(\[[^\]]*DE COMPLETAT[^\]]*\])/g;
const PLACEHOLDER_MATCH = /^\[[^\]]*DE COMPLETAT[^\]]*\]$/;

type LegalPlaceholderProps = {
  text: string;
  className?: string;
};

/** Highlights `[DE COMPLETAT...]` and `[...DE COMPLETAT...]` segments for client review. */
export function LegalPlaceholder({ text, className }: LegalPlaceholderProps) {
  const parts = text.split(PLACEHOLDER_SPLIT);

  return (
    <span className={className}>
      {parts.map((part, index) =>
        PLACEHOLDER_MATCH.test(part) ? (
          <mark
            key={index}
            className="rounded bg-amber-100 px-1 dark:bg-amber-900/40"
          >
            {part}
          </mark>
        ) : (
          <span key={index}>{part}</span>
        )
      )}
    </span>
  );
}

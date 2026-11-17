type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "split";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={
        align === "split"
          ? "mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
          : "mb-10"
      }
    >
      <div>
        {eyebrow && (
          <p className="text-xs uppercase tracking-[0.15em] text-olive">
            {eyebrow}
          </p>
        )}
        <h2 className={`font-serif text-3xl tracking-tight text-charcoal sm:text-4xl ${eyebrow ? "mt-2" : ""}`}>
          {title}
        </h2>
      </div>
      {description && (
        <p className="max-w-sm text-stone sm:text-right">{description}</p>
      )}
    </div>
  );
}

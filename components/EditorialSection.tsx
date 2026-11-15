import Link from "next/link";

const STEPS = [
  {
    index: "01",
    name: "Source",
    detail:
      "Every piece starts from material we can actually stand behind — public-domain art, or photography we shot or properly licensed.",
  },
  {
    index: "02",
    name: "Grade",
    detail:
      "A grainy halftone pass or a cinematic colour grade, built by hand for that piece — never a one-click filter.",
  },
  {
    index: "03",
    name: "Frame",
    detail:
      "Printed, checked against the original, and set behind glass before it leaves the studio.",
  },
];

export default function EditorialSection() {
  return (
    <section className="bg-beige px-6 py-20 lg:px-10 2xl:py-28">
      <div className="mx-auto max-w-6xl 2xl:max-w-[90rem]">
        <div className="max-w-xl">
          <p className="text-xs uppercase tracking-[0.15em] text-olive">
            Made for the moments that matter
          </p>
          <h2 className="mt-3 font-serif text-4xl tracking-tight text-charcoal sm:text-5xl">
            Every wall has a story.
          </h2>
          <p className="mt-6 text-stone">
            From the photographs that take you back to the places you love,
            to the artwork that inspires you every day — we believe the
            smallest details can change the feeling of an entire room. Our
            studio in Mumbai sources, grades, and frames every print by hand.
          </p>
          <Link
            href="/about"
            className="mt-6 inline-block text-sm uppercase tracking-[0.08em] text-charcoal underline decoration-charcoal/30 underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
          >
            Get to know us
          </Link>
        </div>

        <div className="relative mt-16 grid gap-10 sm:grid-cols-3 sm:gap-12">
          <div
            aria-hidden="true"
            className="absolute top-3 left-0 right-0 hidden h-px bg-charcoal/15 sm:block"
          />
          {STEPS.map((step) => (
            <div key={step.index} className="relative">
              <span className="relative z-10 block bg-beige pr-4 font-serif text-sm text-accent sm:inline-block">
                {step.index}
              </span>
              <h3 className="mt-4 font-serif text-2xl text-charcoal">
                {step.name}
              </h3>
              <p className="mt-2 max-w-xs text-sm text-stone">
                {step.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import MembershipBand from "@/components/MembershipBand";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "About — Frame & Co.",
  description: "Who makes these prints, and why we build them the way we do.",
};

const STEPS = [
  {
    index: "01",
    name: "Source",
    detail:
      "Every piece starts from material we can actually stand behind — public-domain art, or photography we shot or properly licensed. Nothing lifted from someone else's feed.",
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

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-ivory text-charcoal">
      <Nav />
      <main>
        <section className="mx-auto max-w-6xl px-6 pt-32 pb-16 sm:pt-40 sm:pb-20 lg:px-10 2xl:max-w-[90rem] 2xl:px-16 2xl:pt-44">
          <h1 className="font-serif text-5xl tracking-tight text-charcoal sm:text-6xl">
            In the studio
          </h1>
          <p className="mt-6 max-w-lg text-stone">
            Frame &amp; Co. started as one desk in Mumbai and a refusal to
            sell anything we couldn&apos;t actually license — no screenshots
            off someone else&apos;s Instagram, no AI composites passed off as
            originals. Every print is built from public-domain art or
            photography we shot or properly licensed, then graded and framed
            by hand.
          </p>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-24 lg:px-10 2xl:max-w-[90rem] 2xl:px-16 2xl:pb-32">
          <SectionHeading eyebrow="How it's made" title="Sourced, graded, framed" />
          <div className="relative grid gap-10 sm:grid-cols-3 sm:gap-12">
            <div
              aria-hidden="true"
              className="absolute top-3 left-0 right-0 hidden h-px bg-charcoal/15 sm:block"
            />
            {STEPS.map((step) => (
              <div key={step.index} className="relative">
                <span className="relative z-10 block bg-ivory pr-4 font-serif text-sm text-accent sm:inline-block">
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
        </section>
      </main>
      <MembershipBand />
      <Footer />
    </div>
  );
}

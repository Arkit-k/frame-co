import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import MembershipBand from "@/components/MembershipBand";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "About — Frame & Co.",
  description: "Who makes these frames, and why we cut them the way we do.",
};

const STEPS = [
  {
    index: "01",
    name: "Cut",
    detail:
      "Hardwood moulding is cut to size on a chop saw, grain-matched at the corners.",
  },
  {
    index: "02",
    name: "Join",
    detail:
      "Mitred corners are glued, pinned, and clamped overnight before they're touched again.",
  },
  {
    index: "03",
    name: "Finish",
    detail:
      "Sanded by hand, oiled or painted, then checked for square before it leaves the bench.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-wall text-ink">
      <Nav />
      <main>
        <section className="mx-auto max-w-6xl px-6 pt-28 pb-16 sm:pt-36 sm:pb-20 lg:px-10 2xl:max-w-[90rem] 2xl:px-16 2xl:pt-40">
          <h1 className="font-serif text-5xl tracking-tight text-ink sm:text-6xl">
            In the workshop
          </h1>
          <p className="mt-6 max-w-lg text-ink-soft">
            Frame &amp; Co. started as one bench in a Mumbai workshop and a
            short list of materials worth cutting well. We still only make
            seven frames — no laminates, no pre-cut kits — because a smaller
            catalogue means every piece gets more attention on the bench, not
            less.
          </p>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-24 lg:px-10 2xl:max-w-[90rem] 2xl:px-16 2xl:pb-32">
          <SectionHeading eyebrow="How it's made" title="Cut, joined, finished" />
          <div className="relative grid gap-10 sm:grid-cols-3 sm:gap-12">
            <div
              aria-hidden="true"
              className="absolute top-3 left-0 right-0 hidden h-px bg-ink/15 sm:block"
            />
            {STEPS.map((step) => (
              <div key={step.index} className="relative">
                <span className="relative z-10 block bg-wall pr-4 font-serif text-sm text-accent sm:inline-block">
                  {step.index}
                </span>
                <h3 className="mt-4 font-serif text-2xl text-ink">
                  {step.name}
                </h3>
                <p className="mt-2 max-w-xs text-sm text-ink-soft">
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

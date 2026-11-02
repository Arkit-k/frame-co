import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import MembershipBand from "@/components/MembershipBand";
import SectionHeading from "@/components/SectionHeading";
import FrameGrid from "@/components/FrameGrid";
import { ESSENTIALS, NEW_ARRIVALS } from "@/lib/frames";

export const metadata: Metadata = {
  title: "Collections — Frame & Co.",
  description: "Our frames, grouped by collection.",
};

export default function CollectionsPage() {
  return (
    <div className="min-h-screen bg-wall text-ink">
      <Nav />
      <main>
        <section className="mx-auto max-w-6xl px-6 pt-28 pb-16 sm:pt-36 sm:pb-20 lg:px-10 2xl:max-w-[90rem] 2xl:px-16 2xl:pt-40">
          <h1 className="font-serif text-5xl tracking-tight text-ink sm:text-6xl">
            Collections
          </h1>
          <p className="mt-4 max-w-md text-ink-soft">
            Two ways to shop — the shapes we cut most, and what&apos;s just
            landed in the workshop.
          </p>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-20 lg:px-10 2xl:max-w-[90rem] 2xl:px-16 2xl:pb-28">
          <SectionHeading
            eyebrow="The essentials"
            title="Most framed"
            description="The five shapes we cut most often — the ones that work on nearly any wall."
            align="split"
          />
          <FrameGrid frames={ESSENTIALS} />
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-24 lg:px-10 2xl:max-w-[90rem] 2xl:px-16 2xl:pb-32">
          <SectionHeading eyebrow="Just in" title="New arrivals" />
          <FrameGrid frames={NEW_ARRIVALS} />
        </section>
      </main>
      <MembershipBand />
      <Footer />
    </div>
  );
}

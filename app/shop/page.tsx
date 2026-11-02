import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import MembershipBand from "@/components/MembershipBand";
import SectionHeading from "@/components/SectionHeading";
import FrameGrid from "@/components/FrameGrid";
import { ALL_FRAMES } from "@/lib/frames";

export const metadata: Metadata = {
  title: "Shop — Frame & Co.",
  description: "The full catalogue of frames we cut, in every material.",
};

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-wall text-ink">
      <Nav />
      <main>
        <section className="mx-auto max-w-6xl px-6 pt-28 pb-16 sm:pt-36 sm:pb-20 lg:px-10 2xl:max-w-[90rem] 2xl:px-16 2xl:pt-40">
          <SectionHeading
            eyebrow="Shop"
            title="Every frame we cut"
            description="Seven materials, cut to order. Pick a finish and we'll size it to your piece."
            align="split"
          />
        </section>
        <section className="mx-auto max-w-6xl px-6 pb-24 lg:px-10 2xl:max-w-[90rem] 2xl:px-16 2xl:pb-32">
          <FrameGrid frames={ALL_FRAMES} />
        </section>
      </main>
      <MembershipBand />
      <Footer />
    </div>
  );
}

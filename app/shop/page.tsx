import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import MembershipBand from "@/components/MembershipBand";
import SectionHeading from "@/components/SectionHeading";
import FrameGrid from "@/components/FrameGrid";
import ShopFilters from "@/components/ShopFilters";
import {
  ALL_FRAMES,
  getOrientation,
  getStartingPrice,
  type Series,
} from "@/lib/frames";

export const metadata: Metadata = {
  title: "Shop — Frame & Co.",
  description: "The full catalogue of original framed art prints.",
};

export default async function ShopPage({
  searchParams,
}: {
  searchParams: Promise<{
    series?: string;
    size?: string;
    orientation?: string;
    sort?: string;
    view?: string;
  }>;
}) {
  const params = await searchParams;

  let frames = [...ALL_FRAMES];

  if (params.series) {
    frames = frames.filter((f) => f.series === (params.series as Series));
  }
  if (params.size) {
    frames = frames.filter((f) => f.sizes.includes(params.size!));
  }
  if (params.orientation) {
    frames = frames.filter((f) => getOrientation(f) === params.orientation);
  }
  if (params.sort === "price-asc") {
    frames.sort((a, b) => getStartingPrice(a) - getStartingPrice(b));
  } else if (params.sort === "price-desc") {
    frames.sort((a, b) => getStartingPrice(b) - getStartingPrice(a));
  }

  const view = params.view === "list" ? "list" : "grid";

  return (
    <div className="min-h-screen bg-ivory text-charcoal">
      <Nav />
      <main>
        <section className="mx-auto max-w-6xl px-6 pt-32 pb-16 sm:pt-40 sm:pb-20 lg:px-10 2xl:max-w-[90rem] 2xl:px-16 2xl:pt-44">
          <SectionHeading
            eyebrow="Shop"
            title="Every print we've made"
            description="Original art, grain-halftone and full colour, framed and ready to hang."
            align="split"
          />
        </section>
        <section className="mx-auto max-w-6xl px-6 pb-24 lg:px-10 2xl:max-w-[90rem] 2xl:px-16 2xl:pb-32">
          <ShopFilters />
          {frames.length === 0 ? (
            <p className="py-16 text-center text-stone">
              No prints match those filters.
            </p>
          ) : (
            <FrameGrid frames={frames} view={view} />
          )}
        </section>
      </main>
      <MembershipBand />
      <Footer />
    </div>
  );
}

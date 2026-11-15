import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import MembershipBand from "@/components/MembershipBand";
import FrameGrid from "@/components/FrameGrid";
import ProductImageZoom from "@/components/ProductImageZoom";
import ProductPurchasePanel from "@/components/ProductPurchasePanel";
import SizeGuide from "@/components/SizeGuide";
import ReviewsSection from "@/components/ReviewsSection";
import { ALL_FRAMES, getFrameBySlug } from "@/lib/frames";

export function generateStaticParams() {
  return ALL_FRAMES.map((frame) => ({ slug: frame.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const frame = getFrameBySlug(slug);
  if (!frame) return {};
  return {
    title: `${frame.name} — Frame & Co.`,
    description: frame.detail,
  };
}

export default async function FrameDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const frame = getFrameBySlug(slug);
  if (!frame) notFound();

  const related = ALL_FRAMES.filter(
    (f) => f.series === frame.series && f.slug !== frame.slug
  ).slice(0, 4);
  const relatedPadded =
    related.length < 4
      ? [
          ...related,
          ...ALL_FRAMES.filter(
            (f) => f.slug !== frame.slug && !related.includes(f)
          ).slice(0, 4 - related.length),
        ]
      : related;

  return (
    <div className="min-h-screen bg-ivory text-charcoal">
      <Nav />
      <main>
        <section className="mx-auto max-w-6xl px-6 pt-32 pb-20 sm:pt-40 sm:pb-28 lg:px-10 2xl:max-w-[90rem] 2xl:px-16 2xl:pt-44">
          <Link
            href="/shop"
            className="text-sm text-stone transition-colors hover:text-charcoal"
          >
            ← Back to shop
          </Link>

          <div className="mt-8 grid gap-10 sm:grid-cols-2 sm:gap-16">
            <ProductImageZoom frame={frame} />

            <div>
              <p className="font-mono text-xs uppercase tracking-[0.15em] text-olive">
                {frame.series} · {frame.detail}
              </p>
              <h1 className="mt-2 font-serif text-4xl tracking-tight text-charcoal sm:text-5xl">
                {frame.name}
              </h1>

              <p className="mt-6 max-w-md text-stone">{frame.description}</p>

              {frame.note && (
                <p className="mt-4 max-w-md text-sm text-accent">
                  {frame.note}
                </p>
              )}

              <ProductPurchasePanel frame={frame} />

              <p className="mt-6 max-w-md text-xs text-stone">
                Made to order in our Mumbai studio — allow 5–7 days before
                dispatch. Questions about sizing or bulk orders?{" "}
                <Link href="/contact" className="underline hover:text-charcoal">
                  Get in touch
                </Link>
                .
              </p>

              <div className="mt-10 border-t border-charcoal/10 pt-8">
                <SizeGuide sizes={frame.sizes} />
              </div>

              <div className="mt-10 border-t border-charcoal/10 pt-8">
                <ReviewsSection slug={frame.slug} />
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-24 lg:px-10 2xl:max-w-[90rem] 2xl:px-16 2xl:pb-32">
          <p className="mb-8 text-xs uppercase tracking-[0.15em] text-stone">
            You might also like
          </p>
          <FrameGrid frames={relatedPadded} />
        </section>
      </main>
      <MembershipBand />
      <Footer />
    </div>
  );
}

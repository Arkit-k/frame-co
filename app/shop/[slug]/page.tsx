import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import MembershipBand from "@/components/MembershipBand";
import FrameGrid from "@/components/FrameGrid";
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

  const related = ALL_FRAMES.filter((f) => f.slug !== frame.slug).slice(0, 4);

  return (
    <div className="min-h-screen bg-wall text-ink">
      <Nav />
      <main>
        <section className="mx-auto max-w-6xl px-6 pt-28 pb-20 sm:pt-36 sm:pb-28 lg:px-10 2xl:max-w-[90rem] 2xl:px-16 2xl:pt-40">
          <Link
            href="/shop"
            className="text-sm text-ink-soft transition-colors hover:text-ink"
          >
            ← Back to shop
          </Link>

          <div className="mt-8 grid gap-10 sm:grid-cols-2 sm:gap-16">
            <div
              className={`relative ${frame.aspect} w-full max-w-md overflow-hidden border border-ink/10 bg-wall-dim`}
            >
              <Image
                src={frame.image}
                alt={`${frame.name} picture frame`}
                fill
                priority
                sizes="(min-width: 640px) 440px, 90vw"
                className="object-cover"
              />
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.15em] text-ink-soft">
                {frame.detail}
              </p>
              <h1 className="mt-2 font-serif text-4xl tracking-tight text-ink sm:text-5xl">
                {frame.name}
              </h1>

              <p className="mt-6 max-w-md text-ink-soft">
                {frame.description}
              </p>

              {frame.note && (
                <p className="mt-4 max-w-md text-sm text-accent">
                  {frame.note}
                </p>
              )}

              <div className="mt-8">
                <p className="text-xs uppercase tracking-wide text-ink-soft">
                  Available sizes
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {frame.sizes.map((size) => (
                    <span
                      key={size}
                      className="border border-ink/15 px-3 py-1.5 text-sm text-ink"
                    >
                      {size}
                    </span>
                  ))}
                </div>
              </div>

              <Link
                href="/contact"
                className="mt-10 inline-block border border-ink/20 px-5 py-2.5 text-sm text-ink transition-colors hover:border-accent hover:text-accent"
              >
                Enquire about this frame
              </Link>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-24 lg:px-10 2xl:max-w-[90rem] 2xl:px-16 2xl:pb-32">
          <p className="mb-8 text-xs uppercase tracking-[0.15em] text-ink-soft">
            You might also like
          </p>
          <FrameGrid frames={related} />
        </section>
      </main>
      <MembershipBand />
      <Footer />
    </div>
  );
}

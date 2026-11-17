"use client";

import Image from "next/image";
import Link from "next/link";
import SectionHeading from "./SectionHeading";
import { ALL_FRAMES } from "@/lib/frames";

// a dense bento grid — every piece gets a deliberately different size,
// packed tight by the browser rather than scrolled through sideways
const SPANS = [
  "col-span-2 row-span-2",
  "col-span-1 row-span-1",
  "col-span-1 row-span-2",
  "col-span-2 row-span-1",
  "col-span-1 row-span-1",
  "col-span-2 row-span-2",
  "col-span-1 row-span-1",
  "col-span-1 row-span-2",
  "col-span-2 row-span-1",
  "col-span-1 row-span-1",
];

export default function InspirationGallery() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-20 lg:px-10 2xl:max-w-[90rem] 2xl:px-16 2xl:pb-28">
      <SectionHeading eyebrow="On the wall" title="The collection" />
      <div className="grid grid-flow-dense grid-cols-2 auto-rows-[140px] gap-3 sm:grid-cols-4 sm:auto-rows-[160px] lg:grid-cols-6 lg:auto-rows-[180px]">
        {ALL_FRAMES.map((frame, i) => (
          <Link
            key={frame.slug}
            href={`/shop/${frame.slug}`}
            className={`group relative block overflow-hidden bg-beige ${SPANS[i % SPANS.length]}`}
          >
            <Image
              src={frame.image}
              alt={`${frame.name} — framed art print`}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 50vw"
              className="object-contain p-2 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
            />
            <span className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-full bg-charcoal/90 py-1.5 text-center font-mono text-[10px] uppercase tracking-[0.1em] text-ivory opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              {frame.name}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}

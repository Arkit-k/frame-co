"use client";

import Image from "next/image";
import Link from "next/link";
import SectionHeading from "./SectionHeading";
import { ALL_FRAMES } from "@/lib/frames";

export default function InspirationGallery() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-20 lg:px-10 2xl:max-w-[90rem] 2xl:px-16 2xl:pb-28">
      <SectionHeading eyebrow="On the wall" title="The collection" />
      <div className="columns-2 gap-4 sm:columns-3 lg:columns-4">
        {ALL_FRAMES.map((frame) => (
          <Link
            key={frame.slug}
            href={`/shop/${frame.slug}`}
            className="group mb-4 block break-inside-avoid overflow-hidden bg-beige"
          >
            <div className={`relative ${frame.aspect} w-full`}>
              <Image
                src={frame.image}
                alt={`${frame.name} — framed art print`}
                fill
                sizes="(min-width: 1024px) 23vw, (min-width: 640px) 31vw, 46vw"
                className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
              />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

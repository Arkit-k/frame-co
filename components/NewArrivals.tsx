"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { NEW_ARRIVALS } from "@/lib/frames";

export default function NewArrivals() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-20 lg:px-10 2xl:max-w-[90rem] 2xl:px-16 2xl:pb-28">
      <SectionHeading eyebrow="Just in" title="New arrivals" />
      <div className="grid gap-10 sm:grid-cols-2 sm:gap-12">
        {NEW_ARRIVALS.map((item, i) => (
          <motion.div
            key={item.slug}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            <Link href={`/shop/${item.slug}`} className="group block">
              <div className="relative aspect-[4/3] overflow-hidden border border-ink/10 bg-wall-dim">
                <Image
                  src={item.image}
                  alt={`${item.name} picture frame`}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                />
              </div>
              <figcaption className="mt-4">
                <span className="block font-serif text-xl text-ink transition-colors group-hover:text-accent">
                  {item.name}
                </span>
                <span className="mt-1 block text-sm text-ink-soft">
                  {item.detail}
                </span>
                {item.note && (
                  <span className="mt-2 block max-w-sm text-sm text-ink-soft/80">
                    {item.note}
                  </span>
                )}
              </figcaption>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

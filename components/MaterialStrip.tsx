"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const MATERIALS = [
  { label: "Walnut", slug: "walnut" },
  { label: "White ash", slug: "ash" },
  { label: "Oak", slug: "oak" },
  { label: "Blackened oak", slug: "ink" },
  { label: "Brass", slug: "brass" },
];

export default function MaterialStrip() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-20 lg:px-10 2xl:max-w-[90rem] 2xl:px-16 2xl:pb-28">
      <SectionHeading eyebrow="Find your match" title="Shop by material" />
      <div className="flex flex-wrap gap-6 sm:gap-8">
        {MATERIALS.map((material, i) => (
          <motion.div
            key={material.slug}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
          >
            <Link
              href={`/shop/${material.slug}`}
              className="group flex w-24 flex-col items-center gap-3 text-center sm:w-28"
            >
              <span className="relative block aspect-square w-full overflow-hidden border border-ink/10">
                <span className="absolute inset-0 bg-wall-dim transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105" />
                <span className="absolute inset-0 border border-transparent transition-colors duration-500 group-hover:border-accent" />
              </span>
              <span className="text-sm text-ink-soft transition-colors duration-500 group-hover:text-ink">
                {material.label}
              </span>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

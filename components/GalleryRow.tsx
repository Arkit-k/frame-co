"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { ESSENTIALS } from "@/lib/frames";

export default function GalleryRow() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-20 lg:px-10 2xl:max-w-[90rem] 2xl:px-16 2xl:pb-28">
      <SectionHeading
        eyebrow="The essentials"
        title="Most framed"
        description="The five shapes we cut most often — the ones that work on nearly any wall."
        align="split"
      />
      <div className="flex gap-5 overflow-x-auto pb-4 sm:grid sm:grid-cols-5 sm:overflow-visible 2xl:gap-8">
        {ESSENTIALS.map((frame, i) => (
          <motion.div
            key={frame.slug}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="w-44 flex-none sm:w-auto"
          >
            <Link href={`/shop/${frame.slug}`} className="group block">
              <div className={`relative ${frame.aspect} overflow-hidden border border-ink/10 bg-wall-dim`}>
                <Image
                  src={frame.image}
                  alt={`${frame.name} picture frame`}
                  fill
                  sizes="(min-width: 640px) 20vw, 176px"
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                />
              </div>
              <figcaption className="mt-3 text-sm">
                <span className="block text-ink transition-colors group-hover:text-accent">
                  {frame.name}
                </span>
                <span className="block text-ink-soft">{frame.detail}</span>
              </figcaption>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

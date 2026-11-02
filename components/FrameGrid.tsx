"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Frame } from "@/lib/frames";

export default function FrameGrid({ frames }: { frames: Frame[] }) {
  return (
    <div className="grid grid-cols-2 gap-x-5 gap-y-10 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 2xl:gap-x-8">
      {frames.map((frame, i) => (
        <motion.div
          key={frame.slug}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.5, delay: (i % 4) * 0.06 }}
        >
          <Link href={`/shop/${frame.slug}`} className="group block">
            <div
              className={`relative ${frame.aspect} overflow-hidden border border-ink/10 bg-wall-dim`}
            >
              <Image
                src={frame.image}
                alt={`${frame.name} picture frame`}
                fill
                sizes="(min-width: 1024px) 23vw, (min-width: 640px) 31vw, 46vw"
                className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
              />
            </div>
            <figcaption className="mt-3 text-sm">
              <span className="block text-ink group-hover:text-accent transition-colors">
                {frame.name}
              </span>
              <span className="block text-ink-soft">{frame.detail}</span>
              {frame.note && (
                <span className="mt-1 block text-ink-soft/70">
                  {frame.note}
                </span>
              )}
            </figcaption>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}

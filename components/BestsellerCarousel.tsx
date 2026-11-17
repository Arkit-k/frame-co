"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  type MotionValue,
} from "framer-motion";
import SectionHeading from "./SectionHeading";
import type { Frame } from "@/lib/frames";
import { formatINR, getStartingPrice, ESSENTIALS } from "@/lib/frames";

function ScrollFrame({
  frame,
  index,
  total,
  scrollYProgress,
  reduceMotion,
}: {
  frame: Frame;
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
  reduceMotion: boolean | null;
}) {
  const slotStart = index / total;
  const slotEnd = (index + 1) / total;
  const fade = 1 / total / 3;
  const isFirst = index === 0;
  const isLast = index === total - 1;

  let input: number[];
  let output: number[];
  if (isFirst && isLast) {
    input = [0, 1];
    output = [1, 1];
  } else if (isFirst) {
    input = [0, slotEnd - fade, slotEnd + fade];
    output = [1, 1, 0];
  } else if (isLast) {
    input = [slotStart - fade, slotStart + fade, 1];
    output = [0, 1, 1];
  } else {
    input = [slotStart - fade, slotStart + fade, slotEnd - fade, slotEnd + fade];
    output = [0, 1, 1, 0];
  }

  const opacity = useTransform(scrollYProgress, input, output);
  const scale = useTransform(scrollYProgress, [slotStart, slotEnd], [1, 1.08]);

  return (
    <motion.div style={{ opacity, zIndex: index }} className="absolute inset-0 bg-black">
      <Link href={`/shop/${frame.slug}`} className="relative block h-full w-full">
        <motion.div style={{ scale: reduceMotion ? 1 : scale }} className="absolute inset-0">
          <Image
            src={frame.image}
            alt={`${frame.name} — framed art print`}
            fill
            sizes="100vw"
            priority={index === 0}
            className="object-contain"
          />
        </motion.div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent px-6 pb-8 pt-20 sm:px-12 sm:pb-12">
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-ivory/70">
            {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
          <p className="mt-2 font-serif text-2xl text-ivory sm:text-4xl">{frame.name}</p>
          <p className="mt-1 text-sm text-ivory/80">
            {frame.series} · From {formatINR(getStartingPrice(frame))}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}

export default function BestsellerCarousel() {
  const scrollTarget = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const frames = ESSENTIALS;

  const { scrollYProgress } = useScroll({
    target: scrollTarget,
    offset: ["start start", "end end"],
  });

  return (
    <section>
      <div className="mx-auto max-w-6xl px-6 pt-20 lg:px-10 2xl:max-w-[90rem] 2xl:px-16">
        <SectionHeading
          title="Bestsellers"
          description="The five prints people come back for — the ones that work on nearly any wall."
          align="split"
        />
      </div>

      <div ref={scrollTarget} data-nav-theme="dark" className="relative h-[500svh] bg-black">
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          {frames.map((frame, i) => (
            <ScrollFrame
              key={frame.slug}
              frame={frame}
              index={i}
              total={frames.length}
              scrollYProgress={scrollYProgress}
              reduceMotion={reduceMotion}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

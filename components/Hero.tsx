"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { X } from "lucide-react";
import { getFrameBySlug } from "@/lib/frames";

const EASE = [0.22, 1, 0.36, 1] as const;

type Cell = {
  slug: string;
  col: string; // "start / end" grid-column-line values
  row: string; // "start / end" grid-row-line values
  hideOnMobile?: boolean;
};

// a fixed bento collage — every piece has one deliberate place, nothing floats
const GRID: Cell[] = [
  { slug: "untamed", col: "1 / 3", row: "1 / 3" },
  { slug: "pride", col: "3 / 4", row: "1 / 2" },
  { slug: "the-prince", col: "3 / 4", row: "2 / 3" },
  { slug: "godfidence", col: "4 / 5", row: "1 / 3", hideOnMobile: true },
  { slug: "home", col: "1 / 2", row: "3 / 5" },
  { slug: "legend", col: "2 / 3", row: "3 / 4" },
  { slug: "chase-the-light", col: "2 / 3", row: "4 / 5", hideOnMobile: true },
  { slug: "mumbai-after-dark", col: "3 / 5", row: "3 / 5" },
  { slug: "beauty-is-beyond-money", col: "5 / 6", row: "2 / 4", hideOnMobile: true },
  { slug: "everything-goes", col: "5 / 6", row: "4 / 5", hideOnMobile: true },
];

function Tile({
  cell,
  priority,
  onOpen,
}: {
  cell: Cell;
  priority?: boolean;
  onOpen: (slug: string) => void;
}) {
  const frame = getFrameBySlug(cell.slug);
  if (!frame) return null;

  return (
    <button
      type="button"
      onClick={() => onOpen(cell.slug)}
      className={`group relative block overflow-hidden text-left ${cell.hideOnMobile ? "hidden sm:block" : ""}`}
      style={{ gridColumn: cell.col, gridRow: cell.row }}
      aria-label={`View ${frame.name}`}
    >
      <div className="relative h-full w-full overflow-hidden transition-transform duration-500 ease-out group-hover:scale-[1.04]">
        <Image
          src={frame.image}
          alt={`${frame.name} — framed art print`}
          fill
          sizes="(min-width: 640px) 16vw, 30vw"
          priority={priority}
          className="object-cover"
        />
      </div>
      <span className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-3 py-2 font-mono text-[9px] uppercase tracking-[0.15em] text-ivory opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        {frame.name}
      </span>
    </button>
  );
}

function FullPreview({ slug, onClose }: { slug: string; onClose: () => void }) {
  const frame = getFrameBySlug(slug);
  if (!frame) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35, ease: EASE }}
      className="absolute inset-0 z-30 bg-black"
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close preview"
        className="absolute inset-0 cursor-zoom-out"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.97 }}
        transition={{ duration: 0.4, ease: EASE }}
        className="pointer-events-none absolute inset-0"
      >
        <Image
          src={frame.image}
          alt={`${frame.name} — framed art print`}
          fill
          sizes="100vw"
          className="object-contain"
        />
      </motion.div>

      <button
        type="button"
        onClick={onClose}
        aria-label="Close preview"
        className="absolute right-5 top-28 z-10 flex h-10 w-10 items-center justify-center text-ivory/70 transition-colors hover:text-ivory"
      >
        <X size={22} />
      </button>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/90 via-black/40 to-transparent px-6 pb-8 pt-24 sm:px-12 sm:pb-12">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ivory/70">
          {frame.series} · {frame.detail}
        </p>
        <p className="mt-2 font-serif text-2xl text-ivory sm:text-4xl">{frame.name}</p>
        <Link
          href={`/shop/${frame.slug}`}
          className="pointer-events-auto mt-4 inline-block border border-ivory px-5 py-2.5 text-xs uppercase tracking-[0.1em] text-ivory transition-colors hover:border-accent hover:bg-accent"
        >
          View product →
        </Link>
      </div>
    </motion.div>
  );
}

export default function Hero() {
  const scrollTarget = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const [expandedSlug, setExpandedSlug] = useState<string | null>(null);

  const { scrollYProgress } = useScroll({
    target: scrollTarget,
    offset: ["start start", "end start"],
  });

  const stageOpacity = useTransform(scrollYProgress, [0.5, 0.9], [1, 0]);
  const stageScale = useTransform(scrollYProgress, [0, 1], [1, 1.04]);
  const exploreOpacity = useTransform(scrollYProgress, [0, 0.12], [1, 0]);

  return (
    <div ref={scrollTarget} className="relative h-[150svh] bg-black">
      <motion.section
        style={{ opacity: stageOpacity }}
        className="sticky top-0 flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-black px-6 py-20 sm:px-10"
      >
        <motion.div
          style={{ scale: reduceMotion ? 1 : stageScale }}
          className="grid aspect-[16/10] w-full max-w-xl grid-cols-5 grid-rows-4 gap-1.5 sm:max-w-2xl"
        >
          {GRID.map((cell, i) => (
            <Tile key={cell.slug} cell={cell} priority={i < 4} onOpen={setExpandedSlug} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
          className="mt-10 flex flex-col items-center text-center"
        >
          <p className="font-serif text-2xl italic text-ivory sm:text-3xl">
            Everything deserves a frame.
          </p>
          <div className="pointer-events-auto mt-5 flex items-center gap-6 font-mono text-xs uppercase tracking-[0.2em] text-ivory/60">
            <Link href="/shop" className="transition-colors hover:text-ivory">
              Shop
            </Link>
            <span className="text-ivory/25">·</span>
            <Link href="/collections" className="transition-colors hover:text-ivory">
              Collections
            </Link>
            <span className="text-ivory/25">·</span>
            <Link href="/about" className="transition-colors hover:text-ivory">
              About
            </Link>
          </div>
        </motion.div>

        {/* scroll cue */}
        <motion.div
          style={{ opacity: exploreOpacity }}
          className="pointer-events-none absolute bottom-8 left-1/2 z-20 -translate-x-1/2 text-center"
        >
          <motion.p
            animate={reduceMotion ? undefined : { y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="font-mono text-[11px] uppercase tracking-[0.2em] text-ivory/50"
          >
            Explore the gallery ↓
          </motion.p>
        </motion.div>

        <AnimatePresence>
          {expandedSlug && (
            <FullPreview slug={expandedSlug} onClose={() => setExpandedSlug(null)} />
          )}
        </AnimatePresence>
      </motion.section>
    </div>
  );
}

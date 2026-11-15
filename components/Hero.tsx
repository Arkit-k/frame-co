"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { getFrameBySlug } from "@/lib/frames";

const EASE = [0.22, 1, 0.36, 1] as const;

type FrameSpec = {
  slug: string;
  // position as % of the stage, anchored at the frame's own center
  top: string;
  left: string;
  mobileTop: string;
  mobileLeft: string;
  width: number;
  mobileWidth: number;
  rotate: number;
  depth: number; // how strongly it reacts to the cursor / scroll settle
  z: number;
  floatDuration: number;
  floatDelay: number;
  hideOnMobile?: boolean;
};

// an aligned gallery wall — three columns, two rows, nearly level, grouped
// to the right so the headline owns the left half
const FRAMES: FrameSpec[] = [
  {
    slug: "pride",
    top: "28%",
    left: "61%",
    mobileTop: "22%",
    mobileLeft: "32%",
    width: 175,
    mobileWidth: 130,
    rotate: 0,
    depth: 0.02,
    z: 20,
    floatDuration: 8.5,
    floatDelay: 0.6,
  },
  {
    slug: "untamed",
    top: "28%",
    left: "78%",
    mobileTop: "22%",
    mobileLeft: "76%",
    width: 190,
    mobileWidth: 140,
    rotate: 0,
    depth: 0.02,
    z: 20,
    floatDuration: 7,
    floatDelay: 0,
  },
  {
    slug: "beauty-is-beyond-money",
    top: "26%",
    left: "88%",
    mobileTop: "64%",
    mobileLeft: "16%",
    width: 140,
    mobileWidth: 110,
    rotate: 0,
    depth: 0.025,
    z: 20,
    floatDuration: 7.5,
    floatDelay: 0.9,
  },
  {
    slug: "home",
    top: "58%",
    left: "61%",
    mobileTop: "64%",
    mobileLeft: "48%",
    width: 155,
    mobileWidth: 115,
    rotate: 0,
    depth: 0.02,
    z: 16,
    floatDuration: 6.5,
    floatDelay: 1.1,
  },
  {
    slug: "everything-goes",
    top: "63%",
    left: "81%",
    mobileTop: "0%",
    mobileLeft: "0%",
    width: 230,
    mobileWidth: 0,
    rotate: 0,
    depth: 0.018,
    z: 16,
    floatDuration: 9,
    floatDelay: 0.3,
    hideOnMobile: true,
  },
  {
    slug: "the-prince",
    top: "60%",
    left: "91%",
    mobileTop: "64%",
    mobileLeft: "80%",
    width: 150,
    mobileWidth: 110,
    rotate: 0,
    depth: 0.025,
    z: 16,
    floatDuration: 6,
    floatDelay: 1.6,
  },
];

function Frame({
  spec,
  mouseX,
  mouseY,
  settle,
}: {
  spec: FrameSpec;
  mouseX: ReturnType<typeof useMotionValue<number>>;
  mouseY: ReturnType<typeof useMotionValue<number>>;
  settle: ReturnType<typeof useTransform<number, number>>;
}) {
  const reduceMotion = useReducedMotion();

  const px = useTransform(mouseX, (v) => v * spec.depth * 320);
  const py = useTransform(mouseY, (v) => v * spec.depth * 320);
  const springX = useSpring(px, { stiffness: 60, damping: 18 });
  const springY = useSpring(py, { stiffness: 60, damping: 18 });

  const rotateSettled = useTransform(settle, [0, 1], [spec.rotate, 0]);
  const scaleSettled = useTransform(settle, [0, 1], [1, 0.9]);
  const ySettled = useTransform(settle, [0, 1], [0, -60 + spec.z]);
  const combinedY = useTransform([springY, ySettled], (values: number[]) => values[0] + values[1]);

  const frame = getFrameBySlug(spec.slug);
  if (!frame) return null;

  return (
    <motion.div
      className={`absolute top-[var(--m-top)] left-[var(--m-left)] sm:top-[var(--d-top)] sm:left-[var(--d-left)] ${
        spec.hideOnMobile ? "hidden sm:block" : ""
      }`}
      style={
        {
          "--m-top": spec.mobileTop,
          "--m-left": spec.mobileLeft,
          "--d-top": spec.top,
          "--d-left": spec.left,
          zIndex: spec.z,
          x: reduceMotion ? 0 : springX,
          y: reduceMotion ? ySettled : combinedY,
          rotate: rotateSettled,
          scale: scaleSettled,
          translateX: "-50%",
          translateY: "-50%",
        } as React.CSSProperties
      }
    >
      <motion.div
        animate={
          reduceMotion
            ? undefined
            : { y: [0, -4, 0], rotate: [spec.rotate, spec.rotate + (spec.rotate >= 0 ? 0.6 : -0.6), spec.rotate] }
        }
        transition={{
          duration: spec.floatDuration,
          delay: spec.floatDelay,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Link
          href={`/shop/${frame.slug}`}
          className="group relative block w-[var(--m-width)] sm:w-[var(--d-width)]"
          style={
            {
              "--m-width": `${spec.mobileWidth}px`,
              "--d-width": `${spec.width}px`,
            } as React.CSSProperties
          }
        >
          {/* picture wire + wall nail, so it reads as hung rather than propped */}
          <div className="pointer-events-none absolute left-1/2 top-0 h-5 w-px -translate-x-1/2 -translate-y-full bg-charcoal/25" />
          <div className="pointer-events-none absolute left-1/2 top-0 h-1.5 w-1.5 -translate-x-1/2 -translate-y-[calc(100%+1.25rem)] rounded-full bg-charcoal/40" />

          <div className="bg-charcoal p-[5px] shadow-[0_22px_40px_-16px_rgba(37,37,37,0.45)] transition-shadow duration-500 group-hover:shadow-[0_26px_48px_-14px_rgba(37,37,37,0.55)]">
            <div className="bg-[#f4f1ea] p-1.5">
              <div className={`relative ${frame.aspect} w-full overflow-hidden`}>
                <Image
                  src={frame.image}
                  alt={`${frame.name} — framed art print`}
                  fill
                  sizes="320px"
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.08]"
                />
              </div>
            </div>
          </div>
          <span className="absolute inset-x-2 bottom-2 translate-y-full bg-charcoal/90 py-1.5 text-center font-mono text-[10px] uppercase tracking-[0.1em] text-ivory opacity-0 transition-all duration-300 group-hover:translate-y-[calc(100%+0.5rem)] group-hover:opacity-100">
            {frame.name}
          </span>
        </Link>
      </motion.div>
    </motion.div>
  );
}

export default function Hero() {
  const scrollTarget = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  const { scrollYProgress } = useScroll({
    target: scrollTarget,
    offset: ["start start", "end start"],
  });

  const settle = useTransform(scrollYProgress, [0, 0.8], [0, 1]);
  const stageOpacity = useTransform(scrollYProgress, [0.55, 0.9], [1, 0]);
  const stageScale = useTransform(scrollYProgress, [0, 0.9], [1, 0.96]);
  const headlineOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const exploreOpacity = useTransform(scrollYProgress, [0, 0.12], [1, 0]);

  return (
    <div ref={scrollTarget} className="relative h-[220svh] bg-ivory">
      <motion.section
        onMouseMove={reduceMotion ? undefined : handleMouseMove}
        style={{ opacity: stageOpacity, scale: stageScale }}
        className="sticky top-0 h-screen w-full overflow-hidden"
      >
        {/* paper grain */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.04] mix-blend-multiply"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />
        {/* soft architectural shadow/vignette */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,transparent_40%,rgba(37,37,37,0.06)_100%)]" />

        {/* floating frame installation */}
        <div className="absolute inset-0">
          {FRAMES.map((spec) => (
            <Frame
              key={spec.slug}
              spec={spec}
              mouseX={mouseX}
              mouseY={mouseY}
              settle={settle}
            />
          ))}
        </div>

        {/* headline — left-aligned on desktop so the wall cluster owns the right */}
        <motion.div
          style={{ opacity: headlineOpacity }}
          className="pointer-events-none absolute left-1/2 top-[13%] z-40 w-full max-w-[90%] -translate-x-1/2 px-6 text-center sm:left-10 sm:top-1/2 sm:w-auto sm:max-w-lg sm:-translate-x-0 sm:-translate-y-1/2 sm:px-0 sm:text-left lg:left-16 lg:max-w-xl"
        >
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "110%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
              className="font-serif text-[13vw] font-semibold uppercase leading-[0.86] tracking-tight text-charcoal sm:text-6xl lg:text-7xl"
            >
              Everything
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "110%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 0.9, delay: 0.3, ease: EASE }}
              className="font-serif text-[13vw] font-semibold uppercase leading-[0.86] tracking-tight text-charcoal sm:text-6xl lg:text-7xl"
            >
              Deserves
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "110%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 0.9, delay: 0.45, ease: EASE }}
              className="font-serif text-[13vw] font-semibold uppercase italic leading-[0.86] tracking-tight text-accent sm:text-6xl lg:text-7xl"
            >
              a Frame.
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.85, ease: EASE }}
            className="pointer-events-auto mt-6 origin-top -rotate-2 text-xl text-olive-dim"
            style={{ fontFamily: "var(--font-handwriting)" }}
          >
            An artful way to make a space yours.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1, ease: EASE }}
            className="pointer-events-auto mt-10"
          >
            <Link
              href="/shop"
              className="border border-charcoal bg-charcoal px-7 py-3 text-sm uppercase tracking-[0.08em] text-ivory transition-colors hover:bg-accent hover:border-accent"
            >
              Explore the collection
            </Link>
          </motion.div>
        </motion.div>

        {/* scroll cue */}
        <motion.div
          style={{ opacity: exploreOpacity }}
          className="pointer-events-none absolute bottom-8 left-1/2 z-40 -translate-x-1/2 text-center"
        >
          <motion.p
            animate={reduceMotion ? undefined : { y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="font-mono text-[11px] uppercase tracking-[0.2em] text-stone"
          >
            Explore the gallery ↓
          </motion.p>
        </motion.div>
      </motion.section>
    </div>
  );
}

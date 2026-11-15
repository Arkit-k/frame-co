"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";
import { motion } from "framer-motion";
import type { Frame } from "@/lib/frames";
import { formatINR, getStartingPrice } from "@/lib/frames";
import { useWishlist } from "@/lib/wishlist-context";
import { useCart } from "@/lib/cart-context";

export default function ProductCard({
  frame,
  view = "grid",
  priority = false,
}: {
  frame: Frame;
  view?: "grid" | "list";
  priority?: boolean;
}) {
  const { has, toggle } = useWishlist();
  const { addItem, openDrawer } = useCart();
  const wished = has(frame.slug);
  const startingPrice = getStartingPrice(frame);

  function quickAdd(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    addItem(frame.slug, frame.sizes[0], 1);
    openDrawer();
  }

  function toggleWishlist(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    toggle(frame.slug);
  }

  if (view === "list") {
    return (
      <Link
        href={`/shop/${frame.slug}`}
        className="group flex gap-6 border-b border-charcoal/10 py-6"
      >
        <div
          className={`relative ${frame.aspect} w-32 flex-none overflow-hidden bg-beige sm:w-44`}
        >
          <Image
            src={frame.image}
            alt={`${frame.name} — framed art print`}
            fill
            sizes="176px"
            className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
          />
        </div>
        <div className="flex flex-1 flex-col justify-center">
          <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-olive">
            {frame.series}
          </span>
          <span className="mt-1 font-serif text-xl text-charcoal group-hover:text-accent transition-colors">
            {frame.name}
          </span>
          <span className="mt-1 text-sm text-stone">{frame.detail}</span>
          <span className="mt-3 text-sm text-charcoal">
            From {formatINR(startingPrice)}
          </span>
        </div>
        <div className="flex flex-none items-start gap-3">
          <button
            type="button"
            onClick={toggleWishlist}
            aria-label={wished ? "Remove from wishlist" : "Add to wishlist"}
            className="text-stone transition-colors hover:text-accent"
          >
            <Heart size={18} className={wished ? "fill-accent text-accent" : ""} />
          </button>
        </div>
      </Link>
    );
  }

  return (
    <Link href={`/shop/${frame.slug}`} className="group block">
      <div className={`relative ${frame.aspect} overflow-hidden bg-beige`}>
        <Image
          src={frame.image}
          alt={`${frame.name} — framed art print`}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 23vw, (min-width: 640px) 31vw, 46vw"
          className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
        />
        <button
          type="button"
          onClick={toggleWishlist}
          aria-label={wished ? "Remove from wishlist" : "Add to wishlist"}
          className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center bg-ivory/90 text-charcoal opacity-0 transition-opacity group-hover:opacity-100"
        >
          <Heart size={15} className={wished ? "fill-accent text-accent" : ""} />
        </button>
        <motion.button
          type="button"
          onClick={quickAdd}
          initial={{ y: "100%" }}
          whileHover={{ y: 0 }}
          className="absolute inset-x-0 bottom-0 translate-y-full bg-charcoal py-2.5 text-center text-xs uppercase tracking-[0.1em] text-ivory transition-transform duration-300 group-hover:translate-y-0"
        >
          Quick add
        </motion.button>
      </div>
      <figcaption className="mt-3 text-sm">
        <span className="block font-mono text-[10px] uppercase tracking-[0.15em] text-olive">
          {frame.series}
        </span>
        <span className="mt-1 block font-serif text-lg text-charcoal group-hover:text-accent transition-colors">
          {frame.name}
        </span>
        <span className="block text-stone">{frame.detail}</span>
        <span className="mt-1.5 block text-charcoal">
          From {formatINR(startingPrice)}
        </span>
      </figcaption>
    </Link>
  );
}

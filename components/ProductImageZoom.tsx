"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import type { Frame } from "@/lib/frames";

export default function ProductImageZoom({ frame }: { frame: Frame }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`group relative ${frame.aspect} w-full max-w-md overflow-hidden bg-beige`}
      >
        <Image
          src={frame.image}
          alt={`${frame.name} — framed art print`}
          fill
          priority
          sizes="(min-width: 640px) 440px, 90vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center bg-ivory/90 text-charcoal opacity-0 transition-opacity group-hover:opacity-100">
          <ZoomIn size={16} />
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/90 p-6"
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="absolute right-6 top-6 text-ivory transition-colors hover:text-accent"
            >
              <X size={24} />
            </button>
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              className="relative h-[85vh] w-full max-w-2xl"
            >
              <Image
                src={frame.image}
                alt={`${frame.name} — framed art print`}
                fill
                sizes="90vw"
                className="object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

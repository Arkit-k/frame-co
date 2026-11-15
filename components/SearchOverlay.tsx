"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Search, X } from "lucide-react";
import { ALL_FRAMES } from "@/lib/frames";

export default function SearchOverlay({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [query, setQuery] = useState("");

  const results = ALL_FRAMES.filter((f) => {
    const q = query.trim().toLowerCase();
    if (!q) return false;
    return (
      f.name.toLowerCase().includes(q) ||
      f.detail.toLowerCase().includes(q) ||
      f.series.toLowerCase().includes(q)
    );
  });

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-charcoal/40"
          />
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-0 top-0 z-50 bg-ivory shadow-xl"
          >
            <div className="mx-auto max-w-2xl px-6 py-8 sm:py-12">
              <div className="flex items-center gap-4 border-b border-charcoal/20 pb-4">
                <Search size={20} className="text-stone" />
                <input
                  autoFocus
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search prints…"
                  className="w-full bg-transparent text-lg text-charcoal placeholder:text-stone outline-none"
                />
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close search"
                  className="text-stone transition-colors hover:text-accent"
                >
                  <X size={20} />
                </button>
              </div>

              {query.trim() && (
                <div className="mt-6 max-h-[60vh] space-y-4 overflow-y-auto">
                  {results.length === 0 ? (
                    <p className="py-6 text-stone">No prints match &ldquo;{query}&rdquo;.</p>
                  ) : (
                    results.map((f) => (
                      <Link
                        key={f.slug}
                        href={`/shop/${f.slug}`}
                        onClick={onClose}
                        className="flex items-center gap-4 py-2"
                      >
                        <div className="relative h-16 w-16 flex-none overflow-hidden bg-beige">
                          <Image
                            src={f.image}
                            alt={`${f.name} — framed art print`}
                            fill
                            sizes="64px"
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-serif text-lg text-charcoal">{f.name}</p>
                          <p className="text-sm text-stone">{f.detail}</p>
                        </div>
                      </Link>
                    ))
                  )}
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

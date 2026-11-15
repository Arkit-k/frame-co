"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import { formatINR } from "@/lib/frames";
import CartLineItem from "./CartLineItem";

export default function CartDrawer() {
  const { items, isDrawerOpen, closeDrawer, subtotal } = useCart();

  return (
    <AnimatePresence>
      {isDrawerOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeDrawer}
            className="fixed inset-0 z-40 bg-charcoal/40"
          />
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-y-0 right-0 z-50 flex w-full max-w-md flex-col bg-ivory shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-charcoal/10 px-6 py-5">
              <span className="font-serif text-xl text-charcoal">Your bag</span>
              <button
                type="button"
                onClick={closeDrawer}
                aria-label="Close cart"
                className="text-charcoal transition-colors hover:text-accent"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6">
              {items.length === 0 ? (
                <p className="py-12 text-center text-stone">
                  Nothing in your bag yet.
                </p>
              ) : (
                <div className="divide-y divide-charcoal/10">
                  {items.map((item) => (
                    <CartLineItem key={`${item.slug}-${item.size}`} item={item} />
                  ))}
                </div>
              )}
            </div>

            {items.length > 0 && (
              <div className="border-t border-charcoal/10 px-6 py-5">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-stone">Subtotal</span>
                  <span className="text-charcoal">{formatINR(subtotal)}</span>
                </div>
                <Link
                  href="/cart"
                  onClick={closeDrawer}
                  className="mt-4 block w-full bg-charcoal py-3 text-center text-sm uppercase tracking-[0.1em] text-ivory transition-colors hover:bg-accent"
                >
                  View bag
                </Link>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

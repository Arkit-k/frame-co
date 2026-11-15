"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import type { Frame } from "@/lib/frames";
import { getPriceForSize, formatINR } from "@/lib/frames";
import { useCart } from "@/lib/cart-context";

export default function ProductPurchasePanel({ frame }: { frame: Frame }) {
  const [size, setSize] = useState(frame.sizes[0]);
  const [qty, setQty] = useState(1);
  const { addItem, openDrawer } = useCart();
  const router = useRouter();

  const price = getPriceForSize(frame, size);

  function handleAddToCart() {
    addItem(frame.slug, size, qty);
    openDrawer();
  }

  function handleBuyNow() {
    addItem(frame.slug, size, qty);
    router.push("/cart");
  }

  return (
    <div>
      <p className="mt-2 text-2xl text-charcoal">{formatINR(price)}</p>

      <div className="mt-8">
        <p className="text-xs uppercase tracking-wide text-stone">Size</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {frame.sizes.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setSize(s)}
              className={`border px-3 py-1.5 text-sm transition-colors ${
                size === s
                  ? "border-charcoal bg-charcoal text-ivory"
                  : "border-charcoal/15 text-charcoal hover:border-charcoal"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <p className="text-xs uppercase tracking-wide text-stone">Quantity</p>
        <div className="mt-3 flex w-fit items-center gap-4 border border-charcoal/15 px-3 py-2">
          <button
            type="button"
            onClick={() => setQty((q) => Math.max(1, q - 1))}
            aria-label="Decrease quantity"
            className="text-charcoal transition-colors hover:text-accent"
          >
            <Minus size={14} />
          </button>
          <span className="min-w-[1.5rem] text-center text-sm text-charcoal">{qty}</span>
          <button
            type="button"
            onClick={() => setQty((q) => q + 1)}
            aria-label="Increase quantity"
            className="text-charcoal transition-colors hover:text-accent"
          >
            <Plus size={14} />
          </button>
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          onClick={handleAddToCart}
          className="flex-1 border border-charcoal px-6 py-3 text-sm uppercase tracking-[0.08em] text-charcoal transition-colors hover:border-accent hover:text-accent"
        >
          Add to cart
        </button>
        <button
          type="button"
          onClick={handleBuyNow}
          className="flex-1 bg-charcoal px-6 py-3 text-sm uppercase tracking-[0.08em] text-ivory transition-colors hover:bg-accent"
        >
          Buy now
        </button>
      </div>
    </div>
  );
}

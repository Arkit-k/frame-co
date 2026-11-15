"use client";

import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, X } from "lucide-react";
import { getFrameBySlug, getPriceForSize, formatINR } from "@/lib/frames";
import { useCart, type CartItem } from "@/lib/cart-context";

export default function CartLineItem({ item }: { item: CartItem }) {
  const { updateQty, removeItem } = useCart();
  const frame = getFrameBySlug(item.slug);
  if (!frame) return null;

  const price = getPriceForSize(frame, item.size);

  return (
    <div className="flex gap-4 py-5">
      <Link
        href={`/shop/${frame.slug}`}
        className={`relative ${frame.aspect} w-20 flex-none overflow-hidden bg-beige`}
      >
        <Image
          src={frame.image}
          alt={`${frame.name} — framed art print`}
          fill
          sizes="80px"
          className="object-cover"
        />
      </Link>

      <div className="flex flex-1 flex-col">
        <div className="flex items-start justify-between gap-2">
          <div>
            <Link
              href={`/shop/${frame.slug}`}
              className="font-serif text-base text-charcoal hover:text-accent transition-colors"
            >
              {frame.name}
            </Link>
            <p className="mt-0.5 text-xs text-stone">{item.size}</p>
          </div>
          <button
            type="button"
            onClick={() => removeItem(item.slug, item.size)}
            aria-label="Remove item"
            className="text-stone transition-colors hover:text-accent"
          >
            <X size={16} />
          </button>
        </div>

        <div className="mt-3 flex items-center justify-between">
          <div className="flex items-center gap-3 border border-charcoal/15 px-2 py-1">
            <button
              type="button"
              onClick={() => updateQty(item.slug, item.size, item.qty - 1)}
              aria-label="Decrease quantity"
              className="text-charcoal transition-colors hover:text-accent"
            >
              <Minus size={13} />
            </button>
            <span className="min-w-[1.25rem] text-center text-sm text-charcoal">
              {item.qty}
            </span>
            <button
              type="button"
              onClick={() => updateQty(item.slug, item.size, item.qty + 1)}
              aria-label="Increase quantity"
              className="text-charcoal transition-colors hover:text-accent"
            >
              <Plus size={13} />
            </button>
          </div>
          <span className="text-sm text-charcoal">{formatINR(price * item.qty)}</span>
        </div>
      </div>
    </div>
  );
}

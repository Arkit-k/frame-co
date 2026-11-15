"use client";

import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CartLineItem from "@/components/CartLineItem";
import { useCart } from "@/lib/cart-context";
import { formatINR } from "@/lib/frames";

export default function CartPage() {
  const { items, subtotal } = useCart();

  return (
    <div className="min-h-screen bg-ivory text-charcoal">
      <Nav />
      <main>
        <section className="mx-auto max-w-3xl px-6 pt-32 pb-24 sm:pt-40 sm:pb-32 lg:px-10">
          <h1 className="font-serif text-4xl tracking-tight text-charcoal sm:text-5xl">
            Your bag
          </h1>

          {items.length === 0 ? (
            <div className="mt-10">
              <p className="text-stone">Your bag is empty.</p>
              <Link
                href="/shop"
                className="mt-4 inline-block border border-charcoal px-6 py-3 text-sm uppercase tracking-[0.08em] text-charcoal transition-colors hover:border-accent hover:text-accent"
              >
                Browse the shop
              </Link>
            </div>
          ) : (
            <>
              <div className="mt-8 divide-y divide-charcoal/10 border-t border-charcoal/10">
                {items.map((item) => (
                  <CartLineItem key={`${item.slug}-${item.size}`} item={item} />
                ))}
              </div>

              <div className="mt-8 flex items-center justify-between border-t border-charcoal/10 pt-6">
                <span className="text-stone">Subtotal</span>
                <span className="text-xl text-charcoal">{formatINR(subtotal)}</span>
              </div>

              <p className="mt-4 text-sm text-stone">
                Checkout isn&apos;t live yet — every order is made to order,
                so we confirm sizing and shipping with you directly.
              </p>

              <Link
                href="/contact"
                className="mt-6 inline-block w-full bg-charcoal px-6 py-3 text-center text-sm uppercase tracking-[0.08em] text-ivory transition-colors hover:bg-accent sm:w-auto"
              >
                Enquire to order
              </Link>
            </>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
}

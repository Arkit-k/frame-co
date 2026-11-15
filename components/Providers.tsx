"use client";

import type { ReactNode } from "react";
import { CartProvider } from "@/lib/cart-context";
import { WishlistProvider } from "@/lib/wishlist-context";
import CartDrawer from "./CartDrawer";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <CartProvider>
      <WishlistProvider>
        {children}
        <CartDrawer />
      </WishlistProvider>
    </CartProvider>
  );
}

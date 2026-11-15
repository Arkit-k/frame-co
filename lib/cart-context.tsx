"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { getFrameBySlug, getPriceForSize } from "./frames";

export type CartItem = { slug: string; size: string; qty: number };

type CartContextValue = {
  items: CartItem[];
  isDrawerOpen: boolean;
  addItem: (slug: string, size: string, qty?: number) => void;
  removeItem: (slug: string, size: string) => void;
  updateQty: (slug: string, size: string, qty: number) => void;
  clear: () => void;
  openDrawer: () => void;
  closeDrawer: () => void;
  totalItems: number;
  subtotal: number;
};

const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = "frameandco:cart";

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) setItems(JSON.parse(raw));
    } catch {
      // ignore corrupted storage
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // ignore write failures (private browsing, quota, etc.)
    }
  }, [items, hydrated]);

  function addItem(slug: string, size: string, qty = 1) {
    setItems((prev) => {
      const existing = prev.find((i) => i.slug === slug && i.size === size);
      if (existing) {
        return prev.map((i) =>
          i.slug === slug && i.size === size ? { ...i, qty: i.qty + qty } : i
        );
      }
      return [...prev, { slug, size, qty }];
    });
  }

  function removeItem(slug: string, size: string) {
    setItems((prev) => prev.filter((i) => !(i.slug === slug && i.size === size)));
  }

  function updateQty(slug: string, size: string, qty: number) {
    if (qty <= 0) return removeItem(slug, size);
    setItems((prev) =>
      prev.map((i) => (i.slug === slug && i.size === size ? { ...i, qty } : i))
    );
  }

  function clear() {
    setItems([]);
  }

  const totalItems = useMemo(() => items.reduce((n, i) => n + i.qty, 0), [items]);

  const subtotal = useMemo(
    () =>
      items.reduce((sum, i) => {
        const frame = getFrameBySlug(i.slug);
        if (!frame) return sum;
        return sum + getPriceForSize(frame, i.size) * i.qty;
      }, 0),
    [items]
  );

  return (
    <CartContext.Provider
      value={{
        items,
        isDrawerOpen,
        addItem,
        removeItem,
        updateQty,
        clear,
        openDrawer: () => setIsDrawerOpen(true),
        closeDrawer: () => setIsDrawerOpen(false),
        totalItems,
        subtotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within a CartProvider");
  return ctx;
}

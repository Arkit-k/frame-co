"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Heart, Search, ShoppingBag } from "lucide-react";
import AnnouncementBar from "./AnnouncementBar";
import SearchOverlay from "./SearchOverlay";
import { useCart } from "@/lib/cart-context";
import { useWishlist } from "@/lib/wishlist-context";

const LINKS = [
  { label: "Shop", href: "/shop" },
  { label: "Collections", href: "/collections" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [overDarkSection, setOverDarkSection] = useState(false);
  const { totalItems, openDrawer } = useCart();
  const { slugs } = useWishlist();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // any section can opt in to a solid-black nav by marking itself
  // data-nav-theme="dark" — the nav blacks out while that section sits
  // directly underneath it, and returns to normal once it's scrolled past
  useEffect(() => {
    const targets = Array.from(document.querySelectorAll('[data-nav-theme="dark"]'));
    if (targets.length === 0) {
      setOverDarkSection(false);
      return;
    }
    const intersecting = new Set<Element>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) intersecting.add(entry.target);
          else intersecting.delete(entry.target);
        });
        setOverDarkSection(intersecting.size > 0);
      },
      { rootMargin: "0px 0px -95% 0px", threshold: 0 }
    );
    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, [pathname]);

  // only the homepage opens on a dark, full-bleed hero — everywhere else
  // (and once you've scrolled past it) the nav is solid and dark-on-light,
  // unless the current scroll position is over another marked dark section
  const overDarkHero = pathname === "/" && !scrolled && !open;
  const blackout = !overDarkHero && overDarkSection && !open;
  const solid = !overDarkHero && !blackout;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-20 border-b transition-colors duration-300 ${
        solid
          ? "border-charcoal/10 bg-ivory/95 backdrop-blur-sm"
          : blackout
            ? "border-transparent bg-black"
            : "border-transparent bg-transparent"
      }`}
    >
      <AnnouncementBar />
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 lg:px-10 2xl:max-w-[90rem] 2xl:px-16">
        <Link
          href="/"
          className={`font-serif text-xl tracking-tight transition-colors duration-300 ${
            solid ? "text-charcoal" : "text-ivory"
          }`}
        >
          Frame &amp; Co.
        </Link>
        <nav
          className={`hidden items-center gap-8 text-sm transition-colors duration-300 sm:flex ${
            solid ? "text-stone" : "text-ivory/70"
          }`}
        >
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition-colors ${solid ? "hover:text-charcoal" : "hover:text-ivory"}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-5">
          <button
            type="button"
            onClick={() => setSearchOpen(true)}
            aria-label="Search"
            className={`transition-colors duration-300 hover:text-accent ${solid ? "text-charcoal" : "text-ivory"}`}
          >
            <Search size={19} />
          </button>
          <Link
            href="/shop"
            aria-label="Wishlist"
            className={`relative hidden transition-colors duration-300 hover:text-accent sm:inline-block ${
              solid ? "text-charcoal" : "text-ivory"
            }`}
          >
            <Heart size={19} />
            {slugs.length > 0 && (
              <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center bg-accent text-[10px] text-ivory">
                {slugs.length}
              </span>
            )}
          </Link>
          <button
            type="button"
            onClick={openDrawer}
            aria-label="Open cart"
            className={`relative transition-colors duration-300 hover:text-accent ${
              solid ? "text-charcoal" : "text-ivory"
            }`}
          >
            <ShoppingBag size={19} />
            {totalItems > 0 && (
              <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center bg-accent text-[10px] text-ivory">
                {totalItems}
              </span>
            )}
          </button>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="relative z-10 flex h-9 w-9 flex-col items-center justify-center gap-1.5 sm:hidden"
          >
            <motion.span
              animate={{ rotate: open ? 45 : 0, y: open ? 6 : 0 }}
              transition={{ duration: 0.25 }}
              className={`h-px w-5 transition-colors duration-300 ${solid ? "bg-charcoal" : "bg-ivory"}`}
            />
            <motion.span
              animate={{ opacity: open ? 0 : 1 }}
              transition={{ duration: 0.2 }}
              className={`h-px w-5 transition-colors duration-300 ${solid ? "bg-charcoal" : "bg-ivory"}`}
            />
            <motion.span
              animate={{ rotate: open ? -45 : 0, y: open ? -6 : 0 }}
              transition={{ duration: 0.25 }}
              className={`h-px w-5 transition-colors duration-300 ${solid ? "bg-charcoal" : "bg-ivory"}`}
            />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-charcoal/10 bg-ivory sm:hidden"
          >
            <nav className="flex flex-col gap-1 px-6 py-6 text-base text-stone">
              {LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="py-2.5 transition-colors hover:text-charcoal"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
    </header>
  );
}

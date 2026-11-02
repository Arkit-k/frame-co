"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const LINKS = [
  { label: "Shop", href: "/shop" },
  { label: "Collections", href: "/collections" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-20 border-b transition-colors duration-300 ${
        scrolled
          ? "border-ink/10 bg-wall/90 backdrop-blur-sm"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 lg:px-10 2xl:max-w-[90rem] 2xl:px-16">
        <span className="font-serif text-xl tracking-tight text-ink">
          Frame &amp; Co.
        </span>
        <nav className="hidden items-center gap-8 text-sm text-ink-soft sm:flex">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/#join"
          className="border border-ink/20 px-4 py-2 text-sm text-ink transition-colors hover:border-accent hover:text-accent"
        >
          Join the list
        </Link>
      </div>
    </header>
  );
}

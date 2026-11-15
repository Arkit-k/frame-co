import Link from "next/link";

const YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-charcoal px-6 pb-10 pt-16 text-ivory/60 lg:px-10 2xl:px-16">
      <div className="mx-auto grid max-w-6xl gap-10 border-b border-ivory/10 pb-10 sm:grid-cols-[1.2fr_1fr_1fr_1fr] sm:gap-6 2xl:max-w-[90rem]">
        <div>
          <span className="font-serif text-lg text-ivory">Frame &amp; Co.</span>
          <p className="mt-2 max-w-xs text-sm">
            Your walls deserve more than empty space. Studio — Mumbai, India.
          </p>
        </div>

        <div>
          <p className="mb-3 text-xs uppercase tracking-wide text-ivory/40">Shop</p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/shop" className="hover:text-ivory">All prints</Link></li>
            <li><Link href="/collections" className="hover:text-ivory">Collections</Link></li>
            <li><Link href="/shop?series=Observation" className="hover:text-ivory">Observation series</Link></li>
            <li><Link href="/shop?series=Field+Notes" className="hover:text-ivory">Field Notes</Link></li>
          </ul>
        </div>

        <div>
          <p className="mb-3 text-xs uppercase tracking-wide text-ivory/40">Support</p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/contact" className="hover:text-ivory">Shipping &amp; returns</Link></li>
            <li><Link href="/contact" className="hover:text-ivory">Contact</Link></li>
            <li><Link href="/about" className="hover:text-ivory">How it&apos;s made</Link></li>
          </ul>
        </div>

        <div>
          <p className="mb-3 text-xs uppercase tracking-wide text-ivory/40">Studio</p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about" className="hover:text-ivory">Our story</Link></li>
            <li><Link href="/#join" className="hover:text-ivory">Join the list</Link></li>
          </ul>
        </div>
      </div>

      <p className="mx-auto mt-6 max-w-6xl text-xs text-ivory/30 2xl:max-w-[90rem]">
        © {YEAR} Frame &amp; Co.
      </p>
    </footer>
  );
}

import Link from "next/link";

const YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-bench px-6 pb-10 text-accent-ink/60 lg:px-10 2xl:px-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 border-t border-accent-ink/10 pt-10 sm:flex-row sm:justify-between 2xl:max-w-[90rem]">
        <div>
          <span className="font-serif text-lg text-accent-ink">
            Frame &amp; Co.
          </span>
          <p className="mt-2 max-w-xs text-sm">
            Workshop &amp; studio — Mumbai, India.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-10 text-sm sm:flex sm:gap-16">
          <div>
            <p className="mb-3 text-xs uppercase tracking-wide text-accent-ink/40">
              Shop
            </p>
            <ul className="space-y-2">
              <li><Link href="/collections" className="hover:text-accent-ink">Collections</Link></li>
              <li><Link href="/shop" className="hover:text-accent-ink">Custom sizes</Link></li>
              <li><Link href="/about" className="hover:text-accent-ink">Care guide</Link></li>
            </ul>
          </div>
          <div>
            <p className="mb-3 text-xs uppercase tracking-wide text-accent-ink/40">
              About
            </p>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-accent-ink">The workshop</Link></li>
              <li><Link href="/contact" className="hover:text-accent-ink">Contact</Link></li>
              <li><Link href="/#join" className="hover:text-accent-ink">Join the list</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <p className="mx-auto mt-10 max-w-6xl text-xs text-accent-ink/30 2xl:max-w-[90rem]">
        © {YEAR} Frame &amp; Co.
      </p>
    </footer>
  );
}

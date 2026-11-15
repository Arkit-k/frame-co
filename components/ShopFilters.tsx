"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { LayoutGrid, List } from "lucide-react";

const SERIES = ["Observation", "Field Notes"];
const SIZES = ["11×14 in", "16×20 in", "A2", "A1"];
const ORIENTATIONS = ["portrait", "landscape", "square"];

export default function ShopFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();

  function setParam(key: string, value: string | null) {
    const params = new URLSearchParams(searchParams.toString());
    if (value === null || params.get(key) === value) {
      params.delete(key);
    } else {
      params.set(key, value);
    }
    router.replace(`/shop?${params.toString()}`, { scroll: false });
  }

  const activeSeries = searchParams.get("series");
  const activeSize = searchParams.get("size");
  const activeOrientation = searchParams.get("orientation");
  const sort = searchParams.get("sort") ?? "featured";
  const view = searchParams.get("view") ?? "grid";

  return (
    <div className="mb-10 flex flex-col gap-5 border-b border-charcoal/10 pb-8">
      <div className="flex flex-wrap items-center gap-2">
        {SERIES.map((s) => (
          <button
            key={s}
            onClick={() => setParam("series", s)}
            className={`border px-3 py-1.5 text-xs uppercase tracking-wide transition-colors ${
              activeSeries === s
                ? "border-charcoal bg-charcoal text-ivory"
                : "border-charcoal/20 text-stone hover:border-charcoal hover:text-charcoal"
            }`}
          >
            {s}
          </button>
        ))}
        <span className="mx-1 h-4 w-px bg-charcoal/15" />
        {SIZES.map((s) => (
          <button
            key={s}
            onClick={() => setParam("size", s)}
            className={`border px-3 py-1.5 text-xs uppercase tracking-wide transition-colors ${
              activeSize === s
                ? "border-charcoal bg-charcoal text-ivory"
                : "border-charcoal/20 text-stone hover:border-charcoal hover:text-charcoal"
            }`}
          >
            {s}
          </button>
        ))}
        <span className="mx-1 h-4 w-px bg-charcoal/15" />
        {ORIENTATIONS.map((o) => (
          <button
            key={o}
            onClick={() => setParam("orientation", o)}
            className={`border px-3 py-1.5 text-xs capitalize tracking-wide transition-colors ${
              activeOrientation === o
                ? "border-charcoal bg-charcoal text-ivory"
                : "border-charcoal/20 text-stone hover:border-charcoal hover:text-charcoal"
            }`}
          >
            {o}
          </button>
        ))}
      </div>

      <div className="flex items-center justify-between">
        <select
          value={sort}
          onChange={(e) => setParam("sort", e.target.value === "featured" ? null : e.target.value)}
          className="border border-charcoal/20 bg-ivory px-3 py-1.5 text-sm text-charcoal outline-none"
        >
          <option value="featured">Sort: Featured</option>
          <option value="price-asc">Price: Low to high</option>
          <option value="price-desc">Price: High to low</option>
        </select>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setParam("view", null)}
            aria-label="Grid view"
            className={`p-1.5 ${view === "grid" ? "text-accent" : "text-stone hover:text-charcoal"}`}
          >
            <LayoutGrid size={18} />
          </button>
          <button
            onClick={() => setParam("view", "list")}
            aria-label="List view"
            className={`p-1.5 ${view === "list" ? "text-accent" : "text-stone hover:text-charcoal"}`}
          >
            <List size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}

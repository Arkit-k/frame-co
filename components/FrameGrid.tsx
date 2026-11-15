import type { Frame } from "@/lib/frames";
import ProductCard from "./ProductCard";

export default function FrameGrid({
  frames,
  view = "grid",
}: {
  frames: Frame[];
  view?: "grid" | "list";
}) {
  if (view === "list") {
    return (
      <div className="divide-y divide-charcoal/10 border-t border-charcoal/10">
        {frames.map((frame) => (
          <ProductCard key={frame.slug} frame={frame} view="list" />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-x-5 gap-y-10 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 2xl:gap-x-8">
      {frames.map((frame) => (
        <ProductCard key={frame.slug} frame={frame} />
      ))}
    </div>
  );
}

import { SIZE_DIMENSIONS_IN } from "@/lib/frames";

export default function SizeGuide({ sizes }: { sizes: string[] }) {
  const maxDim = Math.max(
    ...sizes.flatMap((s) => SIZE_DIMENSIONS_IN[s] ?? [0, 0])
  );
  const scale = 90 / maxDim; // px per inch, fit the largest size in ~90px

  return (
    <div>
      <p className="text-xs uppercase tracking-wide text-stone">Size guide</p>
      <div className="mt-4 flex flex-wrap items-end gap-6">
        {sizes.map((s) => {
          const dims = SIZE_DIMENSIONS_IN[s];
          if (!dims) return null;
          const [w, h] = dims;
          return (
            <div key={s} className="flex flex-col items-center gap-2">
              <div
                className="border border-charcoal/30 bg-beige"
                style={{ width: w * scale, height: h * scale }}
              />
              <span className="text-xs text-stone">{s}</span>
            </div>
          );
        })}
      </div>
      <p className="mt-4 max-w-sm text-xs text-stone">
        Shown to relative scale. Actual print size may vary slightly by a
        fraction of an inch depending on the piece&apos;s aspect ratio.
      </p>
    </div>
  );
}

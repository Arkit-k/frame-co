import { Star } from "lucide-react";

export default function StarRating({
  rating,
  size = 14,
}: {
  rating: number | null;
  size?: number;
}) {
  if (rating === null) {
    return <span className="text-sm text-stone">No ratings yet</span>;
  }

  return (
    <div className="flex items-center gap-1">
      <div className="flex items-center gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={size}
            className={
              i < Math.round(rating)
                ? "fill-accent text-accent"
                : "fill-none text-stone/40"
            }
          />
        ))}
      </div>
      <span className="text-sm text-stone">{rating.toFixed(1)}</span>
    </div>
  );
}

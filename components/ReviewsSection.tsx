import StarRating from "./StarRating";
import { getReviews, getAverageRating } from "@/lib/reviews";

export default function ReviewsSection({ slug }: { slug: string }) {
  const reviews = getReviews(slug);
  const average = getAverageRating(slug);

  return (
    <div>
      <div className="flex items-center gap-3">
        <p className="text-xs uppercase tracking-wide text-stone">Reviews</p>
        <StarRating rating={average} />
      </div>

      {reviews.length === 0 ? (
        <p className="mt-4 text-sm text-stone">
          No reviews yet — be the first to own this print.
        </p>
      ) : (
        <ul className="mt-4 space-y-5">
          {reviews.map((r, i) => (
            <li key={i} className="border-t border-charcoal/10 pt-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-charcoal">{r.author}</span>
                <StarRating rating={r.rating} />
              </div>
              <p className="mt-2 text-sm text-stone">{r.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

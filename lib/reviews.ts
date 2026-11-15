export type Review = {
  slug: string;
  author: string;
  rating: number;
  body: string;
  date: string;
};

// No reviews have been collected yet for any print. This stays real and
// typed so it's ready to wire up later — we don't invent testimonials.
const REVIEWS: Review[] = [];

export function getReviews(slug: string): Review[] {
  return REVIEWS.filter((r) => r.slug === slug);
}

export function getAverageRating(slug: string): number | null {
  const reviews = getReviews(slug);
  if (reviews.length === 0) return null;
  return reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;
}

export type Series = "Observation" | "Field Notes";

export type Frame = {
  slug: string;
  name: string;
  detail: string;
  note?: string;
  description: string;
  sizes: string[];
  image: string;
  aspect: string;
  series: Series;
};

export const ALL_FRAMES: Frame[] = [
  {
    slug: "untamed",
    name: "The Untamed",
    detail: "Framed art print, grain-halftone",
    note: "Original photographic print — No. 002 in a numbered observation series.",
    description:
      "A close, grainy halftone study of a lion mid-roar, printed black on raw white and set behind glass in a matte black frame. Part of our Observation series — original photographic prints, not wood-tone frames, for anyone who wants something with a bit more bite on the wall.",
    sizes: ["11×14 in", "16×20 in", "A2"],
    image: "/images/frames/untamed.jpg",
    aspect: "aspect-[4/5]",
    series: "Observation",
  },
  {
    slug: "the-prince",
    name: "The Prince",
    detail: "Framed art print, grain-halftone",
    note: "Original photographic print — No. 003 in a numbered observation series.",
    description:
      "A grainy halftone study built on a public-domain Renaissance portrait, printed black on raw white and set behind glass in a matte black frame. Part of our Observation series — original photographic prints, not wood-tone frames, for anyone who wants a bit of cold calculation on the wall.",
    sizes: ["11×14 in", "16×20 in", "A2"],
    image: "/images/frames/the-prince.jpg",
    aspect: "aspect-[4/5]",
    series: "Observation",
  },
  {
    slug: "godfidence",
    name: "Godfidence",
    detail: "Framed art print, grain-halftone",
    note: "Original photographic print — No. 004 in a numbered observation series.",
    description:
      "A grainy halftone study built on a public-domain Rembrandt self-portrait, printed black on raw white and set behind glass in a matte black frame. Part of our Observation series — original photographic prints, not wood-tone frames, for anyone who wants a little quiet certainty on the wall.",
    sizes: ["11×14 in", "16×20 in", "A2"],
    image: "/images/frames/godfidence.jpg",
    aspect: "aspect-[4/5]",
    series: "Observation",
  },
  {
    slug: "pride",
    name: "Pride",
    detail: "Framed art print, grain-halftone",
    note: "Original photographic print — No. 005 in a numbered observation series.",
    description:
      "A grainy halftone study built on Alexandre Cabanel's 1847 painting The Fallen Angel (public domain), printed black on raw white and set behind glass in a matte black frame. Part of our Observation series — original photographic prints, not wood-tone frames, for anyone who wants a little defiance on the wall.",
    sizes: ["16×20 in", "A2", "A1"],
    image: "/images/frames/pride.jpg",
    aspect: "aspect-[4/3]",
    series: "Observation",
  },
  {
    slug: "home",
    name: "Ye Hai Mumbai, Meri Jaan",
    detail: "Framed art print, full colour",
    note: "Original photography — Field Notes, shot on site in Mumbai.",
    description:
      "A cinematic colour grade on an original photograph of the Mumbai Municipal Corporation building against a brilliant blue sky. Part of our Field Notes series — real places, shot by us, not stock, not AI, set behind glass in a slim black frame.",
    sizes: ["11×14 in", "16×20 in", "A2"],
    image: "/images/frames/home.jpg",
    aspect: "aspect-[3/4]",
    series: "Field Notes",
  },
  {
    slug: "chase-the-light",
    name: "Chase the Light",
    detail: "Framed art print, full colour",
    note: "Original photography — Field Notes, shot at golden hour.",
    description:
      "A cinematic colour grade on an original photograph of a sun-drenched forest road at golden hour. Part of our Field Notes series — real places, shot by us, not stock, not AI, set behind glass in a slim black frame.",
    sizes: ["11×14 in", "16×20 in", "A2"],
    image: "/images/frames/chase-the-light.jpg",
    aspect: "aspect-[3/4]",
    series: "Field Notes",
  },
  {
    slug: "mumbai-after-dark",
    name: "Mumbai After Dark",
    detail: "Framed art print, full colour",
    note: "Original photography — Field Notes, shot on site in Mumbai.",
    description:
      "A cinematic colour grade on an original night photograph of the Mumbai Municipal Corporation building lit up gold against the night sky. Part of our Field Notes series — real places, shot by us, not stock, not AI, set behind glass in a slim black frame.",
    sizes: ["11×14 in", "16×20 in", "A2"],
    image: "/images/frames/mumbai-after-dark.jpg",
    aspect: "aspect-[16/9]",
    series: "Field Notes",
  },
  {
    slug: "beauty-is-beyond-money",
    name: "Beauty Is Beyond Money",
    detail: "Framed art print, full colour",
    note: "Original photography — Field Notes, a street-side find in Mumbai.",
    description:
      "A cinematic colour grade on an original street photograph of a roadside sunflower stall, hand-painted sign and all. Part of our Field Notes series — real places, shot by us, not stock, not AI, set behind glass in a slim black frame.",
    sizes: ["11×14 in", "16×20 in", "A2"],
    image: "/images/frames/beauty-is-beyond-money.jpg",
    aspect: "aspect-square",
    series: "Field Notes",
  },
  {
    slug: "legend",
    name: "Average Never Made a Legend",
    detail: "Framed art print, grain-halftone",
    note: "Original photographic print — No. 007 in a numbered observation series.",
    description:
      "A grainy halftone study of a bronc rearing against an open sky, built on a free-licensed rodeo photograph, printed black on raw white with a red grain wash and set behind glass in a matte black frame. Part of our Observation series — original photographic prints, not wood-tone frames, for anyone who wants a little defiance on the wall.",
    sizes: ["11×14 in", "16×20 in", "A2"],
    image: "/images/frames/legend.jpg",
    aspect: "aspect-[4/5]",
    series: "Observation",
  },
  {
    slug: "everything-goes",
    name: "Everything Goes",
    detail: "Framed art print, full colour",
    note: "Original photographic print — No. 006 in a numbered observation series.",
    description:
      "A cinematic colour grade built on a licensed photograph of a golden-hour meadow, paired with a soft italic line on impermanence. Part of our Observation series — original prints, not wood-tone frames, for anyone who wants a little stillness on the wall.",
    sizes: ["16×20 in", "A2", "A1"],
    image: "/images/frames/everything-goes.jpg",
    aspect: "aspect-[2/1]",
    series: "Observation",
  },
];

export const ESSENTIALS = ALL_FRAMES.filter((f) =>
  ["untamed", "the-prince", "godfidence", "pride", "home"].includes(f.slug)
);

export const NEW_ARRIVALS = ALL_FRAMES.filter((f) =>
  [
    "chase-the-light",
    "mumbai-after-dark",
    "beauty-is-beyond-money",
    "everything-goes",
  ].includes(f.slug)
);

export const OBSERVATION = ALL_FRAMES.filter((f) => f.series === "Observation");
export const FIELD_NOTES = ALL_FRAMES.filter((f) => f.series === "Field Notes");

export function getFrameBySlug(slug: string): Frame | undefined {
  return ALL_FRAMES.find((f) => f.slug === slug);
}

// ---- pricing (by size, not per-product — a size costs the same to print/frame regardless of which piece) ----

export const SIZE_PRICES: Record<string, number> = {
  "11×14 in": 2499,
  "16×20 in": 3999,
  A2: 4799,
  A1: 7999,
};

export const SIZE_DIMENSIONS_IN: Record<string, [number, number]> = {
  "11×14 in": [11, 14],
  "16×20 in": [16, 20],
  A2: [16.5, 23.4],
  A1: [23.4, 33.1],
};

export function getPriceForSize(frame: Frame, size: string): number {
  return SIZE_PRICES[size] ?? Math.min(...frame.sizes.map((s) => SIZE_PRICES[s] ?? Infinity));
}

export function getStartingPrice(frame: Frame): number {
  return Math.min(...frame.sizes.map((s) => SIZE_PRICES[s] ?? Infinity));
}

export function formatINR(amount: number): string {
  return `₹${amount.toLocaleString("en-IN")}`;
}

// ---- orientation, derived from the aspect class rather than stored redundantly ----

export type Orientation = "portrait" | "landscape" | "square";

export function getOrientation(frame: Frame): Orientation {
  if (frame.aspect.includes("square")) return "square";
  const match = frame.aspect.match(/aspect-\[(\d+)\/(\d+)\]/);
  if (!match) return "portrait";
  const [, w, h] = match.map(Number) as unknown as [number, number, number];
  if (w === h) return "square";
  return w > h ? "landscape" : "portrait";
}

export type Frame = {
  slug: string;
  name: string;
  detail: string;
  note?: string;
  description: string;
  sizes: string[];
  image: string;
  aspect: string;
};

export const ALL_FRAMES: Frame[] = [
  {
    slug: "walnut",
    name: "The Walnut",
    detail: "Solid walnut, satin",
    description:
      "Our most-requested frame. Solid walnut with a warm, even grain and a satin oil finish that deepens slightly over the first year. Works equally well holding a single print or sitting in a row of three.",
    sizes: ["8×10 in", "11×14 in", "16×20 in", "A3", "A2"],
    image: "/images/frames/walnut.jpg",
    aspect: "aspect-[3/4]",
  },
  {
    slug: "ash",
    name: "The Ash",
    detail: "White ash, matte black",
    description:
      "White ash underneath, finished in a matte black that doesn't shine under gallery lighting. Thin profile, square-cut corners — built for black-and-white photography and line drawings.",
    sizes: ["8×10 in", "11×14 in", "16×20 in", "A3"],
    image: "/images/frames/ash.jpg",
    aspect: "aspect-square",
  },
  {
    slug: "oak",
    name: "The Oak",
    detail: "European oak, raw",
    description:
      "European oak, left raw and only lightly sealed so the grain stays visible and pale. The lightest frame we make — it reads almost invisible against a white wall, letting the piece inside do the talking.",
    sizes: ["8×10 in", "11×14 in", "16×20 in", "A3", "A2"],
    image: "/images/frames/oak.jpg",
    aspect: "aspect-[4/5]",
  },
  {
    slug: "ink",
    name: "The Ink",
    detail: "Blackened oak, ink wash",
    description:
      "Oak taken through an ink-wash process that darkens the grain without hiding it entirely — closer to charcoal than true black. A quieter alternative to lacquered black for moodier rooms.",
    sizes: ["8×10 in", "11×14 in", "16×20 in"],
    image: "/images/frames/ink.jpg",
    aspect: "aspect-[3/4]",
  },
  {
    slug: "brass",
    name: "The Brass",
    detail: "Ash core, brass edge",
    description:
      "An ash core wrapped in a brushed brass edge that's allowed to tarnish naturally rather than lacquered shut. Expect the warmth to shift slightly over a few years — that's the point.",
    sizes: ["8×10 in", "11×14 in", "16×20 in"],
    image: "/images/frames/brass.jpg",
    aspect: "aspect-[5/6]",
  },
  {
    slug: "smoked-oak",
    name: "The Smoked Oak",
    detail: "Smoked European oak, wax finish",
    note: "Darker grain, deeper shadow line — made for black-and-white prints.",
    description:
      "Oak smoked before finishing, which pulls the grain toward a deep coffee brown and sharpens the shadow line along the rebate. A heavier, more formal frame than The Walnut.",
    sizes: ["11×14 in", "16×20 in", "A2"],
    image: "/images/frames/smoked-oak.jpg",
    aspect: "aspect-[4/5]",
  },
  {
    slug: "terracotta",
    name: "The Terracotta",
    detail: "Ash core, terracotta lacquer",
    note: "Our first colour run. Small batch, limited to 40 pieces.",
    description:
      "Our first run outside natural wood tones — an ash core lacquered in a muted, clay-toned terracotta. Small batch, hand-sprayed in-house, limited to 40 pieces while we see how it's received.",
    sizes: ["8×10 in", "11×14 in", "16×20 in"],
    image: "/images/frames/terracotta.jpg",
    aspect: "aspect-[4/5]",
  },
];

export const ESSENTIALS = ALL_FRAMES.filter((f) =>
  ["walnut", "ash", "oak", "ink", "brass"].includes(f.slug)
);

export const NEW_ARRIVALS = ALL_FRAMES.filter((f) =>
  ["smoked-oak", "terracotta"].includes(f.slug)
);

export function getFrameBySlug(slug: string): Frame | undefined {
  return ALL_FRAMES.find((f) => f.slug === slug);
}

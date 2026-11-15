"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { OBSERVATION, FIELD_NOTES } from "@/lib/frames";

const COLLECTIONS = [
  {
    name: "Observation series",
    description:
      "Grain-halftone studies — public-domain art and original photography, printed black on raw white.",
    image: OBSERVATION[0].image,
    href: "/shop?series=Observation",
  },
  {
    name: "Field Notes",
    description:
      "Full-colour, cinematically graded — real places, shot by us, not stock, not AI.",
    image: FIELD_NOTES[0].image,
    href: "/shop?series=Field+Notes",
  },
];

export default function FeaturedCollections() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-20 lg:px-10 2xl:max-w-[90rem] 2xl:px-16 2xl:pb-28">
      <SectionHeading eyebrow="Find your frame" title="Two collections" />
      <div className="grid gap-6 sm:grid-cols-2 sm:gap-8">
        {COLLECTIONS.map((c, i) => (
          <motion.div
            key={c.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <Link href={c.href} className="group block">
              <div className="relative aspect-[5/4] overflow-hidden bg-beige">
                <Image
                  src={c.image}
                  alt={c.name}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                />
              </div>
              <h3 className="mt-4 font-serif text-2xl text-charcoal group-hover:text-accent transition-colors">
                {c.name}
              </h3>
              <p className="mt-1 max-w-sm text-stone">{c.description}</p>
              <span className="mt-2 inline-block text-sm text-olive underline decoration-olive/40 underline-offset-4">
                Explore
              </span>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

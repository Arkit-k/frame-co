"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import ProductCard from "./ProductCard";
import { ESSENTIALS } from "@/lib/frames";

export default function GalleryRow() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-20 lg:px-10 2xl:max-w-[90rem] 2xl:px-16 2xl:pb-28">
      <SectionHeading
        eyebrow="Loved on every wall"
        title="Bestsellers"
        description="The five prints people come back for — the ones that work on nearly any wall."
        align="split"
      />
      <div className="flex gap-5 overflow-x-auto pb-4 sm:grid sm:grid-cols-5 sm:overflow-visible 2xl:gap-8">
        {ESSENTIALS.map((frame, i) => (
          <motion.div
            key={frame.slug}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="w-44 flex-none sm:w-auto"
          >
            <ProductCard frame={frame} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

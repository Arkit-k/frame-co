"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import ProductCard from "./ProductCard";
import { NEW_ARRIVALS } from "@/lib/frames";

export default function NewArrivals() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-20 lg:px-10 2xl:max-w-[90rem] 2xl:px-16 2xl:pb-28">
      <SectionHeading eyebrow="Just in" title="New arrivals" />
      <div className="grid gap-10 sm:grid-cols-2 sm:gap-12">
        {NEW_ARRIVALS.map((item, i) => (
          <motion.div
            key={item.slug}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            <ProductCard frame={item} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

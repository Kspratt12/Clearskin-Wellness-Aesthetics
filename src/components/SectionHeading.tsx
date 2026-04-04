"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`mb-12 md:mb-16 ${align === "center" ? "text-center" : ""}`}
    >
      {eyebrow && (
        <span
          className={`text-xs uppercase tracking-[0.25em] font-medium ${
            light ? "text-champagne-light" : "text-champagne-dark"
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-[family-name:var(--font-heading)] text-3xl md:text-4xl lg:text-5xl font-light mt-3 mb-5 leading-tight ${
          light ? "text-warm-white" : "text-charcoal"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`text-sm md:text-base leading-relaxed max-w-2xl ${
            align === "center" ? "mx-auto" : ""
          } ${light ? "text-taupe-light" : "text-charcoal-muted"}`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}

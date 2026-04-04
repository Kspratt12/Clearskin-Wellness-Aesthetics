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
      className={`mb-14 md:mb-18 ${align === "center" ? "text-center" : ""}`}
    >
      {eyebrow && (
        <div className={`flex items-center gap-3 mb-4 ${align === "center" ? "justify-center" : ""}`}>
          <div className="premium-rule" />
          <span
            className={`text-xs uppercase tracking-[0.3em] font-medium ${
              light ? "text-champagne-light" : "text-champagne-dark"
            }`}
          >
            {eyebrow}
          </span>
          {align === "center" && <div className="premium-rule" />}
        </div>
      )}
      <h2
        className={`font-[family-name:var(--font-heading)] text-3xl md:text-4xl lg:text-[2.75rem] font-light mt-2 mb-5 leading-tight ${
          light ? "text-warm-white" : "text-charcoal"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`text-sm md:text-[0.95rem] leading-[1.8] max-w-2xl ${
            align === "center" ? "mx-auto" : ""
          } ${light ? "text-taupe-light" : "text-charcoal-muted"}`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}

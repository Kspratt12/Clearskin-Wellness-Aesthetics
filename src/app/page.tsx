"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Shield,
  Sparkles,
  Heart,
  Award,
  Star,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { FadeIn } from "@/components/FadeIn";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";

const featuredTreatments = [
  {
    title: "Neuromodulators",
    subtitle: "Botox, Dysport, Xeomin & Daxxify",
    description:
      "Smooth fine lines and restore a naturally refreshed appearance with expertly placed neuromodulator treatments.",
    image: "Facial treatment, neuromodulator injection",
    photo: "/images/services/neuromodulators.png",
    href: "/services#injectables",
  },
  {
    title: "Dermal Fillers",
    subtitle: "Volume Restoration & Contouring",
    description:
      "Restore youthful volume and enhance facial contours with premium hyaluronic acid fillers, tailored to your anatomy.",
    image: "Dermal filler treatment close-up",
    photo: "/images/services/dermal-fillers.png",
    href: "/services#injectables",
  },
  {
    title: "Morpheus8",
    subtitle: "Microneedling + Radiofrequency",
    description:
      "Tighten, firm, and rejuvenate skin with this advanced combination of microneedling and radiofrequency energy.",
    image: "Morpheus8 device treatment on face",
    photo: "/images/services/morpheus8.png",
    href: "/services#advanced",
  },
  {
    title: "PicoSure Pro",
    subtitle: "Pigment Correction & Skin Revitalization",
    description:
      "Address pigmentation, melasma, acne scars, and uneven tone with next-generation picosecond laser technology.",
    image: "Laser skin treatment session",
    photo: "/images/services/picosure-pro.png",
    href: "/services#advanced",
  },
  {
    title: "Medical Microneedling",
    subtitle: "SkinPen Collagen Induction",
    description:
      "Stimulate your skin's natural collagen production to improve texture, scarring, and fine lines with medical-grade precision.",
    image: "SkinPen microneedling close-up",
    photo: "/images/services/medical-microneedling.png",
    href: "/services#rejuvenation",
  },
  {
    title: "Laser Hair Removal",
    subtitle: "Long-Term Hair Reduction",
    description:
      "Achieve smooth, lasting results with targeted laser technology for face, body, and all skin types.",
    image: "Laser hair removal treatment",
    href: "/services#advanced",
    photo: "/images/services/laser-hair-removal.png",
  },
];

const whyChooseUs = [
  {
    icon: Shield,
    title: "Dermatology-Backed Care",
    description:
      "Every treatment is supported by the medical foundation of NC Center for Dermatology. Real expertise, not just aesthetics.",
  },
  {
    icon: Award,
    title: "Board-Certified Leadership",
    description:
      "Led by Dr. Jeffrey Scales, a board-certified dermatologist with residency training at Wake Forest University.",
  },
  {
    icon: Heart,
    title: "Inclusive by Design",
    description:
      "Our bilingual team serves patients of all skin types and backgrounds with culturally aware, personalized care.",
  },
  {
    icon: Sparkles,
    title: "Advanced Technology",
    description:
      "From PicoSure Pro to Morpheus8, we invest in the latest evidence-based technology for superior patient outcomes.",
  },
];

const providerPreview = [
  {
    name: "Dr. Jeffrey Scales",
    title: "MD, Medical Director",
    credential: "Board-Certified Dermatologist",
    image: "/images/team/jeffery-scales.png",
  },
  {
    name: "Anay Castro",
    title: "MPAS, PA-C",
    credential: "Dermatology PA & Aesthetic Injector",
    image: "/images/team/anay-castro.png",
  },
  {
    name: "Cecilia Salazar",
    title: "Aesthetic RN",
    credential: "17+ Years in Medical Aesthetics",
    image: "/images/team/cecilia-salazar.png",
  },
  {
    name: "Aaron Pankey",
    title: "Licensed Esthetician",
    credential: "Specialized in Melanated Skin",
    image: "/images/team/aaron-pankey.png",
  },
];

const heroImages = [
  {
    src: "/images/clinic/hero.png",
    alt: "Clearskin & Wellness Aesthetics team in front of clinic",
  },
  {
    src: "/images/clinic/hero2.png",
    alt: "CWA treatment room with Morpheus8 and advanced technology",
  },
  {
    src: "/images/clinic/lobby.png",
    alt: "Clearskin & Wellness Aesthetics lobby with artwork",
  },
  {
    src: "/images/clinic/ribbon-cutting.png",
    alt: "Clearskin & Wellness Aesthetics grand opening ribbon cutting",
  },
];

export default function HomePage() {
  const [currentHero, setCurrentHero] = useState(0);

  const nextImage = useCallback(() => {
    setCurrentHero((prev) => (prev + 1) % heroImages.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextImage, 5000);
    return () => clearInterval(interval);
  }, [nextImage]);

  return (
    <>
      {/* ========== HERO ========== */}
      <section className="relative overflow-hidden">
        <div className="grid lg:grid-cols-2 min-h-[85vh]">
          {/* Left — Copy */}
          <div className="flex items-center px-6 md:px-12 lg:px-20 py-20 lg:py-0 order-2 lg:order-1">
            <div className="max-w-xl">
              <motion.span
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="inline-block text-xs uppercase tracking-[0.3em] text-champagne-dark font-medium mb-6"
              >
                Durham, NC
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl lg:text-6xl font-light text-charcoal leading-[1.1] mb-6"
              >
                Where Skin Science
                <br />
                <span className="italic font-light">Meets Artistry</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="text-charcoal-muted leading-relaxed mb-4 text-base"
              >
                Clearskin & Wellness Aesthetics is Durham&apos;s premier
                destination for cosmetic treatments and skin wellness,
                thoughtfully designed for every skin type, every concern,
                and every goal.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.45 }}
                className="text-sm text-taupe-dark mb-8"
              >
                Backed by the medical expertise of North Carolina Center for
                Dermatology.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.55 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <a
                  href="https://nccdermatology.myaestheticrecord.com/online-booking/book-appointment"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-charcoal text-warm-white px-8 py-3.5 text-sm tracking-wider hover:bg-charcoal-light transition-all duration-300 group"
                >
                  Book Consultation
                  <ArrowRight
                    size={15}
                    className="ml-2 group-hover:translate-x-1 transition-transform"
                  />
                </a>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center border border-charcoal/20 text-charcoal px-8 py-3.5 text-sm tracking-wider hover:border-charcoal/40 hover:bg-sand-light/50 transition-all duration-300"
                >
                  Explore Treatments
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Right — Hero Image Carousel */}
          <motion.div
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 relative h-[50vh] lg:h-auto overflow-hidden bg-sand-light"
          >
            {heroImages.map((img, i) => (
              <motion.div
                key={img.src}
                initial={false}
                animate={{ opacity: i === currentHero ? 1 : 0 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority={i === 0}
                  quality={100}
                />
              </motion.div>
            ))}

            {/* Slide Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {heroImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentHero(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === currentHero
                      ? "bg-champagne w-6"
                      : "bg-warm-white/50 hover:bg-warm-white/80"
                  }`}
                  aria-label={`View image ${i + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========== TRUST BAR ========== */}
      <section className="bg-charcoal py-6">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 text-warm-white">
            <div className="flex items-center gap-2">
              <Shield size={16} className="text-champagne" />
              <span className="text-xs tracking-wider uppercase">
                Dermatology-Backed
              </span>
            </div>
            <div className="hidden md:block w-px h-4 bg-warm-white/20" />
            <div className="flex items-center gap-2">
              <Award size={16} className="text-champagne" />
              <span className="text-xs tracking-wider uppercase">
                Board-Certified Leadership
              </span>
            </div>
            <div className="hidden md:block w-px h-4 bg-warm-white/20" />
            <div className="flex items-center gap-2">
              <Heart size={16} className="text-champagne" />
              <span className="text-xs tracking-wider uppercase">
                All Skin Types Welcome
              </span>
            </div>
            <div className="hidden md:block w-px h-4 bg-warm-white/20" />
            <div className="flex items-center gap-2">
              <Star size={16} className="text-champagne" />
              <span className="text-xs tracking-wider uppercase">
                Bilingual Team
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ========== FEATURED TREATMENTS ========== */}
      <section className="py-20 md:py-28 bg-ivory">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            eyebrow="Our Services"
            title="Treatments Designed Around You"
            description="From advanced laser technology to expert injectables and skin-restoring facials, every treatment is tailored to your unique skin and delivered with clinical precision."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredTreatments.map((treatment, i) => (
              <FadeIn key={treatment.title} delay={i * 0.08}>
                <Link href={treatment.href} className="block group bg-warm-white border border-sand/60 hover:border-champagne/30 transition-all duration-500 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
                  {treatment.photo ? (
                    <div className="relative aspect-[3/2] overflow-hidden bg-sand-light">
                      <Image
                        src={treatment.photo}
                        alt={treatment.image}
                        fill
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        quality={100}
                      />
                    </div>
                  ) : (
                    <ImagePlaceholder
                      label={treatment.image}
                      aspectRatio="aspect-[3/2]"
                    />
                  )}
                  <div className="p-6">
                    <h3 className="font-[family-name:var(--font-heading)] text-xl font-medium text-charcoal mb-1">
                      {treatment.title}
                    </h3>
                    <p className="text-xs text-champagne-dark tracking-wide mb-3">
                      {treatment.subtitle}
                    </p>
                    <p className="text-sm text-charcoal-muted leading-relaxed">
                      {treatment.description}
                    </p>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.3}>
            <div className="text-center mt-12">
              <Link
                href="/services"
                className="inline-flex items-center text-sm text-charcoal tracking-wider border-b border-charcoal/30 pb-1 hover:border-champagne-dark hover:text-champagne-dark transition-colors group"
              >
                View All Services
                <ArrowRight
                  size={14}
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ========== REAL RESULTS ========== */}
      <section className="py-20 md:py-28 bg-warm-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            eyebrow="Real Results"
            title="See the Difference"
            description="Real patient transformations from our clinical team. Every result reflects personalized care, medical-grade treatments, and a commitment to your skin health."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                src: "/images/results/before-after-1.png",
                alt: "Acne treatment results, before and after",
                label: "Acne & Texture Improvement",
              },
              {
                src: "/images/results/before-after-2.png",
                alt: "Pigmentation correction results, before and after",
                label: "Pigmentation Correction",
              },
              {
                src: "/images/results/before-after-3.png",
                alt: "Acne clearance results, before and after",
                label: "Acne Clearance & Skin Clarity",
              },
              {
                src: "/images/results/before-after-4.png",
                alt: "Scalp and hair treatment results, before and after",
                label: "Scalp & Hair Restoration",
              },
              {
                src: "/images/results/before-after-5.png",
                alt: "Tattoo removal results, before and after",
                label: "PicoSure Pro Tattoo Removal",
              },
              {
                src: "/images/results/before-after-6.png",
                alt: "Forehead acne treatment results, before and after",
                label: "Acne & Skin Smoothing",
              },
              {
                src: "/images/results/before-after-7.png",
                alt: "Scalp lesion removal results, before and after",
                label: "DPN Mole Removal",
              },
              {
                src: "/images/results/before-after-8.png",
                alt: "Dermal filler results, before and after",
                label: "Dermal Filler Enhancement",
              },
              {
                src: "/images/results/before-after-9.png",
                alt: "Pore refinement and skin texture results, before and after",
                label: "Pore Refinement & Skin Texture",
              },
            ].map((result, i) => (
              <FadeIn key={result.src} delay={i * 0.06}>
                <div className="group">
                  <div className="relative aspect-square overflow-hidden bg-sand-light">
                    <Image
                      src={result.src}
                      alt={result.alt}
                      fill
                      className="object-cover group-hover:scale-[1.02] transition-transform duration-700"
                      sizes="(max-width: 640px) 50vw, 25vw"
                      quality={100}
                    />
                  </div>
                  <p className="text-sm text-charcoal mt-3 font-medium">
                    {result.label}
                  </p>
                  <p className="text-xs text-charcoal-muted mt-1">
                    Actual patient results. Individual outcomes may vary.
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.3}>
            <div className="text-center mt-12">
              <a
                href="https://www.instagram.com/clearskinwellnessa/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-charcoal tracking-wider border-b border-charcoal/30 pb-1 hover:border-champagne-dark hover:text-champagne-dark transition-colors group"
              >
                See More Results on Instagram
                <ArrowRight
                  size={14}
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                />
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ========== MEMBERSHIP PREVIEW ========== */}
      <section className="py-20 md:py-28 bg-ivory">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            eyebrow="Membership"
            title="Invest in Your Skin, Every Month"
            description="Exclusive member pricing, monthly treatments, and ongoing savings on everything from facials to injectables."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                name: "Bronze",
                price: "$85",
                highlight: "Monthly facial or peel",
                accent: "border-taupe",
              },
              {
                name: "Silver",
                price: "$120",
                highlight: "Deeper treatments + laser savings",
                accent: "border-taupe-light",
              },
              {
                name: "Gold",
                price: "$175",
                highlight: "Free Botox units + 15% off services",
                popular: true,
                accent: "border-champagne",
              },
              {
                name: "Platinum",
                price: "$275",
                highlight: "Maximum savings on every treatment",
                accent: "border-charcoal",
              },
            ].map((tier, i) => (
              <FadeIn key={tier.name} delay={i * 0.08}>
                <Link
                  href="/membership"
                  className={`relative block bg-warm-white border-t-[3px] ${tier.accent} border-x border-b border-sand/60 p-6 text-center hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] transition-all duration-500 ${tier.popular ? "ring-1 ring-champagne/40" : ""}`}
                >
                  {tier.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="inline-flex items-center gap-1 bg-gradient-to-r from-champagne-dark to-champagne text-warm-white text-[0.55rem] uppercase tracking-[0.2em] font-semibold px-3 py-1">
                        <Star size={8} fill="currentColor" />
                        Popular
                      </span>
                    </div>
                  )}
                  <h3 className="text-xs uppercase tracking-[0.25em] text-champagne-dark font-semibold mb-2 mt-1">
                    {tier.name}
                  </h3>
                  <div className="flex items-baseline justify-center gap-1 mb-3">
                    <span className="font-[family-name:var(--font-heading)] text-4xl font-light text-charcoal">
                      {tier.price}
                    </span>
                    <span className="text-sm text-charcoal-muted">/mo</span>
                  </div>
                  <p className="text-xs text-charcoal-muted leading-relaxed">
                    {tier.highlight}
                  </p>
                </Link>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.3}>
            <div className="text-center mt-10">
              <Link
                href="/membership"
                className="inline-flex items-center bg-charcoal text-warm-white px-8 py-3.5 text-sm tracking-wider hover:bg-charcoal-light transition-all duration-300 group"
              >
                View All Membership Plans
                <ArrowRight
                  size={15}
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ========== VIDEO SHOWCASE ========== */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            eyebrow="In Action"
            title="Experience Our Treatments"
            description="Watch real treatments and results from Clearskin & Wellness Aesthetics. See the care, precision, and expertise our team brings to every session."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { src: "/images/videos/reel-1.mp4", label: "Treatment Highlight" },
              { src: "/images/videos/reel-2.mp4", label: "Results in Motion" },
              { src: "/images/videos/reel-3.mp4", label: "Behind the Treatment" },
              { src: "/images/videos/reel-4.mp4", label: "Patient Experience" },
              { src: "/images/videos/tiktok-1.mp4", label: "Quick Tips" },
              { src: "/images/videos/tiktok-2.mp4", label: "Treatment Day" },
              { src: "/images/videos/tiktok-3.mp4", label: "Skin Transformation" },
              { src: "/images/videos/tiktok-4.mp4", label: "Expert Care" },
            ].map((video, i) => (
              <FadeIn key={video.src} delay={i * 0.1}>
                <div className="group">
                  <div className="relative aspect-[9/16] overflow-hidden bg-charcoal rounded-sm">
                    <video
                      src={video.src}
                      playsInline
                      muted
                      loop
                      autoPlay
                      preload="auto"
                      className="w-full h-full object-cover cursor-pointer"
                      onClick={(e) => {
                        const v = e.currentTarget;
                        if (v.paused) { v.play(); } else { v.pause(); }
                        v.muted = !v.muted;
                      }}
                    >
                      Your browser does not support the video tag.
                    </video>
                    <div className="absolute bottom-3 right-3 bg-charcoal/60 backdrop-blur-sm text-warm-white p-2 rounded-full pointer-events-none">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                        <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-sm text-charcoal mt-3 font-medium">
                    {video.label}
                  </p>
                  <p className="text-xs text-charcoal-muted mt-0.5">
                    Tap to unmute
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.3}>
            <div className="text-center mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href="https://www.instagram.com/clearskinwellnessa/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-charcoal tracking-wider border-b border-charcoal/30 pb-1 hover:border-champagne-dark hover:text-champagne-dark transition-colors group"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-champagne-dark">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
                Follow on Instagram
                <ArrowRight
                  size={14}
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                />
              </a>
              <a
                href="https://www.tiktok.com/@clearskin.wellness"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-charcoal tracking-wider border-b border-charcoal/30 pb-1 hover:border-champagne-dark hover:text-champagne-dark transition-colors group"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="mr-2 text-champagne-dark">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.71a8.2 8.2 0 0 0 4.76 1.52v-3.4a4.85 4.85 0 0 1-1-.14z" />
                </svg>
                Follow on TikTok
                <ArrowRight
                  size={14}
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                />
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ========== WHY CHOOSE US ========== */}
      <section className="py-20 md:py-28 bg-ivory">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            eyebrow="Why Clearskin & Wellness"
            title="More Than a Med Spa"
            description="We bridge the gap between clinical dermatology and cosmetic aesthetics, giving you access to treatments that are both beautiful and medically sound."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.1}>
                <div className="text-center">
                  <div className="w-14 h-14 mx-auto mb-5 bg-sand-light border border-sand flex items-center justify-center">
                    <item.icon
                      size={24}
                      className="text-champagne-dark"
                      strokeWidth={1.5}
                    />
                  </div>
                  <h3 className="font-[family-name:var(--font-heading)] text-lg font-medium text-charcoal mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-charcoal-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ========== PATIENT TESTIMONIALS ========== */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            eyebrow="Patient Reviews"
            title="What Our Patients Say"
            description="Real reviews from real patients. Their words speak louder than ours ever could."
          />

          {/* Google Rating Bar */}
          <FadeIn>
            <div className="flex items-center justify-center gap-3 mb-12">
              {/* Google G Logo */}
              <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-champagne text-champagne" />
                ))}
              </div>
              <span className="text-sm text-charcoal-muted">
                Google Reviews
              </span>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Aleyah P.",
                review:
                  "I received my first lymphatic drainage facial and it was an amazing experience. The office is bright and clean with beautiful artwork on the walls. Aaron was wonderful, very knowledgeable about the products and explained every step.",
                service: "Lymphatic Drainage Facial",
              },
              {
                name: "Kyarra R.",
                review:
                  "I absolutely love this place! Reena is incredibly knowledgeable about skin and takes the time to explain everything in detail. It's so refreshing, and honestly rare, to find a skincare center that truly understands and caters to the unique needs of diverse skin types.",
                service: "Skincare Consultation",
              },
              {
                name: "Brooklynn C.",
                review:
                  "I have been getting laser hair removal from Cecilia for about 5 months and I've had a great experience. I was hesitant at first, but Cecilia's care, along with Dr. Scales' guidance, has made such a positive difference.",
                service: "Laser Hair Removal",
              },
              {
                name: "Allison M.",
                review:
                  "I've been a client for about two years, undergoing laser hair removal and facial cleansing treatments. Cecilia is incredibly patient and caring, making sure I feel comfortable and at ease throughout my visits. I highly recommend her services!",
                service: "Laser Hair Removal & Facials",
              },
              {
                name: "Giavanni P.",
                review:
                  "I received an hour long facial from Aaron and it was amazing! I learned so much and left feeling super moisturized and relaxed! Very professional staff and a lovely, welcoming environment.",
                service: "60-Minute Facial",
              },
              {
                name: "Alexandra K.",
                review:
                  "Cecilia and the staff were warm, welcoming, and knowledgeable. I enjoyed every minute of the facial. The place is clean, beautiful, and peaceful. They use high-quality products. Cecilia was gentle with my sensitive skin and used tools based on my needs.",
                service: "50-Minute Facial",
              },
              {
                name: "Katie W.",
                review:
                  "I'm halfway through my first-ever laser hair removal treatments with Cecilia and it has been an excellent experience! The space is so nice and clean and you can tell she is extremely knowledgeable about skin care and each laser they offer.",
                service: "Laser Hair Removal",
              },
              {
                name: "Demarcus N.",
                review:
                  "My wife treated me to my first experience at this business, and I've been back several times. The Ultimate Double Cleanse facial was amazing. As a male, I felt completely comfortable during the whole process!",
                service: "Ultimate Double Cleanse Facial",
              },
              {
                name: "Heroina S.",
                review:
                  "I am very happy with the results of my face. I love coming to this place and relaxing. Cecilia has a phenomenal hand for skin care. I give her a 10/10. When you go, ask for Cecilia I. Salazar, Nurse Injector and Laser Specialist.",
                service: "Facial Treatment",
              },
            ].map((testimonial, i) => (
              <FadeIn key={testimonial.name} delay={i * 0.06}>
                <div className="bg-warm-white border border-sand/60 p-6 md:p-8 h-full flex flex-col hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-shadow duration-500">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star
                        key={j}
                        size={14}
                        className="fill-champagne text-champagne"
                      />
                    ))}
                  </div>
                  <p className="text-sm text-charcoal-muted leading-relaxed flex-1 mb-5">
                    &ldquo;{testimonial.review}&rdquo;
                  </p>
                  <div className="border-t border-sand/40 pt-4">
                    <p className="text-sm font-medium text-charcoal">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-champagne-dark mt-0.5">
                      {testimonial.service}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.4}>
            <div className="text-center mt-12">
              <a
                href="https://g.co/kgs/clearskinwellness"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-charcoal tracking-wider border-b border-charcoal/30 pb-1 hover:border-champagne-dark hover:text-champagne-dark transition-colors group"
              >
                Read More Reviews on Google
                <ArrowRight
                  size={14}
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                />
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ========== DERMATOLOGY-BACKED EXPERTISE ========== */}
      <section className="py-20 md:py-28 bg-ivory">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeIn direction="left">
              <div className="aspect-[4/3] relative w-full overflow-hidden bg-sand-light">
                <Image
                  src="/images/team/jeffery-and-anay.png"
                  alt="Dr. Jeffrey Scales and Anay Castro, clinical leadership"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  quality={100}
                />
              </div>
            </FadeIn>

            <FadeIn direction="right">
              <div>
                <span className="text-xs uppercase tracking-[0.25em] text-champagne-dark font-medium">
                  Our Foundation
                </span>
                <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-light text-charcoal mt-3 mb-6 leading-tight">
                  Cosmetic Care with the Confidence of Dermatology
                </h2>
                <p className="text-charcoal-muted leading-relaxed mb-5">
                  Clearskin & Wellness Aesthetics is the cosmetic and skin
                  wellness extension of North Carolina Center for Dermatology —
                  a trusted Durham practice led by Dr. Jeffrey Scales, a
                  board-certified dermatologist.
                </p>
                <p className="text-charcoal-muted leading-relaxed mb-8">
                  This means every treatment you receive is informed by deep
                  medical knowledge of the skin. Your provider team doesn&apos;t
                  just know aesthetics. They understand dermatology at its core.
                  That&apos;s a level of confidence most cosmetic practices
                  simply can&apos;t offer.
                </p>

                <div className="space-y-3 mb-8">
                  {[
                    "Board-certified dermatologist oversight",
                    "Medical-grade treatment protocols",
                    "Skin health prioritized alongside aesthetics",
                    "Comprehensive team of licensed specialists",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle2
                        size={18}
                        className="text-champagne-dark mt-0.5 shrink-0"
                      />
                      <span className="text-sm text-charcoal">{item}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/staff"
                  className="inline-flex items-center text-sm text-charcoal tracking-wider border-b border-charcoal/30 pb-1 hover:border-champagne-dark hover:text-champagne-dark transition-colors group"
                >
                  Meet Our Team
                  <ArrowRight
                    size={14}
                    className="ml-2 group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ========== PROVIDER PREVIEW ========== */}
      <section className="py-20 md:py-28 bg-warm-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            eyebrow="Our Team"
            title="Experts Who Understand Skin Deeply"
            description="Our team of licensed dermatology and aesthetics specialists brings clinical precision, compassion, and a commitment to serving all skin types."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {providerPreview.map((provider, i) => (
              <FadeIn key={provider.name} delay={i * 0.1}>
                <div className="group">
                  <div className="aspect-[3/4] relative w-full overflow-hidden bg-sand-light mb-4 group-hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-shadow duration-500">
                    <Image
                      src={provider.image}
                      alt={provider.name}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      quality={100}
                    />
                  </div>
                  <h3 className="font-[family-name:var(--font-heading)] text-lg font-medium text-charcoal">
                    {provider.name}
                  </h3>
                  <p className="text-sm text-champagne-dark">{provider.title}</p>
                  <p className="text-xs text-charcoal-muted mt-1">
                    {provider.credential}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.3}>
            <div className="text-center mt-12">
              <Link
                href="/staff"
                className="inline-flex items-center text-sm text-charcoal tracking-wider border-b border-charcoal/30 pb-1 hover:border-champagne-dark hover:text-champagne-dark transition-colors group"
              >
                Meet the Full Team
                <ArrowRight
                  size={14}
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ========== MEMBERSHIP TEASER ========== */}
      <section className="py-20 md:py-28 bg-charcoal text-warm-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeIn direction="left">
              <div>
                <span className="text-xs uppercase tracking-[0.25em] text-champagne font-medium">
                  Membership
                </span>
                <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-light mt-3 mb-6 leading-tight">
                  Invest in Your Skin,
                  <br />
                  <span className="italic">Every Month</span>
                </h2>
                <p className="text-taupe-light leading-relaxed mb-5">
                  Our membership plans make premium skincare accessible and
                  consistent. Choose a tier that fits your goals and enjoy
                  monthly treatments, exclusive member pricing, and ongoing
                  savings on everything from facials to injectables.
                </p>
                <p className="text-taupe-light leading-relaxed mb-8">
                  Plans start at just $85/month with complimentary services
                  that roll over month to month within the first year.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  {["Bronze", "Silver", "Gold", "Platinum"].map((tier) => (
                    <div
                      key={tier}
                      className="border border-warm-white/15 px-4 py-3 text-center"
                    >
                      <span className="text-xs uppercase tracking-[0.2em] text-champagne">
                        {tier}
                      </span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/membership"
                  className="inline-flex items-center bg-champagne text-charcoal px-8 py-3.5 text-sm tracking-wider font-medium hover:bg-champagne-light transition-all duration-300 group"
                >
                  View Membership Plans
                  <ArrowRight
                    size={15}
                    className="ml-2 group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </div>
            </FadeIn>

            <FadeIn direction="right">
              <div className="aspect-[4/3] relative w-full overflow-hidden bg-sand-light">
                <Image
                  src="/images/clinic/treatment-room.png"
                  alt="Clearskin & Wellness Aesthetics treatment room"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  quality={100}
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ========== CONFIDENCE / REASSURANCE ========== */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <FadeIn>
            <span className="text-xs uppercase tracking-[0.25em] text-champagne-dark font-medium">
              Your Experience
            </span>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-light text-charcoal mt-3 mb-6 leading-tight">
              What to Expect When You Visit
            </h2>
            <p className="text-charcoal-muted leading-relaxed mb-10">
              Whether it&apos;s your first consultation or your tenth visit,
              your experience is designed to feel calm, private, and
              personalized. We take time to listen, explain, and ensure
              you&apos;re comfortable with every step of your care.
            </p>
          </FadeIn>

          <div className="grid sm:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Consultation",
                desc: "We begin with a thorough skin assessment and an honest conversation about your goals, options, and expectations.",
              },
              {
                step: "02",
                title: "Treatment",
                desc: "Your treatment is performed by a licensed specialist using medical-grade tools and protocols, in a calm and private setting.",
              },
              {
                step: "03",
                title: "Aftercare",
                desc: "You leave with clear aftercare guidance and a follow-up plan. We're here if you need us between visits.",
              },
            ].map((item, i) => (
              <FadeIn key={item.step} delay={i * 0.12}>
                <div>
                  <span className="text-2xl font-[family-name:var(--font-heading)] text-champagne font-light">
                    {item.step}
                  </span>
                  <h3 className="font-[family-name:var(--font-heading)] text-lg font-medium text-charcoal mt-2 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-charcoal-muted leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ========== BOOKING CTA STRIP ========== */}
      <section className="relative py-20 md:py-24 bg-sand-light">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-light text-charcoal mb-4">
              Start Your Skin Journey Today
            </h2>
            <p className="text-charcoal-muted mb-8 max-w-xl mx-auto">
              All cosmetic procedures begin with a personalized consultation.
              Let us help you take the first step toward your skin goals.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://nccdermatology.myaestheticrecord.com/online-booking/book-appointment"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-charcoal text-warm-white px-8 py-3.5 text-sm tracking-wider hover:bg-charcoal-light transition-all duration-300 group"
              >
                Book Your Appointment
                <ArrowRight
                  size={15}
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                />
              </a>
              <a
                href="tel:+19195891307"
                className="inline-flex items-center border border-charcoal/20 text-charcoal px-8 py-3.5 text-sm tracking-wider hover:border-charcoal/40 transition-all duration-300"
              >
                Call (919) 589-1307
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}

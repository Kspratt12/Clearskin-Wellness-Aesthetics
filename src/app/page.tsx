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
      "Soften forehead lines, crow's feet, and frown lines with precision placement. Visible smoothing in 5-7 days. Lasts 3-4 months.",
    image: "Facial treatment, neuromodulator injection",
    photo: "/images/services/neuromodulators.png",
    href: "/services#injectables",
    price: "From $4/unit",
  },
  {
    title: "Dermal Fillers",
    subtitle: "Volume Restoration & Contouring",
    description:
      "Lips, cheeks, jawline, under-eyes. Premium hyaluronic acid fillers placed by anatomy, not guesswork. Results last 6-18 months.",
    image: "Dermal filler treatment close-up",
    photo: "/images/services/dermal-fillers.png",
    href: "/services#injectables",
    price: "From $700/syringe",
  },
  {
    title: "Morpheus8",
    subtitle: "Microneedling + Radiofrequency",
    description:
      "Radiofrequency microneedling that remodels collagen at the deepest layers. Tighter skin, refined contours. Visible after one session.",
    image: "Morpheus8 device treatment on face",
    photo: "/images/services/morpheus8.png",
    href: "/services#advanced",
    price: "From $350",
  },
  {
    title: "PicoSure Pro",
    subtitle: "Pigment Correction & Revitalization",
    description:
      "Picosecond laser shatters pigment without burning surrounding tissue. Targets melasma, sun damage, acne scars, and uneven tone.",
    image: "Laser skin treatment session",
    photo: "/images/services/picosure-pro.png",
    href: "/services#advanced",
    price: "From $200",
  },
  {
    title: "Medical Microneedling",
    subtitle: "SkinPen Collagen Induction",
    description:
      "Medical-grade SkinPen triggers your skin's own collagen cycle. Proven for acne scarring, fine lines, and uneven texture.",
    image: "SkinPen microneedling close-up",
    photo: "/images/services/medical-microneedling.png",
    href: "/services#rejuvenation",
    price: "From $200",
  },
  {
    title: "Laser Hair Removal",
    subtitle: "Long-Term Hair Reduction",
    description:
      "Face, bikini, underarms, legs, back. Lasting smoothness with laser precision. Proven safe across all skin tones.",
    image: "Laser hair removal treatment",
    href: "/services#advanced",
    photo: "/images/services/laser-hair-removal.png",
    price: "From $50",
  },
];

const whyChooseUs = [
  {
    icon: Shield,
    title: "Dermatology at the Core",
    description:
      "Every protocol is built on the medical foundation of NC Center for Dermatology. Not a day spa with a medical label.",
  },
  {
    icon: Award,
    title: "Board-Certified Oversight",
    description:
      "Dr. Jeffrey Scales, board-certified dermatologist (Penn Med, Wake Forest), oversees every treatment pathway.",
  },
  {
    icon: Heart,
    title: "Built for Every Skin",
    description:
      "A bilingual team trained across all skin tones, ethnicities, and concerns. Inclusive by practice, not just by promise.",
  },
  {
    icon: Sparkles,
    title: "Clinical-Grade Technology",
    description:
      "PicoSure Pro, Morpheus8, SkinPen, Clarity. We invest in technology that dermatologists trust, not trends.",
  },
];

const providerPreview = [
  {
    name: "Dr. Jeffrey Scales",
    title: "MD, Medical Director",
    credential: "Board-Certified Dermatologist",
    personality: "The clinical mind behind every protocol. Penn Med-trained, Wake Forest residency. He doesn't do trendy. He does what works.",
    image: "/images/team/jeffery-scales.png",
  },
  {
    name: "Anay Castro",
    title: "MPAS, PA-C",
    credential: "Dermatology PA & Aesthetic Injector",
    personality: "Your go-to for natural-looking injectables. Bilingual, detail-obsessed, and trained to balance artistry with anatomy.",
    image: "/images/team/anay-castro.png",
  },
  {
    name: "Cecilia Salazar",
    title: "Aesthetic RN",
    credential: "17+ Years in Medical Aesthetics",
    personality: "The laser and skin rejuvenation specialist patients ask for by name. 17 years of precision. Bilingual care.",
    image: "/images/team/cecilia-salazar.png",
  },
  {
    name: "Aaron Pankey",
    title: "Licensed Esthetician",
    credential: "Specialized in Melanated Skin",
    personality: "Aveda-trained with a gift for melanin-rich skin. He educates as he treats. You'll leave knowing your skin better.",
    image: "/images/team/aaron-pankey.png",
  },
];

const heroImages = [
  {
    src: "/images/clinic/mainhero.png",
    alt: "Patient receiving expert injectable treatment at Clearskin & Wellness Aesthetics",
  },
  {
    src: "/images/clinic/hero3.png",
    alt: "Radiant, healthy skin achieved through clinical skincare",
  },
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
        <div className="grid lg:grid-cols-[1fr_1.15fr] min-h-[92vh]">
          {/* Left — Copy */}
          <div className="flex items-center px-6 sm:px-10 md:px-14 lg:px-20 xl:px-24 py-20 lg:py-0 order-2 lg:order-1">
            <div className="max-w-[480px]">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex items-center gap-3 mb-10"
              >
                <div className="w-8 h-px bg-champagne-dark" />
                <span className="text-[0.65rem] uppercase tracking-[0.4em] text-champagne-dark font-medium">
                  Durham, NC &middot; Est. 2021
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="font-[family-name:var(--font-heading)] text-[2.5rem] md:text-5xl lg:text-[3.25rem] xl:text-[3.75rem] font-light text-charcoal leading-[1.06] mb-8"
              >
                Your Skin Deserves
                <br />
                <span className="italic">a Dermatologist&apos;s Touch.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="text-charcoal-muted leading-[1.85] mb-5 text-[0.9rem] max-w-[420px]"
              >
                Durham&apos;s only aesthetics practice built inside a
                dermatology office. Every injectable, laser, and facial is
                overseen by a board-certified dermatologist &mdash; not a
                med spa with a medical label.
              </motion.p>

              {/* Trust Signals */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.45 }}
                className="flex items-center gap-4 mb-10"
              >
                <div className="flex items-center gap-1.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={9} className="fill-champagne text-champagne" />
                  ))}
                  <span className="text-[0.68rem] text-taupe-dark ml-1">5.0 on Google</span>
                </div>
                <div className="w-px h-3 bg-sand/80" />
                <span className="text-[0.68rem] text-taupe-dark tracking-wide">Trusted by 1,000+ Triangle Patients</span>
              </motion.div>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.55 }}
                className="flex flex-col sm:flex-row gap-3.5"
              >
                <a
                  href="https://nccdermatology.myaestheticrecord.com/online-booking/book-appointment"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-charcoal text-warm-white px-9 py-[15px] text-[0.78rem] tracking-[0.18em] uppercase font-medium hover:bg-charcoal-light transition-all duration-300 group"
                >
                  Book Your Consultation
                  <ArrowRight
                    size={14}
                    className="ml-2.5 group-hover:translate-x-1 transition-transform"
                  />
                </a>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center border border-charcoal/15 text-charcoal px-9 py-[15px] text-[0.78rem] tracking-[0.14em] uppercase hover:border-charcoal/35 hover:bg-sand-light/40 transition-all duration-300"
                >
                  Explore Services
                </Link>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.65 }}
                className="text-[0.68rem] text-taupe-dark mt-4 tracking-wide"
              >
                Online booking takes less than 30 seconds
              </motion.p>

              {/* Micro-credential */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="mt-9 pt-6 border-t border-sand/60"
              >
                <p className="text-[0.8rem] text-charcoal font-medium">
                  Dr. Jeffrey Scales, MD
                </p>
                <p className="text-[0.63rem] text-taupe-dark tracking-[0.08em] mt-1">
                  Board-Certified Dermatologist &middot; Medical Director
                </p>
                <p className="text-[0.6rem] text-taupe tracking-wide mt-0.5">
                  University of Pennsylvania &middot; Wake Forest University
                </p>
              </motion.div>
            </div>
          </div>

          {/* Right — Hero Image Carousel */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.15 }}
            className="order-1 lg:order-2 relative h-[56vh] lg:h-auto overflow-hidden bg-charcoal/5"
          >
            {heroImages.map((img, i) => (
              <motion.div
                key={img.src}
                initial={false}
                animate={{
                  opacity: i === currentHero ? 1 : 0,
                  scale: i === currentHero ? 1 : 1.03,
                }}
                transition={{ duration: 2, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  priority={i === 0}
                  quality={100}
                />
              </motion.div>
            ))}

            {/* Cinematic gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/15 via-transparent to-charcoal/5 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-r from-ivory/10 via-transparent to-transparent pointer-events-none lg:block hidden" />

            {/* Slide Indicators */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
              {heroImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentHero(i)}
                  className={`rounded-full transition-all duration-600 ${
                    i === currentHero
                      ? "bg-warm-white w-7 h-[2px]"
                      : "bg-warm-white/30 w-3.5 h-[2px] hover:bg-warm-white/60"
                  }`}
                  aria-label={`View image ${i + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========== TRUST BAR ========== */}
      <section className="bg-charcoal py-5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-center gap-5 md:gap-10 text-warm-white/90">
            {[
              { icon: Shield, label: "Dermatology-Backed" },
              { icon: Award, label: "Board-Certified Dermatologist" },
              { icon: Heart, label: "All Skin Types" },
              { icon: Sparkles, label: "Medical-Grade Technology" },
            ].map((item, i) => (
              <div key={item.label} className="flex items-center gap-2.5">
                {i > 0 && <div className="hidden md:block w-px h-3.5 bg-warm-white/15 mr-5" />}
                <item.icon size={14} className="text-champagne" strokeWidth={1.5} />
                <span className="text-[0.68rem] tracking-[0.2em] uppercase font-light">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== SOCIAL PROOF STATS ========== */}
      <section className="py-14 md:py-16 bg-warm-white border-y border-sand/40">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
            {[
              { value: "1,000+", label: "Patients Treated" },
              { value: "5.0", label: "Google Rating" },
              { value: "4", label: "Licensed Specialists" },
              { value: "Durham, NC", label: "Serving the Triangle" },
            ].map((stat) => (
              <FadeIn key={stat.label} direction="up">
                <div>
                  <p className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-light text-charcoal">
                    {stat.value}
                  </p>
                  <p className="text-xs text-charcoal-muted tracking-[0.15em] uppercase mt-2">
                    {stat.label}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ========== FEATURED TREATMENTS ========== */}
      <section className="py-24 md:py-32 bg-ivory">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            eyebrow="Signature Treatments"
            title="What We Do Best"
            description="Selected by dermatologists. Performed by licensed specialists. Every protocol is medical-grade, not cosmetic guesswork."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {featuredTreatments.map((treatment, i) => (
              <FadeIn key={treatment.title} delay={i * 0.08}>
                <Link href={treatment.href} className="block group bg-warm-white border border-sand/40 hover:border-champagne/30 transition-all duration-600 hover:shadow-[0_20px_60px_rgba(212,175,55,0.08)]">
                  {treatment.photo ? (
                    <div className="relative aspect-[3/2] overflow-hidden bg-sand-light">
                      <Image
                        src={treatment.photo}
                        alt={treatment.image}
                        fill
                        className="object-cover object-center group-hover:scale-[1.04] transition-transform duration-[800ms] ease-out"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        quality={100}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  ) : (
                    <ImagePlaceholder
                      label={treatment.image}
                      aspectRatio="aspect-[3/2]"
                    />
                  )}
                  <div className="p-6 md:p-7">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h3 className="font-[family-name:var(--font-heading)] text-xl md:text-[1.35rem] font-medium text-charcoal leading-snug">
                        {treatment.title}
                      </h3>
                      <span className="text-xs font-medium text-champagne-dark whitespace-nowrap mt-1">
                        {treatment.price}
                      </span>
                    </div>
                    <p className="text-[0.7rem] text-taupe-dark tracking-[0.12em] uppercase mb-3">
                      {treatment.subtitle}
                    </p>
                    <p className="text-sm text-charcoal-muted leading-relaxed mb-4">
                      {treatment.description}
                    </p>
                    <span className="inline-flex items-center text-xs text-champagne-dark tracking-[0.1em] uppercase group-hover:text-charcoal transition-colors duration-300">
                      View Details & Book
                      <ArrowRight size={12} className="ml-1.5 group-hover:translate-x-1.5 transition-transform duration-300" />
                    </span>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.3}>
            <div className="text-center mt-14">
              <Link
                href="/services"
                className="inline-flex items-center text-sm text-charcoal tracking-[0.12em] uppercase border-b border-charcoal/20 pb-1.5 hover:border-champagne-dark hover:text-champagne-dark transition-colors duration-300 group"
              >
                View All Treatments & Pricing
                <ArrowRight
                  size={14}
                  className="ml-2 group-hover:translate-x-1.5 transition-transform"
                />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ========== REAL RESULTS ========== */}
      <section className="py-24 md:py-32 bg-warm-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            eyebrow="Proven Results"
            title="See What's Possible"
            description="Unretouched before-and-after photos from real patients treated right here in Durham. Every result backed by a clinical protocol."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                src: "/images/results/before-after-1.png",
                alt: "Acne treatment results, before and after",
                label: "Acne & Texture Improvement",
                detail: "Medical-grade peel series + SkinPen",
                provider: "Cecilia S., RN",
              },
              {
                src: "/images/results/before-after-2.png",
                alt: "Pigmentation correction results, before and after",
                label: "Pigmentation Correction",
                detail: "PicoSure Pro laser, 3 sessions",
                provider: "Cecilia S., RN",
              },
              {
                src: "/images/results/before-after-3.png",
                alt: "Acne clearance results, before and after",
                label: "Acne Clearance & Skin Clarity",
                detail: "Clinical facial protocol + home regimen",
                provider: "Aaron P., LE",
              },
              {
                src: "/images/results/before-after-4.png",
                alt: "Scalp and hair treatment results, before and after",
                label: "Scalp & Hair Restoration",
                detail: "PRP hair treatment, 4 sessions",
                provider: "Anay C., PA-C",
              },
              {
                src: "/images/results/before-after-5.png",
                alt: "Tattoo removal results, before and after",
                label: "PicoSure Pro Tattoo Removal",
                detail: "Picosecond laser, progressive fading",
                provider: "Cecilia S., RN",
              },
              {
                src: "/images/results/before-after-6.png",
                alt: "Forehead acne treatment results, before and after",
                label: "Acne & Skin Smoothing",
                detail: "Customized facial + medical extractions",
                provider: "Aaron P., LE",
              },
              {
                src: "/images/results/before-after-7.png",
                alt: "Scalp lesion removal results, before and after",
                label: "DPN Mole Removal",
                detail: "Precision removal under derm oversight",
                provider: "Dr. Scales, MD",
              },
              {
                src: "/images/results/before-after-8.png",
                alt: "Dermal filler results, before and after",
                label: "Dermal Filler Enhancement",
                detail: "HA filler, lip and cheek contouring",
                provider: "Anay C., PA-C",
              },
              {
                src: "/images/results/before-after-9.png",
                alt: "Pore refinement and skin texture results, before and after",
                label: "Pore Refinement & Skin Texture",
                detail: "Morpheus8, single session",
                provider: "Cecilia S., RN",
              },
            ].map((result, i) => (
              <FadeIn key={result.src} delay={i * 0.06}>
                <div className="group">
                  <div className="relative aspect-square overflow-hidden bg-sand-light">
                    <Image
                      src={result.src}
                      alt={result.alt}
                      fill
                      className="object-cover group-hover:scale-[1.03] transition-transform duration-700"
                      sizes="(max-width: 640px) 50vw, 25vw"
                      quality={100}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <p className="text-sm text-charcoal mt-3 font-medium">
                    {result.label}
                  </p>
                  <p className="text-xs text-charcoal-muted mt-1">
                    {result.detail}
                  </p>
                  <p className="text-[0.65rem] text-champagne-dark mt-0.5">
                    Provider: {result.provider}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

          <p className="text-xs text-taupe-dark text-center mt-8">
            Actual patient results. Individual outcomes may vary.
          </p>

          <FadeIn delay={0.3}>
            <div className="text-center mt-8">
              <a
                href="https://www.instagram.com/clearskinwellnessa/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-charcoal tracking-[0.12em] uppercase border-b border-charcoal/20 pb-1.5 hover:border-champagne-dark hover:text-champagne-dark transition-colors duration-300 group"
              >
                See More Results on Instagram
                <ArrowRight
                  size={14}
                  className="ml-2 group-hover:translate-x-1.5 transition-transform"
                />
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ========== MEMBERSHIP PREVIEW ========== */}
      <section className="py-24 md:py-32 bg-ivory">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            eyebrow="Membership"
            title="Better Skin Starts with Consistency"
            description="Four tiers. Monthly treatments. Member-only pricing on every service we offer."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                name: "Bronze",
                price: "$85",
                highlight: "1 facial or peel per month",
                accent: "border-taupe",
              },
              {
                name: "Silver",
                price: "$120",
                highlight: "60-min facials + laser discounts",
                accent: "border-taupe-light",
              },
              {
                name: "Gold",
                price: "$175",
                highlight: "5 free Botox units/mo + 15% off all services",
                popular: true,
                accent: "border-champagne",
              },
              {
                name: "Platinum",
                price: "$275",
                highlight: "Any facial + 20% off everything",
                accent: "border-charcoal",
              },
            ].map((tier, i) => (
              <FadeIn key={tier.name} delay={i * 0.08}>
                <Link
                  href="/membership"
                  className={`relative block bg-warm-white border-t-[3px] ${tier.accent} border-x border-b border-sand/40 p-6 text-center hover:shadow-[0_16px_48px_rgba(0,0,0,0.07)] transition-all duration-500 ${tier.popular ? "ring-1 ring-champagne/30" : ""}`}
                >
                  {tier.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="inline-flex items-center gap-1 bg-gradient-to-r from-champagne-dark to-champagne text-warm-white text-[0.6rem] uppercase tracking-[0.2em] font-semibold px-4 py-1">
                        <Star size={8} fill="currentColor" />
                        Most Popular
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
            <div className="text-center mt-12">
              <Link
                href="/membership"
                className="inline-flex items-center bg-charcoal text-warm-white px-10 py-4 text-sm tracking-[0.15em] uppercase font-medium hover:bg-charcoal-light transition-all duration-300 group"
              >
                Compare All Plans
                <ArrowRight
                  size={15}
                  className="ml-3 group-hover:translate-x-1 transition-transform"
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
            title="Watch. Then Book."
            description="Real treatments. Real sessions. See exactly what happens when you sit in our chair."
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
                  <div className="relative aspect-[9/16] max-h-[70vh] sm:max-h-none overflow-hidden bg-charcoal rounded-sm mx-auto max-w-[280px] sm:max-w-none">
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
                className="inline-flex items-center text-sm text-charcoal tracking-[0.1em] uppercase border-b border-charcoal/20 pb-1.5 hover:border-champagne-dark hover:text-champagne-dark transition-colors duration-300 group"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-champagne-dark">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
                Instagram
                <ArrowRight
                  size={12}
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                />
              </a>
              <a
                href="https://www.tiktok.com/@clearskin.wellness"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-charcoal tracking-[0.1em] uppercase border-b border-charcoal/20 pb-1.5 hover:border-champagne-dark hover:text-champagne-dark transition-colors duration-300 group"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="mr-2 text-champagne-dark">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.71a8.2 8.2 0 0 0 4.76 1.52v-3.4a4.85 4.85 0 0 1-1-.14z" />
                </svg>
                TikTok
                <ArrowRight
                  size={12}
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                />
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ========== WHY CHOOSE US ========== */}
      <section className="py-24 md:py-32 bg-ivory">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            eyebrow="The Difference"
            title="The Standard Is Higher Here"
            description="Board-certified dermatology oversight. Medical-grade protocols. Outcomes that are both beautiful and clinically sound."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {whyChooseUs.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.1}>
                <div className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-sand-light to-sand/50 border border-sand/60 flex items-center justify-center group-hover:border-champagne/30 transition-colors duration-500">
                    <item.icon
                      size={24}
                      className="text-champagne-dark"
                      strokeWidth={1.3}
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
            eyebrow="5-Star Reviews"
            title="What Our Patients Say"
            description="Unedited Google reviews from real patients. We didn't write these. They did."
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
                  "I received my first lymphatic drainage facial and it was <strong>an amazing experience</strong>. The office is bright and clean with beautiful artwork on the walls. Aaron was wonderful, <strong>very knowledgeable about the products</strong> and explained every step.",
                service: "Lymphatic Drainage Facial",
              },
              {
                name: "Kyarra R.",
                review:
                  "I absolutely love this place! Reena is <strong>incredibly knowledgeable about skin</strong> and takes the time to explain everything in detail. It's so refreshing, and honestly rare, to find a skincare center that <strong>truly understands and caters to the unique needs of diverse skin types</strong>.",
                service: "Skincare Consultation",
              },
              {
                name: "Brooklynn C.",
                review:
                  "I have been getting laser hair removal from Cecilia for about 5 months and I've had <strong>a great experience</strong>. I was hesitant at first, but <strong>Cecilia's care, along with Dr. Scales' guidance, has made such a positive difference</strong>.",
                service: "Laser Hair Removal",
              },
              {
                name: "Allison M.",
                review:
                  "I've been a client for about <strong>two years</strong>, undergoing laser hair removal and facial cleansing treatments. Cecilia is <strong>incredibly patient and caring</strong>, making sure I feel comfortable and at ease throughout my visits. I highly recommend her services!",
                service: "Laser Hair Removal & Facials",
              },
              {
                name: "Giavanni P.",
                review:
                  "I received an hour long facial from Aaron and <strong>it was amazing!</strong> I learned so much and left feeling <strong>super moisturized and relaxed!</strong> Very professional staff and a lovely, welcoming environment.",
                service: "60-Minute Facial",
              },
              {
                name: "Alexandra K.",
                review:
                  "Cecilia and the staff were <strong>warm, welcoming, and knowledgeable</strong>. I enjoyed every minute of the facial. The place is clean, beautiful, and peaceful. <strong>They use high-quality products.</strong> Cecilia was gentle with my sensitive skin and used tools based on my needs.",
                service: "50-Minute Facial",
              },
              {
                name: "Katie W.",
                review:
                  "I'm halfway through my first-ever laser hair removal treatments with Cecilia and <strong>it has been an excellent experience!</strong> The space is so nice and clean and you can tell she is <strong>extremely knowledgeable about skin care</strong> and each laser they offer.",
                service: "Laser Hair Removal",
              },
              {
                name: "Demarcus N.",
                review:
                  "My wife treated me to my first experience at this business, and <strong>I've been back several times</strong>. The Ultimate Double Cleanse facial was amazing. As a male, <strong>I felt completely comfortable</strong> during the whole process!",
                service: "Ultimate Double Cleanse Facial",
              },
              {
                name: "Heroina S.",
                review:
                  "I am <strong>very happy with the results</strong> of my face. I love coming to this place and relaxing. <strong>Cecilia has a phenomenal hand for skin care. I give her a 10/10.</strong> When you go, ask for Cecilia I. Salazar, Nurse Injector and Laser Specialist.",
                service: "Facial Treatment",
              },
            ].map((testimonial, i) => (
              <FadeIn key={testimonial.name} delay={i * 0.06}>
                <div className="bg-warm-white border border-sand/60 p-6 md:p-8 h-full flex flex-col hover:shadow-[0_12px_40px_rgba(212,175,55,0.06)] hover:border-champagne/20 transition-all duration-500">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, j) => (
                        <Star
                          key={j}
                          size={14}
                          className="fill-champagne text-champagne"
                        />
                      ))}
                    </div>
                    <span className="font-[family-name:var(--font-heading)] text-3xl text-champagne/20 leading-none select-none">&ldquo;</span>
                  </div>
                  <p
                    className="text-sm text-charcoal-muted leading-relaxed flex-1 mb-5 [&_strong]:text-charcoal [&_strong]:font-medium"
                    dangerouslySetInnerHTML={{ __html: `&ldquo;${testimonial.review}&rdquo;` }}
                  />
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
                className="inline-flex items-center text-sm text-charcoal tracking-[0.12em] uppercase border-b border-charcoal/20 pb-1.5 hover:border-champagne-dark hover:text-champagne-dark transition-colors duration-300 group"
              >
                Read All Reviews on Google
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
      <section className="py-24 md:py-32 bg-ivory">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeIn direction="left">
              <div className="relative">
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
                {/* Credential badge overlay */}
                <div className="absolute -bottom-6 -right-4 lg:-right-8 bg-charcoal text-warm-white px-6 py-4 shadow-xl">
                  <p className="text-[0.65rem] uppercase tracking-[0.2em] text-champagne mb-1">Medical Director</p>
                  <p className="text-sm font-medium">Dr. Jeffrey Scales, MD</p>
                  <p className="text-xs text-taupe-light">Board-Certified Dermatologist</p>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="right">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="premium-rule" />
                  <span className="text-xs uppercase tracking-[0.25em] text-champagne-dark font-medium">
                    Our Foundation
                  </span>
                </div>
                <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-light text-charcoal mb-6 leading-tight">
                  Where Cosmetic Artistry Meets Medical Authority
                </h2>
                <p className="text-charcoal-muted leading-[1.8] mb-5">
                  Most med spas hire aestheticians and call it clinical.
                  We&apos;re the cosmetic arm of NC Center for Dermatology,
                  led by Dr. Jeffrey Scales, a board-certified dermatologist
                  trained at Penn Med and Wake Forest.
                </p>
                <p className="text-charcoal-muted leading-[1.8] mb-8">
                  That means your injector, your laser specialist, and your
                  esthetician all operate under dermatology-level oversight.
                  Same building. Same standard. Different experience entirely.
                </p>

                <div className="grid grid-cols-2 gap-x-6 gap-y-4 mb-8">
                  {[
                    "Board-certified oversight",
                    "Medical-grade protocols",
                    "Skin health first",
                    "Licensed specialists",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2.5">
                      <CheckCircle2
                        size={16}
                        className="text-champagne-dark mt-0.5 shrink-0"
                        strokeWidth={1.5}
                      />
                      <span className="text-sm text-charcoal">{item}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/staff"
                  className="inline-flex items-center text-sm text-charcoal tracking-[0.12em] uppercase border-b border-charcoal/20 pb-1.5 hover:border-champagne-dark hover:text-champagne-dark transition-colors duration-300 group"
                >
                  Meet Our Team
                  <ArrowRight
                    size={14}
                    className="ml-2 group-hover:translate-x-1.5 transition-transform"
                  />
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ========== PROVIDER PREVIEW ========== */}
      <section className="py-24 md:py-32 bg-warm-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            eyebrow="Meet the Team"
            title="The People Behind Your Results"
            description="Every provider is licensed, dermatology-trained, and hand-selected. You're not just booking a service. You're choosing who treats you."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            {providerPreview.map((provider, i) => (
              <FadeIn key={provider.name} delay={i * 0.1}>
                <Link href="/staff" className="block group">
                  <div className="aspect-[3/4] relative w-full overflow-hidden bg-sand-light mb-5 group-hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] transition-all duration-500">
                    <Image
                      src={provider.image}
                      alt={provider.name}
                      fill
                      className="object-cover object-top group-hover:scale-[1.03] transition-transform duration-700"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      quality={100}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <h3 className="font-[family-name:var(--font-heading)] text-lg font-medium text-charcoal">
                    {provider.name}
                  </h3>
                  <p className="text-xs text-champagne-dark tracking-wide uppercase mt-1">{provider.title}</p>
                  <p className="text-[0.8rem] text-charcoal-muted mt-2 leading-relaxed">
                    {provider.personality}
                  </p>
                </Link>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.3}>
            <div className="text-center mt-14">
              <Link
                href="/staff"
                className="inline-flex items-center text-sm text-charcoal tracking-[0.12em] uppercase border-b border-charcoal/20 pb-1.5 hover:border-champagne-dark hover:text-champagne-dark transition-colors duration-300 group"
              >
                Meet the Full Team
                <ArrowRight
                  size={14}
                  className="ml-2 group-hover:translate-x-1.5 transition-transform"
                />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>



      {/* ========== YOUR EXPERIENCE ========== */}
      <section className="py-24 md:py-32 bg-charcoal text-warm-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeIn>
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="premium-rule" />
              <span className="text-xs uppercase tracking-[0.3em] text-champagne font-medium">
                Your Experience
              </span>
              <div className="premium-rule" />
            </div>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl lg:text-5xl font-light mt-3 mb-6 leading-tight">
              How It Works
            </h2>
            <p className="text-taupe-light leading-[1.8] mb-14 max-w-2xl mx-auto">
              No pressure. No upselling. A clear path from assessment to outcome, designed around you. Patients across Durham, Apex, Cary, and the entire Triangle trust this process.
            </p>
          </FadeIn>

          <div className="grid sm:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                step: "01",
                title: "Consult",
                desc: "A thorough skin assessment and honest conversation about your goals, options, and what to expect.",
              },
              {
                step: "02",
                title: "Treat",
                desc: "Your treatment is performed by a licensed specialist with medical-grade protocols, in a calm private setting.",
              },
              {
                step: "03",
                title: "Thrive",
                desc: "Clear aftercare guidance, a follow-up plan, and ongoing support between visits.",
              },
            ].map((item, i) => (
              <FadeIn key={item.step} delay={i * 0.12}>
                <div>
                  <span className="text-3xl font-[family-name:var(--font-heading)] text-champagne/40 font-light">
                    {item.step}
                  </span>
                  <h3 className="font-[family-name:var(--font-heading)] text-xl font-medium text-warm-white mt-3 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-taupe-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}

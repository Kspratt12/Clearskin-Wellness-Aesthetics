"use client";

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
    image: "Facial treatment — neuromodulator injection",
  },
  {
    title: "Dermal Fillers",
    subtitle: "Volume Restoration & Contouring",
    description:
      "Restore youthful volume and enhance facial contours with premium hyaluronic acid fillers, tailored to your anatomy.",
    image: "Dermal filler treatment close-up",
  },
  {
    title: "Morpheus8",
    subtitle: "Microneedling + Radiofrequency",
    description:
      "Tighten, firm, and rejuvenate skin with this advanced combination of microneedling and radiofrequency energy.",
    image: "Morpheus8 device treatment on face",
  },
  {
    title: "PicoSure Pro",
    subtitle: "Pigment Correction & Skin Revitalization",
    description:
      "Address pigmentation, melasma, acne scars, and uneven tone with next-generation picosecond laser technology.",
    image: "Laser skin treatment session",
  },
  {
    title: "Medical Microneedling",
    subtitle: "SkinPen Collagen Induction",
    description:
      "Stimulate your skin's natural collagen production to improve texture, scarring, and fine lines with medical-grade precision.",
    image: "SkinPen microneedling close-up",
  },
  {
    title: "Laser Hair Removal",
    subtitle: "Long-Term Hair Reduction",
    description:
      "Achieve smooth, lasting results with targeted laser technology for face, body, and all skin types.",
    image: "Laser hair removal treatment",
  },
];

const whyChooseUs = [
  {
    icon: Shield,
    title: "Dermatology-Backed Care",
    description:
      "Every treatment is supported by the medical foundation of NC Center for Dermatology — real expertise, not just aesthetics.",
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
    title: "MD — Medical Director",
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

export default function HomePage() {
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
                destination for cosmetic treatments and skin wellness —
                thoughtfully designed for every skin type, every concern, every
                goal.
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

          {/* Right — Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <ImagePlaceholder
              label="Premium hero — serene treatment room or confident patient portrait"
              aspectRatio="aspect-[4/5] lg:aspect-auto"
              className="h-[50vh] lg:h-full"
            />
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
                <div className="group bg-warm-white border border-sand/60 hover:border-champagne/30 transition-all duration-500 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
                  <ImagePlaceholder
                    label={treatment.image}
                    aspectRatio="aspect-[3/2]"
                  />
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
                </div>
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

      {/* ========== WHY CHOOSE US ========== */}
      <section className="py-20 md:py-28 bg-warm-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            eyebrow="Why Clearskin & Wellness"
            title="More Than a Med Spa"
            description="We bridge the gap between clinical dermatology and cosmetic aesthetics — giving you access to treatments that are both beautiful and medically sound."
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

      {/* ========== DERMATOLOGY-BACKED EXPERTISE ========== */}
      <section className="py-20 md:py-28 bg-ivory">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeIn direction="left">
              <div className="aspect-[4/3] relative w-full overflow-hidden bg-sand-light">
                <Image
                  src="/images/clinic/office.png"
                  alt="North Carolina Center for Dermatology team"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
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
                  just know aesthetics — they understand dermatology at its core.
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
                  Plans start at just $85/month — with complimentary services
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
              <ImagePlaceholder
                label="Relaxing facial treatment or glowing skin close-up"
                aspectRatio="aspect-[4/3]"
                className="w-full"
              />
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

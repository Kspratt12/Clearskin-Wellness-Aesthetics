"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock, Info } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { FadeIn } from "@/components/FadeIn";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";

interface Service {
  name: string;
  tagline: string;
  description: string;
  duration?: string;
  image: string;
  photo?: string;
}

const injectables: Service[] = [
  {
    name: "Neuromodulators",
    tagline: "Botox · Dysport · Xeomin · Daxxify",
    description:
      "Temporarily smooth fine lines and dynamic wrinkles, especially across the forehead, between the brows, and around the eyes. Results appear within two weeks and typically last several months. Repeat treatments are recommended to maintain your refreshed look.",
    image: "Neuromodulator injection treatment",
    photo: "/images/services/neuromodulators.png",
  },
  {
    name: "Dermal Fillers",
    tagline: "Volume Restoration & Facial Contouring",
    description:
      "Restore lost volume, smooth deep creases, and refine facial contours using premium hyaluronic acid fillers. Results are natural-looking and can last from several months to over a year. Ideal for lips, cheeks, jawline, and under-eye hollows.",
    image: "Dermal filler treatment",
    photo: "/images/services/dermal-fillers.png",
  },
];

const advancedTreatments: Service[] = [
  {
    name: "Morpheus8",
    tagline: "Microneedling + Radiofrequency Skin Tightening",
    description:
      "Combine microneedling with radiofrequency energy to stimulate deep collagen remodeling. Morpheus8 tightens skin, improves texture, and refines contours on both face and body. Multiple sessions may be recommended for optimal results.",
    image: "Morpheus8 treatment session",
  },
  {
    name: "PicoSure Pro",
    tagline: "Pigment Correction & Skin Revitalization",
    description:
      "Next-generation picosecond laser technology targets melasma, hyperpigmentation, sunspots, acne scars, and uneven tone. Delivers energy so rapidly that pigment shatters without burning surrounding tissue, stimulating your skin's natural renewal for brighter, younger-looking results.",
    image: "PicoSure Pro laser treatment",
    photo: "/images/services/picosure-pro.png",
  },
  {
    name: "PicoSure Pro for Tattoo Removal",
    tagline: "Advanced Laser Tattoo Removal",
    description:
      "Precisely targeted laser energy breaks down tattoo ink into tiny particles that your body naturally eliminates. The number of sessions depends on ink type, tattoo size, placement, and individual factors.",
    image: "Laser tattoo removal session",
  },
  {
    name: "Laser Hair Removal",
    tagline: "Long-Term Hair Reduction",
    description:
      "Concentrated light energy targets and reduces unwanted hair on the face, bikini area, underarms, legs, and back. Multiple sessions are typically needed for lasting smoothness across all skin types.",
    image: "Laser hair removal treatment",
    photo: "/images/services/laser-hair-removal.png",
  },
  {
    name: "Flesh Mole Removal",
    tagline: "Cosmetic Mole Removal",
    description:
      "Safe and precise removal of small flesh-colored, brown, or black moles on the face, neck, back, and chest for a smoother, more even complexion.",
    image: "Cosmetic mole removal procedure",
    photo: "/images/services/flesh-mole-removal.png",
  },
];

const skinRejuvenation: Service[] = [
  {
    name: "Medical Grade Microneedling with SkinPen",
    tagline: "Collagen Induction Therapy",
    description:
      "Medical-grade microneedling creates controlled micro-injuries that stimulate your skin's natural collagen and elastin production. Effective for fine lines, acne scars, wrinkles, and uneven texture. Customizable for face, neck, and décolletage.",
    image: "SkinPen microneedling treatment",
    photo: "/images/services/medical-microneedling.png",
  },
  {
    name: "PRP Hair Treatments",
    tagline: "Non-Surgical Hair Restoration",
    description:
      "A regenerative treatment using platelet-rich plasma from your own blood to stimulate hair follicles and support natural hair growth. Multiple sessions and long-term maintenance are recommended for best results.",
    image: "PRP hair treatment session",
  },
  {
    name: "Chemical Peels for Face",
    tagline: "Targeted Skin Resurfacing",
    description:
      "Professionally selected peels address hyperpigmentation, age spots, sun damage, melasma, fine lines, acne scars, and excess oil. Each peel is chosen based on your specific skin type and concerns.",
    duration: "30 minutes",
    image: "Chemical peel application",
  },
];

const facials: Service[] = [
  {
    name: "Express Facial",
    tagline: "Quick Reset for Healthy Skin",
    description:
      "A focused 30-minute treatment ideal for teens, acne-prone skin, or regular skin maintenance. Includes skin analysis, steam cleansing, exfoliation, extractions, mask, hydrating serum, eye lift serum, moisturizer, and sunscreen.",
    duration: "30 minutes",
    image: "Express facial treatment",
  },
  {
    name: "Skin Therapy Facial",
    tagline: "Deep Treatment & Rejuvenation",
    description:
      "Our signature facial designed for deep extractions, anti-aging support, and lasting hydration. Includes skin analysis, steam cleansing, exfoliation, extractions, massage, hydrating mask, Vitamin C serum, moisturizer, eye lift serum, and sunscreen.",
    duration: "50 minutes",
    image: "Skin therapy facial session",
  },
  {
    name: "Back Facial Treatment",
    tagline: "Clarity & Glow for the Back",
    description:
      "Target back acne, congestion, and uneven texture with a dedicated cleansing, exfoliation, extraction, and hydration treatment, finished with massage, mask, body cream, and sunscreen.",
    duration: "45 minutes",
    image: "Back facial treatment",
  },
  {
    name: "Microdermabrasion Treatment",
    tagline: "Surface-Level Skin Renewal",
    description:
      "A refreshing treatment that retexturizes and cleanses the superficial skin layer. Helps with fine lines, acne scars, enlarged pores, excess oil, blackheads, whiteheads, and age spots.",
    duration: "30 minutes",
    image: "Microdermabrasion treatment",
  },
  {
    name: "Dermaplaning Facial Treatment",
    tagline: "Smooth, Radiant Skin",
    description:
      "A gentle, noninvasive treatment that removes dead skin cells and fine facial hair using a precision blade. Improves smoothness, enhances product absorption, and reveals a brighter complexion. Safe for most skin types.",
    duration: "60 minutes",
    image: "Dermaplaning facial treatment",
  },
  {
    name: "Microdermabrasion & Skin Facial Treatment",
    tagline: "Combined Deep Cleanse & Hydration",
    description:
      "The best of both worlds. Medical-grade microdermabrasion paired with a relaxing, hydrating facial for a deeper cleanse and visible glow.",
    duration: "60 minutes",
    image: "Combined microdermabrasion and facial",
  },
];

const addOns = [
  { name: "Paraffin Wax Hands", description: "Deeply moisturizing paraffin wax treatment for the hands." },
  { name: "Paraffin Wax Feet", description: "Deeply moisturizing paraffin wax treatment for the feet." },
];

function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="group bg-warm-white border border-sand/60 hover:border-champagne/30 transition-all duration-500 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
      {service.photo ? (
        <div className="relative aspect-[16/9] overflow-hidden bg-sand-light">
          <Image
            src={service.photo}
            alt={service.image}
            fill
            className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
            sizes="(max-width: 768px) 100vw, 50vw"
            quality={100}
          />
        </div>
      ) : (
        <ImagePlaceholder label={service.image} aspectRatio="aspect-[16/9]" />
      )}
      <div className="p-6 md:p-8">
        <div className="flex items-start justify-between gap-4 mb-2">
          <h3 className="font-[family-name:var(--font-heading)] text-xl md:text-2xl font-medium text-charcoal">
            {service.name}
          </h3>
          {service.duration && (
            <span className="flex items-center gap-1 text-xs text-taupe-dark whitespace-nowrap mt-1">
              <Clock size={12} />
              {service.duration}
            </span>
          )}
        </div>
        <p className="text-xs text-champagne-dark tracking-wide mb-4">
          {service.tagline}
        </p>
        <p className="text-sm text-charcoal-muted leading-relaxed">
          {service.description}
        </p>
      </div>
    </div>
  );
}

function ServiceCategory({
  id,
  eyebrow,
  title,
  description,
  services,
  columns = 2,
}: {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  services: Service[];
  columns?: 2 | 3;
}) {
  return (
    <section id={id} className="py-16 md:py-20">
      <SectionHeading eyebrow={eyebrow} title={title} description={description} />
      <div className={`grid md:grid-cols-${columns} gap-6`}>
        {services.map((service, i) => (
          <FadeIn key={service.name} delay={i * 0.08}>
            <ServiceCard service={service} />
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-warm-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <span className="text-xs uppercase tracking-[0.3em] text-champagne-dark font-medium">
                Our Services
              </span>
              <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl lg:text-6xl font-light text-charcoal mt-4 mb-6 leading-[1.1]">
                Treatments Tailored to
                <br />
                <span className="italic">Your Skin</span>
              </h1>
              <p className="text-charcoal-muted leading-relaxed max-w-xl mx-auto mb-8">
                From expert injectables and advanced laser technology to
                restorative facials and skin rejuvenation, every treatment is
                delivered with clinical precision and personalized to your
                unique goals.
              </p>
            </FadeIn>

            {/* Consultation Disclaimer */}
            <FadeIn delay={0.2}>
              <div className="inline-flex items-start gap-3 bg-sand-light/80 border border-sand px-6 py-4 text-left">
                <Info size={18} className="text-champagne-dark mt-0.5 shrink-0" />
                <p className="text-sm text-charcoal-muted">
                  All medical cosmetic procedures require a consultation prior
                  to any services. This ensures your treatment plan is safe,
                  appropriate, and aligned with your skin goals.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Treatment Room Banner */}
      <section className="relative">
        <div className="relative aspect-[21/7] overflow-hidden bg-sand-light">
          <Image
            src="/images/clinic/treatment-hero.png"
            alt="CWA treatment room with Morpheus8 and Triton technology"
            fill
            className="object-cover object-center"
            sizes="100vw"
            quality={100}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/40 to-transparent" />
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-6 w-full">
              <p className="text-warm-white text-sm md:text-base font-medium max-w-xs">
                Advanced technology. Expert hands. Real results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Category Quick Nav */}
      <section className="bg-ivory border-y border-sand/50 sticky top-20 z-30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-6 overflow-x-auto py-4 scrollbar-none">
            {[
              { id: "injectables", label: "Injectables" },
              { id: "advanced", label: "Laser & Advanced" },
              { id: "rejuvenation", label: "Skin Rejuvenation" },
              { id: "facials", label: "Facials" },
              { id: "addons", label: "Add-Ons" },
            ].map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="text-xs uppercase tracking-[0.15em] text-charcoal-muted hover:text-champagne-dark transition-colors whitespace-nowrap"
              >
                {cat.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <div className="max-w-7xl mx-auto px-6">
        <ServiceCategory
          id="injectables"
          eyebrow="Injectables"
          title="Expert Injectable Treatments"
          description="Precisely placed neuromodulators and fillers to smooth, restore, and enhance with natural-looking results and minimal downtime."
          services={injectables}
        />

        <div className="border-t border-sand/40" />

        <ServiceCategory
          id="advanced"
          eyebrow="Laser & Advanced"
          title="Laser & Advanced Treatments"
          description="Medical-grade laser and energy-based treatments for skin tightening, pigment correction, hair removal, and beyond."
          services={advancedTreatments}
        />

        <div className="border-t border-sand/40" />

        <ServiceCategory
          id="rejuvenation"
          eyebrow="Skin Rejuvenation"
          title="Skin Rejuvenation & Restoration"
          description="Stimulate your skin's natural healing and renewal processes with collagen-induction therapies, peels, and regenerative treatments."
          services={skinRejuvenation}
        />

        <div className="border-t border-sand/40" />

        <ServiceCategory
          id="facials"
          eyebrow="Facials"
          title="Signature Facial Treatments"
          description="From quick maintenance resets to deep-treatment sessions, our facials are customized to your skin type and delivered with care."
          services={facials}
          columns={3}
        />

        <div className="border-t border-sand/40" />

        {/* Add-ons */}
        <section id="addons" className="py-16 md:py-20">
          <SectionHeading
            eyebrow="Enhancements"
            title="Add-On Services"
            description="Complement your treatment with these luxurious add-on options."
          />
          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {addOns.map((addon, i) => (
              <FadeIn key={addon.name} delay={i * 0.1}>
                <div className="bg-warm-white border border-sand/60 p-6 text-center hover:border-champagne/30 transition-all duration-500">
                  <h3 className="font-[family-name:var(--font-heading)] text-lg font-medium text-charcoal mb-2">
                    {addon.name}
                  </h3>
                  <p className="text-sm text-charcoal-muted">
                    {addon.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>
      </div>

      {/* Bottom CTA */}
      <section className="py-20 md:py-24 bg-sand-light">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-light text-charcoal mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-charcoal-muted mb-8 max-w-xl mx-auto">
              Book a consultation to discuss the right treatments for your
              skin. Our team will create a personalized plan just for you.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://nccdermatology.myaestheticrecord.com/online-booking/book-appointment"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-charcoal text-warm-white px-8 py-3.5 text-sm tracking-wider hover:bg-charcoal-light transition-all duration-300 group"
              >
                Book Consultation
                <ArrowRight
                  size={15}
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                />
              </a>
              <Link
                href="/membership"
                className="inline-flex items-center border border-charcoal/20 text-charcoal px-8 py-3.5 text-sm tracking-wider hover:border-charcoal/40 transition-all duration-300"
              >
                View Membership Plans
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}

"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}
import { SectionHeading } from "@/components/SectionHeading";
import { FadeIn } from "@/components/FadeIn";

interface Provider {
  name: string;
  title: string;
  credential: string;
  bio: string[];
  specialties?: string[];
  instagram?: string;
  image: string;
  featured?: boolean;
}

const providers: Provider[] = [
  {
    name: "Jeffrey Scales",
    title: "MD — Medical Director",
    credential: "Board-Certified Dermatologist",
    bio: [
      "Dr. Scales leads Clearskin & Wellness Aesthetics and North Carolina Center for Dermatology with a deep commitment to both clinical excellence and patient care.",
      "He completed his academic journey at Morehouse College, earned his medical degree at The University of Pennsylvania School of Medicine, and trained through a pediatric residency at The University of Chicago and a dermatology residency at Bowman Gray School of Medicine at Wake Forest University.",
      "This breadth of medical training — spanning pediatrics, dermatology, and private practice leadership — gives him a uniquely comprehensive understanding of the skin across all ages and skin types.",
    ],
    specialties: [
      "Medical Dermatology",
      "Cosmetic Oversight",
      "Skin of Color",
      "Practice Leadership",
    ],
    instagram: "https://www.instagram.com/ncderm",
    image: "/images/team/jeffery-scales.png",
    featured: true,
  },
  {
    name: "Anay Castro",
    title: "MPAS, PA-C",
    credential: "Dermatology Physician Assistant & Aesthetic Injector",
    bio: [
      "A bilingual Dermatology Physician Assistant and Aesthetic Injector fluent in both Spanish and English, Anay is dedicated to providing comprehensive, personalized care to a diverse patient base.",
      "With a strong foundation in both Dermatology and Emergency Medicine, she brings extensive knowledge in diagnosing and treating a wide range of skin conditions — and a skilled, precise approach to cosmetic injectables.",
    ],
    specialties: [
      "Aesthetic Injectables",
      "Medical Dermatology",
      "Bilingual Care (English & Spanish)",
    ],
    instagram: "https://www.instagram.com/anaydermpa",
    image: "/images/team/anay-castro.png",
    featured: true,
  },
  {
    name: "Cecilia Salazar",
    title: "Aesthetic RN",
    credential: "17+ Years in Medical Aesthetics",
    bio: [
      "Specializing in laser technology applications in aesthetic dermatology, Cecilia brings more than 17 years of experience in medical aesthetics to Clearskin & Wellness.",
      "Her multicultural background as an American-Venezuelan bilingual professional has given her an acute understanding of skin concerns across a wide range of patients — bringing both technical precision and cultural awareness to every treatment.",
    ],
    specialties: [
      "Laser Treatments",
      "Aesthetic Dermatology",
      "Bilingual Care (English & Spanish)",
    ],
    image: "/images/team/cecilia-salazar.png",
    featured: true,
  },
  {
    name: "Aaron Pankey",
    title: "Licensed Esthetician",
    credential: "Aveda Institute Graduate",
    bio: [
      "An Aveda Institute graduate specializing in customized facial treatments designed to support long-term skin health. Aaron takes a results-driven yet holistic approach — focusing on strengthening the skin barrier, improving texture, and building sustainable treatment plans.",
      "He has a strong passion for skin education, particularly in helping clients with melanated skin and men develop a deeper understanding of their skin and how to care for it properly.",
    ],
    specialties: [
      "Customized Facials",
      "Melanated Skin Care",
      "Men's Skin Health",
      "Skin Education",
    ],
    image: "/images/team/aaron-pankey.png",
    featured: true,
  },
  {
    name: "Kendria Bartley",
    title: "Licensed Esthetician",
    credential: "Advanced Laser & Corrective Skin Specialist",
    bio: [
      "With over four years of hands-on experience, Kendria specializes in advanced laser treatments and corrective skin procedures that deliver real, measurable results.",
      "From laser hair removal and microneedling to customized medical-grade treatments, every service is performed with precision, intention, and a strong foundation in education. She is committed to providing safe, effective treatments tailored to each client's unique skin goals.",
    ],
    specialties: [
      "Laser Treatments",
      "Microneedling",
      "Corrective Skin Procedures",
      "Medical-Grade Facials",
    ],
    image: "/images/team/kendria-bartley.png",
    featured: true,
  },
];

const supportTeam = [
  {
    name: "Corsha Sibley",
    title: "Clinical Supervisor",
    image: "/images/team/corsha-sibley.png",
  },
  {
    name: "Quianna Brown",
    title: "Administrative Supervisor",
    image: "/images/team/quianna-brown.png",
  },
];

export default function StaffPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-warm-white">
        <div className="relative aspect-[21/9] md:aspect-[3/1] overflow-hidden">
          <Image
            src="/images/team/staff-group.png"
            alt="Clearskin & Wellness Aesthetics team"
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/20 to-transparent" />
          <div className="absolute inset-0 flex items-end">
            <div className="max-w-7xl mx-auto px-6 pb-10 md:pb-16 w-full">
              <FadeIn>
                <span className="text-xs uppercase tracking-[0.3em] text-champagne-light font-medium">
                  Our Team
                </span>
                <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl lg:text-6xl font-light text-warm-white mt-3 leading-[1.1]">
                  Experts Who Understand{" "}
                  <span className="italic">Skin Deeply</span>
                </h1>
              </FadeIn>
            </div>
          </div>
        </div>
        <div className="max-w-3xl mx-auto px-6 py-10 text-center">
          <p className="text-charcoal-muted leading-relaxed">
            Our team of licensed dermatology and aesthetics professionals
            brings together clinical precision, advanced training, cultural
            awareness, and a genuine commitment to patient care for every
            skin type.
          </p>
        </div>
      </section>

      {/* Providers */}
      <section className="bg-ivory py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-16 md:space-y-24">
            {providers.map((provider, i) => (
              <FadeIn key={provider.name} delay={0.1}>
                <div
                  className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-start ${
                    i % 2 === 1 ? "lg:direction-rtl" : ""
                  }`}
                >
                  {/* Photo */}
                  <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="aspect-[3/4] relative w-full max-w-md mx-auto lg:max-w-none overflow-hidden bg-sand-light">
                      <Image
                        src={provider.image}
                        alt={provider.name}
                        fill
                        className="object-cover object-top"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                  </div>

                  {/* Info */}
                  <div className={`flex flex-col justify-center ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                    <span className="text-xs text-champagne-dark uppercase tracking-[0.2em] font-medium mb-2">
                      {provider.credential}
                    </span>
                    <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-light text-charcoal mb-1">
                      {provider.name}
                    </h2>
                    <p className="text-sm text-taupe-dark mb-6">
                      {provider.title}
                    </p>

                    <div className="space-y-4 mb-6">
                      {provider.bio.map((paragraph, j) => (
                        <p
                          key={j}
                          className="text-sm text-charcoal-muted leading-relaxed"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>

                    {provider.specialties && (
                      <div className="mb-6">
                        <h4 className="text-xs uppercase tracking-[0.15em] text-charcoal font-medium mb-3">
                          Focus Areas
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {provider.specialties.map((spec) => (
                            <span
                              key={spec}
                              className="text-xs px-3 py-1.5 bg-sand-light border border-sand text-charcoal-muted"
                            >
                              {spec}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {provider.instagram && (
                      <a
                        href={provider.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-charcoal-muted hover:text-champagne-dark transition-colors"
                      >
                        <InstagramIcon size={16} />
                        <span>Follow on Instagram</span>
                      </a>
                    )}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Support Team */}
      <section className="bg-warm-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            eyebrow="Support Team"
            title="Behind Every Great Experience"
            description="Our clinical and administrative leadership ensures every visit runs smoothly, safely, and with the personal attention you deserve."
          />

          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {supportTeam.map((member, i) => (
              <FadeIn key={member.name} delay={i * 0.1}>
                <div className="text-center">
                  <div className="aspect-[3/4] relative w-full overflow-hidden bg-sand-light mb-4">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                  </div>
                  <h3 className="font-[family-name:var(--font-heading)] text-xl font-medium text-charcoal">
                    {member.name}
                  </h3>
                  <p className="text-sm text-champagne-dark">{member.title}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Dermatology Connection */}
      <section className="bg-charcoal text-warm-white py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <FadeIn>
            <span className="text-xs uppercase tracking-[0.25em] text-champagne font-medium">
              Our Medical Foundation
            </span>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-light mt-3 mb-6 leading-tight">
              Backed by Board-Certified Dermatology
            </h2>
            <p className="text-taupe-light leading-relaxed mb-8">
              Clearskin & Wellness Aesthetics operates under the medical
              leadership of North Carolina Center for Dermatology. This means
              every cosmetic and wellness treatment is informed by deep
              dermatological expertise, giving you a level of confidence and
              safety that most cosmetic practices cannot match.
            </p>
            <a
              href="https://nccdermatology.myaestheticrecord.com/online-booking/book-appointment"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-champagne text-charcoal px-8 py-3.5 text-sm tracking-wider font-medium hover:bg-champagne-light transition-all duration-300 group"
            >
              Book Consultation
              <ArrowRight
                size={15}
                className="ml-2 group-hover:translate-x-1 transition-transform"
              />
            </a>
          </FadeIn>
        </div>
      </section>
    </>
  );
}

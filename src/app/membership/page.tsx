"use client";

import Link from "next/link";
import { ArrowRight, Check, Star, Info } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { FadeIn } from "@/components/FadeIn";

interface MembershipTier {
  name: string;
  price: string;
  description: string;
  monthlyChoice: string[];
  bonus?: string;
  discounts: string[];
  popular?: boolean;
  accent: string;
}

const tiers: MembershipTier[] = [
  {
    name: "Bronze",
    price: "$85",
    description: "Essential maintenance for healthy, glowing skin.",
    monthlyChoice: [
      "Microdermabrasion",
      "Chemical Peel",
      "30-Minute Facial",
    ],
    discounts: [
      "15% off all facial cosmetic services",
      "15% off all products",
    ],
    accent: "border-taupe",
  },
  {
    name: "Silver",
    price: "$120",
    description: "Elevated care with deeper treatments and broader savings.",
    monthlyChoice: [
      "60-Minute Facial",
      "Microdermabrasion Facial",
      "Back Facial",
    ],
    discounts: [
      "15% off all facial cosmetic services",
      "15% off all products",
      "15% off laser hair removal (single treatments)",
    ],
    accent: "border-taupe-light",
  },
  {
    name: "Gold",
    price: "$175",
    description:
      "Premium tier with injectables included and significant treatment savings.",
    bonus: "Includes 5 free units of Botox, Daxxify, or Xeomin monthly",
    monthlyChoice: [
      "60-Minute Facial",
      "Signature Antioxidant Facial",
      "Back Facial",
    ],
    discounts: [
      "15% off all facial cosmetic services",
      "15% off laser hair removal (single treatments)",
      "15% off all products",
      "Botox, Xeomin & Daxxify at $10/unit member pricing",
      "15% off microneedling (SkinPen)",
      "15% off PRP hair treatments",
      "$100 off DPN mole removals",
    ],
    popular: true,
    accent: "border-champagne",
  },
  {
    name: "Platinum",
    price: "$275",
    description:
      "The ultimate membership with maximum savings on every treatment we offer.",
    bonus: "Includes 10 free units of Botox, Daxxify, or Xeomin monthly",
    monthlyChoice: ["Any facial cosmetic service"],
    discounts: [
      "20% off all facial cosmetic services",
      "20% off laser hair removal (single treatments)",
      "20% off all products",
      "Botox, Xeomin & Daxxify at $9/unit member pricing",
      "20% off microneedling (SkinPen)",
      "20% off PRP hair treatments",
      "$100 off DPN mole removals",
      "$100 off 1 syringe of filler",
      "$150 off Morpheus8 (single treatments)",
      "20% off PicoSure (single treatments)",
    ],
    accent: "border-charcoal",
  },
];

const membershipNotes = [
  "Complimentary services not redeemed during the current month roll over into following months",
  "All credits must be redeemed within one year from membership start date",
  "When membership is renewed, credits restart and do not roll over",
  "Memberships can be cancelled at any time",
  "If cancelled before the one-year term, all credits are forfeited",
  "One-time setup fee of $29.99",
  "Monthly payments are automatically charged on the 1st of every month",
];

export default function MembershipPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-warm-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <span className="text-xs uppercase tracking-[0.3em] text-champagne-dark font-medium">
                Membership Plans
              </span>
              <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl lg:text-6xl font-light text-charcoal mt-4 mb-6 leading-[1.1]">
                Invest in Your Skin,
                <br />
                <span className="italic">Every Month</span>
              </h1>
              <p className="text-charcoal-muted leading-relaxed max-w-xl mx-auto">
                Choose a membership tier that fits your skin goals and enjoy
                monthly treatments, exclusive member pricing, and ongoing savings
                on everything from facials to injectables.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="bg-ivory py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {tiers.map((tier, i) => (
              <FadeIn key={tier.name} delay={i * 0.1}>
                <div
                  className={`relative bg-warm-white border-t-[3px] ${tier.accent} border-x border-b border-sand/60 flex flex-col h-full hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-shadow duration-500`}
                >
                  {tier.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="inline-flex items-center gap-1 bg-champagne text-charcoal text-[0.65rem] uppercase tracking-[0.15em] font-medium px-4 py-1">
                        <Star size={10} />
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="p-6 md:p-8 flex-1 flex flex-col">
                    {/* Header */}
                    <div className="mb-6">
                      <h3 className="text-xs uppercase tracking-[0.2em] text-champagne-dark font-medium mb-2">
                        {tier.name}
                      </h3>
                      <div className="flex items-baseline gap-1 mb-3">
                        <span className="font-[family-name:var(--font-heading)] text-4xl font-light text-charcoal">
                          {tier.price}
                        </span>
                        <span className="text-sm text-charcoal-muted">
                          /month
                        </span>
                      </div>
                      <p className="text-sm text-charcoal-muted leading-relaxed">
                        {tier.description}
                      </p>
                    </div>

                    {/* Bonus */}
                    {tier.bonus && (
                      <div className="bg-sand-light/80 border border-sand px-4 py-3 mb-6">
                        <p className="text-xs text-charcoal font-medium">
                          {tier.bonus}
                        </p>
                      </div>
                    )}

                    {/* Monthly Choice */}
                    <div className="mb-6">
                      <h4 className="text-xs uppercase tracking-[0.12em] text-charcoal font-medium mb-3">
                        Monthly Treatment Choice
                      </h4>
                      <ul className="space-y-2">
                        {tier.monthlyChoice.map((choice) => (
                          <li
                            key={choice}
                            className="flex items-start gap-2 text-sm text-charcoal-muted"
                          >
                            <Check
                              size={14}
                              className="text-champagne-dark mt-0.5 shrink-0"
                            />
                            {choice}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Divider */}
                    <div className="border-t border-sand/60 my-2" />

                    {/* Discounts */}
                    <div className="mb-8 flex-1">
                      <h4 className="text-xs uppercase tracking-[0.12em] text-charcoal font-medium mb-3 mt-4">
                        Member Discounts
                      </h4>
                      <ul className="space-y-2">
                        {tier.discounts.map((discount) => (
                          <li
                            key={discount}
                            className="flex items-start gap-2 text-xs text-charcoal-muted leading-relaxed"
                          >
                            <Check
                              size={12}
                              className="text-champagne-dark mt-0.5 shrink-0"
                            />
                            {discount}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA */}
                    <a
                      href="https://nccdermatology.myaestheticrecord.com/online-booking/memberships"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`block text-center py-3 text-sm tracking-wider transition-all duration-300 ${
                        tier.popular
                          ? "bg-charcoal text-warm-white hover:bg-charcoal-light"
                          : "border border-charcoal/20 text-charcoal hover:border-charcoal/40 hover:bg-sand-light/30"
                      }`}
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Notes */}
      <section className="bg-warm-white py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-6">
          <FadeIn>
            <div className="bg-sand-light/60 border border-sand p-8 md:p-10">
              <div className="flex items-start gap-3 mb-6">
                <Info
                  size={20}
                  className="text-champagne-dark mt-0.5 shrink-0"
                />
                <h3 className="font-[family-name:var(--font-heading)] text-xl font-medium text-charcoal">
                  Membership Details
                </h3>
              </div>
              <ul className="space-y-3">
                {membershipNotes.map((note) => (
                  <li
                    key={note}
                    className="flex items-start gap-3 text-sm text-charcoal-muted leading-relaxed"
                  >
                    <span className="w-1 h-1 bg-champagne-dark rounded-full mt-2 shrink-0" />
                    {note}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 md:py-24 bg-charcoal text-warm-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-light mb-4">
              Questions About Membership?
            </h2>
            <p className="text-taupe-light mb-8 max-w-xl mx-auto">
              Our team is happy to help you choose the right plan for your skin
              goals. Reach out to learn more or sign up during your next visit.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center bg-champagne text-charcoal px-8 py-3.5 text-sm tracking-wider font-medium hover:bg-champagne-light transition-all duration-300 group"
              >
                Contact Us About Membership
                <ArrowRight
                  size={15}
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <a
                href="tel:+19195891307"
                className="inline-flex items-center border border-warm-white/30 text-warm-white px-8 py-3.5 text-sm tracking-wider hover:bg-warm-white/10 transition-all duration-300"
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

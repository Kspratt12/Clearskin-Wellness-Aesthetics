"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ExternalLink,
  ArrowRight,
  Send,
  CheckCircle2,
} from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { FadeIn } from "@/components/FadeIn";

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  return (
    <>
      {/* Hero */}
      <section className="bg-warm-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <span className="text-xs uppercase tracking-[0.3em] text-champagne-dark font-medium">
                Contact & Booking
              </span>
              <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl lg:text-6xl font-light text-charcoal mt-4 mb-6 leading-[1.1]">
                Start Your
                <br />
                <span className="italic">Skin Journey</span>
              </h1>
              <p className="text-charcoal-muted leading-relaxed max-w-xl mx-auto">
                Whether you&apos;re ready to book your first consultation or
                have questions about a treatment, we&apos;re here to help. Reach
                out by phone, email, or the form below. Our team will respond
                promptly.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="bg-charcoal text-warm-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeIn>
            <span className="text-xs uppercase tracking-[0.25em] text-champagne font-medium">
              Book Online
            </span>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-light mt-3 mb-4">
              Schedule Your Appointment
            </h2>
            <p className="text-taupe-light leading-relaxed max-w-xl mx-auto mb-8">
              Use our online booking system to schedule consultations,
              follow-ups, and treatments at a time that works for you.
              Returning patients can also access their records through the
              patient portal.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://nccdermatology.myaestheticrecord.com/online-booking"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-champagne text-charcoal px-8 py-3.5 text-sm tracking-wider font-medium hover:bg-champagne-light transition-all duration-300 group"
              >
                Book Your Appointment
                <ArrowRight
                  size={15}
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                />
              </a>
              <a
                href="https://nccdermatology.myaestheticrecord.com/login"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-warm-white/30 text-warm-white px-8 py-3.5 text-sm tracking-wider hover:bg-warm-white/10 transition-all duration-300"
              >
                Patient Portal
                <ExternalLink size={13} />
              </a>
            </div>
            <p className="text-xs text-taupe mt-6">
              All cosmetic procedures require a consultation prior to treatment.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="bg-ivory py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact Details */}
            <div className="lg:col-span-2">
              <FadeIn>
                <h2 className="font-[family-name:var(--font-heading)] text-2xl font-medium text-charcoal mb-8">
                  Get in Touch
                </h2>

                <div className="space-y-6 mb-10">
                  <div>
                    <h3 className="text-xs uppercase tracking-[0.15em] text-champagne-dark font-medium mb-3">
                      Aesthetics Appointments
                    </h3>
                    <a
                      href="tel:+19195891307"
                      className="flex items-center gap-3 text-charcoal hover:text-champagne-dark transition-colors mb-2"
                    >
                      <Phone size={16} className="shrink-0 text-taupe-dark" />
                      <span>(919) 589-1307</span>
                    </a>
                    <a
                      href="mailto:nccd14@gmail.com"
                      className="flex items-center gap-3 text-charcoal hover:text-champagne-dark transition-colors"
                    >
                      <Mail size={16} className="shrink-0 text-taupe-dark" />
                      <span>nccd14@gmail.com</span>
                    </a>
                  </div>

                  <div>
                    <h3 className="text-xs uppercase tracking-[0.15em] text-champagne-dark font-medium mb-3">
                      Medical Dermatology
                    </h3>
                    <a
                      href="tel:+19194849551"
                      className="flex items-center gap-3 text-charcoal hover:text-champagne-dark transition-colors"
                    >
                      <Phone size={16} className="shrink-0 text-taupe-dark" />
                      <span>(919) 484-9551</span>
                    </a>
                    <p className="text-xs text-charcoal-muted mt-1 ml-7">
                      For medical dermatology inquiries at NC Center for Dermatology
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xs uppercase tracking-[0.15em] text-champagne-dark font-medium mb-3">
                      Location
                    </h3>
                    <a
                      href="https://maps.google.com/?q=6216+Fayetteville+Rd+Suite+102+Durham+NC+27713"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-3 text-charcoal hover:text-champagne-dark transition-colors"
                    >
                      <MapPin size={16} className="shrink-0 mt-0.5 text-taupe-dark" />
                      <span>
                        6216 Fayetteville Rd
                        <br />
                        Suite #102
                        <br />
                        Durham, NC 27713
                      </span>
                    </a>
                  </div>

                  <div>
                    <h3 className="text-xs uppercase tracking-[0.15em] text-champagne-dark font-medium mb-3">
                      Hours
                    </h3>
                    <div className="flex items-start gap-3">
                      <Clock size={16} className="shrink-0 mt-0.5 text-taupe-dark" />
                      <div className="text-sm text-charcoal-muted space-y-1">
                        <p>Monday – Friday: By Appointment</p>
                        <p>Saturday – Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Dermatology Note */}
                <div className="bg-sand-light/80 border border-sand p-5">
                  <p className="text-sm text-charcoal-muted leading-relaxed">
                    <span className="font-medium text-charcoal">
                      Looking for medical dermatology?
                    </span>{" "}
                    Clearskin & Wellness Aesthetics is the cosmetic and wellness
                    arm of{" "}
                    <a
                      href="https://nccdermatology.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-champagne-dark underline underline-offset-2 hover:text-champagne transition-colors"
                    >
                      North Carolina Center for Dermatology
                    </a>
                    . For medical skin concerns, please call (919) 484-9551.
                  </p>
                </div>
              </FadeIn>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <FadeIn delay={0.15}>
                <div className="bg-warm-white border border-sand/60 p-8 md:p-10">
                  <h2 className="font-[family-name:var(--font-heading)] text-2xl font-medium text-charcoal mb-2">
                    Send Us a Message
                  </h2>
                  <p className="text-sm text-charcoal-muted mb-8">
                    Have a question or want to learn more about a specific
                    treatment? Fill out the form below and we&apos;ll get back
                    to you within one business day.
                  </p>

                  {formSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-center py-16"
                    >
                      <CheckCircle2
                        size={40}
                        className="mx-auto text-champagne-dark mb-4"
                      />
                      <h3 className="font-[family-name:var(--font-heading)] text-xl font-medium text-charcoal mb-2">
                        Message Sent
                      </h3>
                      <p className="text-sm text-charcoal-muted">
                        Thank you for reaching out. Our team will be in touch
                        within one business day.
                      </p>
                    </motion.div>
                  ) : (
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        setFormSubmitted(true);
                      }}
                      className="space-y-5"
                    >
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs uppercase tracking-[0.1em] text-charcoal font-medium mb-2">
                            First Name
                          </label>
                          <input
                            type="text"
                            required
                            className="w-full px-4 py-3 bg-ivory border border-sand/80 text-sm text-charcoal placeholder:text-taupe focus:outline-none focus:border-champagne transition-colors"
                            placeholder="Your first name"
                          />
                        </div>
                        <div>
                          <label className="block text-xs uppercase tracking-[0.1em] text-charcoal font-medium mb-2">
                            Last Name
                          </label>
                          <input
                            type="text"
                            required
                            className="w-full px-4 py-3 bg-ivory border border-sand/80 text-sm text-charcoal placeholder:text-taupe focus:outline-none focus:border-champagne transition-colors"
                            placeholder="Your last name"
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs uppercase tracking-[0.1em] text-charcoal font-medium mb-2">
                            Email
                          </label>
                          <input
                            type="email"
                            required
                            className="w-full px-4 py-3 bg-ivory border border-sand/80 text-sm text-charcoal placeholder:text-taupe focus:outline-none focus:border-champagne transition-colors"
                            placeholder="you@email.com"
                          />
                        </div>
                        <div>
                          <label className="block text-xs uppercase tracking-[0.1em] text-charcoal font-medium mb-2">
                            Phone
                          </label>
                          <input
                            type="tel"
                            className="w-full px-4 py-3 bg-ivory border border-sand/80 text-sm text-charcoal placeholder:text-taupe focus:outline-none focus:border-champagne transition-colors"
                            placeholder="(555) 555-5555"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs uppercase tracking-[0.1em] text-charcoal font-medium mb-2">
                          Area of Interest
                        </label>
                        <select
                          className="w-full px-4 py-3 bg-ivory border border-sand/80 text-sm text-charcoal focus:outline-none focus:border-champagne transition-colors appearance-none"
                          defaultValue=""
                        >
                          <option value="" disabled>
                            Select a service area
                          </option>
                          <option>Injectables (Botox, Fillers)</option>
                          <option>Laser Treatments</option>
                          <option>Morpheus8</option>
                          <option>PicoSure Pro</option>
                          <option>Facials & Skin Therapy</option>
                          <option>Microneedling</option>
                          <option>Hair Restoration (PRP)</option>
                          <option>Membership Plans</option>
                          <option>General Inquiry</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs uppercase tracking-[0.1em] text-charcoal font-medium mb-2">
                          Message
                        </label>
                        <textarea
                          rows={4}
                          required
                          className="w-full px-4 py-3 bg-ivory border border-sand/80 text-sm text-charcoal placeholder:text-taupe focus:outline-none focus:border-champagne transition-colors resize-none"
                          placeholder="Tell us about your skin goals or questions..."
                        />
                      </div>

                      <div className="flex items-start gap-3">
                        <input
                          type="checkbox"
                          id="consent"
                          required
                          className="mt-1"
                        />
                        <label
                          htmlFor="consent"
                          className="text-xs text-charcoal-muted leading-relaxed"
                        >
                          I consent to Clearskin & Wellness Aesthetics
                          contacting me regarding my inquiry. My information
                          will be handled with care and not shared with third
                          parties.
                        </label>
                      </div>

                      <button
                        type="submit"
                        className="inline-flex items-center bg-charcoal text-warm-white px-8 py-3.5 text-sm tracking-wider hover:bg-charcoal-light transition-all duration-300 group"
                      >
                        <Send size={14} className="mr-2" />
                        Send Message
                      </button>
                    </form>
                  )}
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Map Area */}
      <section className="bg-warm-white">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
          <SectionHeading
            eyebrow="Location"
            title="Visit Our Durham Office"
            description="Conveniently located on Fayetteville Road in Durham, NC. Ample parking available."
          />
          <FadeIn>
            <div className="relative">
              <div className="relative aspect-[16/7] overflow-hidden bg-sand-light">
                <Image
                  src="/images/clinic/building.png"
                  alt="Clearskin & Wellness Aesthetics building exterior"
                  fill
                  className="object-cover"
                  sizes="100vw"
                  quality={100}
                />
                <div className="absolute inset-0 bg-charcoal/30" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center px-6">
                    <MapPin
                      size={32}
                      className="mx-auto mb-3 text-warm-white"
                      strokeWidth={1.5}
                    />
                    <p className="text-sm text-warm-white mb-1 font-medium">
                      6216 Fayetteville Rd, Suite #102, Durham, NC 27713
                    </p>
                    <a
                      href="https://maps.google.com/?q=6216+Fayetteville+Rd+Suite+102+Durham+NC+27713"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-champagne-light hover:text-champagne transition-colors mt-2"
                    >
                      Open in Google Maps
                      <ExternalLink size={10} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Reassurance */}
      <section className="bg-cream py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-light text-charcoal mb-4">
              First Visit? You&apos;re in Good Hands.
            </h2>
            <p className="text-charcoal-muted leading-relaxed mb-6">
              We understand that trying a new practice takes trust. Every
              consultation begins with a thorough skin assessment and an honest
              conversation about your goals. There&apos;s no pressure, no
              upselling. Just expert guidance from a team that genuinely cares
              about your skin health.
            </p>
            <p className="text-sm text-taupe-dark">
              Backed by the medical expertise of North Carolina Center for
              Dermatology.
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  );
}

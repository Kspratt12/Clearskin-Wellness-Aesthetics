import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  ExternalLink,
} from "lucide-react";

function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

const quickLinks = [
  { href: "/services", label: "Services" },
  { href: "/membership", label: "Membership Plans" },
  { href: "/staff", label: "Our Staff" },
  { href: "/contact", label: "Contact & Booking" },
];

const services = [
  "Neuromodulators",
  "Dermal Fillers",
  "Morpheus8",
  "PicoSure Pro",
  "Laser Hair Removal",
  "Medical Microneedling",
  "Facials & Peels",
];

export function Footer() {
  return (
    <footer className="bg-charcoal text-warm-white">
      {/* CTA Band */}
      <div className="bg-charcoal-light">
        <div className="max-w-7xl mx-auto px-6 py-14 text-center">
          <h3 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-light text-warm-white mb-3">
            Ready to Begin Your Skin Journey?
          </h3>
          <p className="text-taupe-light text-sm max-w-xl mx-auto mb-8">
            Schedule a consultation with our expert team. We&apos;ll create a
            personalized treatment plan tailored to your unique skin goals.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://nccdermatology.myaestheticrecord.com/online-booking/book-appointment"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-champagne text-charcoal px-8 py-3 text-sm tracking-wider font-medium hover:bg-champagne-light transition-all duration-300"
            >
              Book Consultation
            </a>
            <a
              href="tel:+19195891307"
              className="border border-warm-white/30 text-warm-white px-8 py-3 text-sm tracking-wider hover:bg-warm-white/10 transition-all duration-300"
            >
              Call (919) 589-1307
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <h4 className="font-[family-name:var(--font-heading)] text-2xl font-semibold mb-1">
              Clearskin & Wellness
            </h4>
            <p className="text-[0.65rem] uppercase tracking-[0.25em] text-taupe mb-5">
              Aesthetics
            </p>
            <p className="text-sm text-taupe-light leading-relaxed mb-6">
              Durham&apos;s premier cosmetic and skin wellness destination,
              backed by the medical expertise of North Carolina Center for
              Dermatology.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/clearskinwellnessa"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-warm-white/20 flex items-center justify-center hover:border-champagne hover:text-champagne transition-all"
                aria-label="Instagram"
              >
                <InstagramIcon size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="text-xs uppercase tracking-[0.2em] text-champagne mb-6 font-medium">
              Quick Links
            </h5>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-taupe-light hover:text-warm-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="https://nccdermatology.myaestheticrecord.com/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-taupe-light hover:text-warm-white transition-colors inline-flex items-center gap-1"
                >
                  Patient Portal
                  <ExternalLink size={11} />
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h5 className="text-xs uppercase tracking-[0.2em] text-champagne mb-6 font-medium">
              Popular Services
            </h5>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-sm text-taupe-light hover:text-warm-white transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="text-xs uppercase tracking-[0.2em] text-champagne mb-6 font-medium">
              Visit Us
            </h5>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://maps.google.com/?q=6216+Fayetteville+Rd+Suite+102+Durham+NC+27713"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-sm text-taupe-light hover:text-warm-white transition-colors"
                >
                  <MapPin size={16} className="mt-0.5 shrink-0" />
                  <span>
                    6216 Fayetteville Rd
                    <br />
                    Suite #102
                    <br />
                    Durham, NC 27713
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+19195891307"
                  className="flex items-center gap-3 text-sm text-taupe-light hover:text-warm-white transition-colors"
                >
                  <Phone size={16} className="shrink-0" />
                  (919) 589-1307
                </a>
              </li>
              <li>
                <a
                  href="mailto:nccd14@gmail.com"
                  className="flex items-center gap-3 text-sm text-taupe-light hover:text-warm-white transition-colors"
                >
                  <Mail size={16} className="shrink-0" />
                  nccd14@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-warm-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-taupe-dark">
            &copy; {new Date().getFullYear()} Clearskin & Wellness Aesthetics.
            All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-xs text-taupe-dark">
            <span>A part of</span>
            <a
              href="https://nccdermatology.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-champagne transition-colors inline-flex items-center gap-1"
            >
              North Carolina Center for Dermatology
              <ExternalLink size={9} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ExternalLink } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/membership", label: "Membership Plans" },
  { href: "/staff", label: "Our Staff" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  return (
    <>
      {/* Top Bar — Brand Bridge */}
      <div className="bg-charcoal text-warm-white text-xs tracking-wider hidden md:block">
        <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
          <span className="opacity-80">
            The cosmetic &amp; wellness arm of{" "}
            <a
              href="https://nccdermatology.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-champagne transition-colors inline-flex items-center gap-1"
            >
              North Carolina Center for Dermatology
              <ExternalLink size={10} />
            </a>
          </span>
          <a
            href="tel:+19195891307"
            className="flex items-center gap-1.5 hover:text-champagne transition-colors"
          >
            <Phone size={11} />
            (919) 589-1307
          </a>
        </div>
      </div>

      {/* Main Navigation */}
      <header
        className={`sticky top-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-ivory/95 backdrop-blur-md shadow-[0_1px_20px_rgba(0,0,0,0.06)]"
            : "bg-ivory"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/logo-transparent.png"
              alt="Clearskin & Wellness Aesthetics"
              width={48}
              height={48}
              className="w-11 h-11 md:w-12 md:h-12"
              priority
              unoptimized
            />
            <div className="flex flex-col">
              <span className="font-[family-name:var(--font-heading)] text-xl md:text-[1.45rem] font-semibold text-charcoal tracking-wide leading-tight">
                Clearskin & Wellness
              </span>
              <span className="text-[0.6rem] uppercase tracking-[0.25em] text-taupe-dark font-medium">
                Aesthetics
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm tracking-wide transition-colors duration-300 hover:text-champagne-dark ${
                  pathname === link.href
                    ? "text-champagne-dark font-medium"
                    : "text-charcoal-light"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://nccdermatology.myaestheticrecord.com/login"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-charcoal-muted hover:text-charcoal transition-colors"
            >
              Patient Portal
            </a>
            <a
              href="https://nccdermatology.myaestheticrecord.com/online-booking/book-appointment"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-charcoal text-warm-white text-sm px-6 py-2.5 tracking-wider hover:bg-charcoal-light transition-all duration-300"
            >
              Book Now
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="lg:hidden p-2 text-charcoal"
            aria-label="Toggle menu"
          >
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </header>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-charcoal/20 backdrop-blur-sm"
              onClick={() => setIsMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.35, ease: "easeInOut" }}
              className="absolute right-0 top-0 bottom-0 w-[85vw] max-w-80 bg-ivory shadow-2xl flex flex-col"
            >
              <div className="flex items-center justify-between p-6 border-b border-sand">
                <span className="font-[family-name:var(--font-heading)] text-xl font-semibold text-charcoal">
                  Menu
                </span>
                <button
                  onClick={() => setIsMobileOpen(false)}
                  className="p-2 text-charcoal"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="flex-1 py-6 px-6 space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block py-3 text-lg tracking-wide transition-colors ${
                      pathname === link.href
                        ? "text-champagne-dark font-medium"
                        : "text-charcoal-light hover:text-charcoal"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <div className="p-6 border-t border-sand space-y-3">
                <a
                  href="tel:+19195891307"
                  className="flex items-center gap-2 text-sm text-charcoal-muted"
                >
                  <Phone size={14} />
                  (919) 589-1307
                </a>
                <a
                  href="https://nccdermatology.myaestheticrecord.com/online-booking/book-appointment"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-charcoal text-warm-white py-3 tracking-wider text-sm hover:bg-charcoal-light transition-colors"
                >
                  Book Your Appointment
                </a>
                <a
                  href="https://nccdermatology.myaestheticrecord.com/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center text-sm text-charcoal-muted hover:text-charcoal transition-colors py-2"
                >
                  Patient Portal
                </a>
                <p className="text-[0.65rem] text-taupe-dark text-center pt-2">
                  A part of NC Center for Dermatology
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

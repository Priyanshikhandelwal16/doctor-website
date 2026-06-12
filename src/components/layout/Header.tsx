"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Heart } from "lucide-react";
import { clinicInfo } from "@/data/clinic";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/#home", label: "Home" },
  { href: "/#about", label: "About Doctor" },
  { href: "/#services", label: "Services" },
  { href: "/#technology", label: "Technology" },
  { href: "/#success-stories", label: "Success Stories" },
  { href: "/blog", label: "Blog" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#contact", label: "Contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = pathname === "/";
  const useWhite = !isHome && !scrolled;

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        scrolled ? "glass-nav shadow-premium" : "bg-transparent"
      )}
    >
      <div className="container-custom">
        <div className="flex h-16 items-center justify-between md:h-20">
          <Link href="/" className="group flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-medical-blue/10 transition-colors group-hover:bg-medical-blue/20">
              <Heart className="h-5 w-5 animate-pulse-heart text-medical-blue" fill="currentColor" />
            </div>
            <div className="hidden sm:block">
              <p className={cn("font-display text-sm font-bold transition-colors", useWhite ? "text-white" : "text-navy")}>
                HeartCare
              </p>
              <p className={cn("text-[10px] tracking-wide transition-colors", useWhite ? "text-medical-silver" : "text-navy-400")}>
                Advanced Cardiac Centre
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                  useWhite ? "text-white/80 hover:text-white" : "text-navy-600 hover:text-navy"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href={`tel:${clinicInfo.contact.emergency}`}
              className="flex items-center gap-2 text-sm font-medium text-accent-red hover:brightness-110"
            >
              <Phone className="h-4 w-4" />
              <span className="hidden lg:inline">Emergency</span>
            </a>
            <Link href="/appointment" className="btn-accent !py-2.5 !text-sm">
              Book Appointment
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={cn("rounded-lg p-2 lg:hidden transition-colors", useWhite ? "text-white" : "text-navy")}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="absolute left-0 right-0 top-16 border-t border-navy/5 bg-white/95 py-4 shadow-premium lg:hidden">
          <nav className="container-custom flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-medium text-navy-600 hover:bg-navy-50 hover:text-navy"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/appointment"
              onClick={() => setIsOpen(false)}
              className="btn-accent mx-4 mt-2 text-center"
            >
              Book Appointment
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

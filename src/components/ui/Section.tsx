"use client";

import { useGSAPReveal } from "@/lib/animations";

interface SectionProps {
  label?: string;
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
  id?: string;
}

export default function Section({ label, title, description, children, className = "", dark = false, id }: SectionProps) {
  const ref = useGSAPReveal(".reveal-item");

  return (
    <section id={id} className={`section-padding ${dark ? "bg-navy text-white" : ""} ${className}`} ref={ref}>
      <div className="container-custom">
        <div className="reveal-item mx-auto mb-12 max-w-2xl text-center md:mb-16">
          {label && <span className={`section-label ${dark ? "!text-medical-blue-soft" : ""}`}>{label}</span>}
          <h2 className={`heading-section ${dark ? "text-white" : ""}`}>{title}</h2>
          {description && (
            <p className={`mt-4 text-body ${dark ? "text-medical-silver" : ""}`}>{description}</p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import PageHero from "@/components/ui/PageHero";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import AppointmentCTA from "@/components/ui/AppointmentCTA";
import { faqs, faqCategories } from "@/data/faqs";
import { cn } from "@/lib/utils";

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const filtered = activeCategory === "All" ? faqs : faqs.filter((f) => f.category === activeCategory);

  return (
    <>
      <PageHero
        label="FAQ"
        title="Frequently Asked Questions"
        description="Detailed answers to 30+ common questions about cardiac care, procedures, appointments, and more."
        cta={{ label: "Still Have Questions? Contact Us", href: "/contact" }}
      />

      <section className="section-padding">
        <div className="container-custom mx-auto max-w-3xl">
          <div className="mb-8 flex flex-wrap gap-2">
            {["All", ...faqCategories].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "rounded-full px-4 py-2 text-xs font-medium transition-all",
                  activeCategory === cat
                    ? "bg-navy text-white"
                    : "bg-medical-silver-light text-navy hover:bg-medical-blue-light"
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          <div>
            {filtered.map((faq, i) => (
              <FAQAccordion key={faq.id} question={faq.question} answer={faq.answer} defaultOpen={i === 0 && activeCategory === "All"} />
            ))}
          </div>
        </div>
      </section>

      <AppointmentCTA />
    </>
  );
}

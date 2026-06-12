"use client";

import Section from "@/components/ui/Section";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { faqs } from "@/data/faqs";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function FAQSection() {
  return (
    <Section
      id="faq"
      label="Common Questions"
      title="Frequently Asked Questions"
      description="Answers to the most common questions our cardiology patients ask."
    >
      <div className="reveal-item mx-auto max-w-3xl">
        {faqs.slice(0, 6).map((faq, i) => (
          <FAQAccordion key={faq.id} question={faq.question} answer={faq.answer} defaultOpen={i === 0} />
        ))}
      </div>
      <div className="reveal-item mt-8 text-center">
        <Link href="/faq" className="inline-flex items-center gap-2 text-sm font-semibold text-medical-blue hover:text-navy">
          View All 30+ FAQs
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </Section>
  );
}

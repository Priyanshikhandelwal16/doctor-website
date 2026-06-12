"use client";

import { Star, Quote } from "lucide-react";
import Section from "@/components/ui/Section";
import { testimonials } from "@/data/testimonials";

export default function TestimonialsSection() {
  return (
    <Section
      id="success-stories"
      label="Patient Stories"
      title="What Our Patients Say"
      description="Real stories from patients who trusted Dr. Mehta with their hearts."
      dark
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.slice(0, 3).map((t) => (
          <div key={t.id} className="reveal-item rounded-2xl border border-white/10 bg-white/5 p-6">
            <Quote className="mb-4 h-8 w-8 text-medical-blue/50" />
            <p className="text-sm leading-relaxed text-medical-silver">&ldquo;{t.quote}&rdquo;</p>
            <div className="mt-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-medical-blue/20 font-display text-sm font-bold text-medical-blue">
                {t.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
              </div>
              <div>
                <p className="text-sm font-semibold text-white">{t.name}</p>
                <p className="text-xs text-medical-silver">{t.condition}</p>
              </div>
            </div>
            <div className="mt-3 flex">
              {[...Array(t.rating)].map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-accent-gold text-accent-gold" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

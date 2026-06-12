"use client";

import { Star, Play, TrendingUp } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import AppointmentCTA from "@/components/ui/AppointmentCTA";
import { testimonials } from "@/data/testimonials";

export default function SuccessStoriesPage() {
  return (
    <>
      <PageHero
        label="Patient Success"
        title="Patient Success Stories"
        description="Real recoveries. Real gratitude. Real proof that expert cardiac care transforms lives."
        cta={{ label: "Start Your Recovery", href: "/appointment" }}
      />

      <Section label="Video Testimonials" title="Hear From Our Patients">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.slice(0, 3).map((t) => (
            <div key={t.id} className="reveal-item card-premium">
              <div className="relative mb-4 flex h-40 items-center justify-center rounded-xl bg-navy">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-medical-blue/20">
                  <Play className="h-6 w-6 text-medical-blue" fill="currentColor" />
                </div>
                <span className="absolute bottom-3 left-3 rounded bg-black/60 px-2 py-0.5 text-xs text-white">
                  Video Testimonial
                </span>
              </div>
              <h3 className="font-display font-semibold text-navy">{t.name}</h3>
              <p className="text-xs text-navy-400">{t.condition} · {t.location}</p>
              <p className="mt-3 text-sm text-navy-600">&ldquo;{t.quote.slice(0, 120)}...&rdquo;</p>
            </div>
          ))}
        </div>
      </Section>

      <Section label="Recovery Stories" title="Before & After Health Improvements" dark>
        <div className="space-y-8">
          {testimonials.filter((t) => t.recoveryStats).map((t) => (
            <div key={t.id} className="reveal-item rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8">
              <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-accent-gold text-accent-gold" />
                    ))}
                  </div>
                  <h3 className="mt-2 font-display text-lg font-semibold text-white">{t.name}, {t.age}</h3>
                  <p className="text-sm text-medical-blue">{t.treatment}</p>
                  <p className="mt-4 text-sm leading-relaxed text-medical-silver">&ldquo;{t.quote}&rdquo;</p>
                </div>
                {t.recoveryStats && (
                  <div className="grid gap-3 sm:grid-cols-2 md:w-80">
                    {t.recoveryStats.map((stat) => (
                      <div key={stat.label} className="rounded-xl bg-white/5 p-4">
                        <p className="text-xs text-medical-silver">{stat.label}</p>
                        <div className="mt-2 flex items-center gap-2">
                          <span className="text-sm text-accent-red line-through">{stat.before}</span>
                          <TrendingUp className="h-3 w-3 text-accent-green" />
                          <span className="text-sm font-semibold text-accent-green">{stat.after}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section label="Case Studies" title="Trust-Building Case Studies">
        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((t) => (
            <div key={t.id} className="reveal-item card-premium">
              <div className="mb-3 flex items-center justify-between">
                <span className="rounded-full bg-medical-blue-light px-3 py-1 text-xs font-medium text-medical-blue">
                  {t.condition}
                </span>
                <span className="text-xs text-navy-400">{t.date}</span>
              </div>
              <h3 className="font-display font-semibold text-navy">{t.name}</h3>
              <p className="mt-1 text-xs text-medical-blue">{t.treatment}</p>
              <p className="mt-3 text-sm text-navy-600">{t.quote}</p>
            </div>
          ))}
        </div>
      </Section>

      <AppointmentCTA />
    </>
  );
}

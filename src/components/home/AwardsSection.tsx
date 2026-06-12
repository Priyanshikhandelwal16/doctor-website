"use client";

import { Award } from "lucide-react";
import Section from "@/components/ui/Section";
import { clinicInfo } from "@/data/clinic";

export default function AwardsSection() {
  return (
    <Section label="Recognition" title="Awards & Accreditations" className="bg-medical-blue-light/30">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {clinicInfo.awards.map((award) => (
          <div key={award.year + award.title} className="reveal-item card-premium text-center">
            <Award className="mx-auto mb-3 h-8 w-8 text-accent-gold" />
            <p className="text-xs font-bold uppercase tracking-wider text-medical-blue">{award.year}</p>
            <h3 className="mt-2 font-display text-sm font-semibold text-navy">{award.title}</h3>
            <p className="mt-1 text-xs text-navy-400">{award.org}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

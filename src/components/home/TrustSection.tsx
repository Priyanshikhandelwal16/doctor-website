"use client";

import { Shield, Cpu, Heart, Clock, Award, Stethoscope } from "lucide-react";
import Section from "@/components/ui/Section";
import { trustReasons } from "@/data/doctor";

const iconMap: Record<string, React.ElementType> = {
  "18+ Years of Expertise": Stethoscope,
  "Advanced Technology": Cpu,
  "Patient-First Philosophy": Heart,
  "24/7 Emergency Care": Clock,
  "NABH Accredited Centre": Award,
  "Complete Cardiac Care": Shield,
};

export default function TrustSection() {
  return (
    <Section
      id="about"
      label="Why Choose Us"
      title="Why Patients Trust Dr. Arjun Mehta"
      description="Combining world-class interventional cardiology expertise with genuine compassion — because your heart deserves nothing less."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {trustReasons.map((reason) => {
          const Icon = iconMap[reason.title] || Shield;
          return (
            <div key={reason.title} className="reveal-item card-premium group">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-medical-blue-light transition-colors group-hover:bg-medical-blue/20">
                <Icon className="h-6 w-6 text-medical-blue" />
              </div>
              <h3 className="font-display text-lg font-semibold text-navy">{reason.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-400">{reason.description}</p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

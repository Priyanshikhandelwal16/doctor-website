"use client";

import Link from "next/link";
import { ArrowRight, Activity, AlertTriangle, Heart, Waves, Gauge, Droplets, CircleDot, Shield } from "lucide-react";
import Section from "@/components/ui/Section";
import TiltCard from "@/components/ui/TiltCard";
import { heartConditions } from "@/data/doctor";

const iconMap: Record<string, React.ElementType> = {
  Activity, AlertTriangle, Heart, Waves, Gauge, Droplets, CircleDot, Shield,
};

export default function ConditionsSection() {
  return (
    <Section
      id="services"
      label="Conditions We Treat"
      title="Heart Conditions Treated"
      description="Comprehensive interventional cardiology care for the full spectrum of heart-related conditions."
      dark
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {heartConditions.map((condition) => {
          const Icon = iconMap[condition.icon] || Heart;
          return (
            <TiltCard key={condition.title} className="reveal-item">
              <div className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition-all hover:bg-white/10 h-full">
                <Icon className="mb-4 h-8 w-8 text-medical-blue" />
                <h3 className="font-display font-semibold text-white">{condition.title}</h3>
                <p className="mt-2 text-sm text-medical-silver">{condition.description}</p>
              </div>
            </TiltCard>
          );
        })}
      </div>
      <div className="reveal-item mt-10 text-center">
        <Link href="/services" className="btn-accent">
          View All Services
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </Section>
  );
}

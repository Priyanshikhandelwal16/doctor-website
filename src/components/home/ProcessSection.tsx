"use client";

import Section from "@/components/ui/Section";
import { treatmentProcess } from "@/data/doctor";

export default function ProcessSection() {
  return (
    <Section
      label="Your Journey"
      title="Our Treatment Process"
      description="A clear, structured pathway from consultation to recovery — designed around your comfort and confidence."
    >
      <div className="relative">
        <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-medical-silver-light lg:block" />
        <div className="space-y-8 lg:space-y-12">
          {treatmentProcess.map((step, i) => (
            <div
              key={step.step}
              className={`reveal-item flex flex-col items-center gap-6 lg:flex-row ${
                i % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className={`flex-1 ${i % 2 === 1 ? "lg:text-left" : "lg:text-right"} text-center`}>
                <span className="text-sm font-bold text-medical-blue">Step {step.step}</span>
                <h3 className="mt-1 font-display text-xl font-semibold text-navy">{step.title}</h3>
                <p className="mt-2 text-sm text-navy-400">{step.description}</p>
              </div>
              <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-navy font-display text-lg font-bold text-white shadow-premium">
                {step.step}
              </div>
              <div className="hidden flex-1 lg:block" />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

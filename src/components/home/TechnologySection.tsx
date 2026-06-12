"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Section from "@/components/ui/Section";
import { technologies } from "@/data/technology";

export default function TechnologySection() {
  return (
    <Section
      id="technology"
      label="Advanced Equipment"
      title="Technology We Use"
      description="Investing in the world's finest cardiac diagnostic and interventional technology for safer, faster, more precise care."
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {technologies.slice(0, 3).map((tech) => (
          <div key={tech.id} className="reveal-item card-premium overflow-hidden !p-0">
            <div className="relative h-48 overflow-hidden">
              <Image src={tech.image} alt={tech.title} fill className="object-cover transition-transform duration-500 hover:scale-105" />
            </div>
            <div className="p-6">
              <h3 className="font-display text-lg font-semibold text-navy">{tech.title}</h3>
              <p className="mt-2 text-sm text-navy-400">{tech.shortDescription}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="reveal-item mt-10 text-center">
        <Link href="/technology" className="btn-secondary">
          Explore All Technology
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </Section>
  );
}

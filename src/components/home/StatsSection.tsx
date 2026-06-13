"use client";

import { useEffect, useRef } from "react";
import Section from "@/components/ui/Section";
import { clinicInfo } from "@/data/clinic";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface CounterProps {
  value: string;
}

function Counter({ value }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    // Remove commas and extract numbers
    const cleanNum = value.replace(/,/g, "");
    const match = cleanNum.match(/([\d.]+)/);
    if (!match) return;

    const numValue = parseFloat(match[1]);
    const suffix = cleanNum.replace(match[1], "");
    const isDecimal = value.includes(".");

    const obj = { val: 0 };
    const tween = gsap.to(obj, {
      val: numValue,
      duration: 2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ref.current,
        start: "top 85%",
        toggleActions: "play none none none",
      },
      onUpdate: () => {
        if (ref.current) {
          const displayVal = isDecimal 
            ? obj.val.toFixed(1) 
            : Math.round(obj.val).toLocaleString();
          ref.current.textContent = displayVal + suffix;
        }
      },
    });

    return () => {
      tween.kill();
    };
  }, [value]);

  return <span ref={ref}>0</span>;
}

export default function StatsSection() {
  return (
    <Section label="Our Track Record" title="Success Statistics" className="!py-12">
      <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
        {clinicInfo.stats.map((stat) => (
          <div key={stat.label} className="reveal-item text-center">
            <p className="font-display text-3xl font-bold text-medical-blue md:text-4xl lg:text-5xl">
              <Counter value={stat.value} />
            </p>
            <p className="mt-2 text-sm font-medium text-navy-400">{stat.label}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

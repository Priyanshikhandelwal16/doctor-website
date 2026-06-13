"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, Calendar, Award, Shield, Star } from "lucide-react";
import { useHeroAnimation } from "@/lib/animations";
import TiltCard from "@/components/ui/TiltCard";
import { clinicInfo } from "@/data/clinic";

export default function HeroSection() {
  const ref = useHeroAnimation();

  return (
    <section id="home" ref={ref} className="relative min-h-screen overflow-hidden bg-gradient-to-br from-medical-white via-white to-medical-blue-light pt-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-medical-blue/5 blur-3xl" />
        <div className="absolute -left-20 bottom-0 h-[400px] w-[400px] rounded-full bg-navy/5 blur-3xl" />
        <div className="absolute right-1/4 top-1/3 animate-float opacity-20">
          <svg width="60" height="60" viewBox="0 0 24 24" fill="#4A90D9">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </div>
      </div>

      <div className="container-custom relative flex min-h-[calc(100vh-5rem)] flex-col items-center gap-12 py-12 lg:flex-row lg:gap-16 lg:py-20">
        <div className="flex-1 text-center lg:text-left">
          <div className="hero-badge mb-6 flex flex-wrap items-center justify-center gap-2 lg:justify-start">
            {clinicInfo.trustBadges.slice(0, 3).map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-medium text-navy shadow-premium"
              >
                <Shield className="h-3 w-3 text-medical-blue" />
                {badge}
              </span>
            ))}
          </div>

          <h1 className="hero-title heading-display">
            Advanced Heart Care Backed by{" "}
            <span className="gradient-text">Expertise, Precision & Compassion</span>
          </h1>

          <p className="hero-subtitle mt-6 max-w-xl text-body lg:mx-0 mx-auto">
            Dr. Arjun Mehta — Interventional Cardiologist with 18+ years of experience and 15,000+ successful
            angioplasties. Premium cardiac care at HeartCare Advanced Cardiac Centre, Jaipur.
          </p>

          <div className="hero-cta mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
            <Link href="/appointment" className="btn-primary">
              <Calendar className="h-4 w-4" />
              Book Appointment
            </Link>
            <a href={`tel:${clinicInfo.contact.emergency}`} className="btn-secondary !border-accent-red !text-accent-red hover:!bg-accent-red hover:!text-white">
              <Phone className="h-4 w-4" />
              Emergency: {clinicInfo.contact.emergency}
            </a>
          </div>

          <div className="hero-badge mt-10 flex flex-wrap items-center justify-center gap-6 lg:justify-start">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent-gold text-accent-gold" />
                ))}
              </div>
              <span className="text-sm font-medium text-navy">4.9/5 Patient Rating</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-navy-600">
              <Award className="h-4 w-4 text-accent-gold" />
              CSI Excellence Award 2024
            </div>
          </div>
        </div>

        <TiltCard className="hero-image relative flex-shrink-0 w-full max-w-[480px]">
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-medical-blue/20 to-navy/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl shadow-premium-lg">
              <Image
                src={clinicInfo.doctor.portrait}
                alt="Dr. Arjun Mehta - Interventional Cardiologist"
                width={480}
                height={600}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-4 -left-4 rounded-2xl bg-white p-4 shadow-premium-lg">
              <p className="font-display text-2xl font-bold text-navy">18+</p>
              <p className="text-xs text-navy-400">Years Experience</p>
            </div>
            <div className="absolute -right-4 -top-4 rounded-2xl bg-navy p-4 text-white shadow-premium-lg">
              <p className="font-display text-2xl font-bold">98.7%</p>
              <p className="text-xs text-medical-silver">Success Rate</p>
            </div>
          </div>
        </TiltCard>
      </div>
    </section>
  );
}

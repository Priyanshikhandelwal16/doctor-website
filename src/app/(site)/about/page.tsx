import Image from "next/image";
import { GraduationCap, Award, Users, Target, Eye } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import AppointmentCTA from "@/components/ui/AppointmentCTA";
import { doctorProfile } from "@/data/doctor";
import { clinicInfo } from "@/data/clinic";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "About Dr. Arjun Mehta",
  description: "Meet Dr. Arjun Mehta — Interventional Cardiologist with 18+ years experience, 15,000+ angioplasties, trained at AIIMS & CMC Vellore.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="About the Doctor"
        title="Dr. Arjun Mehta"
        description="Interventional Cardiologist · MD, DM (Cardiology), FSCAI · 18+ Years of Excellence"
        cta={{ label: "Book Consultation", href: "/appointment" }}
      />

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative mx-auto max-w-md">
              <div className="overflow-hidden rounded-3xl shadow-premium-lg">
                <Image
                  src={clinicInfo.doctor.image}
                  alt="Dr. Arjun Mehta"
                  width={500}
                  height={650}
                  className="object-cover"
                />
              </div>
            </div>
            <div>
              <span className="section-label">The Story</span>
              <h2 className="heading-section">A Life Dedicated to Saving Hearts</h2>
              {doctorProfile.story.split("\n\n").map((para, i) => (
                <p key={i} className="mt-4 text-body">{para}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Section label="Education" title="Education & Training" className="bg-medical-blue-light/20">
        <div className="grid gap-6 md:grid-cols-2">
          {doctorProfile.education.map((edu) => (
            <div key={edu.degree} className="reveal-item card-premium flex gap-4">
              <GraduationCap className="h-8 w-8 shrink-0 text-medical-blue" />
              <div>
                <h3 className="font-display font-semibold text-navy">{edu.degree}</h3>
                <p className="text-sm text-navy-400">{edu.institution}</p>
                <p className="text-xs font-medium text-medical-blue">{edu.year}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section label="Certifications" title="Certifications & Memberships">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <h3 className="mb-4 font-display text-lg font-semibold text-navy">Certifications</h3>
            <ul className="space-y-3">
              {doctorProfile.certifications.map((cert) => (
                <li key={cert} className="reveal-item flex items-start gap-3 text-sm text-navy-600">
                  <Award className="mt-0.5 h-4 w-4 shrink-0 text-medical-blue" />
                  {cert}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-display text-lg font-semibold text-navy">Professional Memberships</h3>
            <ul className="space-y-3">
              {doctorProfile.memberships.map((mem) => (
                <li key={mem} className="reveal-item flex items-start gap-3 text-sm text-navy-600">
                  <Users className="mt-0.5 h-4 w-4 shrink-0 text-medical-blue" />
                  {mem}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section label="Career" title="Career Timeline" dark>
        <div className="mx-auto max-w-3xl space-y-6">
          {doctorProfile.timeline.map((item) => (
            <div key={item.year} className="reveal-item flex gap-6">
              <div className="w-16 shrink-0 text-right">
                <span className="font-display text-lg font-bold text-medical-blue">{item.year}</span>
              </div>
              <div className="relative border-l-2 border-medical-blue/30 pb-6 pl-6">
                <div className="absolute -left-[5px] top-1 h-2 w-2 rounded-full bg-medical-blue" />
                <h3 className="font-display font-semibold text-white">{item.title}</h3>
                <p className="mt-1 text-sm text-medical-silver">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section label="Achievements" title="Notable Achievements">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {doctorProfile.achievements.map((ach) => (
            <div key={ach} className="reveal-item card-premium flex items-start gap-3">
              <Award className="h-5 w-5 shrink-0 text-accent-gold" />
              <p className="text-sm text-navy-600">{ach}</p>
            </div>
          ))}
        </div>
      </Section>

      <section className="section-padding bg-medical-blue-light/20">
        <div className="container-custom grid gap-8 md:grid-cols-2">
          <div className="reveal-item card-premium">
            <Target className="mb-4 h-8 w-8 text-medical-blue" />
            <h3 className="font-display text-xl font-semibold text-navy">Our Mission</h3>
            <p className="mt-3 text-body">{doctorProfile.mission}</p>
          </div>
          <div className="reveal-item card-premium">
            <Eye className="mb-4 h-8 w-8 text-medical-blue" />
            <h3 className="font-display text-xl font-semibold text-navy">Our Vision</h3>
            <p className="mt-3 text-body">{doctorProfile.vision}</p>
          </div>
        </div>
      </section>

      <AppointmentCTA />
    </>
  );
}

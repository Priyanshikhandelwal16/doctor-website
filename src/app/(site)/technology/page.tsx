import Image from "next/image";
import { CheckCircle } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import AppointmentCTA from "@/components/ui/AppointmentCTA";
import { technologies } from "@/data/technology";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Advanced Cardiac Technology",
  description: "State-of-the-art cath lab, digital ECG, echocardiography, Holter monitoring & stress testing at HeartCare Jaipur.",
  path: "/technology",
});

export default function TechnologyPage() {
  return (
    <>
      <PageHero
        label="Our Technology"
        title="Advanced Cardiac Technology"
        description="World-class diagnostic and interventional equipment ensuring safer procedures, faster recovery, and precise diagnoses."
      />

      <section className="section-padding">
        <div className="container-custom space-y-20">
          {technologies.map((tech, i) => (
            <div
              key={tech.id}
              className={`grid items-center gap-10 lg:grid-cols-2 ${i % 2 === 1 ? "lg:direction-rtl" : ""}`}
            >
              <div className={`${i % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="relative overflow-hidden rounded-2xl shadow-premium-lg">
                  <Image src={tech.image} alt={tech.title} width={600} height={400} className="object-cover w-full" />
                </div>
              </div>
              <div className={`${i % 2 === 1 ? "lg:order-1" : ""}`}>
                <span className="section-label">Technology</span>
                <h2 className="heading-section !text-2xl md:!text-3xl">{tech.title}</h2>
                <p className="mt-4 text-body">{tech.overview}</p>

                <div className="mt-6 grid gap-6 sm:grid-cols-2">
                  <div>
                    <h3 className="text-sm font-semibold text-navy">Key Features</h3>
                    <ul className="mt-2 space-y-2">
                      {tech.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-sm text-navy-600">
                          <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-accent-green" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-navy">Benefits</h3>
                    <ul className="mt-2 space-y-2">
                      {tech.benefits.map((b) => (
                        <li key={b} className="flex items-start gap-2 text-sm text-navy-600">
                          <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-medical-blue" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6">
                  <h3 className="text-sm font-semibold text-navy">Used For</h3>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {tech.usedFor.map((use) => (
                      <span key={use} className="rounded-full bg-medical-blue-light px-3 py-1 text-xs font-medium text-medical-blue">
                        {use}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <AppointmentCTA />
    </>
  );
}

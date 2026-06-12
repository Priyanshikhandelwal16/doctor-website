import Link from "next/link";
import { ArrowRight, HeartPulse, Activity, Heart, Zap, Scan, TrendingUp, Shield, Gauge, Waves, Droplets } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import AppointmentCTA from "@/components/ui/AppointmentCTA";
import TiltCard from "@/components/ui/TiltCard";
import { services } from "@/data/services";
import { createMetadata } from "@/lib/seo";

const iconMap: Record<string, React.ElementType> = {
  HeartPulse, Activity, Heart, Zap, Scan, TrendingUp, Shield, Gauge, Waves, Droplets,
};

export const metadata = createMetadata({
  title: "Cardiology Services",
  description: "Comprehensive cardiology services — angioplasty, ECG, echo, TMT, preventive cardiology, hypertension & more at HeartCare Jaipur.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        label="Our Services"
        title="Comprehensive Cardiology Services"
        description="From preventive heart health to advanced interventional procedures — every service delivered with precision and compassion."
        cta={{ label: "Book Consultation", href: "/appointment" }}
      />

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = iconMap[service.icon] || Heart;
              return (
                <TiltCard key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="card-premium group flex flex-col h-full"
                  >
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-medical-blue-light transition-colors group-hover:bg-medical-blue/20">
                      <Icon className="h-6 w-6 text-medical-blue" />
                    </div>
                    <h2 className="font-display text-lg font-semibold text-navy group-hover:text-medical-blue">
                      {service.title}
                    </h2>
                    <p className="mt-2 flex-1 text-sm text-navy-400">{service.shortDescription}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-medical-blue">
                      Learn More <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                </TiltCard>
              );
            })}
          </div>
        </div>
      </section>

      <AppointmentCTA />
    </>
  );
}

import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

interface AppointmentCTAProps {
  title?: string;
  description?: string;
  variant?: "default" | "compact";
}

export default function AppointmentCTA({
  title = "Take the First Step Towards a Healthier Heart",
  description = "Book a consultation with Dr. Arjun Mehta — Jaipur's trusted interventional cardiologist with 18+ years of experience.",
  variant = "default",
}: AppointmentCTAProps) {
  if (variant === "compact") {
    return (
      <div className="rounded-2xl bg-gradient-to-r from-navy to-navy-600 p-8 text-center text-white">
        <h3 className="font-display text-xl font-bold">{title}</h3>
        <p className="mx-auto mt-2 max-w-lg text-sm text-medical-silver">{description}</p>
        <Link href="/appointment" className="btn-accent mt-6">
          <Calendar className="h-4 w-4" />
          Book Appointment
        </Link>
      </div>
    );
  }

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy via-navy-700 to-navy-600 px-8 py-16 text-center md:px-16 md:py-20">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute right-0 top-0 h-64 w-64 animate-float rounded-full bg-medical-blue blur-3xl" />
          </div>
          <div className="relative">
            <span className="section-label !text-medical-blue-soft">Your Heart Deserves the Best</span>
            <h2 className="heading-section mx-auto max-w-2xl text-white">{title}</h2>
            <p className="mx-auto mt-4 max-w-xl text-medical-silver">{description}</p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/appointment" className="btn-accent">
                <Calendar className="h-4 w-4" />
                Book Appointment
              </Link>
              <Link href="/contact" className="btn-secondary !border-white/30 !text-white hover:!bg-white hover:!text-navy">
                Contact Us
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

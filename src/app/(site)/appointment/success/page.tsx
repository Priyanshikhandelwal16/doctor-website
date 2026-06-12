import Link from "next/link";
import { CheckCircle, Calendar, Phone } from "lucide-react";
import { clinicInfo } from "@/data/clinic";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Appointment Confirmed",
  description: "Your appointment with Dr. Arjun Mehta has been confirmed.",
  path: "/appointment/success",
});

export default function AppointmentSuccessPage() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-medical-blue-light/20 pt-20">
      <div className="container-custom mx-auto max-w-lg text-center">
        <div className="card-premium">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent-green/10">
            <CheckCircle className="h-8 w-8 text-accent-green" />
          </div>
          <h1 className="mt-6 font-display text-2xl font-bold text-navy">Appointment Confirmed!</h1>
          <p className="mt-3 text-body">
            Thank you for booking with HeartCare Advanced Cardiac Centre. You will receive a confirmation SMS and email shortly with your appointment details.
          </p>
          <div className="mt-6 rounded-xl bg-medical-blue-light/50 p-4 text-left text-sm">
            <p className="font-semibold text-navy">What to bring:</p>
            <ul className="mt-2 space-y-1 text-navy-600">
              <li>• Valid ID proof</li>
              <li>• Previous medical records & reports</li>
              <li>• Current medication list</li>
              <li>• Insurance card (if applicable)</li>
            </ul>
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link href="/" className="btn-primary">
              Back to Home
            </Link>
            <a href={`tel:${clinicInfo.contact.phone}`} className="btn-secondary">
              <Phone className="h-4 w-4" />
              Call Clinic
            </a>
          </div>
          <p className="mt-4 text-xs text-navy-400">
            Need to reschedule? Call us at {clinicInfo.contact.phone}
          </p>
        </div>
      </div>
    </section>
  );
}

import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Book Appointment",
  description: "Book an appointment with Dr. Arjun Mehta, Interventional Cardiologist at HeartCare Jaipur.",
  path: "/appointment",
});

export default function AppointmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}

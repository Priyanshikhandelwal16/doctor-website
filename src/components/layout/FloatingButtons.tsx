"use client";

import Link from "next/link";
import { Phone, MessageCircle, Calendar } from "lucide-react";
import { clinicInfo } from "@/data/clinic";

export default function FloatingButtons() {
  return (
    <>
      <Link
        href="/appointment"
        className="fixed bottom-36 right-4 z-40 hidden items-center gap-2 rounded-full bg-navy px-5 py-3 text-sm font-semibold text-white shadow-premium-lg transition-all hover:scale-105 hover:bg-navy-700 md:flex"
      >
        <Calendar className="h-4 w-4" />
        Book Appointment
      </Link>

      <a
        href={`https://wa.me/${clinicInfo.contact.whatsapp.replace(/[^0-9]/g, "")}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-16 md:bottom-4 right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-premium-lg transition-all hover:scale-110"
        aria-label="WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </a>

      <a
        href={`tel:${clinicInfo.contact.emergency}`}
        className="fixed bottom-16 left-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-accent-red text-white shadow-premium-lg transition-all hover:scale-110 md:hidden"
        aria-label="Emergency Call"
      >
        <Phone className="h-6 w-6" />
      </a>

      <Link
        href="/appointment"
        className="fixed bottom-0 left-0 right-0 z-40 flex items-center justify-center gap-2 bg-navy py-3.5 text-sm font-semibold text-white shadow-premium-lg md:hidden"
      >
        <Calendar className="h-4 w-4" />
        Book Appointment
      </Link>
    </>
  );
}

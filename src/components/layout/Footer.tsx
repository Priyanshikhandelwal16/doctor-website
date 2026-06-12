import Link from "next/link";
import { Phone, Mail, MapPin, Heart, Clock } from "lucide-react";
import { clinicInfo } from "@/data/clinic";

export default function Footer() {
  return (
    <footer id="contact" className="bg-navy text-white">
      <div className="container-custom section-padding pb-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <Heart className="h-6 w-6 text-medical-blue" fill="currentColor" />
              <span className="font-display text-lg font-bold">HeartCare</span>
            </div>
            <p className="mb-4 text-sm leading-relaxed text-medical-silver">
              Premium interventional cardiology care by Dr. Arjun Mehta. Advanced heart treatments with compassion and precision in Jaipur.
            </p>
            <div className="flex gap-3">
              {Object.entries(clinicInfo.social).map(([key, url]) => (
                <a
                  key={key}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-sm capitalize transition-colors hover:bg-medical-blue"
                >
                  {key[0].toUpperCase()}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-display font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm text-medical-silver">
              {[
                { href: "/about", label: "About Dr. Mehta" },
                { href: "/services", label: "Our Services" },
                { href: "/technology", label: "Technology" },
                { href: "/appointment", label: "Book Appointment" },
                { href: "/blog", label: "Heart Health Blog" },
                { href: "/careers", label: "Careers" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-display font-semibold">Contact</h4>
            <ul className="space-y-3 text-sm text-medical-silver">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-medical-blue" />
                {clinicInfo.location.address}
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-medical-blue" />
                <a href={`tel:${clinicInfo.contact.phone}`} className="hover:text-white">
                  {clinicInfo.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-accent-red" />
                <a href={`tel:${clinicInfo.contact.emergency}`} className="hover:text-white">
                  Emergency: {clinicInfo.contact.emergency}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-medical-blue" />
                <a href={`mailto:${clinicInfo.contact.email}`} className="hover:text-white">
                  {clinicInfo.contact.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-display font-semibold">Working Hours</h4>
            <ul className="space-y-2 text-sm text-medical-silver">
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-medical-blue" />
                {clinicInfo.hours.weekdays}
              </li>
              <li className="pl-6">{clinicInfo.hours.sunday}</li>
              <li className="pl-6 font-medium text-accent-red">{clinicInfo.hours.emergency}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-xs text-medical-silver">
            © {new Date().getFullYear()} HeartCare Advanced Cardiac Centre. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-medical-silver">
            <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white">Terms & Conditions</Link>
            <Link href="/cookies" className="hover:text-white">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

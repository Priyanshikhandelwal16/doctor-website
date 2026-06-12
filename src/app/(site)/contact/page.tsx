"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import { clinicInfo } from "@/data/clinic";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <PageHero
        label="Contact Us"
        title="Get in Touch"
        description="We're here to help with appointments, inquiries, and cardiac emergencies."
      />

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="heading-section !text-2xl">Clinic Information</h2>
              <div className="mt-6 space-y-6">
                {[
                  { icon: MapPin, label: "Address", value: clinicInfo.location.address },
                  { icon: Phone, label: "Phone", value: clinicInfo.contact.phone, href: `tel:${clinicInfo.contact.phone}` },
                  { icon: Phone, label: "Emergency", value: clinicInfo.contact.emergency, href: `tel:${clinicInfo.contact.emergency}`, red: true },
                  { icon: MessageCircle, label: "WhatsApp", value: clinicInfo.contact.whatsapp, href: `https://wa.me/${clinicInfo.contact.whatsapp.replace(/[^0-9]/g, "")}` },
                  { icon: Mail, label: "Email", value: clinicInfo.contact.email, href: `mailto:${clinicInfo.contact.email}` },
                  { icon: Clock, label: "Hours", value: `${clinicInfo.hours.weekdays}\n${clinicInfo.hours.sunday}` },
                ].map((item) => (
                  <div key={item.label} className="flex gap-4">
                    <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${item.red ? "bg-accent-red/10" : "bg-medical-blue-light"}`}>
                      <item.icon className={`h-5 w-5 ${item.red ? "text-accent-red" : "text-medical-blue"}`} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-navy">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className={`text-sm hover:underline ${item.red ? "text-accent-red font-medium" : "text-navy-600"}`}>
                          {item.value}
                        </a>
                      ) : (
                        <p className="whitespace-pre-line text-sm text-navy-600">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 overflow-hidden rounded-2xl shadow-premium">
                <iframe
                  title="HeartCare Location"
                  src="https://maps.google.com/maps?q=Statue+Circle+Jaipur&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>

            <div>
              <h2 className="heading-section !text-2xl">Send an Inquiry</h2>
              {submitted ? (
                <div className="mt-6 card-premium text-center">
                  <p className="font-display text-lg font-semibold text-navy">Message Sent!</p>
                  <p className="mt-2 text-sm text-navy-400">We&apos;ll respond within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  {[
                    { name: "name", label: "Full Name", type: "text", required: true },
                    { name: "email", label: "Email", type: "email", required: true },
                    { name: "phone", label: "Phone", type: "tel", required: true },
                    { name: "subject", label: "Subject", type: "text", required: true },
                  ].map((field) => (
                    <div key={field.name}>
                      <label className="mb-1 block text-sm font-medium text-navy">{field.label}</label>
                      <input
                        type={field.type}
                        required={field.required}
                        value={form[field.name as keyof typeof form]}
                        onChange={(e) => setForm({ ...form, [field.name]: e.target.value })}
                        className="w-full rounded-xl border border-medical-silver-light px-4 py-3 text-sm focus:border-medical-blue focus:outline-none focus:ring-2 focus:ring-medical-blue/20"
                      />
                    </div>
                  ))}
                  <div>
                    <label className="mb-1 block text-sm font-medium text-navy">Message</label>
                    <textarea
                      required
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full rounded-xl border border-medical-silver-light px-4 py-3 text-sm focus:border-medical-blue focus:outline-none focus:ring-2 focus:ring-medical-blue/20"
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full">
                    <Send className="h-4 w-4" /> Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

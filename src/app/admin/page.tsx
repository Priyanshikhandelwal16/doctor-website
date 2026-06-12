"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  LayoutDashboard, Calendar, FileText, HelpCircle, Users, Settings,
  Heart, MessageSquare, LogOut, Plus, Check, X, Menu,
} from "lucide-react";
import { getCMSData, saveCMSData, updateAppointmentStatus, type CMSData, type Appointment } from "@/lib/cms";
import { cn } from "@/lib/utils";

const sidebarItems = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "appointments", label: "Appointments", icon: Calendar },
  { id: "doctors", label: "Doctors", icon: Users },
  { id: "services", label: "Services", icon: Heart },
  { id: "blog", label: "Blog Posts", icon: FileText },
  { id: "testimonials", label: "Testimonials", icon: MessageSquare },
  { id: "faqs", label: "FAQs", icon: HelpCircle },
  { id: "settings", label: "Clinic Info", icon: Settings },
];

export default function AdminPage() {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [activeTab, setActiveTab] = useState("dashboard");
  const [data, setData] = useState<CMSData | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (authenticated) setData(getCMSData());
  }, [authenticated]);

  const login = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "heartcare2025") setAuthenticated(true);
    else alert("Invalid password. Demo password: heartcare2025");
  };

  const refresh = () => setData(getCMSData());

  if (!authenticated) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-navy">
        <form onSubmit={login} className="w-full max-w-sm rounded-2xl bg-white p-8 shadow-premium-lg">
          <Heart className="mx-auto h-10 w-10 text-medical-blue" fill="currentColor" />
          <h1 className="mt-4 text-center font-display text-xl font-bold text-navy">Admin Login</h1>
          <p className="mt-1 text-center text-xs text-navy-400">HeartCare CMS Dashboard</p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter admin password"
            className="mt-6 w-full rounded-xl border px-4 py-3 text-sm focus:border-medical-blue focus:outline-none"
          />
          <button type="submit" className="btn-primary mt-4 w-full">Login</button>
          <p className="mt-3 text-center text-xs text-navy-400">Demo: heartcare2025</p>
          <Link href="/" className="mt-4 block text-center text-xs text-medical-blue hover:underline">← Back to Website</Link>
        </form>
      </div>
    );
  }

  if (!data) return null;

  return (
    <div className="flex min-h-screen bg-medical-blue-light/20">
      <aside className={cn(
        "fixed inset-y-0 left-0 z-40 w-64 transform bg-navy transition-transform lg:static lg:translate-x-0",
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="flex h-16 items-center gap-2 px-6">
          <Heart className="h-6 w-6 text-medical-blue" fill="currentColor" />
          <span className="font-display font-bold text-white">HeartCare CMS</span>
        </div>
        <nav className="mt-4 px-3">
          {sidebarItems.map((item) => (
            <button
              key={item.id}
              onClick={() => { setActiveTab(item.id); setSidebarOpen(false); }}
              className={cn(
                "flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                activeTab === item.id ? "bg-medical-blue/20 text-white" : "text-medical-silver hover:bg-white/5 hover:text-white"
              )}
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </button>
          ))}
        </nav>
        <button
          onClick={() => setAuthenticated(false)}
          className="absolute bottom-6 flex w-full items-center gap-3 px-6 text-sm text-medical-silver hover:text-white"
        >
          <LogOut className="h-4 w-4" /> Logout
        </button>
      </aside>

      <main className="flex-1 p-6 lg:p-8">
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="lg:hidden">
              <Menu className="h-6 w-6 text-navy" />
            </button>
            <h1 className="font-display text-2xl font-bold capitalize text-navy">{activeTab}</h1>
          </div>
          <Link href="/" className="text-sm text-medical-blue hover:underline">View Website →</Link>
        </div>

        {activeTab === "dashboard" && (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "Total Appointments", value: data.appointments.length, color: "bg-medical-blue" },
              { label: "Pending", value: data.appointments.filter((a) => a.status === "pending").length, color: "bg-accent-gold" },
              { label: "Services", value: data.services.length, color: "bg-accent-green" },
              { label: "Blog Posts", value: data.blogPosts.length, color: "bg-navy" },
            ].map((stat) => (
              <div key={stat.label} className="card-premium">
                <div className={cn("mb-3 h-2 w-12 rounded-full", stat.color)} />
                <p className="font-display text-3xl font-bold text-navy">{stat.value}</p>
                <p className="text-sm text-navy-400">{stat.label}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "appointments" && (
          <div className="card-premium overflow-x-auto">
            {data.appointments.length === 0 ? (
              <p className="text-center text-sm text-navy-400 py-8">No appointments yet. Book one from the website.</p>
            ) : (
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b text-left text-navy-400">
                    <th className="pb-3 pr-4">Patient</th>
                    <th className="pb-3 pr-4">Date/Time</th>
                    <th className="pb-3 pr-4">Type</th>
                    <th className="pb-3 pr-4">Status</th>
                    <th className="pb-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {data.appointments.map((appt: Appointment) => (
                    <tr key={appt.id} className="border-b border-medical-silver-light">
                      <td className="py-3 pr-4">
                        <p className="font-medium text-navy">{appt.patientName}</p>
                        <p className="text-xs text-navy-400">{appt.patientPhone}</p>
                      </td>
                      <td className="py-3 pr-4">{appt.date} {appt.time}</td>
                      <td className="py-3 pr-4">{appt.consultationType}</td>
                      <td className="py-3 pr-4">
                        <span className={cn(
                          "rounded-full px-2 py-0.5 text-xs font-medium",
                          appt.status === "confirmed" ? "bg-accent-green/10 text-accent-green" :
                          appt.status === "cancelled" ? "bg-accent-red/10 text-accent-red" :
                          "bg-accent-gold/10 text-accent-gold"
                        )}>{appt.status}</span>
                      </td>
                      <td className="py-3 flex gap-1">
                        <button onClick={() => { updateAppointmentStatus(appt.id, "confirmed"); refresh(); }} className="rounded p-1 hover:bg-accent-green/10"><Check className="h-4 w-4 text-accent-green" /></button>
                        <button onClick={() => { updateAppointmentStatus(appt.id, "cancelled"); refresh(); }} className="rounded p-1 hover:bg-accent-red/10"><X className="h-4 w-4 text-accent-red" /></button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        )}

        {activeTab === "doctors" && (
          <div className="space-y-4">
            {data.doctors.map((doc, i) => (
              <div key={i} className="card-premium flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-medical-blue-light font-display font-bold text-medical-blue">
                  {doc.name.split(" ").pop()?.[0]}
                </div>
                <div>
                  <p className="font-semibold text-navy">{doc.name}</p>
                  <p className="text-sm text-navy-400">{doc.title} · {doc.experience}</p>
                </div>
              </div>
            ))}
            <p className="text-xs text-navy-400">Doctor profiles are managed in the CMS data layer. Extend with add/edit forms for production.</p>
          </div>
        )}

        {activeTab === "services" && (
          <div className="grid gap-4 md:grid-cols-2">
            {data.services.map((s) => (
              <div key={s.slug} className="card-premium">
                <h3 className="font-semibold text-navy">{s.title}</h3>
                <p className="mt-1 text-xs text-navy-400">{s.shortDescription.slice(0, 100)}...</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "blog" && (
          <div className="space-y-4">
            {data.blogPosts.map((post) => (
              <div key={post.slug} className="card-premium flex items-center justify-between">
                <div>
                  <p className="font-semibold text-navy">{post.title}</p>
                  <p className="text-xs text-navy-400">{post.category} · {post.date}</p>
                </div>
                <span className="rounded-full bg-medical-blue-light px-3 py-1 text-xs text-medical-blue">{post.readTime}</span>
              </div>
            ))}
          </div>
        )}

        {activeTab === "testimonials" && (
          <div className="space-y-4">
            {data.testimonials.map((t) => (
              <div key={t.id} className="card-premium">
                <p className="font-semibold text-navy">{t.name} — {t.condition}</p>
                <p className="mt-1 text-sm text-navy-400">&ldquo;{t.quote.slice(0, 150)}...&rdquo;</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "faqs" && (
          <div className="space-y-3">
            {data.faqs.map((faq) => (
              <div key={faq.id} className="card-premium !py-4">
                <span className="text-xs font-medium text-medical-blue">{faq.category}</span>
                <p className="font-medium text-navy">{faq.question}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "settings" && (
          <div className="card-premium space-y-4">
            <h3 className="font-display font-semibold text-navy">Clinic Information</h3>
            {[
              ["Clinic Name", data.clinicInfo.name],
              ["Phone", data.clinicInfo.contact.phone],
              ["Emergency", data.clinicInfo.contact.emergency],
              ["Email", data.clinicInfo.contact.email],
              ["Address", data.clinicInfo.location.address],
              ["Hours", data.clinicInfo.hours.weekdays],
            ].map(([label, value]) => (
              <div key={label} className="flex justify-between border-b border-medical-silver-light pb-3 text-sm">
                <span className="text-navy-400">{label}</span>
                <span className="font-medium text-navy text-right max-w-xs">{value}</span>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

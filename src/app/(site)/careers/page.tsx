"use client";

import { useState } from "react";
import { MapPin, Briefcase, Send } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import { jobPositions, clinicCulture } from "@/data/careers";

export default function CareersPage() {
  const [submitted, setSubmitted] = useState(false);
  const [selectedJob, setSelectedJob] = useState("");
  const [form, setForm] = useState({ name: "", email: "", phone: "", experience: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <PageHero
        label="Careers"
        title="Join Our Team"
        description="Help us save lives. Join a passionate team dedicated to world-class cardiac care in Jaipur."
      />

      <Section label="Our Culture" title="Why Work at HeartCare">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {clinicCulture.values.map((v) => (
            <div key={v.title} className="reveal-item card-premium">
              <h3 className="font-display font-semibold text-navy">{v.title}</h3>
              <p className="mt-2 text-sm text-navy-400">{v.description}</p>
            </div>
          ))}
        </div>
        <div className="reveal-item mt-8">
          <h3 className="font-display font-semibold text-navy">Employee Benefits</h3>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {clinicCulture.benefits.map((b) => (
              <li key={b} className="flex items-center gap-2 text-sm text-navy-600">
                <span className="h-1.5 w-1.5 rounded-full bg-medical-blue" />
                {b}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section label="Open Positions" title="Current Openings" dark>
        <div className="space-y-6">
          {jobPositions.map((job) => (
            <div key={job.id} className="reveal-item rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="font-display text-lg font-semibold text-white">{job.title}</h3>
                  <div className="mt-2 flex flex-wrap gap-3 text-xs text-medical-silver">
                    <span className="flex items-center gap-1"><Briefcase className="h-3 w-3" />{job.department}</span>
                    <span>{job.type}</span>
                    <span className="flex items-center gap-1"><MapPin className="h-3 w-3" />{job.location}</span>
                  </div>
                  <p className="mt-3 text-sm text-medical-silver">{job.description}</p>
                </div>
                <button
                  onClick={() => setSelectedJob(job.title)}
                  className="btn-accent shrink-0 !text-xs"
                >
                  Apply Now
                </button>
              </div>
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="text-xs font-semibold uppercase text-medical-blue">Requirements</h4>
                  <ul className="mt-2 space-y-1">
                    {job.requirements.map((r) => (
                      <li key={r} className="text-xs text-medical-silver">• {r}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase text-medical-blue">Responsibilities</h4>
                  <ul className="mt-2 space-y-1">
                    {job.responsibilities.map((r) => (
                      <li key={r} className="text-xs text-medical-silver">• {r}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <section className="section-padding">
        <div className="container-custom mx-auto max-w-2xl">
          <h2 className="heading-section text-center">Application Form</h2>
          {selectedJob && (
            <p className="mt-2 text-center text-sm text-medical-blue">Applying for: {selectedJob}</p>
          )}
          {submitted ? (
            <div className="mt-8 card-premium text-center">
              <p className="font-display text-lg font-semibold text-navy">Application Submitted!</p>
              <p className="mt-2 text-sm text-navy-400">Our HR team will review and contact you within 5 business days.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 space-y-4">
              {[
                { name: "name", label: "Full Name", type: "text" },
                { name: "email", label: "Email", type: "email" },
                { name: "phone", label: "Phone", type: "tel" },
                { name: "experience", label: "Years of Experience", type: "text" },
              ].map((f) => (
                <div key={f.name}>
                  <label className="mb-1 block text-sm font-medium text-navy">{f.label}</label>
                  <input
                    type={f.type}
                    required
                    value={form[f.name as keyof typeof form]}
                    onChange={(e) => setForm({ ...form, [f.name]: e.target.value })}
                    className="w-full rounded-xl border border-medical-silver-light px-4 py-3 text-sm focus:border-medical-blue focus:outline-none"
                  />
                </div>
              ))}
              <div>
                <label className="mb-1 block text-sm font-medium text-navy">Cover Letter</label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full rounded-xl border border-medical-silver-light px-4 py-3 text-sm focus:border-medical-blue focus:outline-none"
                />
              </div>
              <button type="submit" className="btn-primary w-full">
                <Send className="h-4 w-4" /> Submit Application
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}

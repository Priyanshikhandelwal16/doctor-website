"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Calendar, Clock, User, CheckCircle, ChevronRight, ChevronLeft } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import { clinicInfo } from "@/data/clinic";
import { generateTimeSlots } from "@/lib/utils";
import { addAppointment } from "@/lib/cms";
import { cn } from "@/lib/utils";

const consultationTypes = [
  { id: "initial", label: "Initial Consultation", price: "₹1,500", duration: "30-45 min" },
  { id: "followup", label: "Follow-up Consultation", price: "₹1,000", duration: "15-20 min" },
  { id: "preventive", label: "Preventive Health Check", price: "₹4,500", duration: "60 min" },
  { id: "second-opinion", label: "Second Opinion", price: "₹2,000", duration: "45 min" },
  { id: "teleconsult", label: "Teleconsultation", price: "₹800", duration: "20 min" },
];

const steps = ["Consultation", "Date & Time", "Your Details", "Confirmation"];

export default function AppointmentPage() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    doctor: clinicInfo.doctor.name,
    consultationType: "",
    date: "",
    time: "",
    patientName: "",
    patientPhone: "",
    patientEmail: "",
    patientAge: "",
    symptoms: "",
  });

  const timeSlots = generateTimeSlots();
  const minDate = new Date().toISOString().split("T")[0];

  const updateForm = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const canProceed = () => {
    switch (step) {
      case 0: return !!form.consultationType;
      case 1: return !!form.date && !!form.time;
      case 2: return !!form.patientName && !!form.patientPhone && !!form.patientAge;
      default: return true;
    }
  };

  const handleSubmit = () => {
    addAppointment(form);
    router.push("/appointment/success");
  };

  return (
    <>
      <PageHero
        label="Book Appointment"
        title="Schedule Your Consultation"
        description="Book an appointment with Dr. Arjun Mehta in just a few simple steps."
      />

      <section className="section-padding">
        <div className="container-custom mx-auto max-w-3xl">
          {/* Progress */}
          <div className="mb-10 flex items-center justify-between">
            {steps.map((s, i) => (
              <div key={s} className="flex flex-1 items-center">
                <div className={cn(
                  "flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold",
                  i <= step ? "bg-navy text-white" : "bg-medical-silver-light text-navy-400"
                )}>
                  {i < step ? <CheckCircle className="h-4 w-4" /> : i + 1}
                </div>
                <span className={cn("ml-2 hidden text-xs font-medium sm:inline", i <= step ? "text-navy" : "text-navy-400")}>
                  {s}
                </span>
                {i < steps.length - 1 && (
                  <div className={cn("mx-2 h-px flex-1", i < step ? "bg-navy" : "bg-medical-silver-light")} />
                )}
              </div>
            ))}
          </div>

          <div className="card-premium">
            {step === 0 && (
              <div>
                <h2 className="font-display text-xl font-semibold text-navy">Choose Consultation Type</h2>
                <p className="mt-1 text-sm text-navy-400">Select the type of consultation you need</p>
                <div className="mt-6 space-y-3">
                  <div className="mb-4 rounded-xl bg-medical-blue-light/50 p-4">
                    <div className="flex items-center gap-3">
                      <User className="h-5 w-5 text-medical-blue" />
                      <div>
                        <p className="font-semibold text-navy">{form.doctor}</p>
                        <p className="text-xs text-navy-400">{clinicInfo.doctor.title}</p>
                      </div>
                    </div>
                  </div>
                  {consultationTypes.map((type) => (
                    <button
                      key={type.id}
                      onClick={() => updateForm("consultationType", type.label)}
                      className={cn(
                        "flex w-full items-center justify-between rounded-xl border-2 p-4 text-left transition-all",
                        form.consultationType === type.label
                          ? "border-medical-blue bg-medical-blue-light/30"
                          : "border-medical-silver-light hover:border-medical-blue/50"
                      )}
                    >
                      <div>
                        <p className="font-semibold text-navy">{type.label}</p>
                        <p className="text-xs text-navy-400">{type.duration}</p>
                      </div>
                      <span className="font-display font-bold text-medical-blue">{type.price}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 1 && (
              <div>
                <h2 className="font-display text-xl font-semibold text-navy">Choose Date & Time</h2>
                <div className="mt-6 grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-2 flex items-center gap-2 text-sm font-medium text-navy">
                      <Calendar className="h-4 w-4" /> Select Date
                    </label>
                    <input
                      type="date"
                      min={minDate}
                      value={form.date}
                      onChange={(e) => updateForm("date", e.target.value)}
                      className="w-full rounded-xl border border-medical-silver-light px-4 py-3 text-sm focus:border-medical-blue focus:outline-none focus:ring-2 focus:ring-medical-blue/20"
                    />
                  </div>
                  <div>
                    <label className="mb-2 flex items-center gap-2 text-sm font-medium text-navy">
                      <Clock className="h-4 w-4" /> Select Time
                    </label>
                    <div className="grid grid-cols-3 gap-2 max-h-48 overflow-y-auto">
                      {timeSlots.map((slot) => (
                        <button
                          key={slot}
                          onClick={() => updateForm("time", slot)}
                          className={cn(
                            "rounded-lg border px-2 py-2 text-xs font-medium transition-all",
                            form.time === slot
                              ? "border-medical-blue bg-medical-blue text-white"
                              : "border-medical-silver-light text-navy hover:border-medical-blue"
                          )}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div>
                <h2 className="font-display text-xl font-semibold text-navy">Patient Details</h2>
                <div className="mt-6 space-y-4">
                  {[
                    { field: "patientName", label: "Full Name", type: "text", required: true },
                    { field: "patientPhone", label: "Phone Number", type: "tel", required: true },
                    { field: "patientEmail", label: "Email Address", type: "email", required: false },
                    { field: "patientAge", label: "Age", type: "number", required: true },
                  ].map((input) => (
                    <div key={input.field}>
                      <label className="mb-1 block text-sm font-medium text-navy">
                        {input.label} {input.required && <span className="text-accent-red">*</span>}
                      </label>
                      <input
                        type={input.type}
                        value={form[input.field as keyof typeof form]}
                        onChange={(e) => updateForm(input.field, e.target.value)}
                        className="w-full rounded-xl border border-medical-silver-light px-4 py-3 text-sm focus:border-medical-blue focus:outline-none focus:ring-2 focus:ring-medical-blue/20"
                      />
                    </div>
                  ))}
                  <div>
                    <label className="mb-1 block text-sm font-medium text-navy">Symptoms / Reason for Visit</label>
                    <textarea
                      value={form.symptoms}
                      onChange={(e) => updateForm("symptoms", e.target.value)}
                      rows={3}
                      className="w-full rounded-xl border border-medical-silver-light px-4 py-3 text-sm focus:border-medical-blue focus:outline-none focus:ring-2 focus:ring-medical-blue/20"
                      placeholder="Briefly describe your symptoms or reason for visit..."
                    />
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div>
                <h2 className="font-display text-xl font-semibold text-navy">Confirm Your Appointment</h2>
                <div className="mt-6 space-y-4 rounded-xl bg-medical-blue-light/30 p-6">
                  {[
                    ["Doctor", form.doctor],
                    ["Consultation", form.consultationType],
                    ["Date", form.date],
                    ["Time", form.time],
                    ["Patient", form.patientName],
                    ["Phone", form.patientPhone],
                    ["Age", form.patientAge],
                  ].map(([label, value]) => (
                    <div key={label} className="flex justify-between text-sm">
                      <span className="text-navy-400">{label}</span>
                      <span className="font-medium text-navy">{value}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-xs text-navy-400">
                  By confirming, you agree to our terms. You will receive SMS and email confirmation shortly.
                </p>
              </div>
            )}

            <div className="mt-8 flex justify-between">
              {step > 0 ? (
                <button onClick={() => setStep(step - 1)} className="btn-secondary !py-2.5">
                  <ChevronLeft className="h-4 w-4" /> Back
                </button>
              ) : <div />}
              {step < 3 ? (
                <button
                  onClick={() => setStep(step + 1)}
                  disabled={!canProceed()}
                  className="btn-primary !py-2.5 disabled:opacity-50"
                >
                  Continue <ChevronRight className="h-4 w-4" />
                </button>
              ) : (
                <button onClick={handleSubmit} className="btn-accent !py-2.5">
                  <CheckCircle className="h-4 w-4" /> Confirm Appointment
                </button>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import { clinicInfo } from "@/data/clinic";
import { services } from "@/data/services";
import { faqs } from "@/data/faqs";
import { blogPosts } from "@/data/blog";
import { testimonials } from "@/data/testimonials";
import { generateId } from "./utils";

export interface Appointment {
  id: string;
  doctor: string;
  date: string;
  time: string;
  consultationType: string;
  patientName: string;
  patientPhone: string;
  patientEmail: string;
  patientAge: string;
  symptoms: string;
  status: "pending" | "confirmed" | "cancelled";
  createdAt: string;
}

export interface CMSData {
  doctors: typeof clinicInfo.doctor[];
  services: typeof services;
  appointments: Appointment[];
  blogPosts: typeof blogPosts;
  testimonials: typeof testimonials;
  faqs: typeof faqs;
  clinicInfo: typeof clinicInfo;
}

const defaultData: CMSData = {
  doctors: [clinicInfo.doctor],
  services,
  appointments: [],
  blogPosts,
  testimonials,
  faqs,
  clinicInfo,
};

const STORAGE_KEY = "heartcare_cms_data";

export function getCMSData(): CMSData {
  if (typeof window === "undefined") return defaultData;
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return { ...defaultData, ...JSON.parse(stored) };
  } catch {
    /* use defaults */
  }
  return defaultData;
}

export function saveCMSData(data: Partial<CMSData>): CMSData {
  const current = getCMSData();
  const updated = { ...current, ...data };
  if (typeof window !== "undefined") {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  }
  return updated;
}

export function addAppointment(appointment: Omit<Appointment, "id" | "createdAt" | "status">): Appointment {
  const data = getCMSData();
  const newAppt: Appointment = {
    ...appointment,
    id: generateId(),
    status: "pending",
    createdAt: new Date().toISOString(),
  };
  data.appointments.push(newAppt);
  saveCMSData({ appointments: data.appointments });
  return newAppt;
}

export function updateAppointmentStatus(id: string, status: Appointment["status"]) {
  const data = getCMSData();
  data.appointments = data.appointments.map((a) => (a.id === id ? { ...a, status } : a));
  saveCMSData({ appointments: data.appointments });
}

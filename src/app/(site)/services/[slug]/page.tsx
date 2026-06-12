import { notFound } from "next/navigation";
import Link from "next/link";
import { Calendar, ArrowLeft } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import AppointmentCTA from "@/components/ui/AppointmentCTA";
import { services, getServiceBySlug } from "@/data/services";
import { createMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return createMetadata({
    title: service.title,
    description: service.shortDescription,
    path: `/services/${slug}`,
  });
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const sections = [
    { title: "Overview", content: service.overview, type: "text" as const },
    { title: "Symptoms", items: service.symptoms, type: "list" as const },
    { title: "Causes", items: service.causes, type: "list" as const },
    { title: "Diagnosis", items: service.diagnosis, type: "list" as const },
    { title: "Treatment Options", items: service.treatmentOptions, type: "list" as const },
    { title: "Recovery Process", items: service.recovery, type: "list" as const },
  ];

  return (
    <>
      <PageHero
        label="Cardiology Service"
        title={service.title}
        description={service.shortDescription}
        cta={{ label: "Book Appointment", href: "/appointment" }}
      />

      <section className="section-padding">
        <div className="container-custom">
          <Link href="/services" className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-medical-blue hover:text-navy">
            <ArrowLeft className="h-4 w-4" /> Back to Services
          </Link>

          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-10">
              {sections.map((section) => (
                <div key={section.title}>
                  <h2 className="font-display text-xl font-semibold text-navy">{section.title}</h2>
                  {section.type === "text" ? (
                    <p className="mt-3 text-body">{section.content}</p>
                  ) : (
                    <ul className="mt-3 space-y-2">
                      {section.items!.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-navy-600">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-medical-blue" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}

              {service.faqs.length > 0 && (
                <div>
                  <h2 className="font-display text-xl font-semibold text-navy">FAQs</h2>
                  <div className="mt-4">
                    {service.faqs.map((faq) => (
                      <FAQAccordion key={faq.question} question={faq.question} answer={faq.answer} />
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24 rounded-2xl bg-navy p-6 text-white">
                <h3 className="font-display text-lg font-semibold">Book a Consultation</h3>
                <p className="mt-2 text-sm text-medical-silver">
                  Discuss {service.title.toLowerCase()} with Dr. Arjun Mehta
                </p>
                <Link href="/appointment" className="btn-accent mt-6 w-full">
                  <Calendar className="h-4 w-4" />
                  Book Appointment
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AppointmentCTA />
    </>
  );
}

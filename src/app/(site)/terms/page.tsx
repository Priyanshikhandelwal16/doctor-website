import PageHero from "@/components/ui/PageHero";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Terms & Conditions",
  description: "Terms and conditions for HeartCare Advanced Cardiac Centre, Jaipur.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <PageHero label="Legal" title="Terms & Conditions" />
      <section className="section-padding">
        <div className="container-custom mx-auto max-w-3xl">
          <p className="text-sm text-navy-400">Last updated: June 2025</p>

          {[
            { title: "1. Acceptance of Terms", content: "By accessing heartcarejaipur.com and using our services, you agree to these terms. If you disagree, please do not use our website or services." },
            { title: "2. Medical Disclaimer", content: "Information on this website is for educational purposes only and does not constitute medical advice. Always consult Dr. Arjun Mehta or a qualified physician for diagnosis and treatment. In emergencies, call +91 98290 12345 immediately." },
            { title: "3. Appointments", content: "Online appointments are subject to confirmation. We reserve the right to reschedule due to emergencies. Cancellation requires 24-hour notice. No-show fees may apply for repeated missed appointments." },
            { title: "4. Fees & Payment", content: "Consultation and procedure fees are communicated before treatment. Payment is due at the time of service unless prior insurance authorization is obtained. EMI options are subject to third-party approval." },
            { title: "5. Limitation of Liability", content: "While we maintain the highest clinical standards, medical outcomes cannot be guaranteed. HeartCare Advanced Cardiac Centre is not liable for indirect damages arising from website use or third-party services." },
            { title: "6. Intellectual Property", content: "All website content, logos, and materials are owned by HeartCare Advanced Cardiac Centre. Reproduction without written permission is prohibited." },
            { title: "7. Governing Law", content: "These terms are governed by the laws of India. Disputes shall be subject to the jurisdiction of courts in Jaipur, Rajasthan." },
          ].map((section) => (
            <div key={section.title} className="mt-8">
              <h2 className="font-display text-xl font-semibold text-navy">{section.title}</h2>
              <p className="mt-3 text-body">{section.content}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

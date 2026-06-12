import PageHero from "@/components/ui/PageHero";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Privacy Policy",
  description: "Privacy policy for HeartCare Advanced Cardiac Centre, Jaipur.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero label="Legal" title="Privacy Policy" />
      <section className="section-padding">
        <div className="container-custom mx-auto max-w-3xl prose prose-navy">
          <p className="text-sm text-navy-400">Last updated: June 2025</p>
          
          <h2 className="mt-8 font-display text-xl font-semibold">1. Information We Collect</h2>
          <p className="mt-3 text-body">We collect personal information you provide when booking appointments, contacting us, or using our website — including name, phone number, email, age, medical history, and payment information.</p>

          <h2 className="mt-8 font-display text-xl font-semibold">2. How We Use Your Information</h2>
          <p className="mt-3 text-body">Your information is used to schedule appointments, provide medical care, send confirmations, process payments, improve our services, and comply with legal obligations under the Digital Personal Data Protection Act, 2023.</p>

          <h2 className="mt-8 font-display text-xl font-semibold">3. Medical Data Protection</h2>
          <p className="mt-3 text-body">All medical records are stored securely with access restricted to authorized healthcare personnel. We comply with Indian Medical Council regulations regarding patient confidentiality.</p>

          <h2 className="mt-8 font-display text-xl font-semibold">4. Data Sharing</h2>
          <p className="mt-3 text-body">We do not sell your personal data. Information may be shared with insurance providers (with consent), diagnostic laboratories, and referral hospitals as necessary for your care.</p>

          <h2 className="mt-8 font-display text-xl font-semibold">5. Your Rights</h2>
          <p className="mt-3 text-body">You have the right to access, correct, or request deletion of your personal data. Contact us at care@heartcarejaipur.com for data-related requests.</p>

          <h2 className="mt-8 font-display text-xl font-semibold">6. Contact</h2>
          <p className="mt-3 text-body">HeartCare Advanced Cardiac Centre, 3rd Floor, C-Scheme Medical Plaza, Bhagwan Das Road, Jaipur 302001. Email: care@heartcarejaipur.com</p>
        </div>
      </section>
    </>
  );
}

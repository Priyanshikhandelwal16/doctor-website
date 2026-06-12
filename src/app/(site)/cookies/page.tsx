import PageHero from "@/components/ui/PageHero";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Cookie Policy",
  description: "Cookie policy for HeartCare Advanced Cardiac Centre website.",
  path: "/cookies",
});

export default function CookiesPage() {
  return (
    <>
      <PageHero label="Legal" title="Cookie Policy" />
      <section className="section-padding">
        <div className="container-custom mx-auto max-w-3xl">
          <p className="text-sm text-navy-400">Last updated: June 2025</p>

          {[
            { title: "What Are Cookies", content: "Cookies are small text files stored on your device when you visit our website. They help us provide a better experience and understand how our site is used." },
            { title: "Cookies We Use", content: "Essential cookies (required for site functionality), Analytics cookies (Google Analytics to understand visitor behaviour), Preference cookies (remember your settings), and Marketing cookies (only with your consent)." },
            { title: "Managing Cookies", content: "You can control cookies through your browser settings. Disabling essential cookies may affect website functionality. To opt out of analytics, use your browser's Do Not Track setting or our cookie preference centre." },
            { title: "Third-Party Cookies", content: "We use Google Maps (embedded maps), Google Analytics, and WhatsApp integration which may set their own cookies. Please refer to their respective privacy policies." },
            { title: "Contact", content: "For cookie-related inquiries, email care@heartcarejaipur.com or call +91 141 256 7890." },
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

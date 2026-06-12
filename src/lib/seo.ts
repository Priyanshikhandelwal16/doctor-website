import type { Metadata } from "next";

interface SEOProps {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
}

export function createMetadata({ title, description, path = "", image }: SEOProps): Metadata {
  const siteName = "HeartCare Advanced Cardiac Centre";
  const siteUrl = "https://heartcarejaipur.com";
  const fullTitle = title ? `${title} | ${siteName}` : "Dr. Arjun Mehta | Interventional Cardiologist in Jaipur";
  const desc =
    description ||
    "Expert interventional cardiology care by Dr. Arjun Mehta in Jaipur. Angioplasty, heart blockage treatment, preventive cardiac care & 24/7 emergency support.";

  return {
    title: fullTitle,
    description: desc,
    keywords: [
      "cardiologist Jaipur",
      "interventional cardiologist",
      "Dr Arjun Mehta",
      "heart specialist Jaipur",
      "angioplasty Jaipur",
      "HeartCare cardiac centre",
    ],
    openGraph: {
      title: fullTitle,
      description: desc,
      url: `${siteUrl}${path}`,
      siteName,
      locale: "en_IN",
      type: "website",
      ...(image && { images: [{ url: image }] }),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: desc,
    },
    alternates: {
      canonical: `${siteUrl}${path}`,
    },
  };
}

export function physicianSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: "Dr. Arjun Mehta",
    medicalSpecialty: "Interventional Cardiology",
    description: "Interventional Cardiologist with 18+ years experience in Jaipur, Rajasthan",
    url: "https://heartcarejaipur.com",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&h=800&fit=crop",
    telephone: "+91-141-256-7890",
    address: {
      "@type": "PostalAddress",
      streetAddress: "3rd Floor, C-Scheme Medical Plaza, Bhagwan Das Road",
      addressLocality: "Jaipur",
      addressRegion: "Rajasthan",
      postalCode: "302001",
      addressCountry: "IN",
    },
    worksFor: {
      "@type": "MedicalClinic",
      name: "HeartCare Advanced Cardiac Centre",
    },
  };
}

export function medicalClinicSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: "HeartCare Advanced Cardiac Centre",
    description: "Premium interventional cardiology centre in Jaipur",
    url: "https://heartcarejaipur.com",
    telephone: "+91-141-256-7890",
    address: {
      "@type": "PostalAddress",
      streetAddress: "3rd Floor, C-Scheme Medical Plaza, Bhagwan Das Road",
      addressLocality: "Jaipur",
      addressRegion: "Rajasthan",
      postalCode: "302001",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 26.9124,
      longitude: 75.7873,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "19:00",
      },
    ],
    medicalSpecialty: "Cardiology",
  };
}

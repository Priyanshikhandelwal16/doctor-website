import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Patient Success Stories",
  description: "Real patient recovery stories and testimonials from HeartCare Advanced Cardiac Centre, Jaipur.",
  path: "/success-stories",
});

export default function SuccessStoriesLayout({ children }: { children: React.ReactNode }) {
  return children;
}

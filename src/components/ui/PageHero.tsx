import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface PageHeroProps {
  label?: string;
  title: string;
  description?: string;
  cta?: { label: string; href: string };
}

export default function PageHero({ label, title, description, cta }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-navy pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-medical-blue blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-96 w-96 rounded-full bg-medical-blue blur-3xl" />
      </div>
      <div className="container-custom relative">
        {label && <span className="section-label !text-medical-blue-soft">{label}</span>}
        <h1 className="heading-display max-w-3xl text-white">{title}</h1>
        {description && (
          <p className="mt-4 max-w-2xl text-lg text-medical-silver">{description}</p>
        )}
        {cta && (
          <Link href={cta.href} className="btn-accent mt-8">
            {cta.label}
            <ArrowRight className="h-4 w-4" />
          </Link>
        )}
      </div>
    </section>
  );
}

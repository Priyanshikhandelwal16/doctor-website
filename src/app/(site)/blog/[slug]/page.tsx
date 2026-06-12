import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock } from "lucide-react";
import AppointmentCTA from "@/components/ui/AppointmentCTA";
import { blogPosts, getBlogBySlug } from "@/data/blog";
import { formatDate } from "@/lib/utils";
import { createMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) return {};
  return createMetadata({ title: post.title, description: post.excerpt, path: `/blog/${slug}`, image: post.image });
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <section className="bg-navy pt-32 pb-12">
        <div className="container-custom mx-auto max-w-3xl">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-medical-silver hover:text-white">
            <ArrowLeft className="h-4 w-4" /> Back to Blog
          </Link>
          <span className="mt-6 inline-block rounded-full bg-medical-blue/20 px-3 py-1 text-xs font-medium text-medical-blue-soft">
            {post.category}
          </span>
          <h1 className="mt-4 font-display text-3xl font-bold text-white md:text-4xl">{post.title}</h1>
          <div className="mt-4 flex items-center gap-4 text-sm text-medical-silver">
            <span>By {post.author}</span>
            <span>·</span>
            <span>{formatDate(post.date)}</span>
            <span>·</span>
            <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{post.readTime} read</span>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom mx-auto max-w-3xl">
          <div className="relative mb-10 h-64 overflow-hidden rounded-2xl md:h-80">
            <Image src={post.image} alt={post.title} fill className="object-cover" />
          </div>
          <article className="prose prose-navy max-w-none">
            {post.content.split("\n\n").map((para, i) => {
              if (para.startsWith("**") && para.endsWith("**")) {
                return <h2 key={i} className="mt-8 font-display text-xl font-semibold text-navy">{para.replace(/\*\*/g, "")}</h2>;
              }
              return <p key={i} className="mt-4 text-body leading-relaxed">{para.replace(/\*\*(.*?)\*\*/g, "$1")}</p>;
            })}
          </article>
        </div>
      </section>

      <AppointmentCTA variant="compact" title="Concerned About Your Heart Health?" description="Book a consultation with Dr. Arjun Mehta for personalized expert advice." />
    </>
  );
}

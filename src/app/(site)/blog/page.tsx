import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import { blogPosts, blogCategories } from "@/data/blog";
import { formatDate } from "@/lib/utils";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Heart Health Blog",
  description: "Expert cardiology articles on heart health, blood pressure, diet, exercise & senior health by Dr. Arjun Mehta.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <PageHero
        label="Heart Health Blog"
        title="Expert Cardiology Insights"
        description="Evidence-based articles on heart health, written and reviewed by Dr. Arjun Mehta."
      />

      <section className="section-padding">
        <div className="container-custom">
          <div className="mb-8 flex flex-wrap gap-2">
            {blogCategories.map((cat) => (
              <span key={cat} className="rounded-full bg-medical-blue-light px-4 py-1.5 text-xs font-medium text-medical-blue">
                {cat}
              </span>
            ))}
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="card-premium group overflow-hidden !p-0">
                <div className="relative h-48 overflow-hidden">
                  <Image src={post.image} alt={post.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-medical-blue">
                    {post.category}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-navy-400">
                    <span>{formatDate(post.date)}</span>
                    <span>·</span>
                    <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{post.readTime}</span>
                  </div>
                  <h2 className="mt-2 font-display text-lg font-semibold text-navy group-hover:text-medical-blue">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-sm text-navy-400">{post.excerpt}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-medical-blue">
                    Read Article <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

import { getCaseBySlug, getAllCases } from "@/lib/cases";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import Navbar from "@/components/Navbar";
import FadeIn from "@/components/FadeIn";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export async function generateStaticParams() {
    const cases = getAllCases();
    return cases.map((c) => ({
        slug: c.slug,
    }));
}

export default async function CasePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const caseStudy = getCaseBySlug(slug);

    if (!caseStudy) {
        notFound();
    }

    return (
        <div className="min-h-screen p-8 sm:p-20 font-serif pt-32 sm:pt-40">
            <Navbar />

            <main className="max-w-3xl mx-auto space-y-16">
                <FadeIn delay={0.1}>
                    <div className="mb-8">
                        <Link href="/cases" className="text-sm uppercase tracking-widest text-neutral-500 hover:text-black transition-colors inline-flex items-center gap-2">
                            <ArrowLeft className="w-4 h-4" /> Back to Cases
                        </Link>
                    </div>
                </FadeIn>

                <FadeIn delay={0.2}>
                    <div className="space-y-6 border-b border-neutral-400/30 pb-12">
                        <div className="flex items-center gap-4 text-sm text-neutral-500">
                            {caseStudy.tags.map((tag, i) => (
                                <span key={tag}>
                                    {tag}
                                    {i < caseStudy.tags.length - 1 && <span className="mx-2">•</span>}
                                </span>
                            ))}
                            <span className="w-8 h-[1px] bg-neutral-400"></span>
                            <span>{caseStudy.year}</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-medium leading-tight">
                            {caseStudy.title}
                        </h1>
                        <p className="text-xl text-neutral-600 leading-relaxed">
                            {caseStudy.excerpt}
                        </p>
                    </div>
                </FadeIn>

                <div className="space-y-12 text-lg leading-relaxed text-neutral-800 markdown-content">
                    <FadeIn delay={0.3}>
                        <ReactMarkdown
                            components={{
                                h2: ({ node, ...props }) => <h2 className="text-2xl font-medium mb-4 mt-12 first:mt-0" {...props} />,
                                p: ({ node, ...props }) => <p className="mb-6" {...props} />,
                                ul: ({ node, ...props }) => <ul className="list-disc pl-5 space-y-2 mb-6" {...props} />,
                                li: ({ node, ...props }) => <li className="" {...props} />,
                                strong: ({ node, ...props }) => <strong className="font-semibold" {...props} />,
                                blockquote: ({ node, ...props }) => (
                                    <div className="bg-neutral-900/5 p-8 border-l-2 border-neutral-900/20 italic text-neutral-700 mt-8">
                                        {props.children}
                                    </div>
                                ),
                            }}
                        >
                            {caseStudy.content}
                        </ReactMarkdown>
                    </FadeIn>
                </div>
            </main>

            <FadeIn>
                <footer className="mt-32 pt-8 border-t border-neutral-400/30 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-500 gap-4">
                    <span>© 2026 Mirza Aydemir</span>
                    <span>{caseStudy.title} Case Study</span>
                </footer>
            </FadeIn>
        </div>
    );
}

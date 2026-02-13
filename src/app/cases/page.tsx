import { getAllCases } from "@/lib/cases";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import Navbar from "@/components/Navbar";

export const metadata = {
    title: "Cases | Mirza Aydemir",
    description: "Selected cases and research projects.",
};

export default function CasesPage() {
    const cases = getAllCases();
    const allCases = cases.sort((a, b) => parseInt(b.year) - parseInt(a.year));

    return (
        <div className="min-h-screen p-8 sm:p-20 font-serif pt-32 sm:pt-40">
            <Navbar />

            <main className="max-w-4xl mx-auto space-y-20">
                <FadeIn>
                    <h1 className="text-4xl md:text-5xl font-medium mb-4">Selected Cases</h1>
                    <p className="text-xl text-neutral-600 max-w-2xl leading-relaxed">
                        Deep dives into financial anomalies, market structure, and policy impacts.
                    </p>
                </FadeIn>

                <div className="space-y-24">
                    {allCases.map((item, index) => (
                        <FadeIn key={item.slug} delay={index * 0.1}>
                            <article className="group">
                                <div className="flex items-center gap-4 text-sm text-neutral-500 mb-4">
                                    <span className="font-serif italic text-lg text-neutral-400">II</span>
                                    <span className="w-8 h-[1px] bg-neutral-400"></span>
                                    <span>{item.year}</span>
                                </div>

                                <h2 className="text-3xl font-medium mb-6 group-hover:text-neutral-600 transition-colors">
                                    {item.title}
                                </h2>

                                <p className="text-lg leading-relaxed text-neutral-800 mb-8 max-w-3xl">
                                    {item.excerpt}
                                </p>

                                {item.finding && (
                                    <div className="bg-neutral-900/5 p-8 border-l-2 border-neutral-900/20 italic text-neutral-700">
                                        <span className="text-xs font-bold tracking-widest uppercase text-neutral-500 block mb-2 not-italic">Key Finding</span>
                                        {item.finding}
                                    </div>
                                )}

                                <div className="mt-8">
                                    <Link href={`/cases/${item.slug}`} className="inline-flex items-center gap-2 text-sm uppercase tracking-widest border-b border-black pb-1 hover:text-neutral-600 hover:border-neutral-600 transition-colors cursor-pointer">
                                        Read Case Study <ArrowUpRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </article>
                        </FadeIn>
                    ))}
                </div>
            </main>

            <FadeIn>
                <footer className="mt-32 pt-8 border-t border-neutral-400/30 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-500 gap-4">
                    <span>© 2026 Mirza Aydemir</span>
                    <span className="italic">"The market is a device for transferring money from the impatient to the patient."</span>
                </footer>
            </FadeIn>
        </div>
    );
}

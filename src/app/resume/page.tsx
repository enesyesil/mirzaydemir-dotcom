"use client";

import FadeIn from "@/components/FadeIn";
import ResumeSection from "@/components/ResumeSection";
import Navbar from "@/components/Navbar";

export default function ResumePage() {
    return (
        <div className="min-h-screen p-8 sm:p-20 font-serif pt-32 sm:pt-40">
            <Navbar />

            <main className="max-w-4xl mx-auto">
                <FadeIn>
                    <h1 className="text-4xl md:text-5xl font-medium mb-12">Resume</h1>
                    <p className="text-xl text-neutral-600 mb-12 max-w-2xl leading-relaxed">
                        A summary of my professional experience, education, and research interests.
                    </p>
                    <ResumeSection />
                </FadeIn>
            </main>

            <FadeIn>
                <footer className="mt-20 pt-8 border-t border-neutral-400/30 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-500 gap-4">
                    <span>© 2026 Mirza Aydemir</span>
                    <span className="italic">&quot;The market is a device for transferring money from the impatient to the patient.&quot;</span>
                </footer>
            </FadeIn>
        </div>
    );
}

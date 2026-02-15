"use client";

import { useState } from "react";
import { ArrowDown, Eye, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ResumeSection() {
    const [showPreview, setShowPreview] = useState(false);

    return (
        <section id="resume" className="border-t border-neutral-400/30 pt-12">
            <span className="text-xs font-semibold tracking-widest uppercase text-neutral-500 mb-8 block">
                Resume
            </span>

            <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-1">
                    <h3 className="text-2xl font-medium mb-4">Curriculum Vitae</h3>
                    <p className="text-neutral-700 max-w-xl mb-6">
                        A detailed overview of my academic background, research experience, and professional history.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <a
                            href="/maydemir-resume.pdf"
                            download
                            className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-900 text-[#f7deb2] rounded-full text-sm font-medium hover:bg-neutral-800 transition-colors"
                        >
                            <ArrowDown className="w-4 h-4" />
                            Download PDF
                        </a>
                        <button
                            onClick={() => setShowPreview(true)}
                            className="inline-flex items-center gap-2 px-6 py-3 border border-neutral-900 text-neutral-900 rounded-full text-sm font-medium hover:bg-neutral-900/5 transition-colors"
                        >
                            <Eye className="w-4 h-4" />
                            Preview
                        </button>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {showPreview && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
                        onClick={() => setShowPreview(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            className="bg-white w-full max-w-5xl h-[85vh] rounded-lg shadow-2xl overflow-hidden relative"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="absolute top-4 right-4 z-10">
                                <button
                                    onClick={() => setShowPreview(false)}
                                    className="p-2 bg-neutral-900 text-white rounded-full hover:bg-neutral-700 transition-colors"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>
                            <iframe
                                src="/maydemir-resume.pdf"
                                className="w-full h-full"
                                title="Resume Preview"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}

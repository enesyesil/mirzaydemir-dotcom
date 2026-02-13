import { ArrowUpRight } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen p-8 sm:p-20 font-serif pt-32 sm:pt-40">
      <Navbar />


      <main className="max-w-4xl mx-auto space-y-40">
        {/* Intro Section */}
        <section className="space-y-12">
          <FadeIn delay={0.1}>
            <span className="text-sm font-semibold tracking-widest uppercase text-neutral-500 block mb-4">
              On Finance & Uncertainty
            </span>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h2 className="text-6xl md:text-8xl font-medium leading-[1.1] mb-8">
              Mirza Aydemir
            </h2>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="max-w-2xl space-y-8 text-xl leading-relaxed text-neutral-800">
              <p>
                A Master of Finance (Capital Markets Stream) candidate at Schulich (Expected Aug 2026) with hands-on experience in FP&A, financial modeling, and econometrics research — from analyzing 500k+ row datasets to building models that improve real decisions.
              </p>

              <div className="flex flex-wrap gap-6 pt-4 text-sm font-semibold tracking-widest uppercase">
                <Link href="/resume" className="border-b border-black pb-1 hover:text-neutral-600 hover:border-neutral-600 transition-colors">
                  View Resume
                </Link>
                <Link href="/cases" className="border-b border-black pb-1 hover:text-neutral-600 hover:border-neutral-600 transition-colors">
                  Projects & Models
                </Link>
                <Link href="#correspondence" className="border-b border-black pb-1 hover:text-neutral-600 hover:border-neutral-600 transition-colors">
                  Contact
                </Link>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* Experience Section */}
        <FadeIn>
          <section id="experience" className="scroll-mt-40 border-t border-neutral-400/30 pt-12">
            <h2 className="text-4xl md:text-5xl font-medium mb-16">
              Experience
            </h2>
            <div className="space-y-16">

              {/* FGF Brands */}
              <div>
                <div className="flex items-center gap-4 text-sm text-neutral-500 mb-2">
                  <span>Sep 2023 — Dec 2023</span>
                  <span className="w-8 h-[1px] bg-neutral-400"></span>
                  <span>FGF Brands</span>
                </div>
                <h3 className="text-3xl font-medium mb-4">Financial Analyst Intern, FP&A</h3>
                <p className="text-neutral-700 max-w-2xl mb-4">
                  Identified a 60% variance at a specific plant through deep Excel analysis; traced the root cause to a vendor-related machine issue, enabling faster resolution and helping prevent future discrepancies. Built analytical financial models from datasets exceeding 500k entries, collaborating across teams to interpret trends.
                </p>
              </div>

              {/* Fisor */}
              <div>
                <div className="flex items-center gap-4 text-sm text-neutral-500 mb-2">
                  <span>Oct 2023 — Sep 2024</span>
                  <span className="w-8 h-[1px] bg-neutral-400"></span>
                  <span>Fisor</span>
                </div>
                <h3 className="text-3xl font-medium mb-4">Startup Founder and Research Analyst</h3>
                <p className="text-neutral-700 max-w-2xl mb-4">
                  Built a car value assessment approach comparing the present value of two cars while accounting for depreciation, maintenance, insurance, and inflation-discounting to support better purchasing decisions.
                </p>
              </div>

              {/* Research Intern */}
              <div>
                <div className="flex items-center gap-4 text-sm text-neutral-500 mb-2">
                  <span>Jul 2023 — Oct 2023</span>
                  <span className="w-8 h-[1px] bg-neutral-400"></span>
                  <span>Risk and Insurance Studies Centre</span>
                </div>
                <h3 className="text-3xl font-medium mb-4">Project Intern</h3>
                <p className="text-neutral-700 max-w-2xl">
                  Researched AI&apos;s impact on the North American labour market, reviewing 40+ sources across sectors. Executed regression analysis using secondary data to build a predictive model and derive recommendations from key variable relationships.
                </p>
              </div>

            </div>
          </section>
        </FadeIn>

        {/* Areas of Study */}
        <FadeIn>
          <section id="areas-of-study" className="scroll-mt-40 border-t border-neutral-400/30 pt-12">
            <h2 className="text-4xl md:text-5xl font-medium mb-16">
              Areas of Study
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="space-y-4">
                <h3 className="text-2xl font-medium">Financial Risk Management</h3>
                <p className="text-neutral-600 leading-relaxed">
                  Focusing on market risk frameworks, stress testing methodologies, and regulatory capital requirements. Deepening understanding of how tail risks propagate through interconnected markets.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-medium">Capital Markets</h3>
                <p className="text-neutral-600 leading-relaxed">
                  Analyzing fixed income securities, derivatives pricing, and portfolio construction. bridging the gap between theoretical asset pricing models and practical trading strategies.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-medium">Econometrics & Data Science</h3>
                <p className="text-neutral-600 leading-relaxed">
                  Applying statistical methods to financial time series. Leveraging Python and R for predictive modeling, volatility forecasting, and large-scale data analysis.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Education Section */}
        <FadeIn>
          <section id="education" className="scroll-mt-40 border-t border-neutral-400/30 pt-12">
            <h2 className="text-4xl md:text-5xl font-medium mb-16">
              Education
            </h2>
            <div className="space-y-16">

              {/* Schulich */}
              <div>
                <div className="flex items-center gap-4 text-sm text-neutral-500 mb-2">
                  <span>Aug 2025 — Aug 2026</span>
                  <span className="w-8 h-[1px] bg-neutral-400"></span>
                  <span>Schulich School of Business, York University</span>
                </div>
                <h3 className="text-3xl font-medium mb-4">Master of Finance, Financial Risk Management Stream</h3>
                <div className="text-neutral-700 max-w-2xl space-y-2">
                  <p>Dean’s Entrance Award Recipient ($12,000)</p>
                  <p>Class Representative - MFIN 5600 Institutional Wealth Management</p>
                  <p>Class Representative - FNEN 6850 Fixed Income Securities</p>
                </div>
              </div>

              {/* York University */}
              <div>
                <div className="flex items-center gap-4 text-sm text-neutral-500 mb-2">
                  <span>May 2022 — May 2025</span>
                  <span className="w-8 h-[1px] bg-neutral-400"></span>
                  <span>York University</span>
                </div>
                <h3 className="text-3xl font-medium mb-4">Bachelor of Arts, Spec. Hons. Financial and Business Economics</h3>
                <div className="text-neutral-700 max-w-2xl space-y-4">
                  <p className="italic">Graduated Cum Laude</p>
                  <ul className="list-disc list-inside space-y-1 ml-1 text-neutral-600">
                    <li>8.28/9.00 (A / A+) Major GPA</li>
                    <li>7.54/9.00 (B+ / A) cGPA</li>
                  </ul>

                  <div>
                    <span className="font-medium block mb-1 text-neutral-800">Awards</span>
                    <ul className="list-disc list-inside space-y-1 ml-1 text-neutral-600">
                      <li>Sessional Academic Achievement List (FW22 and FW23)</li>
                      <li>Member of Dean&apos;s Honour Roll (FW24)</li>
                    </ul>
                  </div>

                  <div>
                    <span className="font-medium block mb-1 text-neutral-800">Extracurricular Activities</span>
                    <ul className="list-disc list-inside space-y-1 ml-1 text-neutral-600">
                      <li>Co-Founder, Arise Student Club</li>
                      <li>York Trading Club Aspire Mentorship Program Participant</li>
                      <li>Secured first place in RBC’s Career Fit Program by conducting in-depth market research and delivering a winning wealth management presentation to the RBC InvestEase team.</li>
                    </ul>
                  </div>
                </div>
              </div>

            </div>
          </section>
        </FadeIn>

        {/* Contact Section */}
        <FadeIn>
          <section id="correspondence" className="scroll-mt-40 border-t border-neutral-400/30 pt-12 pb-20">
            <h2 className="text-4xl md:text-5xl font-medium mb-12">
              Correspondence
            </h2>
            <p className="text-2xl md:text-3xl leading-relaxed max-w-3xl mb-12">
              I welcome thoughtful conversation — whether about research collaboration, market ideas, or simply an exchange of perspectives.
            </p>

            <div className="space-y-6">
              <div>
                <span className="text-xs font-semibold tracking-widest uppercase text-neutral-500 block mb-1">Email</span>
                <a href="mailto:aydemirmirza@gmail.com" className="text-lg underline decoration-1 underline-offset-4 hover:decoration-2">aydemirmirza@gmail.com</a>
              </div>
              <div>
                <span className="text-xs font-semibold tracking-widest uppercase text-neutral-500 block mb-1">Phone</span>
                <span className="text-lg">+1 (514) 549-8815</span>
              </div>
              <div>
                <span className="text-xs font-semibold tracking-widest uppercase text-neutral-500 block mb-1">LinkedIn</span>
                <a href="https://linkedin.com/in/aydemirmirza" target="_blank" className="text-lg underline decoration-1 underline-offset-4 hover:decoration-2 inline-flex items-center gap-1">
                  linkedin.com/in/aydemirmirza <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </section>
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

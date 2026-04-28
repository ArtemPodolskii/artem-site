import React from "react";
import { Analytics } from "@vercel/analytics/react";

const CONTACTS = {
  email: "artem@podolskii.com",
  telegram: "https://t.me/artem_podolskii",
  linkedin: "https://www.linkedin.com/in/artem-podolskii-59770425a/",
};

const INFOGRAPHIC_URL = "/images/technical-compliance-delivery-igaming-markets.jpg";

const steps = [
  {
    n: "01",
    title: "Regulatory research",
    text: "Identify the regulator, review applicable laws and technical standards, and separate B2B provider obligations from B2C operator requirements.",
    bullets: ["Primary law", "Subordinate regulations", "Technical standards"],
  },
  {
    n: "02",
    title: "Gap analysis",
    text: "Compare current product capabilities, certificates and documentation with jurisdiction-specific requirements. Categorize gaps and estimate effort, cost and timelines.",
    bullets: ["Missing certificates", "Product gaps", "Effort and timeline estimate"],
  },
  {
    n: "03",
    title: "Document planning & preparation",
    text: "Build the document register, assign owners through a RACI matrix, and prepare policies, procedures and technical documentation for labs and regulators.",
    bullets: ["Compliance policy", "RNG / game math / architecture", "Security controls documentation"],
  },
  {
    n: "04",
    title: "Lab pre-submission review",
    text: "Run an informal technical review with an accredited laboratory before formal submission. Clarify the test scope and identify blocking issues early.",
    bullets: ["Scope clarification", "Level 3 technical requirements", "Early blocker detection"],
  },
  {
    n: "05",
    title: "Internal audit / testing",
    text: "Before formal certification, test the products internally against the jurisdiction checklist and verify readiness for certification.",
    bullets: ["Internal checklist", "Game configuration validation", "Evidence readiness"],
  },
  {
    n: "06",
    title: "Formal certification",
    text: "Submit demo games and documentation to the laboratory, manage clarification requests, complete testing and obtain the certificate of compliance.",
    bullets: ["Lab submission", "Query management", "Certificate of compliance"],
  },
  {
    n: "07",
    title: "Licence application",
    text: "Where required, submit the B2B licence or suitability package to the regulator, manage regulator requests and add certified games to the relevant white list.",
    bullets: ["Licence package", "Regulator follow-up", "White list support"],
  },
  {
    n: "08",
    title: "Go-live",
    text: "Confirm that the B2C operator holds a valid licence, complete internal compliance approval and open access to games in the new market.",
    bullets: ["Operator licence check", "Internal approval", "Market access"],
  },
  {
    n: "09",
    title: "Continuous monitoring",
    text: "Track regulatory changes, maintain the certification calendar and assess how new releases or code changes affect existing certificates.",
    bullets: ["Regulatory change tracking", "Certification calendar", "Change impact assessment"],
  },
];

export default function GuidePage() {
  return (
    <div className="min-h-screen bg-[#071014] text-slate-100 selection:bg-cyan-300 selection:text-slate-950">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-[-10%] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[130px]" />
        <div className="absolute right-[-10%] top-[20%] h-[420px] w-[420px] rounded-full bg-emerald-500/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] h-[520px] w-[520px] rounded-full bg-blue-600/10 blur-[140px]" />
      </div>

      <header className="relative z-10 border-b border-white/10 bg-[#071014]/80 px-5 py-4 backdrop-blur-xl sm:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <a href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-cyan-300/30 bg-cyan-300/10 text-sm font-bold text-cyan-200">AP</div>
            <div>
              <div className="text-sm font-semibold tracking-wide text-white">Artem Podolskii</div>
              <div className="text-xs text-slate-400">Compliance & Certification</div>
            </div>
          </a>
          <a href="/" className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-200 transition hover:border-cyan-300/40 hover:bg-cyan-300/10">
            Main site
          </a>
        </div>
      </header>

      <main className="relative z-10">
        <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:py-20">
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-2 text-xs font-medium uppercase tracking-[0.22em] text-cyan-200">
              B2B iGaming Compliance Guide
            </div>

            <h1 className="text-4xl font-semibold tracking-[-0.04em] text-white sm:text-6xl">
              B2B Technical Compliance in iGaming
            </h1>

            <p className="mt-5 text-2xl font-semibold tracking-[-0.03em] text-cyan-100 sm:text-3xl">
              From Research to Monitoring
            </p>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
  A practical overview of the B2B technical compliance process for iGaming providers — from regulatory research and gap analysis to certification, licensing support and continuous monitoring.
</p>

<div className="mt-10 overflow-hidden rounded-[2rem] border border-cyan-300/20 bg-white/[0.035] p-3 shadow-2xl shadow-cyan-950/30">
  <img
    src={INFOGRAPHIC_URL}
    alt="Technical Compliance Delivery for Regulated iGaming Markets — 3-phase compliance and certification process from regulatory research to continuous monitoring"
    className="w-full rounded-[1.5rem] border border-white/10 object-cover"
    loading="lazy"
  />
</div>
</div>


          <div className="mt-10 rounded-[2rem] border border-cyan-300/20 bg-cyan-300/[0.08] p-6 sm:p-8">
            <h2 className="text-2xl font-semibold text-white">Why this matters</h2>
            <p className="mt-4 max-w-4xl text-base leading-8 text-slate-300">
              B2B technical compliance is often delayed not by testing itself, but by unclear scope, missing evidence, weak ownership and poor coordination between product, QA, IT, legal, external laboratories and regulators.
            </p>
          </div>
<div className="mt-6 rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 sm:p-8">
  <div className="mb-4 inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-2 text-xs font-medium uppercase tracking-[0.22em] text-cyan-200">
    AI-assisted workflow
  </div>

  <h2 className="text-2xl font-semibold text-white">
    AI-assisted version of this workflow
  </h2>

  <p className="mt-4 max-w-4xl text-base leading-8 text-slate-300">
    The same compliance lifecycle can be supported by an internal AI agent: monitor regulatory sources, answer questions with source references, identify gaps between requirements and generate implementation-ready tickets for product, QA and engineering teams.
  </p>

  <p className="mt-4 max-w-4xl text-base leading-8 text-slate-300">
    Human review remains essential. The value is speed, structure and traceability — not blind automation.
  </p>

  <div className="mt-6 grid gap-3 md:grid-cols-2">
    {[
      "Regulatory source monitoring",
      "Source-based compliance Q&A",
      "Gap and conflict detection",
      "Jira-ready implementation tickets",
      "Visible uncertainty instead of fabricated answers",
      "Human compliance owner remains accountable",
    ].map((item) => (
      <div key={item} className="flex items-start gap-2 rounded-2xl border border-white/10 bg-[#0b171d] p-4 text-sm text-slate-300">
        <span className="mt-0.5 shrink-0 text-cyan-300">✓</span>
        <span>{item}</span>
      </div>
    ))}
  </div>
</div>
        </section>

        <section className="border-y border-white/10 bg-white/[0.025]">
          <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:py-20">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">
                9-step process
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-300">
                A simplified lifecycle for preparing B2B iGaming products for regulated markets.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {steps.map((step) => (
                <article key={step.n} className="rounded-3xl border border-white/10 bg-[#0b171d] p-6">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300 text-sm font-bold text-slate-950">
                      {step.n}
                    </div>
                    <div className="text-xs uppercase tracking-[0.22em] text-cyan-200">
                      Step
                    </div>
                  </div>

                  <h3 className="mt-5 text-xl font-semibold text-white">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-400">{step.text}</p>

                  <div className="mt-5 space-y-2">
                    {step.bullets.map((bullet) => (
                      <div key={bullet} className="flex items-start gap-2 text-sm text-slate-300">
                        <span className="mt-0.5 shrink-0 text-cyan-300">✓</span>
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:py-20">
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-6 sm:p-8">
              <h2 className="text-2xl font-semibold text-white">Critical B2B provider artifacts</h2>

              <div className="mt-6 space-y-4">
                <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                  <h3 className="font-semibold text-cyan-100">Technical</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-400">RNG description, game math sheets, RTP, volatility, game configuration specifications and system architecture.</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                  <h3 className="font-semibold text-cyan-100">Governance</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-400">Compliance policy, game certification procedure, regulatory change management and ISO/IEC 27001-aligned information security policy.</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                  <h3 className="font-semibold text-cyan-100">Regulatory</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-400">Licence application, suitability documentation, certification reports and evidence requested by regulators or testing laboratories.</p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-6 sm:p-8">
              <h2 className="text-2xl font-semibold text-white">Requirement signals to look for</h2>
              <p className="mt-4 text-sm leading-7 text-slate-400">
                In laws and technical standards, keywords such as “software supplier”, “RNG certification”, “return to player”, “manufacturer licence” and “white list” often indicate requirements that apply directly to the B2B provider.
              </p>

              <h3 className="mt-8 text-lg font-semibold text-white">If useful, I can help with</h3>
              <div className="mt-5 space-y-3">
                {[
                  "Market entry analysis",
                  "Certification delivery and lab coordination",
                  "ISO/IEC 27001 / ISMS readiness",
                  "Technical compliance process setup",
                  "AI-assisted compliance workflows",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2 text-sm text-slate-300">
                    <span className="mt-0.5 shrink-0 text-cyan-300">✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 pb-14 sm:px-8 lg:pb-20">
          <div className="rounded-[2rem] border border-cyan-300/20 bg-cyan-300/[0.08] p-8 sm:p-10">
            <h2 className="max-w-3xl text-3xl font-semibold tracking-[-0.03em] text-white">
              Need help turning market requirements into a certification-ready plan?
            </h2>

            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300">
              Send me the target market, product type and current blocker. I can help structure requirements, identify gaps and turn the next steps into a clear delivery plan.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href={"mailto:" + CONTACTS.email + "?subject=B2B iGaming compliance guide"} className="rounded-full bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200">
                Email Artem
              </a>
              <a href={CONTACTS.linkedin} className="rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/40 hover:bg-cyan-300/10">
                LinkedIn
              </a>
              <a href={CONTACTS.telegram} className="rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/40 hover:bg-cyan-300/10">
                Telegram
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-white/10 px-5 py-8 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} Artem Podolskii • podolskii.com/guide</div>
          <div>B2B technical compliance process for regulated iGaming markets.</div>
        </div>
      </footer>

      <Analytics />
    </div>
  );
}

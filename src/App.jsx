import React, { useMemo, useState } from "react";
import { Analytics } from "@vercel/analytics/react";
import GuidePage from "./Guide.jsx";
import artemPhoto from "./assets/artem-photo.png";

const CONTACTS = {
  email: "artem@podolskii.com",
  phone: "+351 935 484 273",
  phoneHref: "tel:+351935484273",
  telegram: "@artem_podolskii",
  telegramUrl: "https://t.me/artem_podolskii",
  linkedin: "https://www.linkedin.com/in/artem-podolskii-59770425a/",
  domain: "podolskii.com",
  certificateUrl: "https://learn.mastermindassurance.com/certificates/9edvrizbwm"
};

const content = {
  en: {
    lang: "RU",
    nav: ["Services", "Method", "Proof", "Contact"],
    kicker: "iGaming Compliance • Certification • ISO/IEC 27001 • Audit Readiness",
    title: "Compliance & Information Security Delivery for Regulated Markets",
    lead: "I help iGaming and technology companies turn regulatory, lab and information security requirements into clear actions, evidence-ready processes and predictable certification delivery.",
    sub: "Artem Podolskii — Compliance & Certification Manager based in Porto, Portugal. 10+ years across regulated industries, enterprise IT and delivery; hands-on experience with iGaming certification, ISO/IEC 27001 implementation support and internal audit readiness.",
    cta: "Discuss your compliance challenge",
    servicesTitle: "Services",
    servicesLead: "Practical consulting packages focused on iGaming providers, SaaS teams, regulated digital products and companies preparing for ISO/IEC 27001 or audit-related requirements.",
    bridgeTitle: "For companies that need compliance without blocking delivery",
    bridgeText: "Regulated market entry is rarely just a legal task. It requires clear ownership, technical interpretation, lab communication, product coordination, evidence collection and continuous change control. My role is to bridge business, engineering, compliance teams and external parties so certification does not become a last-minute blocker.",
    methodTitle: "Method: from unclear requirements to market readiness",
    proofTitle: "Proof of work",
    contactTitle: "Need to prepare for a market, audit or certification process?",
    contactText: "Send me the market, product type and current blocker. I can help structure the requirements, identify gaps and turn the next steps into a clear plan.",
    footer: "Independent compliance, certification and audit-readiness consulting for regulated digital products.",
    stats: [["10+", "years in regulated industries"], ["25+", "markets supported or assessed"], ["15", "regulated markets certification support"], ["40+", "jurisdictions analyzed"]],
    trust: ["ISO/IEC 27001:2022 Lead Auditor — certified", "25+ regulated markets experience", "40+ jurisdictions analyzed", "GLI • iTechLabs • eCOGRA • GA • GlobalLab"],
    bridge: [["Business", "Market entry, client commitments, release timing and commercial priorities."], ["Engineering", "Technical requirements, game configuration, RNG, RTP, logs, environments and release scope."], ["Regulators & Labs", "Certification scope, evidence requests, audit expectations, formal submissions and follow-up."]],
    services: [
      ["Regulatory market entry review", "Jurisdiction-level review to separate B2B provider obligations from B2C operator requirements, identify applicable laws, technical standards and regulator expectations.", ["Primary law / regulations / technical standards", "Provider vs operator responsibility mapping", "Market-entry decision support"]],
      ["Gap analysis & certification roadmap", "Assessment of current certificates, product capabilities, security controls and documentation against market requirements, with a practical remediation roadmap.", ["Required certificates and missing evidence", "Cost / effort / timeline categorization", "Prioritized remediation plan"]],
      ["Certification documentation package", "Preparation and structuring of submission-ready documentation for labs, regulators and internal approval workflows.", ["Game certification checklists", "RNG / math / architecture documentation", "RACI, ownership and evidence registers"]],
      ["ISO/IEC 27001 & ISMS audit readiness", "Support with ISO 27001 implementation activities, internal audit preparation, evidence collection, control mapping and remediation tracking.", ["Internal audit program support", "Evidence collection and document control", "Non-conformity and action tracking"]],
      ["Lab pre-submission & formal certification support", "Coordination with approved testing laboratories before and during certification to reduce rework and prevent avoidable delays.", ["Pre-submission scope clarification", "Lab request coordination", "Hash, builds, reports and submission tracking"]],
      ["Compliance process design", "Design of sustainable workflows for regulated product releases, regulatory change management and certification monitoring.", ["Certification lifecycle workflow", "Change impact assessment process", "Market launch and go-live controls"]]
    ],
    method: ["Regulatory research", "Gap analysis", "Document plan & RACI", "Lab pre-submission", "Internal testing / audit readiness", "Formal certification", "Licence / regulator support", "Go-live controls", "Continuous monitoring"],
    cases: [
      ["Scaling technical compliance in iGaming", "Certification delivery", "Structured the certification function, built checklists, ownership tracking, documentation flows and lab coordination routines. Result: supported certifications in 15 regulated markets and reduced operational chaos between product, QA, IT, sales and external labs."],
      ["ISO/IEC 27001 implementation and audit readiness", "ISMS support", "Coordinated evidence collection, internal audit programme, cross-functional training, non-conformity tracking and liaison with the external certification body. Result: a more predictable audit preparation process."],
      ["Enterprise IT delivery and business analysis", "Requirements to implementation", "Mapped processes using BPMN, EPC and VAD, led UAT cycles, wrote technical documentation and managed scope in hybrid delivery environments. Result: clearer ownership and sustainable handover after go-live."]
    ],
    expertise: ["iGaming technical compliance", "Game / RNG / platform certification coordination", "Regulatory requirements analysis", "ISO/IEC 27001 implementation support", "Internal audit readiness", "Evidence collection and document control", "RACI and ownership tracking", "Regulatory change management", "Business analysis and process design", "BPMN / EPC / VAD", "Jira / Confluence / Notion / ClickUp"]
  },
  ru: {
    lang: "EN",
    nav: ["Услуги", "Метод", "Доказательства", "Контакты"],
    kicker: "iGaming Compliance • Certification • ISO/IEC 27001 • Audit Readiness",
    title: "Комплаенс и информационная безопасность для регулируемых рынков",
    lead: "Помогаю iGaming и технологическим компаниям переводить требования регуляторов, лабораторий и стандартов информационной безопасности в понятные действия, доказательную базу и предсказуемый процесс сертификации.",
    sub: "Artem Podolskii — Compliance & Certification Manager, Порту, Португалия. 10+ лет опыта в регулируемых отраслях, enterprise IT и delivery; практический опыт в iGaming-сертификации, поддержке ISO/IEC 27001 и подготовке к внутренним аудитам.",
    cta: "Обсудить комплаенс-задачу",
    servicesTitle: "Услуги",
    servicesLead: "Практические consulting-пакеты для iGaming-провайдеров, SaaS-команд, регулируемых цифровых продуктов и компаний, которые готовятся к ISO/IEC 27001 или аудиту.",
    bridgeTitle: "Для компаний, которым нужен комплаенс без блокировки релизов",
    bridgeText: "Выход на регулируемый рынок — это не только юридическая задача. Нужны понятная ответственность, техническая интерпретация требований, коммуникация с лабораториями, координация продукта, сбор evidence и контроль изменений.",
    methodTitle: "Метод: от неясных требований к готовности рынка",
    proofTitle: "Доказательства опыта",
    contactTitle: "Нужно подготовиться к рынку, аудиту или сертификации?",
    contactText: "Пришлите рынок, тип продукта и текущий blocker. Я помогу структурировать требования, найти пробелы и превратить следующие шаги в понятный план.",
    footer: "Independent compliance, certification and audit-readiness consulting for regulated digital products.",
    stats: [["10+", "лет в регулируемых отраслях"], ["25+", "рынков в работе или анализе"], ["15", "рынков с поддержкой сертификации"], ["40+", "проанализированных юрисдикций"]],
    trust: ["ISO/IEC 27001:2022 Lead Auditor — certified", "Опыт по 25+ регулируемым рынкам", "40+ проанализированных юрисдикций", "GLI • iTechLabs • eCOGRA • GA • GlobalLab"],
    bridge: [["Бизнес", "Выход на рынки, клиентские обязательства, сроки релиза и коммерческие приоритеты."], ["Разработка", "Технические требования, конфигурация игр, RNG, RTP, логи, окружения и состав релиза."], ["Регуляторы и лаборатории", "Объем сертификации, запросы evidence, ожидания аудита, формальная подача и follow-up."]],
    services: [
      ["Regulatory market entry review", "Анализ юрисдикции: отделить требования к B2B-провайдеру от требований к B2C-оператору, определить применимые законы, технические стандарты и ожидания регулятора.", ["Primary law / regulations / technical standards", "Карта ответственности provider vs operator", "Поддержка решения о выходе на рынок"]],
      ["Gap analysis & certification roadmap", "Сравнение текущих сертификатов, возможностей продукта, security controls и документации с требованиями рынка. На выходе — практичный roadmap.", ["Недостающие сертификаты и evidence", "Оценка effort / сроков / приоритета", "План устранения пробелов"]],
      ["Certification documentation package", "Подготовка и структурирование документации для лабораторий, регуляторов и внутренних approval-процессов.", ["Чек-листы сертификации игр", "RNG / math / architecture documentation", "RACI, ownership и evidence registers"]],
      ["ISO/IEC 27001 & ISMS audit readiness", "Поддержка внедрения ISO 27001, подготовки к внутреннему аудиту, сбора evidence, маппинга контролей и отслеживания remediation.", ["Поддержка internal audit program", "Evidence collection и document control", "Non-conformity и action tracking"]],
      ["Lab pre-submission & formal certification support", "Координация с аккредитованными лабораториями до и во время сертификации, чтобы снизить rework и избежать задержек.", ["Уточнение scope до подачи", "Координация запросов лаборатории", "Hash, builds, reports и submission tracking"]],
      ["Compliance process design", "Проектирование устойчивых процессов для regulated product releases, regulatory change management и мониторинга сертификатов.", ["Certification lifecycle workflow", "Change impact assessment process", "Market launch и go-live controls"]]
    ],
    method: ["Regulatory research", "Gap analysis", "Document plan & RACI", "Lab pre-submission", "Internal testing / audit readiness", "Formal certification", "Licence / regulator support", "Go-live controls", "Continuous monitoring"],
    cases: [
      ["Масштабирование technical compliance в iGaming", "Certification delivery", "Структурирована функция сертификации: чек-листы, ownership tracking, документационные потоки и регулярная координация с лабораториями. Результат: поддержана сертификация на 15 регулируемых рынках."],
      ["ISO/IEC 27001 implementation и audit readiness", "ISMS support", "Координация evidence collection, программы внутреннего аудита, обучения сотрудников, tracking несоответствий и взаимодействия с внешним органом сертификации."],
      ["Enterprise IT delivery и бизнес-анализ", "Requirements to implementation", "Моделирование процессов BPMN, EPC и VAD, UAT, техническая документация и управление scope в hybrid delivery environment."]
    ],
    expertise: ["iGaming technical compliance", "Game / RNG / platform certification coordination", "Regulatory requirements analysis", "ISO/IEC 27001 implementation support", "Internal audit readiness", "Evidence collection and document control", "RACI and ownership tracking", "Regulatory change management", "Business analysis and process design", "BPMN / EPC / VAD", "Jira / Confluence / Notion / ClickUp"]
  }
};

function Badge({ children }) {
  return <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-slate-300">{children}</span>;
}

function SectionLabel({ children }) {
  return <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.22em] text-cyan-200"><span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />{children}</div>;
}

function ContactLink({ href, children }) {
  return <a href={href} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-200 transition hover:border-cyan-300/40 hover:bg-cyan-300/10 hover:text-white">{children} <span className="text-cyan-300">↗</span></a>;
}

export default function ArtemPodolskiiLanding() {
  const [lang, setLang] = useState("en");
  if (window.location.pathname === "/guide" || window.location.pathname === "/guide/") return <GuidePage />;
  const t = useMemo(() => content[lang], [lang]);
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <div className="min-h-screen bg-[#071014] text-slate-100 selection:bg-cyan-300 selection:text-slate-950">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-[-10%] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[130px]" />
        <div className="absolute right-[-10%] top-[20%] h-[420px] w-[420px] rounded-full bg-emerald-500/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] h-[520px] w-[520px] rounded-full bg-blue-600/10 blur-[140px]" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#071014]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <button onClick={() => scrollTo("top")} className="flex items-center gap-3"><div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-cyan-300/30 bg-cyan-300/10 text-sm font-bold text-cyan-200">AP</div><div className="hidden text-left sm:block"><div className="text-sm font-semibold tracking-wide text-white">Artem Podolskii</div><div className="text-xs text-slate-400">Compliance & Certification</div></div></button>
          <nav className="hidden items-center gap-7 md:flex">{[["services", t.nav[0]], ["method", t.nav[1]], ["proof", t.nav[2]], ["contact", t.nav[3]]].map(([id, label]) => <button key={id} onClick={() => scrollTo(id)} className="text-sm text-slate-300 transition hover:text-white">{label}</button>)}</nav>
          <div className="flex items-center gap-2"><button onClick={() => setLang(lang === "en" ? "ru" : "en")} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-slate-200 transition hover:border-cyan-300/40 hover:bg-cyan-300/10">◎ {t.lang}</button><a href={"mailto:" + CONTACTS.email} className="hidden rounded-full bg-cyan-300 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200 sm:inline-flex">Contact</a></div>
        </div>
      </header>

      <main id="top" className="relative z-10">
        <section className="mx-auto grid max-w-7xl gap-12 px-5 pb-20 pt-16 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:pb-28 lg:pt-24">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-medium text-cyan-100">◈ {t.kicker}</div>
            <h1 className="max-w-4xl text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-7xl">{t.title}</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">{t.lead}</p>
            <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-400 sm:text-base">{t.sub}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row"><a href={"mailto:" + CONTACTS.email + "?subject=Compliance consulting request"} className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200">{t.cta} →</a><button onClick={() => scrollTo("services")} className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/40 hover:bg-cyan-300/10">{t.nav[0]}</button></div>
            <div className="mt-8 flex flex-wrap gap-2">{t.trust.map((item) => <Badge key={item}>{item}</Badge>)}</div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-4 shadow-2xl shadow-cyan-950/40 backdrop-blur"><div className="rounded-[1.5rem] border border-white/10 bg-[#0b171d] p-6"><div className="flex items-start justify-between gap-4"><div><div className="text-sm uppercase tracking-[0.24em] text-cyan-200">Profile</div><h2 className="mt-3 text-2xl font-semibold text-white">Artem Podolskii</h2><p className="mt-2 text-sm text-slate-400">Porto, Portugal • Independent Consultant</p></div><img
  src={artemPhoto}
  alt="Artem Podolskii"
  className="h-24 w-24 rounded-2xl border border-cyan-300/20 object-cover object-top shadow-xl shadow-cyan-950/40"
/></div><div className="mt-8 grid grid-cols-2 gap-3">{t.stats.map(([value, label]) => <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.035] p-4"><div className="text-3xl font-semibold tracking-tight text-white">{value}</div><div className="mt-1 text-xs leading-5 text-slate-400">{label}</div></div>)}</div><div className="mt-6 rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-4"><div className="text-sm font-semibold text-cyan-100">◎ Delivery focus</div><p className="mt-2 text-sm leading-6 text-slate-300">Translating abstract requirements into clear tasks, evidence, owners and launch controls.</p></div></div></div>
        </section>

        <section className="border-y border-white/10 bg-white/[0.025]"><div className="mx-auto grid max-w-7xl gap-8 px-5 py-14 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]"><div><SectionLabel>Bridge philosophy</SectionLabel><h2 className="text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">{t.bridgeTitle}</h2><p className="mt-5 text-base leading-8 text-slate-300">{t.bridgeText}</p></div><div className="grid gap-4 md:grid-cols-3">{t.bridge.map(([title, text]) => <div key={title} className="rounded-3xl border border-white/10 bg-[#0b171d] p-5"><div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-200">◈</div><h3 className="text-lg font-semibold text-white">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-400">{text}</p></div>)}</div></div></section>

        <section id="services" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28"><div className="max-w-3xl"><SectionLabel>{t.servicesTitle}</SectionLabel><h2 className="text-3xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">{t.servicesTitle}</h2><p className="mt-5 text-base leading-8 text-slate-300">{t.servicesLead}</p></div><div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{t.services.map(([title, text, bullets], idx) => <div key={title} className="rounded-3xl border border-white/10 bg-white/[0.035] p-6 transition hover:border-cyan-300/30 hover:bg-cyan-300/[0.06]"><div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-xl text-cyan-200">{idx + 1}</div><h3 className="mt-5 text-xl font-semibold text-white">{title}</h3><p className="mt-3 text-sm leading-7 text-slate-400">{text}</p><div className="mt-5 space-y-2">{bullets.map((bullet) => <div key={bullet} className="flex items-start gap-2 text-sm text-slate-300"><span className="mt-0.5 shrink-0 text-cyan-300">✓</span><span>{bullet}</span></div>)}</div></div>)}</div></section>

        <section id="method" className="border-y border-white/10 bg-white/[0.025]"><div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28"><div className="max-w-3xl"><SectionLabel>{t.methodTitle}</SectionLabel><h2 className="text-3xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">{t.methodTitle}</h2></div><div className="mt-12 grid gap-3 md:grid-cols-3">{t.method.map((step, idx) => <div key={step} className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0b171d] p-5"><div className="absolute right-4 top-3 text-5xl font-semibold text-white/[0.03]">{String(idx + 1).padStart(2, "0")}</div><div className="relative flex items-center gap-4"><div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-cyan-300 text-sm font-bold text-slate-950">{idx + 1}</div><div className="text-sm font-semibold text-white">{step}</div></div></div>)}</div></div></section>

        <section id="proof" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28"><div className="max-w-3xl"><SectionLabel>{t.proofTitle}</SectionLabel><h2 className="text-3xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">{t.proofTitle}</h2><div className="mt-6 rounded-3xl border border-cyan-300/20 bg-cyan-300/[0.08] p-5"><p className="text-sm leading-7 text-slate-300"><span className="font-semibold text-white">ISO/IEC 27001:2022 Lead Auditor — certified.</span> Credential issued by Mastermind Assurance. <a href={CONTACTS.certificateUrl} target="_blank" rel="noreferrer" className="font-semibold text-cyan-200 underline decoration-cyan-300/40 underline-offset-4 transition hover:text-cyan-100">View certificate ↗</a></p></div></div><div className="mt-10 grid gap-5 lg:grid-cols-3">{t.cases.map(([title, tag, text]) => <article key={title} className="rounded-3xl border border-white/10 bg-white/[0.035] p-6"><span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-medium text-cyan-200">{tag}</span><h3 className="mt-5 text-xl font-semibold text-white">{title}</h3><p className="mt-5 text-sm leading-7 text-slate-400">{text}</p></article>)}</div><div className="mt-12 rounded-3xl border border-white/10 bg-white/[0.035] p-6"><h3 className="text-2xl font-semibold text-white">Core expertise</h3><div className="mt-5 flex flex-wrap gap-2">{t.expertise.map((item) => <Badge key={item}>{item}</Badge>)}</div></div></section>

        <section id="contact" className="mx-auto max-w-7xl px-5 pb-10 sm:px-8 lg:pb-16"><div className="overflow-hidden rounded-[2rem] border border-cyan-300/20 bg-cyan-300/[0.08] p-8 sm:p-10 lg:p-12"><div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-end"><div><SectionLabel>Contact</SectionLabel><h2 className="max-w-3xl text-3xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">{t.contactTitle}</h2><p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">{t.contactText}</p><a href={"mailto:" + CONTACTS.email + "?subject=Compliance consulting request"} className="mt-8 inline-flex items-center gap-2 rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200">{t.cta} →</a></div><div className="flex flex-wrap gap-3 lg:justify-end"><ContactLink href={"mailto:" + CONTACTS.email}>{CONTACTS.email}</ContactLink><ContactLink href={CONTACTS.phoneHref}>{CONTACTS.phone}</ContactLink><ContactLink href={CONTACTS.telegramUrl}>{CONTACTS.telegram}</ContactLink><ContactLink href={CONTACTS.linkedin}>LinkedIn</ContactLink></div></div></div></section>
      </main>

   <footer className="relative z-10 border-t border-white/10 px-5 py-8 sm:px-8"><div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-slate-500 md:flex-row md:items-center md:justify-between"><div>© {new Date().getFullYear()} Artem Podolskii • {CONTACTS.domain}</div><div>{t.footer}</div></div></footer>

      <Analytics />
    </div>
  );
}

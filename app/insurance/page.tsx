import type { Metadata } from 'next'
import HeroBackdrop from '@/components/HeroBackdrop'

export const metadata: Metadata = {
  title: 'Insurance & Billing | Irvine Neuro Rehabilitation',
  description: 'Insurance at Irvine Neuro Rehabilitation, Southfield MI: Medicare, BCBS of Michigan, Blue Care Network, UnitedHealthcare, auto and workers comp. (248) 415-2500.',
  alternates: { canonical: '/insurance' },
  openGraph: {
    title: 'Insurance & Billing | Irvine Neuro Rehabilitation',
    description: 'Insurance at Irvine Neuro Rehabilitation, Southfield MI: Medicare, BCBS of Michigan, Blue Care Network, UnitedHealthcare, auto and workers comp. (248) 415-2500.',
    url: 'https://irvineneurorehabilitation.com/insurance',
    siteName: 'Irvine Neuro Rehabilitation',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Insurance & Billing | Irvine Neuro Rehabilitation',
    description: 'Insurance at Irvine Neuro Rehabilitation, Southfield MI: Medicare, BCBS of Michigan, Blue Care Network, UnitedHealthcare, auto and workers comp. (248) 415-2500.',
  },
}

// The plans the practice lists in its own records (MedReception Studio, 2026-10-30).
const PLANS = [
  'Medicare',
  'Medicare Plus Blue',
  'Blue Cross Blue Shield of Michigan',
  'Blue Care Network',
  'UnitedHealthcare',
  'Brain Injury Medicaid Waiver',
  'Auto insurance',
  "Workers' compensation",
]

const steps = [
  {
    title: 'Ask About Your Plan',
    text: 'Call us before your first visit and tell us which service you need. Some services are billed to insurance and some are paid directly, so we will talk through which applies to you.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M12 3 4.5 6v5.25c0 4.5 3.2 8.2 7.5 9.75 4.3-1.55 7.5-5.25 7.5-9.75V6L12 3Z" />
      </svg>
    ),
  },
  {
    title: 'Service Provided',
    text: 'You receive care from your therapists. A co-pay is a set amount some plans ask you to pay at the time of a visit.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.1-1.7-3.75-3.8-3.75-1.9 0-3.4 1-5.2 3-1.8-2-3.3-3-5.2-3C4.7 4.5 3 6.15 3 8.25c0 5.25 9 11.25 9 11.25s9-6 9-11.25Z" />
      </svg>
    ),
  },
  {
    title: 'Claim Submitted',
    text: 'A claim goes to your insurer. They send you an Explanation of Benefits (EOB), a statement showing what was billed and what they paid. It is not a bill.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.6a3.4 3.4 0 0 0-3.4-3.4h-1.5a1.9 1.9 0 0 1-1.9-1.9v-1.5a3.4 3.4 0 0 0-3.4-3.4H8.25m3.75 9h-4.5m4.5 3h-4.5M10.5 2.25H5.6c-.6 0-1.1.5-1.1 1.1v17.3c0 .6.5 1.1 1.1 1.1h12.8c.6 0 1.1-.5 1.1-1.1V11.25a9 9 0 0 0-9-9Z" />
      </svg>
    ),
  },
  {
    title: 'You Pay Remainder',
    text: 'Any amount left, such as your deductible (what you pay before insurance begins to share costs) or coinsurance, is your responsibility.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
      </svg>
    ),
  },
]

const faqs = [
  {
    q: 'Which insurance plans do you work with?',
    a: 'Medicare, Medicare Plus Blue, Blue Cross Blue Shield of Michigan, Blue Care Network, UnitedHealthcare, the Brain Injury Medicaid Waiver, auto insurance and workers compensation. Coverage depends on your plan and the service, so call us with your plan details. Your insurer makes the final determination.',
  },
  {
    q: 'What is the difference between a co-pay and a deductible?',
    a: 'A co-pay is a fixed amount due for a visit or service. A deductible is the amount you pay for covered care before your plan begins sharing costs. Your plan documents list both.',
  },
  {
    q: 'What is an Explanation of Benefits (EOB)?',
    a: 'An EOB is a statement from your insurer showing what was billed, what the plan paid, and what may be your responsibility. It is not a bill, but it is helpful to compare against any statement you receive from us.',
  },
  {
    q: 'Are some services paid directly?',
    a: 'Yes. Some services are billed to insurance and some are paid directly. Tell us which service you are asking about and we will explain how it is handled.',
  },
  {
    q: 'Who do I call with a billing question?',
    a: 'Call us at (248) 415-2500 or send a message through our contact page, and our team will help you understand your coverage and any statements you receive.',
  },
]

export default function InsurancePage() {
  return (
    <main>
      <section className="hero-photo relative overflow-hidden bg-[var(--color-dark)] py-28 sm:py-32 text-white text-center">
        <HeroBackdrop src="/images/stock/hub-insurance.jpg" alt="A woman reviewing paperwork at a desk while on a phone call" />
        <div className="relative max-w-3xl mx-auto px-6">
          <h1 className="font-cormorant text-5xl font-light">Insurance &amp; Billing</h1>
          <p className="mt-4 text-lg text-white/80">The plans we work with, and how billing works</p>
        </div>
      </section>

      {/* The real accepted-carrier list must be supplied by the practice before any carrier is named on this page. */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl text-center mb-16 text-[var(--color-primary)]">Accepted Insurance Plans</h2>
          <div className="animate-fade-up max-w-3xl mx-auto bg-white border border-[var(--color-border)] rounded-2xl p-10 text-center">
            <div className="flex justify-center text-[var(--color-accent)] mb-4">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.28 6.72 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.37a1.1 1.1 0 0 0-.85-1.07l-4.45-1a1.1 1.1 0 0 0-1.14.42l-.97 1.3a12.1 12.1 0 0 1-5.6-5.6l1.3-.97c.37-.28.54-.75.42-1.14l-1-4.45a1.1 1.1 0 0 0-1.07-.85H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
              </svg>
            </div>
            <p className="text-[var(--color-ink)] leading-relaxed">
              We work with these plans and programs:
            </p>
            <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-left">
              {PLANS.map((p) => (
                <li key={p} className="flex gap-3 items-start rounded-xl bg-[var(--color-cream)] border border-[var(--color-border)] px-4 py-3 text-[var(--color-ink)]">
                  <span className="text-[var(--color-primary)]" aria-hidden="true">✓</span><span>{p}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-[var(--color-ink)] leading-relaxed">
              Some services are billed to insurance and some are paid directly. Coverage also depends on your specific plan, so call us and tell us which service you are asking about.
            </p>
            <a href="tel:2484152500" className="mt-6 inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] transition-colors text-white px-8 py-3 rounded-full">
              Call (248) 415-2500
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl text-center mb-16 text-[var(--color-primary)]">How Billing Works</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <div key={s.title} className="animate-fade-up bg-[var(--color-cream)] border border-[var(--color-border)] rounded-2xl p-8 text-center">
                <div className="flex justify-center text-[var(--color-accent)] mb-4">{s.icon}</div>
                <p className="text-sm text-[var(--color-muted)]">Step {i + 1}</p>
                <h3 className="font-cormorant text-2xl text-[var(--color-primary)] mb-3">{s.title}</h3>
                <p className="text-[var(--color-ink)] text-sm leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="animate-fade-up bg-[var(--color-light)] rounded-2xl p-12 max-w-3xl mx-auto mx-6 my-20">
        <h3 className="font-cormorant text-3xl text-[var(--color-primary)] mb-4">Self-Pay Options</h3>
        <p className="text-[var(--color-ink)] leading-relaxed">
          If you are not using insurance, you can ask for a good faith estimate of expected charges before care begins. Under the federal No Surprises Act, patients who are uninsured or choose not to use insurance have the right to receive a good faith estimate of expected costs for scheduled care.
        </p>
        <p className="mt-4 text-[var(--color-ink)] leading-relaxed">
          Call (248) 415-2500 and our team will walk you through the next steps.
        </p>
      </section>

      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl text-center mb-12 text-[var(--color-primary)]">Billing Questions</h2>
          <div className="space-y-4">
            {faqs.map((f) => (
              <details key={f.q} className="animate-fade-up group bg-white border border-[var(--color-border)] rounded-xl p-6">
                <summary className="cursor-pointer font-medium text-[var(--color-primary)]">{f.q}</summary>
                <p className="mt-3 text-[var(--color-ink)] leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light mb-4">Questions About Coverage?</h2>
          <p className="text-white/80 mb-8">Start with a free consultation and we will help you understand your options.</p>
          <a href="/contact" className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] border border-white/40 transition-colors text-white px-8 py-3 rounded-full">
            Request a Free Consultation
          </a>
        </div>
      </section>
    </main>
  )
}
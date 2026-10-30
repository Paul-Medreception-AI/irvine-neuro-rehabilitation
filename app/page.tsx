import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Neuro Rehabilitation in Southfield, MI | Irvine Neuro',
  description: 'Personalized neuro rehabilitation in Southfield, MI. Occupational, physical and recreational therapy and head injury rehabilitation. Call (248) 415-2500.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Neuro Rehabilitation in Southfield, MI | Irvine Neuro',
    description: 'Personalized neuro rehabilitation in Southfield, MI. Occupational, physical and recreational therapy and head injury rehabilitation. Call (248) 415-2500.',
    url: 'https://irvineneurorehabilitation.com/',
    siteName: 'Irvine Neuro Rehabilitation',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Neuro Rehabilitation in Southfield, MI | Irvine Neuro',
    description: 'Personalized neuro rehabilitation in Southfield, MI. Occupational, physical and recreational therapy and head injury rehabilitation. Call (248) 415-2500.',
  },
}

const trust = [
  'Serving Patients Since 1986',
  'Personalized Care Plans',
  'Holistic, Goal-Focused Approach',
  'Compassionate, Family-Centered Support',
]

const services = [
  {
    name: 'Occupational Therapy',
    description: 'We help you independently complete the daily activities you need to, want to and are expected to do. Treatment is tailored to your routines, abilities and goals.',
    icon: (
      <svg className="w-10 h-10 stroke-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 11l9-8 9 8M5 10v10h14V10" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 15l2 2 4-4" />
      </svg>
    ),
  },
  {
    name: 'Physical Therapy',
    description: 'Our therapy focuses on preventing impairments and disabilities related to movement, function and health. Each plan targets your specific physical condition.',
    icon: (
      <svg className="w-10 h-10 stroke-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <circle cx="13" cy="4.5" r="1.8" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8l-3 4 3 3-1 5M12 8l3 3h3M9 12l-3 2" />
      </svg>
    ),
  },
  {
    name: 'Recreational Therapy',
    description: 'Recreational therapy uses meaningful activities to support recovery, confidence and engagement in daily life. Sessions are designed around your interests and personal goals.',
    icon: (
      <svg className="w-10 h-10 stroke-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <circle cx="12" cy="12" r="4" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
      </svg>
    ),
  },
]

const steps = [
  { number: '01', title: 'Free Consultation', description: 'Talk with our team about your story, concerns and goals. We will answer your questions and explain how we can help.' },
  { number: '02', title: 'Personalized Plan', description: 'We build a holistic plan specific to your needs and physical condition. Your goals guide every part of the program.' },
  { number: '03', title: 'Recover and Rebuild', description: 'Work with your therapists toward greater independence in daily life. We adjust your care as you progress.' },
]

export default function Home() {
  return (
    <main>
      <section className="min-h-[90vh] bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] flex items-center text-white">
        {/* optimize-skill target: pure-gradient hero (no real photo was found on the prior site) */}
        <div className="max-w-5xl mx-auto px-6 text-center py-20">
          <h1 className="font-['Cormorant_Garamond'] text-6xl sm:text-7xl font-light tracking-tight leading-tight">
            Neuro Rehabilitation Built Around Your Personal Goals and Recovery
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mt-6 leading-relaxed">
            Since 1986, Irvine Neuro Rehabilitation has served patients and families with compassion and understanding. Our holistic programs are shaped around your needs and physical condition, never a one-size-fits-all plan.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <a href="/contact" className="bg-white text-[var(--color-dark)] px-8 py-4 rounded-xl font-bold shadow-xl hover:-translate-y-0.5 transition-all">
              Request a Free Consultation
            </a>
            <a href="/services" className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all">
              View Our Programs
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white py-8 border-b border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-x-12 gap-y-4">
          {trust.map((t) => (
            <div key={t} className="flex items-center gap-2 text-[var(--color-primary)]">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <circle cx="12" cy="12" r="9" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 12l3 3 5-6" />
              </svg>
              <span className="font-bold text-[var(--color-ink)]">{t}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-['Cormorant_Garamond'] text-5xl text-center text-[var(--color-ink)] mb-4">How We Can Help</h2>
          <p className="text-center text-[var(--color-muted)] mb-16">Programs shaped around your needs, your physical condition and your goals.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((s) => (
              <div key={s.name} className="animate-fade-up bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                {s.icon}
                <h3 className="font-['Cormorant_Garamond'] text-2xl font-semibold text-[var(--color-ink)] mt-5">{s.name}</h3>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed mt-3">{s.description}</p>
                <a href="/services" className="inline-block text-[var(--color-primary)] font-semibold text-sm mt-6 hover:underline">Learn More →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-3 animate-fade-up">
            <h2 className="font-['Cormorant_Garamond'] text-4xl text-[var(--color-ink)]">Rehabilitation That Starts With Understanding You</h2>
            <p className="text-[var(--color-muted)] leading-relaxed mt-6">
              Since 1986, Irvine Neuro Rehabilitation has served patients with compassion and understanding. We know that when you or a loved one seeks a rehabilitation family, what matters most is finding one focused on your personal goals.
            </p>
            <p className="text-[var(--color-muted)] leading-relaxed mt-4">
              We do not use cookie cutter, one-size-fits-all strategies. Our holistic approach is specific to your needs and your physical condition, and our programs target every component of rehabilitative care.
            </p>
            <a href="/team" className="inline-block text-[var(--color-primary)] font-semibold mt-6 hover:underline">Meet Our Team →</a>
          </div>
          <div className="lg:col-span-2 bg-[var(--color-light)] rounded-2xl h-80 w-full flex items-center justify-center">
            <svg className="w-20 h-20 stroke-[var(--color-primary)] opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s-8-5-8-11a4.5 4.5 0 018-2.8A4.5 4.5 0 0120 10c0 6-8 11-8 11z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 13h4l2-3 3 5 2-2h5" />
            </svg>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-ink)] text-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-['Cormorant_Garamond'] text-4xl text-center mb-16">Getting Started Is Simple</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {steps.map((s) => (
              <div key={s.number} className="animate-fade-up">
                <div className="font-['Cormorant_Garamond'] text-7xl text-[var(--color-primary)] opacity-60">{s.number}</div>
                <h3 className="font-['Cormorant_Garamond'] text-2xl mt-2">{s.title}</h3>
                <p className="font-['DM_Sans'] text-sm text-white/70 mt-3 leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] text-white py-24 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-['Cormorant_Garamond'] text-5xl font-light mb-6">Personalized Neuro Rehabilitation to Reclaim Your Independence</h2>
          <a href="/contact" className="inline-block bg-white text-[var(--color-dark)] font-bold px-12 py-5 rounded-2xl shadow-2xl hover:-translate-y-1 transition-all text-lg">
            Request a Free Consultation
          </a>
        </div>
      </section>
    </main>
  )
}
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Specialty Medical Care Southfield MI | Irvine Neuro Rehab',
  description: 'Irvine Neuro Rehabilitation serves patients from Southfield, MI with occupational therapy, speech therapy, psychiatry and case management. Call (248) 415-2500.',
  alternates: { canonical: '/locations/southfield-mi' },
  openGraph: {
    title: 'Specialty Medical Care Southfield MI | Irvine Neuro Rehab',
    description: 'Irvine Neuro Rehabilitation serves patients from Southfield, MI with occupational therapy, speech therapy, psychiatry and case management. Call (248) 415-2500.',
    url: 'https://irvineneurorehabilitation.com/locations/southfield-mi',
    siteName: 'Irvine Neuro Rehabilitation',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Specialty Medical Care Southfield MI | Irvine Neuro Rehab',
    description: 'Irvine Neuro Rehabilitation serves patients from Southfield, MI with occupational therapy, speech therapy, psychiatry and case management. Call (248) 415-2500.',
  },
}

const services = [
  {
    title: 'Occupational Therapy',
    href: '/services',
    desc: 'Therapy focused on rebuilding the skills needed for daily living, work and independence, guided by occupational therapist Amy Cooper.',
    icon: 'M15 12a3 3 0 11-6 0 3 3 0 016 0zM4.5 20a7.5 7.5 0 0115 0',
  },
  {
    title: 'Speech Therapy',
    href: '/services',
    desc: 'Support for communication, language and swallowing concerns, provided by speech therapist Regina Kinnard.',
    icon: 'M7 8h10M7 12h6m-9 8l3-4h11a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v14z',
  },
  {
    title: 'Psychiatry',
    href: '/services',
    desc: 'Psychiatric evaluation and care led by Medical Director Dr. Theodore Ruza, DO.',
    icon: 'M12 6v12m6-6H6m12 9H6a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2v14a2 2 0 01-2 2z',
  },
  {
    title: 'Case Management',
    href: '/services',
    desc: 'Coordination of care and resources with Karen Dawson, MA, LPC, to help keep your plan organized.',
    icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 012-2h2a2 2 0 012 2M9 5h6m-6 7l2 2 4-4',
  },
  {
    title: 'Counseling',
    href: '/services',
    desc: 'Talk-based counseling support with licensed professional counselor Michelle Honoway, MA, LPC.',
    icon: 'M4.3 12.7a4.5 4.5 0 016.4-6.4L12 7.6l1.3-1.3a4.5 4.5 0 016.4 6.4L12 20.4z',
  },
  {
    title: 'Our Team',
    href: '/about',
    desc: 'Meet the clinicians who work together across therapy, psychiatry and care coordination.',
    icon: 'M17 20h5v-2a4 4 0 00-5-3.9M9 12a4 4 0 100-8 4 4 0 000 8zM2 20v-2a4 4 0 014-4h6a4 4 0 014 4v2',
  },
]

const faqs = [
  {
    q: 'How do I get to the office from Southfield?',
    a: 'Call (248) 415-2500 and the team can give you directions from Southfield to the office.',
  },
  {
    q: 'Can I become a patient if I live in Southfield?',
    a: 'Please call (248) 415-2500 or use our contact page to ask about availability and next steps for new patients from Southfield.',
  },
  {
    q: 'What should I bring to my first visit?',
    a: 'It is generally helpful to bring a photo ID, a list of current medications, relevant medical records and any questions you have. Ask the office if anything else is needed.',
  },
  {
    q: 'How do I book an appointment?',
    a: 'Call (248) 415-2500 or send a message through our contact page, and the team will help you schedule.',
  },
]

export default function Page() {
  return (
    <main>
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-28 text-white">
        <div className="max-w-4xl mx-auto px-6">
          <nav className="text-sm text-white/70 mb-6">
            <a href="/" className="hover:text-white transition-colors">Home</a> › Locations › Southfield, MI
          </nav>
          <h1 className="font-[Cormorant,serif] text-5xl font-light mb-6">Specialty Medical Care Near Southfield, MI</h1>
          <p className="text-xl text-white/80 mb-8">Serving patients from Southfield and surrounding MI communities.</p>
          <a href="/contact" className="inline-block rounded-full bg-white px-8 py-3 font-medium text-[var(--color-primary)] hover:bg-[var(--color-light)] transition-colors">Schedule in Southfield</a>
        </div>
      </section>

      {/* page-image:start */}
      <div className="max-w-5xl mx-auto px-6 -mt-10 relative z-10">
        <div className="w-full rounded-2xl overflow-hidden shadow-xl bg-[var(--color-light)]">
          <img src={"/images/stock/location-southfield-mi.jpg"} alt={"Aerial night view of Chicago's illuminated skyline showcasing skyscrapers and city lights."} width={1200} height={627} loading="lazy" className="block w-full h-auto" />
        </div>
      </div>
      {/* page-image:end */}

      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6 animate-fade-up">
          <h2 className="font-[Cormorant,serif] text-4xl text-[var(--color-primary)] mb-6">Serving the Southfield Area</h2>
          <p className="text-[var(--color-ink)] leading-relaxed mb-4">Irvine Neuro Rehabilitation serves patients traveling from Southfield and nearby communities. When you book, our team can walk you through directions to the office so you know what to expect before you arrive.</p>
          <p className="text-[var(--color-ink)] leading-relaxed mb-10">Patients from Southfield can expect a team that includes occupational therapy, speech therapy, psychiatry and case management. Call (248) 415-2500 to talk about your needs and learn which service fits best.</p>
          <div className="bg-[var(--color-light)] rounded-2xl h-64 flex items-center justify-center text-[var(--color-primary)]">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s-7-6.2-7-11a7 7 0 1114 0c0 4.8-7 11-7 11z" />
              <circle cx="12" cy="10" r="2.5" />
            </svg>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-[Cormorant,serif] text-4xl text-[var(--color-primary)] mb-12">Services Available to Southfield Patients</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div key={s.title} className="animate-fade-up rounded-2xl border border-[var(--color-border)] bg-[var(--color-cream)] p-8 hover:shadow-lg transition-shadow">
                <div className="text-[var(--color-accent)] mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d={s.icon} />
                  </svg>
                </div>
                <h3 className="font-[Cormorant,serif] text-2xl text-[var(--color-primary)] mb-3">{s.title}</h3>
                <p className="text-[var(--color-muted)] leading-relaxed mb-4">{s.desc}</p>
                <a href={s.href} className="text-[var(--color-accent)] font-medium hover:text-[var(--color-accent-dark)] transition-colors">Learn More →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-[Cormorant,serif] text-4xl text-[var(--color-primary)] mb-10">Southfield Patient FAQs</h2>
          <div className="space-y-6">
            {faqs.map((f) => (
              <div key={f.q} className="animate-fade-up rounded-2xl bg-white border border-[var(--color-border)] p-6">
                <h3 className="font-semibold text-[var(--color-ink)] mb-2">{f.q}</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-[Cormorant,serif] text-4xl mb-6">Get Expert Care from Southfield</h2>
          <p className="text-white/80 mb-8">Call (248) 415-2500 or reach out online to get started.</p>
          <a href="/contact" className="inline-block rounded-full bg-white px-8 py-3 font-medium text-[var(--color-primary)] hover:bg-[var(--color-light)] transition-colors">Contact Us</a>
        </div>
      </section>
    </main>
  )
}
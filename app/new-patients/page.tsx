import type { Metadata } from 'next'
import SplitHero from '@/components/SplitHero'

export const metadata: Metadata = {
  title: 'New Patient Information | Irvine Neuro Rehabilitation',
  description: 'Learn what to expect at your first visit to Irvine Neuro Rehabilitation in Southfield, MI, what to bring, and which patient forms to expect.',
  alternates: { canonical: '/new-patients' },
  openGraph: {
    title: 'New Patient Information | Irvine Neuro Rehabilitation',
    description: 'Learn what to expect at your first visit to Irvine Neuro Rehabilitation in Southfield, MI, what to bring, and which patient forms to expect.',
    url: 'https://www.irvineneurorehabilitation.com/new-patients',
    siteName: 'Irvine Neuro Rehabilitation',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'New Patient Information | Irvine Neuro Rehabilitation',
    description: 'Learn what to expect at your first visit to Irvine Neuro Rehabilitation in Southfield, MI, what to bring, and which patient forms to expect.',
  },
}

const steps = [
  { n: '1', title: 'Schedule', text: 'Call our office at (248) 415-2500 or send us a message to set up your first visit. A free in-person consultation, with a tour of the campus, is a good place to start.' },
  { n: '2', title: 'Complete Paperwork', text: 'Intake forms can be completed before your visit or at your first appointment, whichever is easier for you.' },
  { n: '3', title: 'First Visit', text: 'Your therapist or clinician reviews your history, performs an examination and leaves time for your questions and concerns.' },
  { n: '4', title: 'Care Plan', text: 'Together we build a personalized plan around your needs, physical condition and goals, one you agree on before moving forward.' },
]

const bring = [
  { label: 'Photo ID + Insurance Card', text: 'Helps us verify your identity and coverage details.' },
  { label: 'Medication List', text: 'Include prescriptions, over-the-counter medicines and supplements you take.' },
  { label: 'Prior Records', text: 'Bring any relevant records, imaging or reports from other providers about your condition.' },
  { label: 'Emergency Contact', text: 'Name and phone number of someone we can reach if needed.' },
]

const forms = [
  { label: 'Intake form', text: 'Your health history, current concerns and goals.' },
  { label: 'Consent form', text: 'Your agreement to evaluation and treatment.' },
  { label: 'HIPAA authorization', text: 'Your privacy preferences and who may receive your information.' },
]

function Check() {
  return (
    <svg className="w-8 h-8 shrink-0 text-[var(--color-accent)]" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
}

export default function NewPatientsPage() {
  return (
    <main>
      <SplitHero src="/images/stock/hub-newpatients.jpg" alt="A therapist guiding a patient through an exercise on a treatment table">
        <div>
          <h1 className="font-cormorant text-5xl font-light">New Patients</h1>
          <p className="mt-4 text-lg text-white/80">Everything you need to know before your first visit</p>
        </div>
      </SplitHero>

      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl text-center mb-16 text-[var(--color-primary)]">Your First Visit</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <div key={s.n} className="animate-fade-up bg-white border border-[var(--color-border)] rounded-2xl p-8">
                <div className="font-cormorant text-6xl font-light text-[var(--color-primary)]">{s.n}</div>
                <h3 className="mt-4 text-xl font-semibold text-[var(--color-ink)]">{s.title}</h3>
                <p className="mt-2 text-[var(--color-muted)] leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl text-center mb-12 text-[var(--color-primary)]">What to Bring</h2>
          <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
            {bring.map((b) => (
              <div key={b.label} className="animate-fade-up flex gap-4">
                <Check />
                <div>
                  <p className="font-bold text-[var(--color-ink)]">{b.label}</p>
                  <p className="text-[var(--color-muted)] leading-relaxed">{b.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="animate-fade-up bg-[var(--color-light)] rounded-2xl p-12 max-w-3xl mx-auto my-20">
          <h2 className="font-cormorant text-3xl text-[var(--color-primary)]">Patient Forms</h2>
          <p className="mt-4 text-[var(--color-ink)]">Forms available at our office or can be completed at your first appointment.</p>
          <ul className="mt-6 space-y-4">
            {forms.map((f) => (
              <li key={f.label} className="flex gap-4">
                <Check />
                <span className="text-[var(--color-ink)]"><strong>{f.label}:</strong> {f.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-3xl mx-auto px-6 text-center animate-fade-up">
          <h2 className="font-cormorant text-3xl text-[var(--color-primary)]">Scheduling Questions</h2>
          <p className="mt-4 text-[var(--color-muted)] leading-relaxed">
            To reschedule an appointment or ask about the office&apos;s policies, please call us at (248) 415-2500 and our team will be glad to help.
          </p>
        </div>
      </section>

      <section className="bg-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6 animate-fade-up">
          <h2 className="font-cormorant text-4xl font-light">Ready to Take the First Step?</h2>
          <p className="mt-4 text-white/80">Talk with our team about your goals and how our programs may fit your needs.</p>
          <a href="/contact" className="inline-block mt-8 rounded-full bg-[var(--color-accent)] border border-white/40 px-8 py-3 font-semibold text-white transition-colors hover:bg-[var(--color-accent-dark)]">
            Request a Free Consultation
          </a>
        </div>
      </section>
    </main>
  )
}
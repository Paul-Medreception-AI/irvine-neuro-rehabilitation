import type { Metadata } from 'next'
import HeroBackdrop from '@/components/HeroBackdrop'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Holistic vs Standard Rehabilitation Programs',
  description: 'Compare holistic and standard rehabilitation programs: approach, side effects, cost factors, time commitment and who each is best for.',
  alternates: { canonical: '/compare/holistic-vs-standard-rehabilitation' },
  openGraph: {
    title: 'Holistic vs Standard Rehabilitation Programs',
    description: 'Compare holistic and standard rehabilitation programs: approach, side effects, cost factors, time commitment and who each is best for.',
    url: 'https://irvineneurorehabilitation.com/compare/holistic-vs-standard-rehabilitation',
    siteName: 'Irvine Neuro Rehabilitation',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Holistic vs Standard Rehabilitation Programs',
    description: 'Compare holistic and standard rehabilitation programs: approach, side effects, cost factors, time commitment and who each is best for.',
  },
}

const rows = [
  { label: 'Effectiveness', a: 'Addresses physical, cognitive, emotional and social needs together. Often well suited to complex, multi-factor recovery, and research supports coordinated, multidisciplinary care for many neurological conditions.', b: 'Strong evidence for targeted, single-discipline goals such as restoring strength, range of motion or a specific skill.' },
  { label: 'Side Effects', a: 'Generally low risk. Temporary fatigue or emotional discomfort can occur as several areas are worked on at once.', b: 'Generally low risk. Temporary soreness or fatigue is common with exercise-based therapy.' },
  { label: 'Cost', a: 'Often involves several services, so coverage varies. Copays and deductibles may apply to each service type.', b: 'Usually a single service type, so billing is simpler. Copays and deductibles apply.' },
  { label: 'Time Commitment', a: 'More appointments across disciplines and more coordination, typically over a longer period.', b: 'Fewer appointments with a narrower focus, often over a shorter period.' },
  { label: 'Best For', a: 'People with overlapping challenges, such as movement, speech, thinking, mood and daily living after brain injury or illness.', b: 'People with one clear, well-defined goal or a single area of impairment.' },
]

const checkIcon = (
  <svg className="w-5 h-5 shrink-0 mt-0.5 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
)

const faqs = [
  { q: 'Is holistic rehabilitation better than standard rehabilitation?', a: 'Neither is better for everyone. Holistic programs fit people with several overlapping needs, while standard programs fit focused, single-goal recovery.' },
  { q: 'Can I start with standard rehabilitation and add more later?', a: 'Yes. Many people begin with one discipline and broaden their care as needs become clearer. A clinician can help you decide when to add services.' },
  { q: 'Which disciplines may be part of a holistic program?', a: 'Programs may include occupational therapy, speech therapy, psychiatry, counseling and case management, depending on your needs.' },
  { q: 'How does cost compare?', a: 'It depends on your coverage. Holistic care may involve multiple services, each with its own copays and deductibles. Check with your plan and your provider.' },
  { q: 'How do I know which approach fits me?', a: 'Think about how many areas of life are affected and how complex your goals are. A consultation can help you match your situation to a plan.' },
]

export default function Page() {
  return (
    <main>
      <section className="hero-photo relative overflow-hidden bg-[var(--color-dark)] py-28 sm:py-32 text-white text-center">
        <HeroBackdrop src="/images/stock/compare-holistic-vs-standard-rehabilitation.jpg" alt="Serious doctor in uniform massaging smiling female patients neck and stretching stiff neck muscles against gray background" />
        <div className="relative max-w-4xl mx-auto px-6">
          <nav className="text-sm text-white/70 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link> › <span>Resources</span> › <span>Comparison</span>
          </nav>
          <h1 className="font-cormorant text-5xl font-light">Holistic vs Standard Rehabilitation Programs</h1>
          <p className="mt-6 text-lg text-white/80 max-w-2xl mx-auto">Understand how the two approaches differ so you can choose the path that fits your recovery in Southfield, MI.</p>
        </div>
      </section>


      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl mb-12 text-[var(--color-primary)]">Side-by-Side Comparison</h2>
          <div className="rounded-2xl overflow-hidden border border-[var(--color-border)] animate-fade-up">
            <div className="grid grid-cols-3 bg-[var(--color-primary)] text-white font-medium">
              <div className="p-4">Factor</div>
              <div className="p-4">Holistic</div>
              <div className="p-4">Standard</div>
            </div>
            {rows.map((r, i) => (
              <div key={r.label} className={`grid grid-cols-3 text-sm text-[var(--color-ink)] ${i % 2 === 0 ? 'bg-white' : 'bg-[var(--color-light)]'}`}>
                <div className="p-4 font-semibold text-[var(--color-primary)]">{r.label}</div>
                <div className="p-4">{r.a}</div>
                <div className="p-4">{r.b}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-[var(--color-ink)]">
          <div className="animate-fade-up">
            <h2 className="font-cormorant text-4xl mb-6 text-[var(--color-primary)]">Holistic Rehabilitation</h2>
            <p className="mb-4 leading-relaxed">Holistic rehabilitation treats the whole person rather than a single symptom. After a brain injury, stroke or other neurological change, movement, speech, memory, mood and daily routines are often affected together. A holistic plan coordinates care across these areas.</p>
            <p className="mb-4 leading-relaxed">Evidence generally supports multidisciplinary rehabilitation for complex conditions, since progress in one area often supports progress in others. Typical patients have several concurrent challenges and benefit from one coordinated plan.</p>
            <p className="mb-12 leading-relaxed">Expect an initial assessment, shared goals, and regular reviews as needs change. Sessions may involve different clinicians, with case management helping keep everything aligned.</p>
          </div>
          <div className="animate-fade-up">
            <h2 className="font-cormorant text-4xl mb-6 text-[var(--color-primary)]">Standard Rehabilitation</h2>
            <p className="mb-4 leading-relaxed">Standard rehabilitation usually centers on one discipline, such as physical, occupational or speech therapy, with a defined goal and timeline. It is a proven, efficient route when the problem is well defined.</p>
            <p className="mb-4 leading-relaxed">Evidence is strong for focused interventions like strengthening, gait training or targeted language exercises. Typical patients have one main impairment and few other barriers to recovery.</p>
            <p className="leading-relaxed">Expect an evaluation, a structured exercise or skills plan, and progress measured against specific milestones. If new needs appear, the plan can be expanded.</p>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-light)] rounded-2xl p-12 max-w-3xl mx-auto my-20 animate-fade-up">
        <h2 className="font-cormorant text-4xl mb-8 text-[var(--color-primary)]">How to Decide</h2>
        <h3 className="text-xl font-semibold mb-3 text-[var(--color-primary)]">Choose holistic if...</h3>
        <ul className="space-y-3 mb-8 text-[var(--color-ink)]">
          {['Several areas of function are affected at once', 'Mood, thinking or daily living are concerns alongside physical recovery', 'You want one coordinated plan across providers'].map((t) => (
            <li key={t} className="flex gap-3">{checkIcon}<span>{t}</span></li>
          ))}
        </ul>
        <h3 className="text-xl font-semibold mb-3 text-[var(--color-primary)]">Choose standard if...</h3>
        <ul className="space-y-3 text-[var(--color-ink)]">
          {['You have one clear, specific goal', 'Your schedule allows only a few appointments', 'A single discipline already addresses your main need'].map((t) => (
            <li key={t} className="flex gap-3">{checkIcon}<span>{t}</span></li>
          ))}
        </ul>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl mb-8 text-[var(--color-primary)]">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((f) => (
              <details key={f.q} className="group border border-[var(--color-border)] rounded-xl p-5 animate-fade-up">
                <summary className="cursor-pointer font-semibold text-[var(--color-primary)] list-none flex justify-between items-center">
                  {f.q}
                  <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg>
                </summary>
                <p className="mt-3 text-[var(--color-ink)] leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-primary)] py-20 text-center text-white">
        <div className="max-w-2xl mx-auto px-6 animate-fade-up">
          <h2 className="font-cormorant text-4xl mb-4">Ready to Choose Your Path?</h2>
          <p className="mb-8 text-white/80">Talk with Irvine Neuro Rehabilitation in Southfield, MI at (248) 415-2500.</p>
          <Link href="/contact" className="inline-block bg-[var(--color-accent)] border border-white text-white px-8 py-3 rounded-full hover:bg-[var(--color-accent-dark)] transition-colors">Discuss Your Options</Link>
        </div>
      </section>
    </main>
  )
}
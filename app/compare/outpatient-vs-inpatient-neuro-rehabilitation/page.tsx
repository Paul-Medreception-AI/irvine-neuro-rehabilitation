import type { Metadata } from 'next'
import SplitHero from '@/components/SplitHero'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Outpatient vs Inpatient Neuro Rehabilitation Guide',
  description: 'Compare outpatient and inpatient neuro rehabilitation: intensity, cost factors, time commitment and who each setting suits best, from Irvine Neuro Rehabilitation.',
  alternates: { canonical: '/compare/outpatient-vs-inpatient-neuro-rehabilitation' },
  openGraph: {
    title: 'Outpatient vs Inpatient Neuro Rehabilitation Guide',
    description: 'Compare outpatient and inpatient neuro rehabilitation: intensity, cost factors, time commitment and who each setting suits best, from Irvine Neuro Rehabilitation.',
    url: 'https://irvineneurorehabilitation.com/compare/outpatient-vs-inpatient-neuro-rehabilitation',
    siteName: 'Irvine Neuro Rehabilitation',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Outpatient vs Inpatient Neuro Rehabilitation Guide',
    description: 'Compare outpatient and inpatient neuro rehabilitation: intensity, cost factors, time commitment and who each setting suits best, from Irvine Neuro Rehabilitation.',
  },
}

const rows = [
  { label: 'Effectiveness', a: 'Effective for people who are medically stable and can practice skills in real-life settings. Gains build steadily over weeks to months.', b: 'Highly effective early after a stroke, brain injury or spinal cord injury, when intensive, coordinated daily therapy is most needed.' },
  { label: 'Side Effects & Risks', a: 'Fatigue after sessions is common. Fewer risks of hospital-related complications, and skills are practiced where they will be used.', b: 'Fatigue is common with intense schedules. Time away from home and routine can be stressful for some people.' },
  { label: 'Cost', a: 'Typically billed per visit; copays and deductibles apply under many plans. No overnight facility charges.', b: 'Typically billed as a facility stay; coverage rules, authorizations and deductibles apply. Overall cost is usually higher than outpatient care.' },
  { label: 'Time Commitment', a: 'Scheduled sessions a few times per week, with home exercises between visits. Work and family life can often continue.', b: 'Full days of therapy on-site, often for several weeks, with round-the-clock nursing and medical oversight.' },
  { label: 'Best For', a: 'Stable patients with a safe home environment, or those continuing recovery after discharge.', b: 'Patients with complex medical needs, significant mobility or cognitive limits, or who need 24-hour supervision.' },
]

const aList = [
  'You are medically stable and can safely live at home',
  'You have family or caregiver support available',
  'You can travel to appointments reliably',
  'You want to keep work, school or family routines going',
  'You are continuing recovery after an inpatient stay',
]
const bList = [
  'You need 24-hour nursing or medical monitoring',
  'You cannot yet safely transfer, walk or manage daily care at home',
  'You need several therapy disciplines coordinated daily',
  'Your home is not yet set up for your safety',
  'Your care team recommends intensive early rehabilitation',
]

const faqs = [
  { q: 'Can I move from inpatient to outpatient rehabilitation?', a: 'Yes. Many people begin with an inpatient stay and then continue with outpatient therapy after discharge. Your care team can help plan that transition.' },
  { q: 'Is outpatient rehabilitation less effective?', a: 'Not necessarily. The right setting depends on medical stability, safety and the level of support needed. Outpatient therapy is well suited to people who can live at home safely.' },
  { q: 'What types of therapy are part of neuro rehabilitation?', a: 'Depending on needs, care may include occupational therapy, speech therapy, and psychiatric or counseling support. Irvine Neuro Rehabilitation has providers in these areas.' },
  { q: 'How do I know which setting my insurance covers?', a: 'Coverage varies by plan and by situation. Contact your insurer to ask about benefits, authorizations, copays and deductibles for each setting.' },
  { q: 'Who decides which level of care I need?', a: 'Usually your physician and rehabilitation team, based on your medical condition, abilities, safety at home and goals. You and your family are part of that decision.' },
]

export default function Page() {
  return (
    <main className="text-[var(--color-ink)]">
      <SplitHero src="/images/stock/compare-outpatient-vs-inpatient-neuro-rehabilitation.jpg" alt="A physical therapist supports a man's arms as he lifts dumbbells in a clinic.">
        <div>
          <nav className="text-sm text-white/70 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link> › Resources › Comparison
          </nav>
          <h1 className="font-cormorant text-5xl font-light">Outpatient vs Inpatient Neuro Rehabilitation: What to Consider</h1>
          <p className="mt-6 text-lg text-white/80 max-w-2xl">Choosing a rehabilitation setting shapes your recovery. Here is a clear look at how the two options differ.</p>
        </div>
      </SplitHero>


      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl mb-12 text-[var(--color-primary)]">Side-by-Side Comparison</h2>
          <div className="rounded-2xl overflow-hidden border border-[var(--color-border)] animate-fade-up">
            <div className="grid grid-cols-3 bg-[var(--color-primary)] text-white font-medium">
              <div className="p-4"> </div>
              <div className="p-4">Outpatient</div>
              <div className="p-4">Inpatient</div>
            </div>
            {rows.map((r, i) => (
              <div key={r.label} className={`grid grid-cols-3 text-sm ${i % 2 === 0 ? 'bg-white' : 'bg-[var(--color-light)]'}`}>
                <div className="p-4 font-semibold text-[var(--color-primary)]">{r.label}</div>
                <div className="p-4">{r.a}</div>
                <div className="p-4">{r.b}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl mb-6 text-[var(--color-primary)]">Outpatient Neuro Rehabilitation</h2>
          <p className="mb-4 leading-relaxed">Outpatient rehabilitation means you live at home and travel to scheduled therapy sessions. It is common for people recovering from stroke, concussion or traumatic brain injury, and for those managing conditions such as Parkinson's disease or multiple sclerosis.</p>
          <p className="mb-4 leading-relaxed">Research on rehabilitation consistently shows that repeated, task-specific practice supports recovery, and outpatient care lets you apply new skills in your own kitchen, bathroom and neighborhood. Typical patients are medically stable, able to participate in sessions, and have a safe home setting.</p>
          <p className="mb-12 leading-relaxed">Expect an evaluation, goal setting, hands-on sessions and a home program. Therapy may address daily activities, speech and communication, cognition, and emotional well-being.</p>

          <h2 className="font-cormorant text-4xl mb-6 text-[var(--color-primary)]">Inpatient Neuro Rehabilitation</h2>
          <p className="mb-4 leading-relaxed">Inpatient rehabilitation takes place in a hospital unit or dedicated facility where you stay overnight. It offers daily, intensive therapy from multiple disciplines alongside round-the-clock medical and nursing care.</p>
          <p className="mb-4 leading-relaxed">It is often recommended soon after a major neurological event, when needs are complex and close monitoring matters. Typical patients cannot yet safely manage daily care at home or need several therapies coordinated each day.</p>
          <p className="leading-relaxed">Expect a structured daily schedule, frequent team reviews and discharge planning that often leads into outpatient therapy.</p>
        </div>
      </section>

      <section className="bg-[var(--color-light)] rounded-2xl p-12 max-w-3xl mx-auto my-20 animate-fade-up">
        <h2 className="font-cormorant text-4xl mb-8 text-[var(--color-primary)]">How to Decide</h2>
        <h3 className="text-xl font-semibold mb-4">Choose outpatient if...</h3>
        <ul className="space-y-3 mb-10">
          {aList.map((t) => (
            <li key={t} className="flex gap-3">
              <svg className="w-6 h-6 shrink-0 text-[var(--color-accent)]" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
              <span>{t}</span>
            </li>
          ))}
        </ul>
        <h3 className="text-xl font-semibold mb-4">Choose inpatient if...</h3>
        <ul className="space-y-3">
          {bList.map((t) => (
            <li key={t} className="flex gap-3">
              <svg className="w-6 h-6 shrink-0 text-[var(--color-accent)]" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
              <span>{t}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl mb-8 text-[var(--color-primary)]">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((f) => (
              <details key={f.q} className="bg-white border border-[var(--color-border)] rounded-xl p-5 animate-fade-up">
                <summary className="cursor-pointer font-semibold text-[var(--color-primary)]">{f.q}</summary>
                <p className="mt-3 text-[var(--color-muted)] leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light mb-4">Ready to Talk Through Your Next Step?</h2>
          <p className="text-white/80 mb-8">Reach out to Irvine Neuro Rehabilitation in Southfield, MI, or call (248) 415-2500.</p>
          <Link href="/contact" className="inline-block bg-[var(--color-accent)] border border-white/40 hover:bg-[var(--color-accent-dark)] transition-colors text-white px-8 py-3 rounded-full">Discuss Your Options</Link>
        </div>
      </section>
    </main>
  )
}
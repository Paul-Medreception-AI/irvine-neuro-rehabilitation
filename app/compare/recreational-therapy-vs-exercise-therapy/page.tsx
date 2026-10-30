import type { Metadata } from 'next'
import HeroBackdrop from '@/components/HeroBackdrop'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Recreational Therapy vs Exercise Therapy | Compare',
  description: 'Compare recreational therapy and traditional exercise therapy: goals, side effects, cost factors, time commitment and who each approach suits best.',
  alternates: { canonical: '/compare/recreational-therapy-vs-exercise-therapy' },
  openGraph: {
    title: 'Recreational Therapy vs Exercise Therapy | Compare',
    description: 'Compare recreational therapy and traditional exercise therapy: goals, side effects, cost factors, time commitment and who each approach suits best.',
    url: 'https://irvineneurorehabilitation.com/compare/recreational-therapy-vs-exercise-therapy',
    siteName: 'Irvine Neuro Rehabilitation',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Recreational Therapy vs Exercise Therapy | Compare',
    description: 'Compare recreational therapy and traditional exercise therapy: goals, side effects, cost factors, time commitment and who each approach suits best.',
  },
}

const rows = [
  { label: 'Effectiveness', a: 'Supports mood, motivation, social engagement, coping skills and functional independence through meaningful activities.', b: 'Builds strength, range of motion, balance, endurance and mobility through structured, repeated exercises.' },
  { label: 'Side effects', a: 'Generally low risk. Temporary fatigue or frustration can occur with new activities and are adjusted by the therapist.', b: 'Generally low risk. Muscle soreness, fatigue or strain can occur, especially if progression is too fast.' },
  { label: 'Cost', a: 'Depends on the setting and program. Coverage varies, so check your plan for copays, deductibles and any program fees.', b: 'Often billed as rehabilitation visits. Copays and deductibles may apply, and coverage depends on your plan and referral.' },
  { label: 'Time commitment', a: 'Regular sessions, often group or activity based, with optional practice at home or in the community.', b: 'Regular sessions plus a home exercise program that usually needs consistent daily or weekly practice.' },
  { label: 'Best for', a: 'People whose goals center on engagement, leisure skills, confidence, emotional wellbeing and returning to valued activities.', b: 'People whose goals center on physical impairments such as weakness, stiffness, balance problems or reduced stamina.' },
]

const checkIcon = (
  <svg className="w-6 h-6 shrink-0 mt-0.5 text-[var(--color-accent)]" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
)

const aList = [
  'Your main goals involve motivation, mood, social connection or confidence.',
  'You want to rebuild participation in hobbies, leisure and community life.',
  'Traditional exercise feels repetitive and you struggle to stay engaged.',
  'You are working on coping, stress management or cognitive and social skills.',
]
const bList = [
  'Your main goals involve strength, flexibility, balance or walking.',
  'You are recovering from surgery, injury or a neurological event with clear physical deficits.',
  'You want measurable progress on specific movements and a structured home program.',
  'A physician or therapist has recommended targeted physical conditioning.',
]

const faqs = [
  { q: 'Can I do both recreational therapy and exercise therapy?', a: 'Yes. Many people benefit from combining them, since physical gains from exercise can support participation in meaningful activities. A care team can help coordinate goals so the approaches complement each other.' },
  { q: 'Which approach works faster?', a: 'It depends on your goals, condition and consistency. Exercise therapy often shows measurable physical changes over weeks of regular practice, while recreational therapy gains in engagement and confidence can appear at different paces.' },
  { q: 'Is recreational therapy just games?', a: 'No. Activities are chosen and adapted to meet specific therapeutic goals, such as attention, social skills, coordination or coping. The enjoyment is part of what helps people stay involved.' },
  { q: 'Will insurance cover these therapies?', a: 'Coverage varies by plan and by how the service is billed. Contact your insurer to ask about copays, deductibles, referral requirements and covered visits before starting.' },
  { q: 'How do I know which one is right for me?', a: 'Start by listing what you want to improve and what is getting in the way. A clinician can assess your needs and recommend one approach or a combination. You can call (248) 415-2500 to discuss your situation.' },
]

export default function Page() {
  return (
    <main>
      <section className="hero-photo relative overflow-hidden bg-[var(--color-dark)] py-28 sm:py-32 text-white text-center">
        <HeroBackdrop src="/images/stock/compare-recreational-therapy-vs-exercise-therapy.jpg" alt="A physiotherapist assists a patient in stretching exercises indoors." />
        <div className="relative max-w-4xl mx-auto px-6">
          <nav aria-label="Breadcrumb" className="text-sm text-white/70 mb-6 flex items-center justify-center gap-2">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>›</span>
            <span>Resources</span>
            <span>›</span>
            <span className="text-white">Comparison</span>
          </nav>
          <h1 className="font-cormorant text-5xl font-light">Recreational Therapy vs Traditional Exercise Therapy</h1>
          <p className="mt-6 text-lg text-white/80 max-w-2xl mx-auto">A clear look at how each approach works, so you can choose the path that fits your goals.</p>
        </div>
      </section>


      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl mb-12 text-[var(--color-primary)]">Side-by-Side Comparison</h2>
          <div className="rounded-2xl overflow-hidden border border-[var(--color-border)] animate-fade-up">
            <div className="grid grid-cols-3 bg-[var(--color-primary)] text-white font-semibold">
              <div className="p-4">Factor</div>
              <div className="p-4">Recreational Therapy</div>
              <div className="p-4">Traditional Exercise Therapy</div>
            </div>
            {rows.map((r, i) => (
              <div key={r.label} className={`grid grid-cols-3 text-[var(--color-ink)] ${i % 2 === 0 ? 'bg-white' : 'bg-[var(--color-light)]'}`}>
                <div className="p-4 font-semibold text-[var(--color-primary)]">{r.label}</div>
                <div className="p-4 text-sm leading-relaxed">{r.a}</div>
                <div className="p-4 text-sm leading-relaxed">{r.b}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-[var(--color-ink)]">
          <div className="animate-fade-up">
            <h2 className="font-cormorant text-4xl mb-6 text-[var(--color-primary)]">Recreational Therapy</h2>
            <p className="mb-4 leading-relaxed">Recreational therapy uses purposeful activities such as games, creative arts, social outings, music and adapted leisure pursuits to address physical, cognitive, emotional and social needs. The activity is the tool, and the goal is practical: greater independence and a fuller daily life.</p>
            <p className="mb-4 leading-relaxed">Research on activity-based and leisure-focused interventions suggests benefits for mood, social participation and quality of life, particularly in people recovering from neurological conditions, injury or mental health challenges. Evidence varies by condition, and outcomes depend on how well the program matches individual goals.</p>
            <p className="mb-12 leading-relaxed">A typical participant wants to reconnect with enjoyable activities, build confidence or practice skills in a lower-pressure setting. Expect an initial discussion of interests and goals, then activities that are graded in difficulty and adapted as you progress.</p>
          </div>
          <div className="animate-fade-up">
            <h2 className="font-cormorant text-4xl mb-6 text-[var(--color-primary)]">Traditional Exercise Therapy</h2>
            <p className="mb-4 leading-relaxed">Traditional exercise therapy uses prescribed movements and conditioning to restore or improve physical function. It commonly includes strengthening, stretching, balance work, gait training and aerobic activity, progressed gradually under a therapist&apos;s guidance.</p>
            <p className="mb-4 leading-relaxed">Exercise is one of the most widely studied rehabilitation approaches, with solid support for improving strength, mobility and function across many musculoskeletal and neurological conditions. Results depend strongly on consistency and appropriate progression.</p>
            <p className="leading-relaxed">A typical patient has identifiable physical limitations after an injury, surgery or illness. Expect an assessment, a tailored plan of exercises, periodic reassessment and a home program to keep progress going between visits.</p>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-light)] rounded-2xl p-12 max-w-3xl mx-auto my-20 animate-fade-up">
        <h2 className="font-cormorant text-4xl mb-8 text-[var(--color-primary)]">How to Decide</h2>
        <h3 className="text-xl font-semibold text-[var(--color-primary)] mb-4">Choose recreational therapy if...</h3>
        <ul className="space-y-3 mb-10 text-[var(--color-ink)]">
          {aList.map((t) => (<li key={t} className="flex gap-3">{checkIcon}<span>{t}</span></li>))}
        </ul>
        <h3 className="text-xl font-semibold text-[var(--color-primary)] mb-4">Choose traditional exercise therapy if...</h3>
        <ul className="space-y-3 text-[var(--color-ink)]">
          {bList.map((t) => (<li key={t} className="flex gap-3">{checkIcon}<span>{t}</span></li>))}
        </ul>
        <p className="mt-8 text-sm text-[var(--color-muted)]">Not sure? Many people use a combination. A clinician can help you weigh the options.</p>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl mb-10 text-[var(--color-primary)]">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((f) => (
              <details key={f.q} className="group border border-[var(--color-border)] rounded-xl p-5 animate-fade-up">
                <summary className="cursor-pointer font-semibold text-[var(--color-primary)] flex justify-between items-center gap-4">
                  {f.q}
                  <svg className="w-5 h-5 shrink-0 transition-transform group-open:rotate-180" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </summary>
                <p className="mt-3 text-[var(--color-ink)] leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light mb-4">Ready to Choose the Right Approach?</h2>
          <p className="mb-8 text-white/80">Talk with Irvine Neuro Rehabilitation in Southfield, MI about your goals and options.</p>
          <Link href="/contact" className="inline-block rounded-full bg-white text-[var(--color-accent)] px-8 py-3 font-semibold hover:bg-[var(--color-light)] transition-colors">Discuss Your Options</Link>
        </div>
      </section>
    </main>
  )
}
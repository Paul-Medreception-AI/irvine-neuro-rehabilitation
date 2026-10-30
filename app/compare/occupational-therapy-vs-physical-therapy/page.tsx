import type { Metadata } from 'next'
import SplitHero from '@/components/SplitHero'

export const metadata: Metadata = {
  title: 'Occupational Therapy vs Physical Therapy | Compare',
  description: 'Compare occupational therapy and physical therapy: goals, methods, side effects, cost factors and who each suits best, so you can choose with confidence.',
  alternates: { canonical: '/compare/occupational-therapy-vs-physical-therapy' },
  openGraph: {
    title: 'Occupational Therapy vs Physical Therapy | Compare',
    description: 'Compare occupational therapy and physical therapy: goals, methods, side effects, cost factors and who each suits best, so you can choose with confidence.',
    url: 'https://irvineneurorehabilitation.com/compare/occupational-therapy-vs-physical-therapy',
    siteName: 'Irvine Neuro Rehabilitation',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Occupational Therapy vs Physical Therapy | Compare',
    description: 'Compare occupational therapy and physical therapy: goals, methods, side effects, cost factors and who each suits best, so you can choose with confidence.',
  },
}

const rows = [
  { label: 'Primary focus', ot: 'Performing daily activities: dressing, cooking, writing, working, managing routines', pt: 'Movement, strength, balance, walking and pain related to the body' },
  { label: 'Effectiveness', ot: 'Well supported for improving independence, hand function, cognition-related daily tasks and sensory needs', pt: 'Well supported for improving mobility, strength, balance and reducing musculoskeletal pain' },
  { label: 'Side effects', ot: 'Usually mild: temporary fatigue or muscle soreness after sessions', pt: 'Usually mild: temporary soreness or fatigue as exercise load increases' },
  { label: 'Cost', ot: 'Copays and deductibles may apply depending on your coverage; confirm with your plan', pt: 'Copays and deductibles may apply depending on your coverage; confirm with your plan' },
  { label: 'Time commitment', ot: 'Regular sessions plus practice of strategies and exercises at home', pt: 'Regular sessions plus a home exercise program done consistently' },
  { label: 'Best for', ot: 'People whose goal is doing everyday tasks more independently', pt: 'People whose goal is moving better or with less pain' },
]

const faqs = [
  { q: 'Can I see both an occupational therapist and a physical therapist?', a: 'Yes. Many people with neurological conditions, injuries or surgery benefit from both, since the two disciplines address different goals and often complement each other.' },
  { q: 'Which is better after a stroke or brain injury?', a: 'Often both are involved. Physical therapy commonly targets walking, balance and strength, while occupational therapy targets daily tasks, hand use and thinking skills needed for routines. A clinician can advise on the right mix.' },
  { q: 'Is occupational therapy only for hands and arms?', a: 'No. Hand and arm function is one area, but occupational therapy also covers self-care, home and work routines, sensory processing, energy management and cognitive strategies.' },
  { q: 'Do I need a referral?', a: 'Requirements vary by insurance plan and situation. Check with your plan and call our office to ask about next steps.' },
  { q: 'How do I know which one to start with?', a: 'Think about your main difficulty. If it is moving, walking or pain, physical therapy is a common start. If it is managing daily tasks, occupational therapy is often the better fit. A conversation with a clinician can clarify this.' },
]

function Check() {
  return (
    <svg className="w-6 h-6 shrink-0 text-[var(--color-accent)]" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  )
}

export default function Page() {
  const aList = [
    'Your main struggle is with daily tasks like dressing, cooking, writing or work duties',
    'You are recovering hand or arm function after a stroke, injury or surgery',
    'You have difficulty with memory, planning or sensory sensitivities that affect routines',
    'You want strategies, tools or home adjustments to be more independent',
  ]
  const bList = [
    'Your main concern is pain, stiffness or weakness in a joint, muscle or the back',
    'You have trouble walking, balancing or getting up and down safely',
    'You are recovering from an orthopedic injury or surgery',
    'You want a structured exercise program to build strength and endurance',
  ]
  return (
    <main className="text-[var(--color-ink)]">
      <SplitHero src="/images/stock/compare-occupational-therapy-vs-physical-therapy.jpg" alt="Crop anonymous chiropractor in uniform and wristwatch examining shoulder of smiling faceless woman in casual clothes in doctor office in clinic">
        <div>
          <nav className="text-sm text-white/70 mb-6">
            <a href="/" className="hover:text-white transition-colors">Home</a> › <span>Resources</span> › <span>Comparison</span>
          </nav>
          <h1 className="font-cormorant text-5xl font-light">Occupational Therapy vs Physical Therapy: Which Is Right for You?</h1>
          <p className="mt-6 text-lg text-white/80 max-w-2xl">Both help you recover and function better, but they focus on different goals. Here is how to tell them apart.</p>
        </div>
      </SplitHero>


      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl mb-12 text-[var(--color-primary)]">Side-by-Side Comparison</h2>
          <div className="rounded-2xl overflow-hidden border border-[var(--color-border)] animate-fade-up">
            <div className="grid grid-cols-3 bg-[var(--color-primary)] text-white font-semibold">
              <div className="p-4">Factor</div>
              <div className="p-4">Occupational Therapy</div>
              <div className="p-4">Physical Therapy</div>
            </div>
            {rows.map((r, i) => (
              <div key={r.label} className={`grid grid-cols-3 text-sm ${i % 2 === 0 ? 'bg-white' : 'bg-[var(--color-light)]'}`}>
                <div className="p-4 font-semibold text-[var(--color-primary)]">{r.label}</div>
                <div className="p-4">{r.ot}</div>
                <div className="p-4">{r.pt}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="animate-fade-up">
            <h2 className="font-cormorant text-4xl mb-6 text-[var(--color-primary)]">Occupational Therapy</h2>
            <p className="mb-4 leading-relaxed">Occupational therapy helps people do the activities that make up their day, from self-care and household tasks to work and hobbies. Therapists assess what is getting in the way, whether physical, cognitive or sensory, and build a plan to close the gap.</p>
            <p className="mb-4 leading-relaxed">Research supports occupational therapy for stroke recovery, brain injury, hand conditions, and difficulties with attention, memory and sensory processing. Typical patients include adults recovering from neurological events and anyone whose condition limits independence.</p>
            <p className="mb-12 leading-relaxed">Expect an initial evaluation, goals tied to real-life tasks, practice of techniques, advice on adaptive tools or environment changes, and activities to continue between visits.</p>
          </div>
          <div className="animate-fade-up">
            <h2 className="font-cormorant text-4xl mb-6 text-[var(--color-primary)]">Physical Therapy</h2>
            <p className="mb-4 leading-relaxed">Physical therapy focuses on restoring movement and physical function. Treatment commonly includes targeted exercise, manual techniques, gait and balance training, and education on posture and body mechanics.</p>
            <p className="mb-4 leading-relaxed">Evidence is strong for back and joint pain, post-surgical rehabilitation, balance problems and mobility loss from neurological conditions. Typical patients include people with sports or orthopedic injuries, older adults at risk of falls, and those regaining walking ability.</p>
            <p className="leading-relaxed">Expect a movement assessment, a graded exercise plan, hands-on guidance in sessions and a home program. Progress depends on consistency outside the clinic.</p>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-light)] rounded-2xl p-12 max-w-3xl mx-auto my-20 animate-fade-up">
        <h2 className="font-cormorant text-4xl mb-8 text-[var(--color-primary)]">How to Decide</h2>
        <h3 className="text-xl font-semibold mb-4">Choose occupational therapy if...</h3>
        <ul className="space-y-3 mb-10">
          {aList.map((t) => (<li key={t} className="flex gap-3"><Check /><span>{t}</span></li>))}
        </ul>
        <h3 className="text-xl font-semibold mb-4">Choose physical therapy if...</h3>
        <ul className="space-y-3 mb-10">
          {bList.map((t) => (<li key={t} className="flex gap-3"><Check /><span>{t}</span></li>))}
        </ul>
        <p className="text-[var(--color-muted)]">Not sure? Many people need both. A clinician can help sort out your priorities.</p>
      </section>

      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl mb-10 text-[var(--color-primary)]">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((f) => (
              <details key={f.q} className="animate-fade-up bg-white border border-[var(--color-border)] rounded-xl p-5 group">
                <summary className="cursor-pointer font-semibold text-[var(--color-primary)]">{f.q}</summary>
                <p className="mt-3 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-2xl mx-auto px-6 animate-fade-up">
          <h2 className="font-cormorant text-4xl font-light mb-4">Ready to Choose the Right Path?</h2>
          <p className="mb-8 text-white/80">Talk with Irvine Neuro Rehabilitation in Southfield, MI at (248) 415-2500 or send us a message.</p>
          <a href="/contact" className="inline-block rounded-full bg-white text-[var(--color-accent)] px-8 py-3 font-semibold hover:bg-[var(--color-light)] transition-colors">Discuss Your Options</a>
        </div>
      </section>
    </main>
  )
}
import type { Metadata } from 'next'
import SplitHero from '@/components/SplitHero'

export const metadata: Metadata = {
  title: 'Understanding Spasticity and Movement Challenges',
  description: 'Learn what spasticity is, who it affects, how it changes movement, and how rehabilitation, therapy and medical care can help people move with more ease.',
  alternates: { canonical: '/blog/understanding-spasticity-and-movement-challenges' },
  openGraph: {
    title: 'Understanding Spasticity and Movement Challenges',
    description: 'Learn what spasticity is, who it affects, how it changes movement, and how rehabilitation, therapy and medical care can help people move with more ease.',
    url: 'https://www.irvineneurorehabilitation.com/blog/understanding-spasticity-and-movement-challenges',
    siteName: 'Irvine Neuro Rehabilitation',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Understanding Spasticity and Movement Challenges',
    description: 'Learn what spasticity is, who it affects, how it changes movement, and how rehabilitation, therapy and medical care can help people move with more ease.',
  },
}

const tips = [
  'Move joints through their full available range every day, as your therapist shows you.',
  'Stretch slowly and hold gently; fast, forceful stretching can trigger more tightness.',
  'Notice triggers such as pain, infections, tight clothing, fatigue or stress, and mention them to your care team.',
  'Change position often and support limbs comfortably during sitting and sleep.',
  'Practice meaningful, task-based activities such as reaching, standing or walking in a safe setting.',
  'Keep a simple log of stiffness, spasms and daily function to share at appointments.',
]

const related = [
  { href: '/blog', label: 'Resources', title: 'Browse All Patient Education Articles' },
  { href: '/contact', label: 'Contact', title: 'Talk With Our Team About Your Needs' },
  { href: '/', label: 'Home', title: 'Learn About Irvine Neuro Rehabilitation' },
]

export default function Page() {
  return (
    <main>
      <SplitHero src="/images/stock/blog-understanding-spasticity-and-movement-challenges.jpg" alt="Close-up of a person using a wheelchair in a studio setting with a gray background.">
        <div>
          <nav className="text-sm text-white/70 mb-6">
            <a href="/" className="hover:text-white transition-colors">Home</a> › <a href="/blog" className="hover:text-white transition-colors">Resources</a> › Article
          </nav>
          <p className="text-xs uppercase tracking-widest text-white/70 mb-4">Patient Education</p>
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl">Understanding Spasticity and Movement Challenges</h1>
          <p className="mt-6 text-sm text-white/80">Published October 2026 · 6 min read</p>
        </div>
      </SplitHero>


      <article className="bg-white py-20 max-w-3xl mx-auto px-6 text-[var(--color-ink)]">
        <p className="leading-loose text-base">
          Reaching for a cup, buttoning a shirt or taking a step across the kitchen are things most of us never think about. For someone living with spasticity, each of these can feel like working against a muscle that will not let go. If your arm pulls inward on its own, or your leg stiffens just when you need it to move, you are not imagining it, and you are not alone.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What Is Spasticity?</h2>
        <p className="leading-loose text-base mb-4">
          Spasticity is a condition in which muscles stay tight or stiff because of abnormal signals between the brain, spinal cord and muscles. Normally, muscles contract and relax in a balanced way. When the pathways that regulate this balance are damaged, muscles can become overactive, especially when they are stretched quickly.
        </p>
        <p className="leading-loose text-base">
          People describe it in different ways: stiffness, heaviness, tightness, sudden jerks or spasms, or a limb that rests in an unusual position. It can be mild, affecting only a little ease of movement, or severe enough to limit walking, dressing, hygiene and sleep.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Who Does It Affect?</h2>
        <p className="leading-loose text-base mb-4">
          Spasticity results from injury or disease of the central nervous system. Common causes include:
        </p>
        <ul className="space-y-2 mb-4 leading-loose text-base list-disc pl-6">
          <li>Stroke</li>
          <li>Traumatic brain injury</li>
          <li>Spinal cord injury</li>
          <li>Multiple sclerosis</li>
          <li>Cerebral palsy</li>
        </ul>
        <p className="leading-loose text-base">
          Because it can appear weeks or months after the original injury, many people are surprised when stiffness develops during recovery. This is common and does not mean you did something wrong.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Why It Matters</h2>
        <p className="leading-loose text-base">
          Spasticity is more than discomfort. Over time, muscles that stay shortened can lead to contractures, where a joint becomes fixed in a bent position. It can also cause pain, skin problems from poor hygiene access, trouble with positioning, fatigue, and difficulty with speech, swallowing or self-care when it affects the face, trunk or arms. Emotionally, losing the ability to move the way you used to can be frustrating and isolating. Addressing spasticity early helps protect function, comfort and independence.
        </p>

        <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant">
          Addressing spasticity early helps protect function, comfort and independence.
        </div>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What the Research Tells Us</h2>
        <p className="leading-loose text-base mb-4">
          Clinical guidelines generally support a combined approach rather than any single fix. Stretching, positioning and regular movement are considered foundational. Task-oriented training, where you practice real activities repeatedly, is supported by evidence for improving function after stroke and brain injury. Splints or braces may help maintain joint position.
        </p>
        <p className="leading-loose text-base">
          Medical options may include oral medications, injections that target specific overactive muscles, or, in select cases, other procedures. Which options are appropriate depends on your diagnosis, how widespread the stiffness is, and your goals. These decisions are best made with a physician who knows your history.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">The Role of Rehabilitation</h2>
        <p className="leading-loose text-base">
          Rehabilitation looks at the whole person. Occupational therapy focuses on everyday tasks such as dressing, eating and managing the home, and on adaptive strategies that make them easier. Speech therapy can help when stiffness or weakness affects communication or swallowing. Medical oversight and counseling support round out care, since living with a lasting condition affects mood, relationships and routines. Irvine Neuro Rehabilitation in Southfield, MI brings together occupational therapy, speech therapy, psychiatry and case management and counseling support.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Practical Tips for Daily Life</h2>
        <ul className="space-y-3 mb-4">
          {tips.map((t) => (
            <li key={t} className="flex gap-3 leading-loose text-base">
              <svg className="w-6 h-6 shrink-0 text-[var(--color-accent)] mt-1" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>{t}</span>
            </li>
          ))}
        </ul>
        <p className="leading-loose text-base">
          Seek prompt medical attention if stiffness suddenly worsens, since a new infection, pressure sore or other problem may be the trigger.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Taking the Next Step</h2>
        <p className="leading-loose text-base">
          Spasticity can be managed, and many people find that with the right plan, movement becomes easier and daily life feels more manageable. If stiffness or movement challenges are affecting you or someone you love, reach out to Irvine Neuro Rehabilitation at (248) 415-2500 to talk about your needs and the support that may help.
        </p>
      </article>

      <div className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 px-6 flex gap-6 items-start">
        <div className="bg-[var(--color-light)] rounded-full w-16 h-16 shrink-0 flex items-center justify-center text-[var(--color-primary)]">
          <svg className="w-8 h-8" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a7.5 7.5 0 0115 0" />
          </svg>
        </div>
        <div>
          <p className="font-semibold text-[var(--color-ink)]">From Irvine Neuro Rehabilitation</p>
          <p className="text-sm text-[var(--color-muted)] mt-1">This article is for general education and is not a substitute for personal medical advice.</p>
        </div>
      </div>

      <section className="bg-[var(--color-cream)] py-16 max-w-7xl mx-auto px-6">
        <h3 className="font-cormorant text-3xl mb-8 text-[var(--color-ink)]">Related Resources</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {related.map((r) => (
            <a key={r.href} href={r.href} className="animate-fade-up block bg-white rounded-2xl p-6 border border-[var(--color-border)] hover:shadow-lg transition-shadow">
              <p className="text-xs uppercase tracking-widest text-[var(--color-muted)] mb-2">{r.label}</p>
              <p className="font-cormorant text-2xl text-[var(--color-ink)]">{r.title}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light mb-4">Ready to Take the Next Step?</h2>
          <p className="mb-8 text-white/80">We are here to help.</p>
          <a href="/contact" className="inline-block bg-white text-[var(--color-primary)] px-8 py-3 rounded-full font-medium hover:bg-[var(--color-light)] transition-colors">Contact Us</a>
        </div>
      </section>
    </main>
  )
}
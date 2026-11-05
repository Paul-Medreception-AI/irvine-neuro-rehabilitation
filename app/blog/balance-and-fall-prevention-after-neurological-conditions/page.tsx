import type { Metadata } from 'next'
import SplitHero from '@/components/SplitHero'

export const metadata: Metadata = {
  title: 'Balance and Fall Prevention After Neurological Conditions',
  description: 'Learn why balance problems follow stroke, brain injury and other neurological conditions, and practical steps to reduce fall risk at home and in daily life.',
  alternates: { canonical: '/blog/balance-and-fall-prevention-after-neurological-conditions' },
  openGraph: {
    title: 'Balance and Fall Prevention After Neurological Conditions',
    description: 'Learn why balance problems follow stroke, brain injury and other neurological conditions, and practical steps to reduce fall risk at home and in daily life.',
    url: 'https://www.irvineneurorehabilitation.com/blog/balance-and-fall-prevention-after-neurological-conditions',
    siteName: 'Irvine Neuro Rehabilitation',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Balance and Fall Prevention After Neurological Conditions',
    description: 'Learn why balance problems follow stroke, brain injury and other neurological conditions, and practical steps to reduce fall risk at home and in daily life.',
  },
}

const tips = [
  'Remove loose rugs, cords and clutter from walkways',
  'Add bright lighting in hallways, stairs and bathrooms',
  'Install grab bars near the toilet and in the shower',
  'Wear snug, flat, non-slip shoes rather than slippers or socks',
  'Keep frequently used items between waist and shoulder height',
  'Sit to dress, and rise slowly from lying or sitting positions',
]

const related = [
  { href: '/blog', label: 'Resources', title: 'More Patient Education Articles' },
  { href: '/services', label: 'Services', title: 'Our Rehabilitation Services' },
  { href: '/contact', label: 'Contact', title: 'Talk With Our Team' },
]

function Check() {
  return (
    <svg className="w-6 h-6 shrink-0 mt-1 text-[var(--color-accent)]" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  )
}

export default function Page() {
  return (
    <main>
      <SplitHero src="/images/stock/blog-balance-and-fall-prevention-after-neurological-conditions.jpg" alt="An older woman holds her arms out for balance during a group exercise class.">
        <div>
          <nav className="text-sm text-white/70 mb-6">
            <a href="/" className="hover:text-white transition-colors">Home</a> › <a href="/blog" className="hover:text-white transition-colors">Resources</a> › Article
          </nav>
          <p className="text-xs uppercase tracking-widest text-white/70 mb-4">Patient Education</p>
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl">
            Balance and Fall Prevention After Neurological Conditions
          </h1>
          <p className="mt-6 text-white/70 text-sm">Published October 2026 · 6 min read</p>
        </div>
      </SplitHero>


      <article className="bg-white py-20 max-w-3xl mx-auto px-6">
        <p className="text-[var(--color-ink)] leading-loose text-base">
          For many people, the first time they truly feel the impact of a neurological condition is a stumble in the hallway or a moment of dizziness on the stairs. Afterward, even familiar rooms can feel uncertain, and the fear of falling again can quietly shrink a person&apos;s world. If that sounds familiar, you are not alone, and there is a lot that can be done.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Why Balance Changes After a Neurological Condition</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
          Staying upright is a team effort. The brain combines information from the eyes, the inner ear, and sensors in the muscles and joints, then sends precise commands to keep the body steady. Conditions that affect the brain, spinal cord or nerves can disrupt any part of that loop.
        </p>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Stroke may cause weakness or reduced awareness on one side of the body. Traumatic brain injury can affect dizziness, vision and reaction time. Parkinson&apos;s disease can alter posture and walking rhythm. Multiple sclerosis and peripheral neuropathy may reduce sensation in the feet or cause fatigue and weakness. Each person&apos;s pattern is different.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Who Is at Risk</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Anyone living with a neurological condition may have a higher chance of falling, and risk often rises with age. Other contributors include certain medications that cause drowsiness or lightheadedness, vision changes, poor sleep, low blood pressure on standing, and cognitive changes that affect attention or judgment. Because several factors often overlap, a fall is rarely caused by just one thing.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Why Prevention Matters</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
          Falls can lead to fractures, head injuries and hospital stays. Just as important is the emotional effect. Fear of falling often leads people to move less, which weakens muscles and worsens balance, raising the real risk of falling. Breaking that cycle is one of the most valuable goals in rehabilitation.
        </p>
        <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant">
          Fear of falling often leads people to move less, which weakens muscles and worsens balance, raising the real risk of falling.
        </blockquote>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What the Research Shows</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Studies of older adults and people with conditions such as Parkinson&apos;s disease and stroke have found that exercise programs focused on balance, leg strength and walking can reduce falls. Programs that challenge balance in a safe, progressive way tend to work best, and the benefits are strongest when exercise is continued over time. Evidence also supports reviewing medications, checking vision, and making home changes as part of a broader plan.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Practical Ways to Reduce Fall Risk at Home</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
          Small environmental changes can make a meaningful difference. Consider these steps:
        </p>
        <ul className="space-y-3 mb-4">
          {tips.map((t) => (
            <li key={t} className="flex gap-3 text-[var(--color-ink)] leading-loose text-base">
              <Check />
              <span>{t}</span>
            </li>
          ))}
        </ul>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">How Rehabilitation Can Help</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
          Rehabilitation looks at the whole picture. Occupational therapy can help you adapt daily routines, evaluate your living space, and practice safer ways to dress, bathe and move through the home. Speech therapy can address thinking, attention and communication difficulties that influence safety, such as remembering to use a walker or following multi-step instructions. Mental health support can also help when worry, low mood or loss of confidence get in the way of staying active.
        </p>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Goals are individual, so a plan should reflect what matters to you, whether that is walking to the mailbox, caring for grandchildren or returning to a favorite activity.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">When to Seek Professional Help</h2>
        <ul className="space-y-3 mb-4">
          {[
            'You have fallen, or have had near-falls, in recent months',
            'You avoid activities because you fear falling',
            'You feel new dizziness, weakness or unsteadiness',
            'A family member notices changes in your walking or alertness',
          ].map((t) => (
            <li key={t} className="flex gap-3 text-[var(--color-ink)] leading-loose text-base">
              <Check />
              <span>{t}</span>
            </li>
          ))}
        </ul>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Sudden severe symptoms, such as a new headache, loss of speech, facial drooping or loss of strength, need emergency care right away. For ongoing balance concerns, Irvine Neuro Rehabilitation in Southfield, MI is here to talk through your situation. Call (248) 415-2500 to start the conversation. You do not have to wait for a fall to ask for help.
        </p>
      </article>

      <section className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 px-6 flex gap-6 items-start animate-fade-up">
        <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center shrink-0 text-[var(--color-primary)]">
          <svg className="w-8 h-8" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6.75a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a7.5 7.5 0 0115 0" />
          </svg>
        </div>
        <div>
          <p className="font-semibold text-[var(--color-ink)]">From Irvine Neuro Rehabilitation</p>
          <p className="text-sm text-[var(--color-muted)] mt-1">This article is for general education and is not a substitute for personal medical advice.</p>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-cormorant text-3xl mb-8 text-[var(--color-ink)]">Related Resources</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {related.map((r) => (
              <a key={r.href} href={r.href} className="animate-fade-up block bg-white rounded-2xl p-6 border border-[var(--color-border)] hover:shadow-lg transition-shadow">
                <svg className="w-8 h-8 mb-3 text-[var(--color-accent)]" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75v10.5m-5.25-5.25h10.5" />
                </svg>
                <p className="text-xs uppercase tracking-widest text-[var(--color-muted)] mb-2">{r.label}</p>
                <p className="font-cormorant text-2xl text-[var(--color-ink)]">{r.title}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light mb-4">Ready to Take the Next Step?</h2>
          <p className="mb-8 text-white/80">We are here to help.</p>
          <a href="/contact" className="inline-block bg-white text-[var(--color-accent)] px-8 py-3 rounded-full font-medium hover:bg-[var(--color-light)] transition-colors">Contact Us</a>
        </div>
      </section>
    </main>
  )
}
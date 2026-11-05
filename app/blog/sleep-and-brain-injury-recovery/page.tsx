import type { Metadata } from 'next'
import SplitHero from '@/components/SplitHero'

export const metadata: Metadata = {
  title: 'Sleep and Brain Injury Recovery | Irvine Neuro Rehabilitation',
  description: 'Learn why sleep is so important after a brain injury, how injury disrupts rest, and practical steps that may help support recovery and daily functioning.',
  alternates: { canonical: '/blog/sleep-and-brain-injury-recovery' },
  openGraph: {
    title: 'Sleep and Brain Injury Recovery | Irvine Neuro Rehabilitation',
    description: 'Learn why sleep is so important after a brain injury, how injury disrupts rest, and practical steps that may help support recovery and daily functioning.',
    url: 'https://www.irvineneurorehabilitation.com/blog/sleep-and-brain-injury-recovery',
    siteName: 'Irvine Neuro Rehabilitation',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Sleep and Brain Injury Recovery | Irvine Neuro Rehabilitation',
    description: 'Learn why sleep is so important after a brain injury, how injury disrupts rest, and practical steps that may help support recovery and daily functioning.',
  },
}

const tips = [
  'Keep a consistent bedtime and wake time, including weekends.',
  'Get natural daylight early in the day to help anchor your body clock.',
  'Keep the bedroom cool, dark and quiet, and reserve it for sleep.',
  'Limit caffeine after midday and avoid alcohol close to bedtime.',
  'Turn off screens for an hour before bed, or dim them and reduce brightness.',
  'Keep naps short (about 20 to 30 minutes) and early in the afternoon.',
  'Try a calming wind-down routine such as gentle stretching, reading or slow breathing.',
]

export default function Page() {
  return (
    <main>
      <SplitHero src="/images/stock/blog-sleep-and-brain-injury-recovery.jpg" alt="An older couple sleeps peacefully in bed.">
        <div>
          <nav className="text-sm text-white/70 mb-6">
            <a href="/" className="hover:text-white transition-colors">Home</a> › <a href="/blog" className="hover:text-white transition-colors">Resources</a> › Article
          </nav>
          <p className="text-xs uppercase tracking-widest text-white/70 mb-4">Patient Education</p>
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl">Sleep and Brain Injury Recovery</h1>
          <p className="mt-6 text-sm text-white/70">Published October 2026 · 6 min read</p>
        </div>
      </SplitHero>


      <article className="bg-white py-20 max-w-3xl mx-auto px-6">
        <p className="text-[var(--color-ink)] leading-loose text-base">
          You are exhausted, yet when the lights go out, sleep does not come. Or perhaps you sleep for ten hours and still wake up foggy. After a brain injury, this frustrating pattern is common, and it can feel like one more thing standing between you and getting back to your life. The good news is that sleep problems after brain injury are well recognized, and there are practical ways to address them.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Why Sleep Matters for the Healing Brain</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Sleep is not simply downtime. During sleep, the brain consolidates memories, strengthens the connections involved in learning, and clears metabolic waste that builds up during waking hours. Research suggests these processes are especially important when the brain is adapting after injury. Rest also supports mood, attention, and the energy needed for therapy sessions and daily tasks.
        </p>
        <p className="text-[var(--color-ink)] leading-loose text-base mt-4">
          When sleep is poor, many of the symptoms people already struggle with, such as headaches, irritability, slowed thinking and trouble concentrating, can feel worse. That is why sleep is often treated as a core part of recovery rather than an afterthought.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">How Brain Injury Disrupts Sleep</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Brain injury can affect the areas and chemical signals that regulate the sleep-wake cycle, including the body&apos;s internal clock and the release of melatonin. Pain, anxiety, depression, medication side effects and changes in daily routine can add to the problem. Common patterns include:
        </p>
        <ul className="mt-4 space-y-2 text-[var(--color-ink)] leading-loose text-base list-disc pl-6">
          <li>Insomnia, meaning difficulty falling or staying asleep</li>
          <li>Hypersomnia, or sleeping far more than usual</li>
          <li>Shifted sleep timing, such as being awake at night and drowsy by day</li>
          <li>Fragmented, unrefreshing sleep</li>
          <li>Sleep apnea and other sleep-related breathing problems</li>
        </ul>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Who Is Affected</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Sleep difficulties are reported across the full range of brain injuries, from concussion to more severe traumatic injury, and also after stroke and other neurological conditions. Studies have found that a large share of people with traumatic brain injury report ongoing sleep disturbance, and these problems can persist for months or years. Having trouble sleeping does not mean you are not trying hard enough. It is a recognized effect of the injury itself.
        </p>

        <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant">
          Sleep is not simply downtime.
        </div>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What the Evidence Suggests</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Research links better sleep with better attention, memory and mood during recovery, and poor sleep with greater fatigue and slower progress. Cognitive behavioral approaches to insomnia, light exposure strategies and consistent routines have shown promise in people with brain injury. Medication may help in some situations, but it needs careful oversight because some sleep aids can affect thinking and balance. Treatment should be individualized and guided by a qualified clinician.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Practical Steps That May Help</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
          Small, consistent changes often make the biggest difference. Consider these general strategies:
        </p>
        <ul className="space-y-3">
          {tips.map((t) => (
            <li key={t} className="flex gap-3 text-[var(--color-ink)] leading-loose text-base">
              <svg className="w-6 h-6 shrink-0 mt-1 text-[var(--color-accent)]" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              <span>{t}</span>
            </li>
          ))}
        </ul>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Pacing Your Day and Protecting Your Energy</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Fatigue after brain injury is different from ordinary tiredness. Planning demanding tasks for your best hours, building in rest breaks, and breaking larger jobs into smaller steps can reduce the crash that disrupts sleep later. Keeping a simple sleep diary for a couple of weeks, noting bedtime, wake time, naps and how you feel, gives you and your care team useful information.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">When to Seek Professional Help</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Reach out to a healthcare professional if sleep problems last more than a few weeks, if you snore loudly or stop breathing during sleep, if daytime sleepiness makes activities unsafe, or if low mood or anxiety is keeping you awake. Sleep is closely tied to emotional health, cognition and daily function, so a coordinated approach can be valuable. If you are looking for support, call Irvine Neuro Rehabilitation in Southfield, MI at (248) 415-2500 to talk about your needs.
        </p>
      </article>

      <section className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 px-6 flex gap-6 items-start animate-fade-up">
        <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center shrink-0">
          <svg className="w-8 h-8 text-[var(--color-primary)]" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a7.5 7.5 0 0115 0" />
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
            <a href="/blog" className="animate-fade-up block bg-white rounded-2xl p-6 border border-[var(--color-border)] hover:shadow-lg transition-shadow">
              <h4 className="font-cormorant text-2xl text-[var(--color-primary)] mb-2">All Resources</h4>
              <p className="text-sm text-[var(--color-muted)]">Browse patient education articles on neurological recovery.</p>
            </a>
            <a href="/services" className="animate-fade-up block bg-white rounded-2xl p-6 border border-[var(--color-border)] hover:shadow-lg transition-shadow">
              <h4 className="font-cormorant text-2xl text-[var(--color-primary)] mb-2">Our Services</h4>
              <p className="text-sm text-[var(--color-muted)]">Learn about the rehabilitation and care services we provide.</p>
            </a>
            <a href="/contact" className="animate-fade-up block bg-white rounded-2xl p-6 border border-[var(--color-border)] hover:shadow-lg transition-shadow">
              <h4 className="font-cormorant text-2xl text-[var(--color-primary)] mb-2">Contact Us</h4>
              <p className="text-sm text-[var(--color-muted)]">Reach our Southfield, MI office to ask about care.</p>
            </a>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light mb-4">Ready to Take the Next Step?</h2>
          <p className="text-white/80 mb-8">We are here to help.</p>
          <a href="/contact" className="inline-block bg-[var(--color-accent)] border border-white/40 hover:bg-[var(--color-accent-dark)] transition-colors text-white px-8 py-3 rounded-full">Contact Us</a>
        </div>
      </section>
    </main>
  )
}
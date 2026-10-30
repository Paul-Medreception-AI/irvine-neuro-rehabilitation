import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Managing Fatigue During Neurological Recovery',
  description: 'Learn why fatigue is so common after brain injury, stroke, and other neurological conditions, and practical strategies to manage energy during recovery.',
  alternates: { canonical: '/blog/managing-fatigue-during-neurological-recovery' },
  openGraph: {
    title: 'Managing Fatigue During Neurological Recovery',
    description: 'Learn why fatigue is so common after brain injury, stroke, and other neurological conditions, and practical strategies to manage energy during recovery.',
    url: 'https://irvineneurorehabilitation.com/blog/managing-fatigue-during-neurological-recovery',
    siteName: 'Irvine Neuro Rehabilitation',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Managing Fatigue During Neurological Recovery',
    description: 'Learn why fatigue is so common after brain injury, stroke, and other neurological conditions, and practical strategies to manage energy during recovery.',
  },
}

const tips = [
  'Plan your most demanding task for the time of day when you feel best',
  'Break larger activities into short segments with planned rests',
  'Rest before you feel depleted, not after',
  'Keep a simple log of activities, sleep, and energy levels to spot patterns',
  'Reduce noise, bright light, and clutter during demanding tasks',
  'Ask family and friends for help with routine chores',
]

const related = [
  { href: '/blog', title: 'Resources Hub', text: 'Browse all of our patient education articles.' },
  { href: '/services', title: 'Our Services', text: 'Explore the rehabilitation and support services we provide.' },
  { href: '/contact', title: 'Contact Our Team', text: 'Call or reach out with questions about care.' },
]

function Check() {
  return (
    <svg className="w-6 h-6 shrink-0 mt-1 text-[var(--color-accent)]" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  )
}

export default function Page() {
  return (
    <main>
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <nav className="text-sm text-white/70 mb-6">
            <a href="/" className="hover:text-white transition-colors">Home</a> › <a href="/blog" className="hover:text-white transition-colors">Resources</a> › Article
          </nav>
          <p className="text-xs uppercase tracking-widest text-white/70 mb-4">Patient Education</p>
          <h1 className="font-[Cormorant,serif] text-5xl font-light leading-tight max-w-3xl mx-auto text-center">Managing Fatigue During Neurological Recovery</h1>
          <p className="mt-6 text-sm text-white/70">Published October 2026 · 6 min read</p>
        </div>
      </section>

      {/* page-image:start */}
      <div className="max-w-5xl mx-auto px-6 -mt-10 relative z-10">
        <div className="w-full rounded-2xl overflow-hidden shadow-xl bg-[var(--color-light)]">
          <img src={"/images/stock/blog-managing-fatigue-during-neurological-recovery.jpg"} alt={"A healthcare worker in scrubs appears exhausted in a medical examination room."} width={1200} height={627} loading="lazy" className="block w-full h-auto" />
        </div>
      </div>
      {/* page-image:end */}

      <article className="bg-white py-20 max-w-3xl mx-auto px-6">
        <p className="text-[var(--color-ink)] leading-loose text-base animate-fade-up">
          You slept through the night, yet you wake up exhausted. A short conversation or a trip to the store leaves you drained for the rest of the day. If you are recovering from a stroke, brain injury, or another neurological condition, this kind of fatigue can feel confusing and frustrating. It is not laziness, and it is not a lack of willpower. It is one of the most common and least understood parts of recovery, and there are ways to manage it.
        </p>

        <h2 className="font-[Cormorant,serif] text-3xl text-[var(--color-ink)] mt-12 mb-4">What Is Neurological Fatigue?</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Neurological fatigue is an overwhelming sense of tiredness that is out of proportion to the effort you have made. Unlike ordinary tiredness, it often is not relieved by a good night of sleep. It can affect the body, making limbs feel heavy, and it can affect thinking, making it hard to concentrate, find words, or make decisions. Many people describe it as running on an empty battery.
        </p>

        <h2 className="font-[Cormorant,serif] text-3xl text-[var(--color-ink)] mt-12 mb-4">Who Is Affected?</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Fatigue is reported by people recovering from stroke, traumatic brain injury and concussion, and by people living with conditions such as multiple sclerosis and Parkinson disease. Research consistently finds that a large share of people in these groups experience persistent fatigue, and for many it ranks among their most disabling symptoms. It can appear early in recovery and, for some, continue long after other symptoms improve.
        </p>

        <h2 className="font-[Cormorant,serif] text-3xl text-[var(--color-ink)] mt-12 mb-4">Why Does It Happen?</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          After injury or illness, the brain often has to work harder to do tasks that were once automatic. Rerouting signals around damaged areas takes extra energy, so ordinary activities can be more tiring than before. Other factors can add to the load:
        </p>
        <ul className="my-6 space-y-3 text-[var(--color-ink)] leading-loose text-base">
          <li className="flex gap-3"><Check /><span>Disrupted sleep or sleep disorders such as sleep apnea</span></li>
          <li className="flex gap-3"><Check /><span>Depression, anxiety, and chronic stress</span></li>
          <li className="flex gap-3"><Check /><span>Pain, which drains energy throughout the day</span></li>
          <li className="flex gap-3"><Check /><span>Side effects of some medications</span></li>
          <li className="flex gap-3"><Check /><span>Reduced physical conditioning after time spent inactive</span></li>
        </ul>

        <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-[Cormorant,serif]">
          Neurological fatigue is not laziness, and it is not a lack of willpower.
        </div>

        <h2 className="font-[Cormorant,serif] text-3xl text-[var(--color-ink)] mt-12 mb-4">What the Evidence Suggests</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          No single treatment removes fatigue for everyone, but several approaches have research support. Energy conservation and pacing strategies, often taught by occupational therapists, help people spend their energy more deliberately. Graded, supervised physical activity can improve stamina over time. Cognitive behavioral approaches can help with the worry and sleep problems that feed fatigue. Treating contributing conditions, such as poor sleep or low mood, often brings noticeable relief. Because causes differ from person to person, an individualized plan tends to work best.
        </p>

        <h2 className="font-[Cormorant,serif] text-3xl text-[var(--color-ink)] mt-12 mb-4">Practical Strategies for Daily Life</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Small changes to how you structure your day can make a meaningful difference. Consider these approaches:
        </p>
        <ul className="my-6 space-y-3 text-[var(--color-ink)] leading-loose text-base">
          {tips.map((t) => (
            <li key={t} className="flex gap-3"><Check /><span>{t}</span></li>
          ))}
        </ul>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Pacing is the heart of these strategies. Many people push hard on good days and then crash for several days afterward. Steady, moderate activity with regular breaks usually leads to more progress than cycles of overdoing it and recovering.
        </p>

        <h2 className="font-[Cormorant,serif] text-3xl text-[var(--color-ink)] mt-12 mb-4">Supporting Sleep and Emotional Health</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Keep a consistent sleep and wake time, limit caffeine later in the day, and avoid long daytime naps that interfere with nighttime sleep. A short, planned rest can help, but it works best when it is brief. Emotional strain also consumes energy, so addressing depression, anxiety, or grief with a counselor or physician is an important part of managing fatigue, not a separate issue.
        </p>

        <h2 className="font-[Cormorant,serif] text-3xl text-[var(--color-ink)] mt-12 mb-4">When to Seek Professional Help</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Tell your care team if fatigue is getting worse, keeps you from daily responsibilities, or comes with new symptoms such as sudden weakness, confusion, or severe headache. Persistent fatigue deserves a full evaluation, because treatable causes are common. Irvine Neuro Rehabilitation in Southfield, MI offers specialty medical care and therapy support for people in recovery. To talk about your situation, call (248) 415-2500 or reach out through our contact page.
        </p>
      </article>

      <div className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 px-6 flex gap-6 items-start animate-fade-up">
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

      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-[Cormorant,serif] text-3xl mb-8 text-[var(--color-ink)]">Related Resources</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {related.map((r) => (
              <a key={r.href} href={r.href} className="animate-fade-up block bg-white rounded-2xl p-6 border border-[var(--color-border)] hover:shadow-lg transition-shadow">
                <h4 className="font-[Cormorant,serif] text-2xl text-[var(--color-primary)] mb-2">{r.title}</h4>
                <p className="text-[var(--color-muted)]">{r.text}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-[Cormorant,serif] text-4xl font-light mb-4">Ready to Take the Next Step?</h2>
          <p className="mb-8 text-white/80">We are here to help.</p>
          <a href="/contact" className="inline-block bg-[var(--color-accent)] border border-white/40 hover:bg-[var(--color-accent-dark)] transition-colors text-white px-8 py-3 rounded-full">Contact Us</a>
        </div>
      </section>
    </main>
  )
}
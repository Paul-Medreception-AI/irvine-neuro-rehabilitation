import type { Metadata } from 'next'
import SplitHero from '@/components/SplitHero'

export const metadata: Metadata = {
  title: 'Setting Realistic Goals in Neuro Rehabilitation',
  description: 'Learn how to set realistic, meaningful goals during neuro rehabilitation, from SMART goals to measuring progress and adjusting your plan over time.',
  alternates: { canonical: '/blog/setting-realistic-goals-in-neuro-rehabilitation' },
  openGraph: {
    title: 'Setting Realistic Goals in Neuro Rehabilitation',
    description: 'Learn how to set realistic, meaningful goals during neuro rehabilitation, from SMART goals to measuring progress and adjusting your plan over time.',
    url: 'https://irvineneurorehabilitation.com/blog/setting-realistic-goals-in-neuro-rehabilitation',
    siteName: 'Irvine Neuro Rehabilitation',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Setting Realistic Goals in Neuro Rehabilitation',
    description: 'Learn how to set realistic, meaningful goals during neuro rehabilitation, from SMART goals to measuring progress and adjusting your plan over time.',
  },
}

const tips = [
  'Start with what matters most to you, not only what is easiest to measure.',
  'Break each large goal into small steps you can complete within a few weeks.',
  'Describe the goal in specific, observable terms, such as "dress myself in under fifteen minutes."',
  'Share your goals with family so everyone supports the same priorities.',
  'Review goals regularly with your care team and adjust them as you change.',
  'Record small wins. Progress is often gradual and easy to overlook.',
]

const related = [
  { href: '/blog', title: 'All Resources', text: 'Browse patient education articles from Irvine Neuro Rehabilitation.' },
  { href: '/contact', title: 'Contact Our Team', text: 'Call or write to ask about care in Southfield, MI.' },
  { href: '/', title: 'Irvine Neuro Rehabilitation', text: 'Learn about our occupational, speech and behavioral health team.' },
]

export default function Page() {
  return (
    <main>
      <SplitHero src="/images/stock/blog-setting-realistic-goals-in-neuro-rehabilitation.jpg" alt="Aligned wooden blocks spelling 'Goals' symbolize target achievement and ambition.">
        <div>
          <nav className="text-sm text-white/70 mb-6">
            <a href="/" className="hover:text-white transition-colors">Home</a> › <a href="/blog" className="hover:text-white transition-colors">Resources</a> › Article
          </nav>
          <p className="text-xs uppercase tracking-widest text-white/70 mb-4">Patient Education</p>
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl">Setting Realistic Goals in Neuro Rehabilitation</h1>
          <p className="mt-6 text-sm text-white/70">Published October 2026 · 6 min read</p>
        </div>
      </SplitHero>


      <article className="bg-white py-20 max-w-3xl mx-auto px-6 text-[var(--color-ink)] leading-loose text-base">
        <p className="animate-fade-up">After a stroke, brain injury or other neurological event, the first question many people ask is simple and heavy: "Will I get back to who I was?" Families ask it too. Hope matters enormously in recovery, but hope works best when it is paired with clear, achievable goals. Setting realistic goals gives rehabilitation direction, helps you see progress, and protects your energy on the hard days.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What Goal Setting in Neuro Rehabilitation Means</h2>
        <p>Neuro rehabilitation helps people regain, relearn or adapt skills affected by conditions of the brain and nervous system. These may include stroke, traumatic brain injury, concussion, multiple sclerosis, Parkinson's disease and other neurological conditions. Goal setting is the process of agreeing on what recovery should look like, and how you and your care team will work toward it.</p>
        <p className="mt-4">A good goal is not a vague wish such as "get better." It describes a specific change in daily life, such as buttoning a shirt, following a conversation in a busy room, or returning to a favorite hobby.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Who Benefits From Setting Goals</h2>
        <p>Anyone in rehabilitation can benefit, but goals are especially helpful when recovery is complex. Neurological conditions can affect movement, speech, memory, attention, mood and daily routines all at once. Because several areas are involved, a shared plan keeps occupational therapy, speech therapy, medical care and counseling working in the same direction. Family members and caregivers benefit as well, since clear goals help them know how to help.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Why Realistic Goals Matter</h2>
        <p>Goals that are too ambitious can lead to discouragement when progress feels slow. Goals that are too modest can leave potential untapped. Realistic goals sit between the two: challenging enough to motivate, yet reachable enough to build confidence.</p>
        <p className="mt-4">Recovery from neurological injury is rarely a straight line. Many people experience quick gains early, followed by plateaus, then further improvement. Understanding this pattern ahead of time can make setbacks feel less like failure and more like part of the process.</p>

        <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant">
          Recovery from neurological injury is rarely a straight line.
        </div>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What the Research Suggests</h2>
        <p>Rehabilitation research supports several ideas that shape good goal setting. The brain has the ability to reorganize itself, a property called neuroplasticity, and that change is driven by repeated, meaningful practice. Studies in stroke and brain injury rehabilitation have found that tasks that are relevant to the person and practiced often tend to support better functional gains than generic exercise alone.</p>
        <p className="mt-4">Clinicians also commonly use the SMART framework: goals that are Specific, Measurable, Achievable, Relevant and Time-bound. Involving patients in choosing their own goals is widely recommended in rehabilitation guidelines, because people who feel ownership of the plan are often more engaged in therapy. Individual outcomes vary, and your care team can explain what is reasonable for your situation.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Practical Tips for Setting Goals</h2>
        <ul className="space-y-3">
          {tips.map((t) => (
            <li key={t} className="flex gap-3 items-start">
              <svg className="w-6 h-6 shrink-0 mt-1 text-[var(--color-accent)]" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
              <span>{t}</span>
            </li>
          ))}
        </ul>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Short-Term and Long-Term Goals Together</h2>
        <p>Long-term goals give recovery meaning: returning to work, living independently, or communicating comfortably with loved ones. Short-term goals make those aims manageable. If the long-term goal is cooking a family meal, the first steps might be standing safely at the counter, organizing ingredients, and following a recipe sequence. Each small achievement shows that effort is paying off.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Caring for Emotional Well-Being Along the Way</h2>
        <p>Neurological changes affect more than the body. Frustration, grief, anxiety and low mood are common during recovery, and they can influence motivation and progress. Talking openly about these feelings is part of rehabilitation, not a distraction from it. Counseling and psychiatric support can help you stay steady while you work toward your goals, and your goals may change as your life and priorities change. That is normal.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Take the Next Step</h2>
        <p>You do not have to define your recovery alone. Irvine Neuro Rehabilitation in Southfield, MI offers occupational therapy, speech therapy, psychiatric care and case management to support people through neurological recovery. To talk about your situation and what goals might fit, call (248) 415-2500 or reach out through our contact page.</p>
      </article>

      <section className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 px-6 flex gap-6 items-start animate-fade-up">
        <div className="bg-[var(--color-light)] rounded-full w-16 h-16 shrink-0 flex items-center justify-center text-[var(--color-primary)]">
          <svg className="w-8 h-8" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6.75a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a7.5 7.5 0 0115 0" /></svg>
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
              <a key={r.title} href={r.href} className="animate-fade-up block bg-white rounded-2xl p-6 border border-[var(--color-border)] hover:shadow-lg transition-shadow">
                <svg className="w-8 h-8 text-[var(--color-accent)] mb-3" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75v10.5m-5.25-5.25h10.5" /></svg>
                <h4 className="font-cormorant text-2xl text-[var(--color-ink)] mb-2">{r.title}</h4>
                <p className="text-sm text-[var(--color-muted)]">{r.text}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light mb-4">Ready to Take the Next Step?</h2>
          <p className="mb-8 text-white/80">We are here to help.</p>
          <a href="/contact" className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] border border-white/40 text-white px-8 py-3 rounded-full transition-colors">Contact Us</a>
        </div>
      </section>
    </main>
  )
}
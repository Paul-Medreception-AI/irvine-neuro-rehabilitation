import type { Metadata } from 'next'
import HeroBackdrop from '@/components/HeroBackdrop'

export const metadata: Metadata = {
  title: 'Staying Motivated Through a Long Recovery',
  description: 'Practical, evidence-informed ways to keep your motivation going through a long recovery, from setting small goals to building support and handling setbacks.',
  alternates: { canonical: '/blog/staying-motivated-through-a-long-recovery' },
  openGraph: {
    title: 'Staying Motivated Through a Long Recovery',
    description: 'Practical, evidence-informed ways to keep your motivation going through a long recovery, from setting small goals to building support and handling setbacks.',
    url: 'https://irvineneurorehabilitation.com/blog/staying-motivated-through-a-long-recovery',
    siteName: 'Irvine Neuro Rehabilitation',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Staying Motivated Through a Long Recovery',
    description: 'Practical, evidence-informed ways to keep your motivation going through a long recovery, from setting small goals to building support and handling setbacks.',
  },
}

const tips = [
  'Break big goals into weekly and daily steps you can actually finish.',
  'Track function (what you can do) as well as symptoms, and review it monthly.',
  'Tie therapy exercises to an existing daily habit, such as morning coffee.',
  'Tell family or friends your goals so they can encourage you specifically.',
  'Plan rest on purpose so fatigue does not derail your week.',
  'Celebrate completed steps, however small they seem.',
]

const related = [
  { title: 'Resources and Articles', href: '/blog', text: 'Browse all patient education articles from our practice.' },
  { title: 'Our Services', href: '/services', text: 'Learn about the types of care we provide.' },
  { title: 'Contact Our Team', href: '/contact', text: 'Reach out with questions about your recovery.' },
]

export default function Page() {
  return (
    <main>
      <section className="hero-photo relative overflow-hidden bg-[var(--color-dark)] py-24 sm:py-32 text-white">
        <HeroBackdrop src="/images/stock/blog-staying-motivated-through-a-long-recovery.jpg" alt="A senior patient using crutches to walk down a hospital corridor, symbolizing recovery and mobility assistance." />
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <nav className="text-sm text-white/70 mb-6">
            <a href="/" className="hover:text-white transition-colors">Home</a> › <a href="/blog" className="hover:text-white transition-colors">Resources</a> › Article
          </nav>
          <p className="text-xs uppercase tracking-widest text-white/70 mb-4">Patient Education</p>
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl mx-auto text-center">Staying Motivated Through a Long Recovery</h1>
          <p className="text-sm text-white/70 mt-6">Published October 2026 · 6 min read</p>
        </div>
      </section>


      <article className="bg-white py-20 max-w-3xl mx-auto px-6 text-[var(--color-ink)] leading-loose text-base">
        <p className="mb-6">Some days, recovery feels like walking uphill in thick fog. You do the exercises, attend the appointments, and still the progress seems invisible. If you have felt that way, you are not weak and you are not failing. Losing motivation during a long recovery is one of the most common, and least discussed, parts of healing.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Why motivation fades over time</h2>
        <p className="mb-6">At the start of a recovery, hope and urgency tend to carry people forward. After weeks or months, the novelty wears off, progress slows, and daily effort begins to feel routine or discouraging. Recovery from a brain injury, stroke, surgery, emotional health condition, or other serious illness rarely follows a straight line. Plateaus are normal, and so are good days followed by hard ones.</p>
        <p className="mb-6">Fatigue, pain, changes in thinking or mood, and disrupted sleep can also reduce drive directly. In some conditions, low motivation is itself a symptom rather than a character flaw. Knowing this can lessen self-blame, which is the first step toward moving forward.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Who is affected</h2>
        <p className="mb-6">Nearly anyone facing a prolonged recovery can struggle with motivation. That includes people recovering from neurological events, people relearning skills such as speaking or managing daily tasks, and people working through mental health challenges. Family members and caregivers feel it too, often quietly, as they watch the process stretch on.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What research suggests</h2>
        <p className="mb-6">Research in rehabilitation and behavioral health points to a few consistent findings. Specific, achievable goals are linked to better engagement than vague ones. Social support is associated with better adherence to treatment plans. Seeing evidence of progress, even modest, strengthens a person&apos;s belief in their ability to improve, which psychologists call self-efficacy. And depression and anxiety, both common during long recoveries, can reduce participation in therapy, so treating them matters for physical and cognitive gains too.</p>

        <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant">
          Plateaus are normal, and so are good days followed by hard ones.
        </blockquote>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Practical ways to keep going</h2>
        <p className="mb-6">Motivation is easier to build through small systems than through willpower alone. Consider these approaches:</p>
        <ul className="space-y-3 mb-6">
          {tips.map((t) => (
            <li key={t} className="flex gap-3 items-start">
              <svg className="w-6 h-6 shrink-0 text-[var(--color-accent)]" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
              <span>{t}</span>
            </li>
          ))}
        </ul>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Handling setbacks without losing ground</h2>
        <p className="mb-6">A setback is information, not a verdict. When a bad stretch arrives, shrink the goal rather than abandon it. Ten minutes of an exercise still keeps the habit alive. Write down what changed, such as sleep, stress, illness, or a new medication, and share it with your care team. Often a small adjustment to the plan helps more than pushing harder.</p>
        <p className="mb-6">It also helps to look backward. Compare where you are now with where you were three months ago, not with where you were before the illness or injury. Many people are surprised by how much has changed when they look at the longer view.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">The role of support</h2>
        <p className="mb-6">No one should carry a long recovery alone. Occupational therapy can help break daily activities into manageable steps. Speech therapy supports communication and cognitive goals. Counseling and psychiatric care can address low mood, anxiety, and the emotional weight of change. Case management can help coordinate the many moving parts. Peer groups and trusted friends offer encouragement from people who understand.</p>
        <p className="mb-6">Contact a professional promptly if you notice persistent hopelessness, withdrawal from everyone around you, or thoughts of harming yourself. If you are in crisis, call or text 988 in the United States, or call 911 in an emergency.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Take the next step</h2>
        <p className="mb-6">If your motivation is slipping, it is a good time to talk with someone who can help you rethink the plan. Irvine Neuro Rehabilitation in Southfield, MI offers specialty medical care that includes occupational therapy, speech therapy, psychiatry, and counseling support. Call us at (248) 415-2500 or reach out through our contact page to ask questions about your situation.</p>
      </article>

      <section className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 px-6 flex gap-6 items-start">
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
              <a key={r.href} href={r.href} className="animate-fade-up block bg-white border border-[var(--color-border)] rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <h4 className="font-cormorant text-2xl text-[var(--color-primary)] mb-2">{r.title}</h4>
                <p className="text-[var(--color-muted)]">{r.text}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light mb-4">Ready to Take the Next Step?</h2>
          <p className="text-white/80 mb-8">We are here to help.</p>
          <a href="/contact" className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white border border-white/40 px-8 py-3 rounded-full transition-colors">Contact Us</a>
        </div>
      </section>
    </main>
  )
}
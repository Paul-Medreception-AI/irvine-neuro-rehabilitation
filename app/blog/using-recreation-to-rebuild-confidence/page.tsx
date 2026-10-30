import type { Metadata } from 'next'
import HeroBackdrop from '@/components/HeroBackdrop'

export const metadata: Metadata = {
  title: 'Using Recreation to Rebuild Confidence After Injury',
  description: 'Learn how recreation and meaningful leisure activities can help rebuild confidence, motivation, and independence during neurological recovery.',
  alternates: { canonical: '/blog/using-recreation-to-rebuild-confidence' },
  openGraph: {
    title: 'Using Recreation to Rebuild Confidence After Injury',
    description: 'Learn how recreation and meaningful leisure activities can help rebuild confidence, motivation, and independence during neurological recovery.',
    url: 'https://irvineneurorehabilitation.com/blog/using-recreation-to-rebuild-confidence',
    siteName: 'Irvine Neuro Rehabilitation',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Using Recreation to Rebuild Confidence After Injury',
    description: 'Learn how recreation and meaningful leisure activities can help rebuild confidence, motivation, and independence during neurological recovery.',
  },
}

const tips = [
  'Start with an activity you used to enjoy, then adapt it to your current abilities.',
  'Choose small, achievable goals so each success builds on the last.',
  'Invite a trusted friend or family member to join you at first.',
  'Plan for rest. Fatigue is common after neurological injury, and pacing helps.',
  'Celebrate progress that is not measured in clinic, such as finishing a game or a walk.',
  'Talk with your care team about safe ways to modify equipment, setting, or rules.',
]

const related = [
  { title: 'Our Services', text: 'Explore the therapies and supports we provide.', href: '/services' },
  { title: 'Conditions We Help With', text: 'Learn about the conditions we support.', href: '/conditions' },
  { title: 'More Patient Education', text: 'Browse all articles in our resource library.', href: '/blog' },
]

export default function Page() {
  return (
    <main>
      <section className="hero-photo relative overflow-hidden bg-[var(--color-dark)] py-24 sm:py-32 text-white">
        <HeroBackdrop src="/images/stock/blog-using-recreation-to-rebuild-confidence.jpg" alt="An older couple laughs while playing a block stacking game at a table." />
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <nav className="text-sm text-white/70 mb-6">
            <a href="/" className="hover:text-white transition-colors">Home</a> › <a href="/blog" className="hover:text-white transition-colors">Resources</a> › Article
          </nav>
          <p className="text-xs uppercase tracking-widest text-white/70 mb-4">Patient Education</p>
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl mx-auto text-center">Using Recreation to Rebuild Confidence</h1>
          <p className="mt-6 text-sm text-white/70">Published October 2026 · 6 min read</p>
        </div>
      </section>


      <article className="bg-white py-20 max-w-3xl mx-auto px-6 text-[var(--color-ink)] leading-loose text-base">
        <p className="animate-fade-up">After a brain injury, stroke, or another life-changing health event, many people describe the same quiet loss: not only of skills, but of belief in themselves. The things that once brought joy, like a card game, a garden, a walk with a friend, can suddenly feel out of reach. Recreation is one of the most human ways to begin reclaiming that belief.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What Is Recreation in Recovery?</h2>
        <p>Recreation means purposeful, enjoyable activity chosen because it matters to you. In rehabilitation, it is more than a way to pass time. Leisure activities can be used to practice movement, attention, memory, communication, and problem solving in a setting that feels natural rather than clinical. Because the activity is meaningful, effort often feels more worthwhile.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Who Can Benefit?</h2>
        <p>Anyone adjusting to a change in abilities may find recreation helpful. This includes people recovering from stroke, traumatic brain injury, or other neurological conditions, as well as people coping with anxiety, low mood, or social withdrawal that can follow a major health change. Family members and caregivers often benefit too, since shared activities can restore connection beyond the roles of patient and helper.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Why Confidence Matters</h2>
        <p>Confidence shapes recovery. When people doubt their abilities, they tend to avoid challenges, and avoidance reduces the practice that supports healing. Low confidence can also feed isolation and sadness. Rebuilding self-trust helps people try new things, stay engaged in therapy, and take part in daily life again.</p>

        <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant">
          Confidence shapes recovery.
        </div>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What the Research Suggests</h2>
        <p>Research on rehabilitation has long shown that repeated, meaningful, task-focused practice supports the brain's ability to adapt, often called neuroplasticity. Studies of leisure participation and therapeutic recreation also link engagement in enjoyable activities with better mood, a stronger sense of purpose, and greater social participation after illness or injury. Results vary from person to person, and recreation works best alongside a broader care plan rather than as a replacement for it.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Practical Ways to Begin</h2>
        <p className="mb-6">You do not need to jump back into everything at once. Gentle, steady steps tend to work best.</p>
        <ul className="space-y-4">
          {tips.map((t) => (
            <li key={t} className="flex gap-3 items-start">
              <svg className="w-6 h-6 shrink-0 text-[var(--color-accent)] mt-1" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
              <span>{t}</span>
            </li>
          ))}
        </ul>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">When Setbacks Happen</h2>
        <p>Some days will feel harder than others. A missed step or a frustrating afternoon does not erase progress. Try to treat setbacks as information: perhaps the task was too demanding, the setting too noisy, or you were simply tired. Adjusting the plan is part of recovery, and a supportive team can help you do it without losing momentum.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Getting Support</h2>
        <p>If you or someone you love is struggling to regain confidence, you do not have to find the path alone. Irvine Neuro Rehabilitation in Southfield, MI offers a team that includes occupational therapy, speech therapy, psychiatry, and counseling and case management. Call us at (248) 415-2500 or reach out through our contact page to talk about your goals.</p>
      </article>

      <section className="animate-fade-up bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 px-6 flex gap-6 items-start">
        <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center shrink-0 text-[var(--color-primary)]">
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
                <svg className="w-8 h-8 text-[var(--color-accent)] mb-4" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75v10.5m-5.25-5.25h10.5" /></svg>
                <h4 className="font-cormorant text-2xl text-[var(--color-primary)] mb-2">{r.title}</h4>
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
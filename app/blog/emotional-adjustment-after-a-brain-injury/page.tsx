import type { Metadata } from 'next'
import SplitHero from '@/components/SplitHero'

export const metadata: Metadata = {
  title: 'Emotional Adjustment After a Brain Injury',
  description: 'Learn why mood, anxiety and identity shift after a brain injury, what research shows, and practical steps that support emotional recovery for you and your family.',
  alternates: { canonical: '/blog/emotional-adjustment-after-a-brain-injury' },
  openGraph: {
    title: 'Emotional Adjustment After a Brain Injury',
    description: 'Learn why mood, anxiety and identity shift after a brain injury, what research shows, and practical steps that support emotional recovery for you and your family.',
    url: 'https://irvineneurorehabilitation.com/blog/emotional-adjustment-after-a-brain-injury',
    siteName: 'Irvine Neuro Rehabilitation',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Emotional Adjustment After a Brain Injury',
    description: 'Learn why mood, anxiety and identity shift after a brain injury, what research shows, and practical steps that support emotional recovery for you and your family.',
  },
}

const tips = [
  'Name what you feel without judging it. Irritability, sadness and worry are common after injury.',
  'Keep a steady routine for sleep, meals, movement and rest to steady mood.',
  'Break tasks into small steps and plan rest breaks before fatigue builds.',
  'Tell trusted people what helps and what overwhelms you.',
  'Limit alcohol, which can worsen mood and slow recovery.',
  'Ask for professional support early rather than waiting for things to become unmanageable.',
]

const related = [
  { href: '/blog', label: 'Resources', title: 'Browse All Patient Resources' },
  { href: '/services', label: 'Services', title: 'Our Rehabilitation Services' },
  { href: '/contact', label: 'Contact', title: 'Talk With Our Team' },
]

export default function Page() {
  return (
    <main>
      <SplitHero src="/images/stock/blog-emotional-adjustment-after-a-brain-injury.jpg" alt="A counselor takes notes and listens as a man talks during a session.">
        <div>
          <nav className="text-sm text-white/70 mb-6">
            <a href="/" className="hover:text-white transition-colors">Home</a> › <a href="/blog" className="hover:text-white transition-colors">Resources</a> › Article
          </nav>
          <p className="text-xs uppercase tracking-widest text-white/70 mb-4">Patient Education</p>
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl">Emotional Adjustment After a Brain Injury</h1>
          <p className="text-white/70 text-sm mt-6">Published October 2026 · 6 min read</p>
        </div>
      </SplitHero>


      <article className="bg-white py-20 max-w-3xl mx-auto px-6">
        <p className="text-[var(--color-ink)] leading-loose text-base">
          You may look the same on the outside, yet feel like a different person on the inside. After a brain injury, many people find that their emotions are louder, quicker or harder to predict. Family members often notice it too. If this sounds familiar, it is not a personal failing, and you are not alone. Emotional changes are among the most common and most treatable effects of brain injury.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What Emotional Adjustment Really Means</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Emotional adjustment is the process of coming to terms with changes in your abilities, roles and sense of self while your brain heals. It includes two overlapping parts. The first is a direct effect of the injury on brain areas that help regulate mood, impulses and stress. The second is a natural response to loss, such as time away from work, changes in independence or uncertainty about the future.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Common Changes People Experience</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Every injury and every person is different, but several patterns appear again and again:
        </p>
        <ul className="my-4 space-y-2 text-[var(--color-ink)] leading-loose text-base list-disc pl-6">
          <li>Depression, low motivation or a loss of interest in things you once enjoyed</li>
          <li>Anxiety, panic or constant worry, sometimes tied to crowds, noise or driving</li>
          <li>Irritability, anger or a shorter fuse than before</li>
          <li>Rapid mood swings or crying and laughing that seem out of proportion</li>
          <li>Emotional flatness or difficulty reading other people&apos;s feelings</li>
          <li>Grief over the life you had before the injury</li>
        </ul>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Who Is Affected</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Emotional changes can follow injuries of any severity, including concussion, as well as stroke and other acquired brain injuries. They affect the person who was injured and the people around them. Partners, parents and children often take on new caregiving roles and may feel stress, sadness or isolation of their own.
        </p>

        <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant">
          Emotional changes are among the most common and most treatable effects of brain injury.
        </div>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What the Research Shows</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Studies of people with traumatic brain injury consistently find higher rates of depression and anxiety than in the general population, and these symptoms can appear months or even years after the injury. Fatigue, poor sleep, pain and cognitive difficulties all feed into mood, which is why emotional health is best addressed together with physical and cognitive recovery. Research supports several approaches, including cognitive behavioral therapy adapted for brain injury, structured rehabilitation, and, when appropriate, medication managed by a physician. Support for families is also linked with better coping at home.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Why It Matters for Recovery</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Untreated depression, anxiety or anger can make therapy harder to take part in, strain relationships and slow a return to daily activities. Addressing emotional health is not separate from rehabilitation. It is part of it. When mood improves, people often find it easier to focus, practice new strategies and re-engage with the things that matter to them.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Practical Steps That Help</h2>
        <ul className="my-4 space-y-3">
          {tips.map((t) => (
            <li key={t} className="flex gap-3 text-[var(--color-ink)] leading-loose text-base">
              <svg className="w-6 h-6 shrink-0 mt-1 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>{t}</span>
            </li>
          ))}
        </ul>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">For Family and Caregivers</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Try to remember that irritability or withdrawal is often a symptom, not a choice. Speak calmly, give one instruction at a time, and allow quiet time when things get overwhelming. Look after your own health too. Caregivers who rest and seek support are better able to help over the long term.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">When to Seek Professional Help</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Reach out if sadness or anxiety lasts more than a couple of weeks, if anger is affecting safety or relationships, or if sleep and daily routines keep breaking down. If you ever have thoughts of harming yourself, contact emergency services or call or text 988 right away. At Irvine Neuro Rehabilitation in Southfield, MI, our team includes a psychiatrist, licensed professional counselors, and occupational and speech therapists. You can call us at (248) 415-2500 to talk about your questions.
        </p>
      </article>

      <section className="px-6">
        <div className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 px-6 flex gap-6 items-start">
          <div className="bg-[var(--color-light)] rounded-full w-16 h-16 shrink-0 flex items-center justify-center text-[var(--color-primary)]">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6.75a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a7.5 7.5 0 0115 0" />
            </svg>
          </div>
          <div>
            <p className="font-semibold text-[var(--color-ink)]">From Irvine Neuro Rehabilitation</p>
            <p className="text-sm text-[var(--color-muted)] mt-1">This article is for general education and is not a substitute for personal medical advice.</p>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-cormorant text-3xl mb-8 text-[var(--color-ink)]">Related Resources</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {related.map((r) => (
              <a key={r.href} href={r.href} className="animate-fade-up block bg-white rounded-2xl p-6 border border-[var(--color-border)] hover:shadow-lg transition-shadow">
                <p className="text-xs uppercase tracking-widest text-[var(--color-muted)] mb-2">{r.label}</p>
                <p className="font-cormorant text-2xl text-[var(--color-primary)]">{r.title}</p>
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
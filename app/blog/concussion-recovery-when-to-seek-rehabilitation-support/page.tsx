import type { Metadata } from 'next'
import SplitHero from '@/components/SplitHero'

export const metadata: Metadata = {
  title: 'Concussion Recovery: When to Seek Rehab Support',
  description: 'Learn the signs that concussion symptoms need more than rest, and how rehabilitation support can help with recovery of thinking, speech, mood and daily function.',
  alternates: { canonical: '/blog/concussion-recovery-when-to-seek-rehabilitation-support' },
  openGraph: {
    title: 'Concussion Recovery: When to Seek Rehab Support',
    description: 'Learn the signs that concussion symptoms need more than rest, and how rehabilitation support can help with recovery of thinking, speech, mood and daily function.',
    url: 'https://www.irvineneurorehabilitation.com/blog/concussion-recovery-when-to-seek-rehabilitation-support',
    siteName: 'Irvine Neuro Rehabilitation',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Concussion Recovery: When to Seek Rehab Support',
    description: 'Learn the signs that concussion symptoms need more than rest, and how rehabilitation support can help with recovery of thinking, speech, mood and daily function.',
  },
}

const signs = [
  'Headaches, dizziness or fogginess that last beyond three or four weeks',
  'Trouble concentrating, remembering conversations or finishing familiar tasks',
  'Difficulty finding words, following conversations or speaking clearly',
  'Persistent anxiety, low mood, irritability or sleep problems',
  'Struggling to return to work, school, driving or household routines',
  'Fatigue that gets worse with ordinary mental or physical effort',
]

const tips = [
  'Rest briefly in the first day or two, then return to light activity gradually',
  'Keep a simple symptom diary noting triggers, sleep and energy levels',
  'Break tasks into short steps and take planned breaks',
  'Limit alcohol and avoid activities with a risk of another head injury',
  'Tell your doctor early if symptoms are not improving',
]

function Check() {
  return (
    <svg className="w-5 h-5 mt-1 shrink-0 text-[var(--color-accent)]" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  )
}

export default function Page() {
  return (
    <main>
      <SplitHero src="/images/stock/blog-concussion-recovery-when-to-seek-rehabilitation-support.jpg" alt="A therapist carefully applying colorful kinesiology tape on a patient's forearm for supportive therapy.">
        <div>
          <nav className="text-sm text-white/70 mb-6">
            <a href="/" className="hover:text-white transition-colors">Home</a> › <a href="/blog" className="hover:text-white transition-colors">Resources</a> › Article
          </nav>
          <p className="text-xs uppercase tracking-widest text-white/70 mb-4">Patient Education</p>
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl">Concussion Recovery: When to Seek Rehabilitation Support</h1>
          <p className="mt-6 text-sm text-white/70">Published October 2026 · 6 min read</p>
        </div>
      </SplitHero>


      <article className="bg-white py-20 max-w-3xl mx-auto px-6">
        <p className="text-[var(--color-ink)] leading-loose text-base">
          You were told it was &ldquo;just a concussion,&rdquo; and that you would feel better in a few days. Yet weeks later, reading feels exhausting, noise is overwhelming, and you are not quite yourself. If that sounds familiar, you are not imagining it, and you are far from alone. Knowing when to move beyond rest and seek rehabilitation support can make a real difference in how smoothly you recover.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What a Concussion Is</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          A concussion is a mild traumatic brain injury caused by a blow or jolt to the head or body that makes the brain move rapidly within the skull. This can temporarily change how brain cells function. Imaging such as CT or MRI is often normal, because the problem is mostly one of function rather than visible structural damage. Loss of consciousness is not required; most people with a concussion are never knocked out.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Who Is Affected</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Concussions happen to athletes, but also to people injured in car accidents, falls, workplace incidents and assaults. Children, teens, adults and older adults can all be affected. Having had a previous concussion, a history of migraine, anxiety or depression, or ongoing stress can make recovery slower for some people.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What Typical Recovery Looks Like</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Research suggests that most adults improve within several weeks, and children and teens may take somewhat longer. Current guidance has moved away from strict, prolonged bed rest. A short period of relative rest is followed by a gradual, symptom-guided return to daily activity, since extended inactivity can itself prolong symptoms. A meaningful minority of people, however, continue to have symptoms past a month. When symptoms linger, this is sometimes called persistent post-concussion symptoms, and it deserves attention rather than waiting.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Signs It May Be Time to Seek Support</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
          Consider reaching out to a healthcare professional if you notice any of the following:
        </p>
        <ul className="space-y-3">
          {signs.map((s) => (
            <li key={s} className="flex gap-3 text-[var(--color-ink)] leading-loose text-base">
              <Check />
              <span>{s}</span>
            </li>
          ))}
        </ul>

        <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant">
          A short period of relative rest is followed by a gradual, symptom-guided return to daily activity.
        </blockquote>

        <p className="text-[var(--color-ink)] leading-loose text-base">
          Seek urgent medical care right away for warning signs such as a worsening headache, repeated vomiting, seizures, increasing confusion, weakness or numbness, slurred speech, or unusual drowsiness. These are not signs to wait on.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">How Rehabilitation Can Help</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Concussion affects more than headaches. It can touch thinking, communication, emotions and the ability to manage everyday tasks, so recovery often benefits from a team approach. At Irvine Neuro Rehabilitation in Southfield, MI, our team includes an occupational therapist, a speech therapist, a psychiatrist who serves as medical director, and licensed counselors and case management support.
        </p>
        <ul className="space-y-3 mt-4">
          <li className="flex gap-3 text-[var(--color-ink)] leading-loose text-base"><Check /><span>Occupational therapy can focus on pacing, routines, and rebuilding the skills needed for work, home and self-care.</span></li>
          <li className="flex gap-3 text-[var(--color-ink)] leading-loose text-base"><Check /><span>Speech therapy can address word-finding, memory, attention and other cognitive-communication difficulties.</span></li>
          <li className="flex gap-3 text-[var(--color-ink)] leading-loose text-base"><Check /><span>Psychiatric and counseling care can support mood, anxiety, sleep and coping with the stress of a slow recovery.</span></li>
          <li className="flex gap-3 text-[var(--color-ink)] leading-loose text-base"><Check /><span>Case management can help coordinate care and next steps.</span></li>
        </ul>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Practical Tips While You Recover</h2>
        <ul className="space-y-3">
          {tips.map((t) => (
            <li key={t} className="flex gap-3 text-[var(--color-ink)] leading-loose text-base">
              <Check />
              <span>{t}</span>
            </li>
          ))}
        </ul>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Take the Next Step</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Slow recovery is not a sign of weakness, and you do not have to push through it alone. If your symptoms are interfering with life weeks after an injury, a conversation with a professional can clarify what is happening and what may help. To talk with our team, call (248) 415-2500 or reach out through our contact page.
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
          <h3 className="font-cormorant text-3xl mb-8 text-[var(--color-ink)]">Related Resources</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <a href="/blog" className="animate-fade-up block bg-white rounded-2xl p-6 border border-[var(--color-border)] hover:shadow-lg transition-shadow">
              <svg className="w-8 h-8 text-[var(--color-accent)] mb-3" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.04v12.5M12 6.04C10.5 4.7 8.4 4 6 4H3.75v12.5H6c2.4 0 4.5.7 6 2.04 1.5-1.34 3.6-2.04 6-2.04h2.25V4H18c-2.4 0-4.5.7-6 2.04z" />
              </svg>
              <p className="font-semibold text-[var(--color-ink)]">All Resources</p>
              <p className="text-sm text-[var(--color-muted)] mt-1">Browse patient education articles.</p>
            </a>
            <a href="/services" className="animate-fade-up block bg-white rounded-2xl p-6 border border-[var(--color-border)] hover:shadow-lg transition-shadow">
              <svg className="w-8 h-8 text-[var(--color-accent)] mb-3" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.07-1.68-3.75-3.75-3.75-1.9 0-3.5 1.4-3.7 3.2L12 9.75 10.45 7.7A3.75 3.75 0 003 8.25c0 4.5 9 10.5 9 10.5s9-6 9-10.5z" />
              </svg>
              <p className="font-semibold text-[var(--color-ink)]">Our Services</p>
              <p className="text-sm text-[var(--color-muted)] mt-1">See the rehabilitation and care we provide.</p>
            </a>
            <a href="/contact" className="animate-fade-up block bg-white rounded-2xl p-6 border border-[var(--color-border)] hover:shadow-lg transition-shadow">
              <svg className="w-8 h-8 text-[var(--color-accent)] mb-3" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.28 6.72 15 15 15h2.25v-3.1l-4.1-1.37-1.9 1.9a11 11 0 01-5.4-5.4l1.9-1.9L10.6 6.5H7.5A5.25 5.25 0 002.25 6.75z" />
              </svg>
              <p className="font-semibold text-[var(--color-ink)]">Contact Us</p>
              <p className="text-sm text-[var(--color-muted)] mt-1">Reach our team in Southfield, MI.</p>
            </a>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light mb-4">Ready to Take the Next Step?</h2>
          <p className="mb-8 text-white/80">We are here to help.</p>
          <a href="/contact" className="inline-block bg-[var(--color-accent)] border border-white/40 hover:bg-[var(--color-accent-dark)] transition-colors text-white px-8 py-3 rounded-full">Contact Us</a>
        </div>
      </section>
    </main>
  )
}
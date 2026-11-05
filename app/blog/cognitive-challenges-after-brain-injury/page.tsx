import type { Metadata } from 'next'
import SplitHero from '@/components/SplitHero'

export const metadata: Metadata = {
  title: 'Cognitive Challenges After Brain Injury | Irvine Neuro',
  description: 'Learn how brain injury can affect memory, attention, and planning, why it happens, and practical strategies and rehabilitation options that can help.',
  alternates: { canonical: '/blog/cognitive-challenges-after-brain-injury' },
  openGraph: {
    title: 'Cognitive Challenges After Brain Injury | Irvine Neuro',
    description: 'Learn how brain injury can affect memory, attention, and planning, why it happens, and practical strategies and rehabilitation options that can help.',
    url: 'https://www.irvineneurorehabilitation.com/blog/cognitive-challenges-after-brain-injury',
    siteName: 'Irvine Neuro Rehabilitation',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Cognitive Challenges After Brain Injury | Irvine Neuro',
    description: 'Learn how brain injury can affect memory, attention, and planning, why it happens, and practical strategies and rehabilitation options that can help.',
  },
}

const tips = [
  'Keep one calendar or planner and check it at the same times each day.',
  'Break tasks into small, clear steps and finish one before starting another.',
  'Reduce distractions: turn off the television, silence notifications, and work in a quiet room.',
  'Schedule demanding tasks for the time of day when you feel most alert.',
  'Build rest breaks into the day, since mental fatigue can make every symptom worse.',
  'Use phone alarms, labeled storage, and checklists for medications and routines.',
]

const related = [
  { href: '/blog', title: 'Browse All Resources', text: 'Explore more patient education articles from our team.' },
  { href: '/services', title: 'Our Services', text: 'See the rehabilitation and support services we provide.' },
  { href: '/contact', title: 'Contact Our Office', text: 'Reach out with questions about your or a loved one’s recovery.' },
]

export default function Page() {
  return (
    <main>
      <SplitHero src="/images/stock/blog-cognitive-challenges-after-brain-injury.jpg" alt="An older man concentrates on solving a puzzle cube.">
        <div>
          <nav className="text-sm text-white/70 mb-6">
            <a href="/" className="hover:text-white transition-colors">Home</a> › <a href="/blog" className="hover:text-white transition-colors">Resources</a> › Article
          </nav>
          <p className="text-xs uppercase tracking-widest text-white/70 mb-4">Patient Education</p>
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl">Cognitive Challenges After Brain Injury</h1>
          <p className="mt-6 text-sm text-white/70">Published October 2026 · 6 min read</p>
        </div>
      </SplitHero>


      <article className="bg-white py-20 max-w-3xl mx-auto px-6">
        <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
          You may look the same as before, yet the simple things feel harder. Names slip away, conversations move too fast, and a routine morning suddenly takes planning. If you or someone you love is living with these changes after a brain injury, you are not imagining them, and you are not alone. Understanding what is happening is the first step toward feeling more in control.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What Are Cognitive Challenges?</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
          Cognition describes the mental skills we use every day: paying attention, remembering, understanding language, solving problems, and organizing our time. A brain injury can disrupt the networks that support these skills. The result is often called a cognitive impairment, and it can range from subtle to severe depending on the injury.
        </p>
        <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
          Common changes include trouble with short-term memory, difficulty concentrating, slowed thinking, problems with planning and decision-making, and challenges finding words or following conversations.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Who Is Affected?</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
          Cognitive difficulties can follow many types of brain injury, including traumatic injuries from falls, vehicle collisions, or sports, as well as strokes, oxygen deprivation, infections, and tumors. They can affect people of any age. Even a concussion, often called a mild injury, can cause lingering problems with thinking for some people.
        </p>

        <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant">
          Recovery is rarely a straight line, and progress often comes through steady practice and the right support.
        </div>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Why These Changes Matter</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
          Cognitive changes are often less visible than physical ones, which can make them easy for others to overlook. Yet they affect nearly every part of life: returning to work or school, managing money and medications, driving safely, and keeping relationships strong. Frustration, anxiety, low mood, and fatigue frequently accompany these changes, and each can make thinking harder in a cycle that feels discouraging.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What the Research Tells Us</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
          The brain has a capacity called neuroplasticity, the ability to form new connections and reorganize in response to experience. Research on cognitive rehabilitation suggests that structured, goal-focused therapy can help people improve everyday function and learn compensatory strategies, particularly when it is practiced regularly and tied to real-life tasks. Most improvement tends to occur in the early months after injury, but many people continue to gain skills well beyond that period.
        </p>
        <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
          Because brain injury affects each person differently, effective care usually involves several disciplines working together. Occupational therapy can focus on daily routines and independence, speech therapy can address memory, language, and communication, and psychiatric and counseling support can address mood, stress, and adjustment.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Practical Strategies for Daily Life</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
          Small habits can lighten the mental load. Consider these approaches:
        </p>
        <ul className="space-y-3 mb-6">
          {tips.map((t) => (
            <li key={t} className="flex gap-3 text-[var(--color-ink)] leading-loose text-base">
              <svg className="w-6 h-6 shrink-0 mt-1 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>{t}</span>
            </li>
          ))}
        </ul>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Supporting a Loved One</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
          Family and caregivers play a major role. Speak in short, clear sentences, allow extra time to respond, and avoid correcting every mistake. Celebrate small gains, and remember that irritability or withdrawal may be part of the injury rather than a choice. Caregivers also need rest and support of their own.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">When to Seek Professional Help</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
          If memory, attention, or thinking problems are interfering with daily life, or if they seem to be getting worse, it is worth speaking with a medical professional. Sudden new symptoms such as severe headache, confusion, weakness, or trouble speaking require emergency care. For ongoing concerns, a personalized evaluation can clarify what is happening and shape a plan. Irvine Neuro Rehabilitation in Southfield, MI, can be reached at (248) 415-2500 to discuss your questions.
        </p>
      </article>

      <section className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 px-6 flex gap-6 items-start animate-fade-up">
        <div className="bg-[var(--color-light)] rounded-full w-16 h-16 shrink-0 flex items-center justify-center text-[var(--color-primary)]">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
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
              <a key={r.title} href={r.href} className="animate-fade-up block bg-white rounded-2xl p-6 border border-[var(--color-border)] hover:shadow-lg transition-shadow">
                <h4 className="font-cormorant text-2xl text-[var(--color-primary)] mb-2">{r.title}</h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">{r.text}</p>
              </a>
            ))}
          </div>
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
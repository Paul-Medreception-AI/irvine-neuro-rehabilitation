import type { Metadata } from 'next'
import SplitHero from '@/components/SplitHero'

export const metadata: Metadata = {
  title: 'What to Expect From Neuro Rehabilitation After Brain Injury',
  description: 'Learn what neuro rehabilitation involves after a brain injury, from evaluation and therapy goals to family support, recovery timelines and next steps.',
  alternates: { canonical: '/blog/what-to-expect-from-neuro-rehabilitation-after-a-brain-injur' },
  openGraph: {
    title: 'What to Expect From Neuro Rehabilitation After Brain Injury',
    description: 'Learn what neuro rehabilitation involves after a brain injury, from evaluation and therapy goals to family support, recovery timelines and next steps.',
    url: 'https://irvineneurorehabilitation.com/blog/what-to-expect-from-neuro-rehabilitation-after-a-brain-injur',
    siteName: 'Irvine Neuro Rehabilitation',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'What to Expect From Neuro Rehabilitation After Brain Injury',
    description: 'Learn what neuro rehabilitation involves after a brain injury, from evaluation and therapy goals to family support, recovery timelines and next steps.',
  },
}

const check = (
  <svg className="w-6 h-6 shrink-0 mt-1 text-[var(--color-accent)]" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
)

const tips = [
  'Write down questions and symptoms between appointments, including fatigue, headaches, memory lapses and mood changes.',
  'Bring a family member or friend to appointments who can share what they have noticed at home.',
  'Practice recommended exercises in short, regular sessions rather than pushing through exhaustion.',
  'Protect sleep, eat regularly and pace your day with planned rest breaks.',
  'Tell your care team about any new or worsening symptoms right away.',
]

export default function Page() {
  return (
    <main>
      <SplitHero src="/images/stock/blog-what-to-expect-from-neuro-rehabilitation-after-a-brain-injur.jpg" alt="A man does a resistance exercise on a reformer machine while a therapist supervises.">
        <div>
          <nav className="text-sm text-white/70 mb-6">
            <a href="/" className="hover:text-white transition-colors">Home</a> › <a href="/blog" className="hover:text-white transition-colors">Resources</a> › Article
          </nav>
          <p className="text-xs uppercase tracking-widest text-white/70 mb-4">Patient Education</p>
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl">What to Expect From Neuro Rehabilitation After a Brain Injury</h1>
          <p className="mt-6 text-sm text-white/70">Published October 2026 · 6 min read</p>
        </div>
      </SplitHero>


      <article className="bg-white py-20 max-w-3xl mx-auto px-6">
        <p className="text-[var(--color-ink)] leading-loose text-base">
          One moment life feels ordinary, and the next, a fall, a car accident, a stroke or a sports collision changes how you think, move, speak or feel. If you or someone you love is facing life after a brain injury, it is natural to feel overwhelmed and to wonder what comes next. The good news is that the brain has a remarkable capacity to adapt, and structured rehabilitation can help people make the most of it.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What Is Neuro Rehabilitation?</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Neuro rehabilitation is a coordinated program of therapies and supports designed to help people recover function, build new strategies and return to daily life after an injury or illness affecting the brain or nervous system. It is not a single treatment. It draws on occupational therapy, speech and language therapy, psychiatric and psychological care, and case management, with each part addressing a different piece of recovery.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Who Can Benefit?</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Rehabilitation can help people recovering from traumatic brain injury, concussion, stroke, brain tumors, infections affecting the brain, and other neurological conditions. Effects vary widely. Some people notice trouble with memory, attention or planning. Others struggle with word-finding, swallowing, balance, fine motor skills, mood, irritability or fatigue. Two people with the same diagnosis may have very different needs, which is why individual assessment matters.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">The First Step: A Thorough Evaluation</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Rehabilitation typically begins with a careful look at your medical history, the nature of the injury, your current symptoms and the things that matter most to you. Clinicians may assess thinking skills, communication, movement and hand function, emotional health and the demands of your home, work or school life. From this, you and your care team set realistic, meaningful goals, such as managing a morning routine, returning to cooking, following a conversation or getting back to work.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What Therapy May Involve</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Depending on your needs, your plan may include several types of support:
        </p>
        <ul className="my-6 space-y-3">
          <li className="flex gap-3 text-[var(--color-ink)] leading-loose">{check}<span><strong>Occupational therapy</strong> to rebuild skills for self-care, household tasks, work and leisure, and to adapt routines and environments.</span></li>
          <li className="flex gap-3 text-[var(--color-ink)] leading-loose">{check}<span><strong>Speech and language therapy</strong> to address communication, understanding, memory strategies and, when needed, swallowing.</span></li>
          <li className="flex gap-3 text-[var(--color-ink)] leading-loose">{check}<span><strong>Psychiatric and counseling support</strong> for depression, anxiety, sleep problems, irritability and the emotional toll of injury.</span></li>
          <li className="flex gap-3 text-[var(--color-ink)] leading-loose">{check}<span><strong>Case management</strong> to help coordinate care, resources and next steps.</span></li>
        </ul>

        <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant">
          The brain has a remarkable capacity to adapt, and structured rehabilitation can help people make the most of it.
        </blockquote>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What Does the Research Say About Recovery?</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Research on neuroplasticity shows that the brain can form new connections and reorganize in response to experience and practice. Studies of rehabilitation after brain injury and stroke generally find that repetitive, goal-focused, task-specific training supports better functional outcomes. Recovery is often fastest in the early months, but many people continue to make gains for a long time afterward. Progress is rarely a straight line. Good days and hard days are both a normal part of healing, and timelines differ from person to person depending on the type and severity of injury, age, overall health and support.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">The Role of Family and Caregivers</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Brain injury affects the whole family. Loved ones often become partners in recovery, helping with practice, reminders and transportation while also adjusting to changes in roles and routines. Caregivers need support too. Involving family in therapy sessions, learning communication strategies and seeking counseling can reduce stress and make progress easier to carry into everyday life.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Practical Tips for Your Recovery</h2>
        <ul className="my-6 space-y-3">
          {tips.map((t) => (
            <li key={t} className="flex gap-3 text-[var(--color-ink)] leading-loose">{check}<span>{t}</span></li>
          ))}
        </ul>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Taking the Next Step</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Recovery after a brain injury can feel uncertain, but you do not have to figure it out alone. If you or a family member is experiencing lingering symptoms, a professional evaluation is a sound place to start. Irvine Neuro Rehabilitation in Southfield, MI offers specialty medical care that includes occupational therapy, speech therapy, psychiatry and case management. Call (248) 415-2500 or reach out through our contact page to ask questions about your situation.
        </p>
      </article>

      <section className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 px-6 flex gap-6 items-start animate-fade-up">
        <div className="bg-[var(--color-light)] rounded-full w-16 h-16 shrink-0 flex items-center justify-center text-[var(--color-primary)]">
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
            <a href="/blog" className="animate-fade-up block bg-white rounded-2xl p-6 border border-[var(--color-border)] hover:shadow-lg transition-shadow">
              <h4 className="font-cormorant text-2xl text-[var(--color-ink)] mb-2">Resources Hub</h4>
              <p className="text-[var(--color-muted)] text-sm">Browse all patient education articles.</p>
            </a>
            <a href="/services" className="animate-fade-up block bg-white rounded-2xl p-6 border border-[var(--color-border)] hover:shadow-lg transition-shadow">
              <h4 className="font-cormorant text-2xl text-[var(--color-ink)] mb-2">Our Services</h4>
              <p className="text-[var(--color-muted)] text-sm">Explore the therapies and care we provide.</p>
            </a>
            <a href="/contact" className="animate-fade-up block bg-white rounded-2xl p-6 border border-[var(--color-border)] hover:shadow-lg transition-shadow">
              <h4 className="font-cormorant text-2xl text-[var(--color-ink)] mb-2">Contact Us</h4>
              <p className="text-[var(--color-muted)] text-sm">Ask a question or reach our Southfield office.</p>
            </a>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light mb-4">Ready to Take the Next Step?</h2>
          <p className="text-white/80 mb-8">We are here to help.</p>
          <a href="/contact" className="inline-block bg-white text-[var(--color-primary)] px-8 py-3 rounded-full font-medium hover:bg-[var(--color-light)] transition-colors">Contact Us</a>
        </div>
      </section>
    </main>
  )
}
import type { Metadata } from 'next'
import HeroBackdrop from '@/components/HeroBackdrop'

export const metadata: Metadata = {
  title: 'Occupational Therapy for Daily Independence',
  description: 'Learn how occupational therapy helps people rebuild skills for dressing, cooking, working and daily living after injury, illness or neurological change.',
  alternates: { canonical: '/blog/occupational-therapy-for-daily-independence' },
  openGraph: {
    title: 'Occupational Therapy for Daily Independence',
    description: 'Learn how occupational therapy helps people rebuild skills for dressing, cooking, working and daily living after injury, illness or neurological change.',
    url: 'https://irvineneurorehabilitation.com/blog/occupational-therapy-for-daily-independence',
    siteName: 'Irvine Neuro Rehabilitation',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Occupational Therapy for Daily Independence',
    description: 'Learn how occupational therapy helps people rebuild skills for dressing, cooking, working and daily living after injury, illness or neurological change.',
  },
}

const tips = [
  'Name the three daily tasks that matter most to you, such as dressing, cooking or driving.',
  'Break big tasks into small steps and practice one step at a time.',
  'Set up your home so frequently used items sit between waist and shoulder height.',
  'Build in rest breaks before fatigue sets in, not after.',
  'Practice a little every day; short, regular sessions often beat long, rare ones.',
  'Bring family or caregivers into sessions so everyone uses the same strategies.',
]

const related = [
  { title: 'Occupational Therapy at Irvine Neuro Rehabilitation', href: '/services/occupational-therapy', label: 'Service' },
  { title: 'Speech Therapy and Communication Recovery', href: "/services", label: 'Service' },
  { title: 'More Patient Education Resources', href: '/blog', label: 'Resources' },
]

export default function Page() {
  return (
    <main>
      <section className="hero-photo relative overflow-hidden bg-[var(--color-dark)] py-24 sm:py-32 text-white">
        <HeroBackdrop src="/images/stock/blog-occupational-therapy-for-daily-independence.jpg" alt="A man in a wheelchair using a staircase railing for support indoors." />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <nav className="text-sm text-white/70 mb-6">
            <a href="/" className="hover:text-white transition-colors">Home</a> › <a href="/blog" className="hover:text-white transition-colors">Resources</a> › Article
          </nav>
          <p className="text-xs uppercase tracking-widest text-white/70 mb-4">Patient Education</p>
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl mx-auto text-center">Occupational Therapy for Daily Independence</h1>
          <p className="mt-6 text-sm text-white/70">Published October 2026 · 6 min read</p>
        </div>
      </section>


      <article className="bg-white py-20 max-w-3xl mx-auto px-6 text-[var(--color-ink)] leading-loose text-base">
        <p className="text-lg">Buttoning a shirt. Making a cup of coffee. Writing a grocery list. For most people these tasks happen without a second thought, until an injury, stroke, illness or change in thinking makes each one a challenge. Losing ease in everyday routines can feel like losing a piece of yourself. Occupational therapy exists to help you get that piece back.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What Occupational Therapy Really Means</h2>
        <p>The word &quot;occupation&quot; in occupational therapy does not only mean a job. It refers to every meaningful activity that fills your day: self-care, household tasks, work, school, hobbies, parenting and social life. An occupational therapist evaluates how your body, thinking skills and surroundings work together, then builds a plan to help you do the things you need and want to do.</p>
        <p className="mt-4">At Irvine Neuro Rehabilitation in Southfield, MI, our registered occupational therapists and occupational therapy staff work alongside physical therapy, speech therapy, nursing and counseling professionals.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Who Can Benefit</h2>
        <p>Occupational therapy is used across many situations, particularly when the nervous system is involved. People who may benefit include those recovering from:</p>
        <ul className="mt-4 space-y-2">
          {['Stroke or other brain injury', 'Concussion and its lingering effects', 'Neurological conditions that affect movement or coordination', 'Difficulties with memory, attention, planning or organization', 'Weakness, fatigue or reduced hand function after illness or surgery'].map((t) => (
            <li key={t} className="flex gap-3 items-start">
              <svg className="w-6 h-6 shrink-0 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
              <span>{t}</span>
            </li>
          ))}
        </ul>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">How Therapy Works</h2>
        <p>Care usually begins with an assessment of what you can do now, what is getting in the way, and what matters most to you. Goals are then set around real-life tasks rather than abstract exercises. Treatment may include:</p>
        <p className="mt-4"><strong>Skill retraining.</strong> Practicing the actual steps of dressing, bathing, meal preparation or handwriting, with graded difficulty as you improve.</p>
        <p className="mt-4"><strong>Strength, coordination and motor control.</strong> Activities that rebuild hand and arm function and balance during daily tasks.</p>
        <p className="mt-4"><strong>Cognitive strategies.</strong> Tools such as checklists, routines, calendars and reminders that support memory, focus and problem solving.</p>
        <p className="mt-4"><strong>Energy management.</strong> Pacing and planning so fatigue does not take over your day.</p>
        <p className="mt-4"><strong>Adaptive methods and equipment.</strong> Different techniques, or simple tools, that make a task safer and easier.</p>

        <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant">
          Goals are then set around real-life tasks rather than abstract exercises.
        </blockquote>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What the Research Tells Us</h2>
        <p>The brain has a capacity called neuroplasticity: it can form new connections in response to experience and practice. Rehabilitation research consistently finds that repetitive, task-specific, meaningful practice supports recovery of function after neurological injury. Studies of stroke rehabilitation, for example, support intensive, goal-oriented training of everyday movements. Occupational therapy also has evidence behind it for improving self-care performance and reducing fall risk when home environments are assessed and adjusted. Results vary from person to person, and a clinician can help set realistic expectations for your situation.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">The Emotional Side of Regaining Independence</h2>
        <p>Needing help with tasks you once did alone can bring frustration, grief or anxiety. These feelings are common and valid. Because emotional health and recovery influence each other, coordinated care that also considers mood, stress and coping can make therapy more effective. Our team includes our medical director, Dr. Theodore Ruza, DO, and licensed counselors, so support is not limited to the physical side of recovery.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Practical Tips You Can Start Today</h2>
        <ul className="space-y-3">
          {tips.map((t) => (
            <li key={t} className="flex gap-3 items-start">
              <svg className="w-6 h-6 shrink-0 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
              <span>{t}</span>
            </li>
          ))}
        </ul>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">When to Seek Professional Help</h2>
        <p>Consider an occupational therapy evaluation if everyday tasks have become unsafe, exhausting or frustrating, if you or a loved one has had a neurological event, or if you notice changes in memory, coordination or daily function. Seek emergency care right away for sudden weakness, trouble speaking, facial drooping or severe headache.</p>
        <p className="mt-4">Independence is rarely regained all at once; it returns one task, one routine, one small win at a time. If you would like to talk about where to begin, call Irvine Neuro Rehabilitation at (248) 415-2500.</p>
      </article>

      <section className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 px-6 flex gap-6 items-start animate-fade-up">
        <div className="bg-[var(--color-light)] rounded-full w-16 h-16 shrink-0 flex items-center justify-center text-[var(--color-primary)]">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6.75a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a7.5 7.5 0 0115 0" /></svg>
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
          <a href="/contact" className="inline-block bg-white text-[var(--color-accent)] px-8 py-3 rounded-full font-medium hover:bg-[var(--color-light)] transition-colors">Contact Us</a>
        </div>
      </section>
    </main>
  )
}
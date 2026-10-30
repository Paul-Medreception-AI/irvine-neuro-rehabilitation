import type { Metadata } from 'next'
import SplitHero from '@/components/SplitHero'

export const metadata: Metadata = {
  title: 'Cerebral Palsy and Lifelong Therapy Goals',
  description: 'Learn how therapy goals for cerebral palsy change across childhood, adulthood and aging, and how to plan ahead for movement, communication and independence.',
  alternates: { canonical: '/blog/cerebral-palsy-and-lifelong-therapy-goals' },
  openGraph: {
    title: 'Cerebral Palsy and Lifelong Therapy Goals',
    description: 'Learn how therapy goals for cerebral palsy change across childhood, adulthood and aging, and how to plan ahead for movement, communication and independence.',
    url: 'https://irvineneurorehabilitation.com/blog/cerebral-palsy-and-lifelong-therapy-goals',
    siteName: 'Irvine Neuro Rehabilitation',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Cerebral Palsy and Lifelong Therapy Goals',
    description: 'Learn how therapy goals for cerebral palsy change across childhood, adulthood and aging, and how to plan ahead for movement, communication and independence.',
  },
}

const Check = () => (
  <svg className="w-6 h-6 shrink-0 mt-1 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
)

export default function Page() {
  const tips = [
    'Write down goals that matter to daily life, such as dressing, cooking, typing, or speaking with friends.',
    'Revisit goals at major transitions: starting school, entering adulthood, changing jobs, or moving homes.',
    'Track changes in pain, fatigue, balance, swallowing or speech, and report them early.',
    'Build movement into every week, because consistency matters more than intensity.',
    'Include family members and caregivers in planning so strategies carry over at home.',
  ]
  const related = [
    { href: '/blog', title: 'Browse All Resources', text: 'Explore more patient education articles from our team.' },
    { href: '/services', title: 'Our Services', text: 'See the therapy and care services we provide.' },
    { href: '/contact', title: 'Contact Our Office', text: 'Reach out to ask questions about next steps.' },
  ]
  return (
    <main>
      <SplitHero src="/images/stock/blog-cerebral-palsy-and-lifelong-therapy-goals.jpg" alt="A smiling young woman holds therapy balls while seated on mats in a therapy room.">
        <div>
          <nav className="text-sm text-white/70 mb-6">
            <a href="/" className="hover:text-white transition-colors">Home</a> › <a href="/blog" className="hover:text-white transition-colors">Resources</a> › Article
          </nav>
          <p className="text-xs uppercase tracking-widest text-white/70 mb-4">Patient Education</p>
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl">Cerebral Palsy and Lifelong Therapy Goals</h1>
          <p className="mt-6 text-white/80 text-sm">Published October 2026 · 6 min read</p>
        </div>
      </SplitHero>


      <article className="bg-white py-20 max-w-3xl mx-auto px-6 text-[var(--color-ink)]">
        <p className="leading-loose text-base">
          When a child is diagnosed with cerebral palsy, families often ask one question first: what will life look like? The honest answer is that cerebral palsy is a lifelong condition, but it is not a story that stops growing. With thoughtful, changing goals, people with cerebral palsy build skills, protect their health, and shape lives that are full and their own.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What Cerebral Palsy Is</h2>
        <p className="leading-loose text-base mb-4">
          Cerebral palsy is a group of conditions caused by differences or injury in the developing brain, usually before or around birth or in early childhood. It affects muscle tone, posture, coordination and movement. Many people also experience related challenges such as speech and swallowing difficulty, vision or hearing differences, epilepsy, learning differences, or pain. The brain condition itself does not progress, but how it affects the body can change over time.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Who It Affects</h2>
        <p className="leading-loose text-base mb-4">
          Cerebral palsy is among the most common causes of motor disability in childhood. It ranges from mild, where someone may have a slight limp or difficulty with fine motor tasks, to severe, where mobility, communication and daily care need substantial support. Because each person is different, a therapy plan should be built around the individual rather than the diagnosis label.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Why Goals Must Change Over Time</h2>
        <p className="leading-loose text-base mb-4">
          Needs shift with each stage of life. Early on, therapy often focuses on development: rolling, sitting, walking, play, feeding and first words. In school years, goals may turn to handwriting, mobility at school, communication tools, and participation with peers. In adolescence and adulthood, priorities often become independence, work, relationships, fitness and managing fatigue.
        </p>
        <p className="leading-loose text-base mb-4">
          Later in adulthood, many people notice new pain, stiffness, joint wear, or declining endurance earlier than expected. Muscles that work harder to move can tire sooner. Planning for these changes, rather than reacting to them, helps preserve function for longer.
        </p>

        <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant">
          Needs shift with each stage of life.
        </blockquote>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What the Evidence Suggests</h2>
        <p className="leading-loose text-base mb-4">
          Research supports goal-directed, task-specific training, where practice centers on activities that matter to the person. Strength training, once avoided out of concern for increasing spasticity, is now widely recognized as safe and helpful. Early intervention takes advantage of the brain&apos;s high adaptability in young children, but studies also show that adolescents and adults can still improve strength, walking efficiency and skills with focused practice.
        </p>
        <p className="leading-loose text-base mb-4">
          Occupational therapy supports daily activities and hand function, while speech therapy addresses communication, language and swallowing. Medical oversight can address spasticity, mood, sleep and pain. A coordinated approach tends to work better than any single treatment alone.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Practical Steps for Lifelong Planning</h2>
        <ul className="space-y-4 mb-4">
          {tips.map((t) => (
            <li key={t} className="flex gap-3 leading-loose text-base">
              <Check />
              <span>{t}</span>
            </li>
          ))}
        </ul>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Supporting Emotional Well-Being</h2>
        <p className="leading-loose text-base mb-4">
          Living with a lifelong condition can be tiring for individuals and families alike. Anxiety, low mood and caregiver strain are common and deserve care too. Counseling, peer support and realistic pacing of goals can protect motivation. Celebrating small gains, like a longer walk or a clearer sentence, keeps progress visible.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Take the Next Step</h2>
        <p className="leading-loose text-base">
          Whether you are planning for a child, supporting a loved one, or living with cerebral palsy yourself, revisiting your goals with a professional team can bring clarity. Irvine Neuro Rehabilitation in Southfield, MI provides specialty medical care with occupational therapy, speech therapy, psychiatry and counseling support. Call (248) 415-2500 to talk about what comes next.
        </p>
      </article>

      <section className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 px-6 flex gap-6 items-start">
        <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center shrink-0 text-[var(--color-primary)]">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a7.5 7.5 0 0115 0" />
          </svg>
        </div>
        <div>
          <p className="font-semibold text-[var(--color-ink)]">From Irvine Neuro Rehabilitation</p>
          <p className="text-sm text-[var(--color-muted)] mt-1">This article is for general education and is not a substitute for personal medical advice.</p>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-16 max-w-7xl mx-auto px-6">
        <h3 className="font-cormorant text-3xl mb-8 text-[var(--color-ink)]">Related Resources</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {related.map((r) => (
            <a key={r.title} href={r.href} className="animate-fade-up block bg-white rounded-2xl p-6 border border-[var(--color-border)] hover:shadow-lg transition-shadow">
              <h4 className="font-cormorant text-2xl text-[var(--color-primary)] mb-2">{r.title}</h4>
              <p className="text-[var(--color-ink)] text-base">{r.text}</p>
            </a>
          ))}
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
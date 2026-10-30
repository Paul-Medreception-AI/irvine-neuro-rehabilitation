import type { Metadata } from 'next'
import SplitHero from '@/components/SplitHero'

export const metadata: Metadata = {
  title: 'Adapting Your Home for Greater Independence',
  description: 'Practical home modification ideas for people recovering from neurological injury or illness, to support safety, confidence and daily independence.',
  alternates: { canonical: '/blog/adapting-your-home-for-greater-independence' },
  openGraph: {
    title: 'Adapting Your Home for Greater Independence',
    description: 'Practical home modification ideas for people recovering from neurological injury or illness, to support safety, confidence and daily independence.',
    url: 'https://irvineneurorehabilitation.com/blog/adapting-your-home-for-greater-independence',
    siteName: 'Irvine Neuro Rehabilitation',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Adapting Your Home for Greater Independence',
    description: 'Practical home modification ideas for people recovering from neurological injury or illness, to support safety, confidence and daily independence.',
  },
}

const tips = [
  'Remove loose rugs and secure cords along walls to reduce tripping hazards.',
  'Install bright, even lighting in hallways, stairways and bathrooms.',
  'Add grab bars near the toilet and in the shower, anchored into wall studs.',
  'Place frequently used items between waist and shoulder height.',
  'Use a shower chair and handheld shower head to conserve energy and balance.',
  'Add sturdy handrails on both sides of stairs, or consider a ramp where needed.',
]

const related = [
  { href: '/blog', title: 'All Resources', text: 'Browse every patient education article in our resource library.' },
  { href: '/services', title: 'Our Services', text: 'Learn about the rehabilitation services we offer.' },
  { href: '/contact', title: 'Contact Our Team', text: 'Reach out with questions about your own situation.' },
]

export default function Page() {
  return (
    <main>
      <SplitHero src="/images/stock/blog-adapting-your-home-for-greater-independence.jpg" alt="A woman in a wheelchair prepares food at a kitchen counter in her home.">
        <div>
          <nav className="text-sm text-white/70 mb-6">
            <a href="/" className="hover:text-white transition-colors">Home</a> › <a href="/blog" className="hover:text-white transition-colors">Resources</a> › Article
          </nav>
          <p className="text-xs uppercase tracking-widest text-white/70 mb-4">Patient Education</p>
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl">Adapting Your Home for Greater Independence</h1>
          <p className="mt-6 text-sm text-white/70">Published October 2026 · 6 min read</p>
        </div>
      </SplitHero>


      <article className="bg-white py-20 max-w-3xl mx-auto px-6">
        <p className="text-[var(--color-ink)] leading-loose text-base">Home should be the place where you feel most at ease. After a stroke, brain injury, or a change in thinking, movement or communication, familiar rooms can suddenly feel full of obstacles. A step you once ignored, a high shelf, a slippery shower floor: each can quietly erode confidence. The good news is that thoughtful changes to your surroundings can make daily life safer and help you do more for yourself.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What Does Adapting a Home Mean?</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">Home adaptation means changing the space, the tools you use, or the way a task is done so that it fits your current abilities. Some changes are simple and inexpensive, like better lighting or a non-slip mat. Others are larger, such as widening a doorway or adding a ramp. The goal is not to make a home feel clinical. It is to remove barriers so that you can spend your energy on what matters to you.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Who Can Benefit?</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">Adaptations can help people living with the effects of stroke, traumatic brain injury, multiple sclerosis, Parkinson&apos;s disease, and other neurological or medical conditions. They also help people with weakness, balance problems, fatigue, vision changes, or difficulty with memory and planning. Family members and caregivers benefit too, since a safer home often means less physical strain and less worry.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Why It Matters: What the Research Suggests</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">Falls are a leading cause of injury in older adults and in people with neurological conditions, and many happen at home. Studies of home hazard assessment and modification, often led by occupational therapists, have found that these changes can reduce fall risk, particularly for people who are already at higher risk. Beyond safety, being able to bathe, cook or dress with less help is closely tied to dignity, mood and quality of life.</p>

        <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant">
          The goal is not to make a home feel clinical.
        </div>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Practical Changes to Consider</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base mb-4">Start with the rooms where you spend the most time and the tasks that feel hardest. These ideas are common starting points:</p>
        <ul className="space-y-3">
          {tips.map((t) => (
            <li key={t} className="flex gap-3 text-[var(--color-ink)] leading-loose text-base">
              <svg className="w-6 h-6 shrink-0 text-[var(--color-accent)] mt-1" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
              <span>{t}</span>
            </li>
          ))}
        </ul>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Supporting Memory, Thinking and Communication</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">Independence is not only physical. If memory, attention or planning has changed, visual cues can help. Labels on cabinets, a large wall calendar, a single place for keys and medications, and written step-by-step routines reduce the mental load of daily tasks. If speech or language is affected, keeping a simple communication board or reducing background noise in busy rooms can make conversations easier for everyone.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Make Changes Gradually and Together</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">Needs change over time, so it helps to adapt in stages. Involve the person who lives in the home in every decision, since the best setup is one they will actually use. Try equipment before buying when possible, and ask a qualified professional to assess your home and routines. An occupational therapist can watch how you move through daily tasks and recommend changes tailored to you rather than a generic checklist.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Take the Next Step</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">You do not have to figure this out alone. If you or someone you love is struggling with daily tasks at home, professional guidance can make adjustments feel manageable and keep them focused on your goals. Call Irvine Neuro Rehabilitation in Southfield, MI at (248) 415-2500 or reach out through our contact page to talk about your situation.</p>
      </article>

      <section className="px-6">
        <div className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 flex gap-6 items-start animate-fade-up">
          <div className="bg-[var(--color-light)] rounded-full w-16 h-16 shrink-0 flex items-center justify-center text-[var(--color-primary)]">
            <svg className="w-8 h-8" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6.75a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a7.5 7.5 0 0115 0" /></svg>
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
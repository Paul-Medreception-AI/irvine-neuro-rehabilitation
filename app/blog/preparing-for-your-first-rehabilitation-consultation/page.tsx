import type { Metadata } from 'next'
import HeroBackdrop from '@/components/HeroBackdrop'

export const metadata: Metadata = {
  title: 'Preparing for Your First Rehabilitation Consultation',
  description: 'Learn what to bring, what to expect and which questions to ask before a first rehabilitation consultation so you can get the most from your visit.',
  alternates: { canonical: '/blog/preparing-for-your-first-rehabilitation-consultation' },
  openGraph: {
    title: 'Preparing for Your First Rehabilitation Consultation',
    description: 'Learn what to bring, what to expect and which questions to ask before a first rehabilitation consultation so you can get the most from your visit.',
    url: 'https://irvineneurorehabilitation.com/blog/preparing-for-your-first-rehabilitation-consultation',
    siteName: 'Irvine Neuro Rehabilitation',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Preparing for Your First Rehabilitation Consultation',
    description: 'Learn what to bring, what to expect and which questions to ask before a first rehabilitation consultation so you can get the most from your visit.',
  },
}

const checklist = [
  'A list of your current medications, doses and supplements',
  'Summaries or copies of recent imaging, lab work or hospital records',
  'A short timeline of your symptoms and any injury or diagnosis',
  'Your insurance card and a photo ID',
  'Glasses, hearing aids, braces or other devices you use daily',
  'A family member or friend who can help you recall details',
]

const questions = [
  'What do you think is causing my difficulties?',
  'Which goals should we focus on first?',
  'How often will I need to attend, and for how long?',
  'What can I practice at home between visits?',
  'How will we measure progress together?',
]

function Check() {
  return (
    <svg className="w-5 h-5 shrink-0 mt-1 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  )
}

export default function Page() {
  return (
    <main>
      <section className="hero-photo relative overflow-hidden bg-[var(--color-dark)] py-24 sm:py-32 text-white">
        <HeroBackdrop src="/images/stock/blog-preparing-for-your-first-rehabilitation-consultation.jpg" alt="Nurse helping a female patient during a check-up in a modern, bright clinic setting." />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <nav className="text-sm text-white/70 mb-6">
            <a href="/" className="hover:text-white transition-colors">Home</a> › <a href="/blog" className="hover:text-white transition-colors">Resources</a> › Article
          </nav>
          <p className="text-xs uppercase tracking-widest text-white/70 mb-4">Patient Education</p>
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl mx-auto text-center">Preparing for Your First Rehabilitation Consultation</h1>
          <p className="mt-6 text-sm text-white/70">Published October 2026 · 6 min read</p>
        </div>
      </section>


      <article className="bg-white py-20 max-w-3xl mx-auto px-6 text-[var(--color-ink)]">
        <p className="leading-loose text-base">
          Walking into a first rehabilitation appointment can feel like a big step. You may be recovering from a stroke, a brain injury, a change in memory or communication, or a difficult period for your emotional health. You might feel hopeful, nervous or simply tired of waiting for answers. A little preparation can turn that uncertainty into confidence, and it helps your care team understand you as a whole person from the very first visit.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What a First Rehabilitation Consultation Is</h2>
        <p className="leading-loose text-base mb-4">
          A first consultation is a conversation and an assessment. Its purpose is to understand your history, your current abilities, and what matters most to you in daily life. Rehabilitation is not one single treatment. It is a coordinated approach that can draw on occupational therapy, speech and language therapy, psychiatric care and counseling, and case management, depending on your needs.
        </p>
        <p className="leading-loose text-base">
          At Irvine Neuro Rehabilitation in Southfield, MI, the team includes an occupational therapist, a speech therapist, a psychiatrist who serves as medical director, and licensed professional counselors, including case management support. Your first visit is simply the starting point for working out which of these supports fit you.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Who Benefits From Rehabilitation</h2>
        <p className="leading-loose text-base">
          Neurological rehabilitation is commonly used by people recovering from stroke, traumatic brain injury, concussion, and other conditions that affect movement, thinking, speech, swallowing, mood or independence. Family members and caregivers are affected too, and their observations are often valuable. If daily tasks such as dressing, cooking, managing appointments, finding words or staying organized have become harder, a consultation is a reasonable place to start.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Why Preparation Matters</h2>
        <p className="leading-loose text-base mb-4">
          Research on patient-centered care consistently finds that people who take an active part in setting goals tend to stay more engaged in therapy. Rehabilitation research also emphasizes that goals tied to real-life activities, like returning to a hobby or managing a household, help guide treatment choices. Arriving with clear information lets the clinician spend less time reconstructing your history and more time planning with you.
        </p>
        <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant animate-fade-up">
          Arriving with clear information lets the clinician spend less time reconstructing your history and more time planning with you.
        </div>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What to Bring With You</h2>
        <p className="leading-loose text-base mb-4">Gathering these items ahead of time can make the visit smoother:</p>
        <ul className="space-y-3 mb-4">
          {checklist.map((item) => (
            <li key={item} className="flex gap-3 leading-loose text-base">
              <Check />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="leading-loose text-base">
          If you are unsure what the practice needs, call (248) 415-2500 before your visit and ask.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Think Through Your Goals and Challenges</h2>
        <p className="leading-loose text-base mb-4">
          Before the appointment, spend a few days noticing where things are difficult. Jot down specific examples rather than general statements. Instead of &ldquo;my memory is bad,&rdquo; you might write, &ldquo;I missed two bill payments this month and lost track of conversations.&rdquo; Note what makes symptoms better or worse, such as fatigue, noise, stress or time of day.
        </p>
        <p className="leading-loose text-base">
          Then consider what you most want to regain. Goals can be practical, like cooking a meal safely, or personal, like speaking comfortably with grandchildren. There are no wrong goals, and they can change as you progress.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Questions Worth Asking</h2>
        <p className="leading-loose text-base mb-4">Bring a written list so nothing is forgotten in the moment:</p>
        <ul className="space-y-3 mb-4">
          {questions.map((q) => (
            <li key={q} className="flex gap-3 leading-loose text-base">
              <Check />
              <span>{q}</span>
            </li>
          ))}
        </ul>
        <p className="leading-loose text-base">
          Taking notes, or asking your companion to do so, helps you review the plan later. It is always fine to ask a clinician to slow down or repeat something.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Be Kind to Yourself on the Day</h2>
        <p className="leading-loose text-base">
          Rest beforehand if you can, eat something, and allow extra time to arrive. Assessments may involve questions, simple tasks and conversation, and some people feel tired afterward. Be honest about what is hard; the team is there to help, not to judge. Recovery is rarely a straight line, and a first visit is about building a foundation, not proving anything.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Taking the Next Step</h2>
        <p className="leading-loose text-base">
          If you or someone you love is facing changes in movement, thinking, communication or mood, reaching out for professional guidance is a meaningful step. Contact Irvine Neuro Rehabilitation to talk through your situation and learn how the team can support your recovery.
        </p>
      </article>

      <div className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 px-6 flex gap-6 items-start animate-fade-up">
        <div className="bg-[var(--color-light)] rounded-full w-16 h-16 shrink-0 flex items-center justify-center text-[var(--color-primary)]">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
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
              <svg className="w-8 h-8 text-[var(--color-accent)] mb-3" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
              </svg>
              <p className="font-cormorant text-2xl text-[var(--color-ink)]">Resources Hub</p>
              <p className="text-sm text-[var(--color-muted)] mt-2">Browse all patient education articles.</p>
            </a>
            <a href="/about" className="animate-fade-up block bg-white rounded-2xl p-6 border border-[var(--color-border)] hover:shadow-lg transition-shadow">
              <svg className="w-8 h-8 text-[var(--color-accent)] mb-3" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a7.5 7.5 0 0115 0" />
              </svg>
              <p className="font-cormorant text-2xl text-[var(--color-ink)]">About Our Practice</p>
              <p className="text-sm text-[var(--color-muted)] mt-2">Learn about the team behind your care.</p>
            </a>
            <a href="/contact" className="animate-fade-up block bg-white rounded-2xl p-6 border border-[var(--color-border)] hover:shadow-lg transition-shadow">
              <svg className="w-8 h-8 text-[var(--color-accent)] mb-3" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372a1.125 1.125 0 00-.852-1.091l-4.423-1.106a1.125 1.125 0 00-1.173.417l-.97 1.293a1.125 1.125 0 01-1.21.38 12.035 12.035 0 01-7.143-7.143 1.125 1.125 0 01.38-1.21l1.293-.97a1.125 1.125 0 00.417-1.173L6.963 3.102A1.125 1.125 0 005.872 2.25H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              <p className="font-cormorant text-2xl text-[var(--color-ink)]">Contact Us</p>
              <p className="text-sm text-[var(--color-muted)] mt-2">Call (248) 415-2500 or send a message.</p>
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
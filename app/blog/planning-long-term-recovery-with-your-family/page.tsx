import type { Metadata } from 'next'
import HeroBackdrop from '@/components/HeroBackdrop'

export const metadata: Metadata = {
  title: 'Planning Long-Term Recovery With Your Family',
  description: 'Learn how families can build a realistic, supportive long-term recovery plan after a brain injury or neurological event, with practical steps and tips.',
  alternates: { canonical: '/blog/planning-long-term-recovery-with-your-family' },
  openGraph: {
    title: 'Planning Long-Term Recovery With Your Family',
    description: 'Learn how families can build a realistic, supportive long-term recovery plan after a brain injury or neurological event, with practical steps and tips.',
    url: 'https://irvineneurorehabilitation.com/blog/planning-long-term-recovery-with-your-family',
    siteName: 'Irvine Neuro Rehabilitation',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Planning Long-Term Recovery With Your Family',
    description: 'Learn how families can build a realistic, supportive long-term recovery plan after a brain injury or neurological event, with practical steps and tips.',
  },
}

const tips = [
  'Write down shared goals for the next month, six months, and year, and revisit them regularly.',
  'Choose one family member to keep a notebook of appointments, medications, and questions.',
  'Plan rest into every day, for the patient and for caregivers.',
  'Celebrate small gains, such as a longer walk, a clearer sentence, or a task done independently.',
  'Ask the care team about home safety, driving, work, and school before decisions need to be made quickly.',
  'Keep talking openly about mood, frustration, and worries.',
]

export default function Page() {
  return (
    <main>
      <section className="hero-photo relative overflow-hidden bg-[var(--color-dark)] py-24 sm:py-32 text-white">
        <HeroBackdrop src="/images/stock/blog-planning-long-term-recovery-with-your-family.jpg" alt="Three family members talk together around a table on a sunny patio." />
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <nav className="text-sm text-white/70 mb-6">
            <a href="/" className="hover:text-white transition-colors">Home</a> › <a href="/blog" className="hover:text-white transition-colors">Resources</a> › Article
          </nav>
          <p className="text-xs uppercase tracking-widest text-white/70 mb-4">Patient Education</p>
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl mx-auto text-center">Planning Long-Term Recovery With Your Family</h1>
          <p className="mt-6 text-sm text-white/70">Published October 2026 · 6 min read</p>
        </div>
      </section>


      <article className="bg-white py-20 max-w-3xl mx-auto px-6">
        <p className="text-[var(--color-ink)] leading-loose text-base">
          When someone you love is living with a brain injury, stroke, or other neurological condition, the first weeks often feel like a blur of appointments and decisions. Then the pace changes. The hospital stays and urgent decisions give way to a longer question: what does the road ahead look like, and how will your family walk it together? Recovery is rarely a straight line, and it rarely belongs to one person alone. A thoughtful plan, shared by the whole family, can make the months and years ahead feel more manageable.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Why Recovery Is a Family Effort</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Neurological conditions affect more than movement, speech, or memory. They can change routines, roles, finances, and relationships. A spouse may become a caregiver, a teenager may take on new responsibilities, and a parent may need support they never needed before. Research on rehabilitation consistently shows that people with strong social support and engaged caregivers tend to participate more fully in therapy and cope better with the emotional side of recovery.
        </p>
        <p className="text-[var(--color-ink)] leading-loose text-base mt-4">
          Families also feel the strain. Caregiver stress, fatigue, and low mood are well documented, which is why a good recovery plan includes the needs of everyone involved, not only the person receiving treatment.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Start With Realistic, Shared Goals</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Goals work best when they are specific, meaningful, and set together. Rather than aiming for a vague idea of getting back to normal, consider what matters most day to day: making breakfast, communicating needs clearly, returning to a hobby, or walking safely at home. Rehabilitation professionals often break goals into short-term steps so progress is visible and motivation stays steady.
        </p>
        <p className="text-[var(--color-ink)] leading-loose text-base mt-4">
          Recovery can continue for months or years, and progress may come in bursts followed by plateaus. Expect both. A plateau does not mean the end of improvement; it often signals a time to adjust strategies or goals.
        </p>

        <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant">
          A plateau does not mean the end of improvement; it often signals a time to adjust strategies or goals.
        </div>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Build a Care Team Around Your Needs</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Long-term recovery often draws on several disciplines. Occupational therapy supports daily activities such as dressing, cooking, and returning to work. Speech therapy addresses communication, swallowing, and thinking skills. Psychiatric care and counseling can help with mood, anxiety, sleep, and adjustment, which are common after neurological events. Case management helps families coordinate services and navigate practical needs. At Irvine Neuro Rehabilitation in Southfield, MI, our team includes occupational therapy, speech therapy, psychiatry, counseling, and case management, so these areas can be considered together.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Care for the Emotional Side</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Grief, frustration, irritability, and worry are normal responses to major change, for patients and relatives alike. Depression and anxiety are common after neurological injury and are treatable. Encourage honest conversations, and do not wait for a crisis to ask for help. Counseling can give each family member a place to process feelings, and family sessions can improve communication when roles have shifted.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Practical Steps for Your Family Plan</h2>
        <ul className="space-y-3 mt-4">
          {tips.map((t) => (
            <li key={t} className="flex gap-3 text-[var(--color-ink)] leading-loose text-base">
              <svg className="w-6 h-6 shrink-0 text-[var(--color-accent)] mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
              <span>{t}</span>
            </li>
          ))}
        </ul>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Protecting Caregivers Over the Long Haul</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Caregivers who neglect their own health cannot sustain the role. Share tasks among relatives and friends, accept offers of help with specific jobs, and protect time for sleep, meals, and your own medical care. If you notice persistent exhaustion, hopelessness, or withdrawal from friends, talk with a professional. Looking after yourself is part of looking after your loved one.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">When to Reach Out for Professional Help</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          If your family is unsure where to begin, or the current plan no longer fits, a conversation with a rehabilitation team can bring clarity. Call Irvine Neuro Rehabilitation at (248) 415-2500 to talk about your questions and the support that may help your family move forward together.
        </p>
      </article>

      <section className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 px-6 flex gap-6 items-start">
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
            <a href="/blog" className="animate-fade-up block bg-white border border-[var(--color-border)] rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <p className="text-xs uppercase tracking-widest text-[var(--color-muted)] mb-2">Resources</p>
              <p className="font-cormorant text-2xl text-[var(--color-ink)]">Browse All Articles</p>
            </a>
            <a href="/services" className="animate-fade-up block bg-white border border-[var(--color-border)] rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <p className="text-xs uppercase tracking-widest text-[var(--color-muted)] mb-2">Services</p>
              <p className="font-cormorant text-2xl text-[var(--color-ink)]">Our Services</p>
            </a>
            <a href="/contact" className="animate-fade-up block bg-white border border-[var(--color-border)] rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <p className="text-xs uppercase tracking-widest text-[var(--color-muted)] mb-2">Contact</p>
              <p className="font-cormorant text-2xl text-[var(--color-ink)]">Contact Our Team</p>
            </a>
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
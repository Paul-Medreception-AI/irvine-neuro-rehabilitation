import type { Metadata } from 'next'
import SplitHero from '@/components/SplitHero'

export const metadata: Metadata = {
  title: 'How Families Can Support a Loved One in Rehabilitation',
  description: 'Practical, compassionate ways families can support a loved one through rehabilitation, from communication and routines to caregiver self-care.',
  alternates: { canonical: '/blog/how-families-can-support-a-loved-one-in-rehabilitation' },
  openGraph: {
    title: 'How Families Can Support a Loved One in Rehabilitation',
    description: 'Practical, compassionate ways families can support a loved one through rehabilitation, from communication and routines to caregiver self-care.',
    url: 'https://www.irvineneurorehabilitation.com/blog/how-families-can-support-a-loved-one-in-rehabilitation',
    siteName: 'Irvine Neuro Rehabilitation',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'How Families Can Support a Loved One in Rehabilitation',
    description: 'Practical, compassionate ways families can support a loved one through rehabilitation, from communication and routines to caregiver self-care.',
  },
}

const tips = [
  'Attend sessions when invited and ask the therapist what you can practice at home.',
  'Keep a simple notebook of questions, medications, and changes you notice.',
  'Build a predictable daily routine with rest built in.',
  'Celebrate small gains, not only big milestones.',
  'Let your loved one do what they can, even if it takes longer.',
  'Take breaks and ask other family or friends for help.',
]

const related = [
  { href: '/blog', label: 'Resources', title: 'Browse All Patient Education Articles', desc: 'Explore more guides for patients and families.' },
  { href: '/contact', label: 'Contact', title: 'Talk With Our Team', desc: 'Call (248) 415-2500 to ask about care in Southfield, MI.' },
  { href: '/blog', label: 'Resources', title: 'More Rehabilitation Resources', desc: 'Read further education on recovery and support.' },
]

export default function Page() {
  return (
    <main>
      <SplitHero src="/images/stock/blog-how-families-can-support-a-loved-one-in-rehabilitation.jpg" alt="An adult daughter reaches out a hand to help her older mother up from a sofa.">
        <div>
          <nav className="text-sm text-white/70 mb-6">
            <a href="/" className="hover:text-white transition-colors">Home</a> › <a href="/blog" className="hover:text-white transition-colors">Resources</a> › Article
          </nav>
          <p className="text-xs uppercase tracking-widest text-white/70 mb-4">Patient Education</p>
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl">How Families Can Support a Loved One in Rehabilitation</h1>
          <p className="mt-6 text-sm text-white/70">Published October 2026 · 6 min read</p>
        </div>
      </SplitHero>


      <article className="bg-white py-20 max-w-3xl mx-auto px-6">
        <p className="text-[var(--color-ink)] leading-loose text-base">When someone you love begins rehabilitation, life changes for the whole family. Appointments fill the calendar, routines shift, and you may find yourself caught between hope and worry. You want to help, but it is not always clear how. The good news is that families play a real and valuable part in recovery, and small, steady actions often matter most.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What Rehabilitation Involves</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">Rehabilitation helps a person regain skills, independence, and confidence after an injury, illness, or change in health. Depending on the need, care may include occupational therapy for daily activities, speech therapy for communication and swallowing, psychiatric care, and counseling or case management. Recovery is rarely a straight line. Good days and hard days are both a normal part of the process.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Who Is Affected</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">Rehabilitation touches more than the patient. Spouses, adult children, parents, siblings, and close friends often become part of the care circle. Many take on new roles such as driver, scheduler, advocate, or helper with daily tasks. Recognizing that these changes affect everyone helps families approach recovery as a team.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Why Family Support Matters</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">Research across stroke, brain injury, and other rehabilitation settings has consistently linked strong social support with better engagement in therapy, improved mood, and greater satisfaction with recovery. Encouragement helps a person keep going when progress feels slow. Families also notice changes in mood, memory, sleep, or energy that a therapist may not see in a short session, and sharing those observations can help the care team adjust the plan.</p>

        <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant">
          Small, steady actions often matter most.
        </div>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Communicate With Patience and Respect</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">Communication can be harder after neurological changes. Your loved one may need more time to find words, process questions, or follow a conversation. Speak in a calm, natural tone, face them, and reduce background noise. Ask one question at a time and allow pauses. Avoid finishing sentences unless asked. Treat them as the capable adult they are, even when tasks take longer than before.</p>
        <p className="text-[var(--color-ink)] leading-loose text-base mt-4">Emotional changes such as frustration, sadness, or irritability are common during recovery. They are not a reflection of your relationship. Listen without rushing to fix, and let the care team know if low mood or anxiety seems to be lasting, since treatment is available.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Practical Ways to Help</h2>
        <ul className="space-y-3 my-6">
          {tips.map((t) => (
            <li key={t} className="flex gap-3 text-[var(--color-ink)] leading-loose text-base">
              <svg className="w-6 h-6 shrink-0 text-[var(--color-accent)] mt-1" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
              <span>{t}</span>
            </li>
          ))}
        </ul>
        <p className="text-[var(--color-ink)] leading-loose text-base">Practicing therapy skills at home, in the way the therapist recommends, helps new abilities carry over into real life. Ask for clear instructions rather than guessing, and avoid pushing beyond what the team has advised.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Take Care of the Caregiver</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">Caregiver strain is well documented. Fatigue, stress, and isolation can build quietly, and a worn-out caregiver cannot support anyone for long. Eat regularly, sleep when you can, keep up your own medical care, and accept offers of help. Counseling or a support group can give you a place to share the load. Looking after yourself is part of looking after your loved one.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">When to Reach Out for Professional Help</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">If you are unsure how to help, if your loved one seems stuck, or if you notice new confusion, safety concerns, or worsening mood, speak with a healthcare professional. You do not have to figure this out alone. Irvine Neuro Rehabilitation in Southfield, MI offers specialty medical care and therapy services, and you can call (248) 415-2500 to ask questions about support for your family.</p>
      </article>

      <section className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 px-6 flex gap-6 items-start animate-fade-up">
        <div className="bg-[var(--color-light)] rounded-full w-16 h-16 shrink-0 flex items-center justify-center text-[var(--color-primary)]">
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
            {related.map((r, i) => (
              <a key={i} href={r.href} className="animate-fade-up block bg-white rounded-2xl p-6 border border-[var(--color-border)] hover:shadow-lg transition-shadow">
                <svg className="w-8 h-8 text-[var(--color-accent)] mb-4" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h10" /></svg>
                <p className="text-xs uppercase tracking-widest text-[var(--color-muted)] mb-2">{r.label}</p>
                <p className="font-cormorant text-2xl text-[var(--color-ink)] mb-2">{r.title}</p>
                <p className="text-sm text-[var(--color-muted)]">{r.desc}</p>
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
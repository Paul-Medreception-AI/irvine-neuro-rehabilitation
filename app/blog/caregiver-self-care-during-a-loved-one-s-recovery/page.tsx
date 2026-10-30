import type { Metadata } from 'next'
import SplitHero from '@/components/SplitHero'

export const metadata: Metadata = {
  title: "Caregiver Self-Care During a Loved One's Recovery",
  description: "Caring for someone in recovery is demanding. Learn practical self-care strategies to protect your health, manage stress, and avoid caregiver burnout.",
  alternates: { canonical: '/blog/caregiver-self-care-during-a-loved-one-s-recovery' },
  openGraph: {
    title: "Caregiver Self-Care During a Loved One's Recovery",
    description: "Caring for someone in recovery is demanding. Learn practical self-care strategies to protect your health, manage stress, and avoid caregiver burnout.",
    url: 'https://irvineneurorehabilitation.com/blog/caregiver-self-care-during-a-loved-one-s-recovery',
    siteName: 'Irvine Neuro Rehabilitation',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: "Caregiver Self-Care During a Loved One's Recovery",
    description: "Caring for someone in recovery is demanding. Learn practical self-care strategies to protect your health, manage stress, and avoid caregiver burnout.",
  },
}

const tips = [
  'Accept specific offers of help and give people concrete tasks, such as a meal, a ride, or an errand.',
  'Protect your sleep by keeping a regular bedtime and sharing night-time duties when possible.',
  'Keep your own medical and dental appointments, even when your schedule is full.',
  'Move your body daily, even a ten-minute walk, to ease tension and lift mood.',
  'Schedule short breaks in advance so rest is part of the plan rather than an afterthought.',
  'Stay connected with friends, family, faith communities, or a caregiver support group.',
  'Talk with a counselor or mental health professional if worry, sadness, or irritability persist.',
]

const related = [
  { title: 'Conditions We Support', href: '/conditions', text: 'Learn about the conditions that can lead to a long recovery.' },
  { title: 'Our Services', href: '/services', text: 'Explore rehabilitation and support services offered by our practice.' },
  { title: 'More Patient Education', href: '/blog', text: 'Browse all of our educational articles and resources.' },
]

function Check() {
  return (
    <svg className="w-6 h-6 shrink-0 mt-1 text-[var(--color-accent)]" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  )
}

export default function Page() {
  return (
    <main>
      <SplitHero src="/images/stock/blog-caregiver-self-care-during-a-loved-one-s-recovery.jpg" alt="A woman sits on a park bench holding a cup of tea and smiling.">
        <div>
          <nav className="text-sm text-white/70 mb-6">
            <a href="/" className="hover:text-white transition-colors">Home</a> › <a href="/blog" className="hover:text-white transition-colors">Resources</a> › Article
          </nav>
          <p className="text-xs uppercase tracking-widest text-white/70 mb-4">Patient Education</p>
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl">Caregiver Self-Care During a Loved One&apos;s Recovery</h1>
          <p className="mt-6 text-sm text-white/70">Published October 2026 · 6 min read</p>
        </div>
      </SplitHero>


      <article className="bg-white py-20 max-w-3xl mx-auto px-6">
        <p className="text-[var(--color-ink)] leading-loose text-base animate-fade-up">
          You may not remember the moment you became a caregiver. Perhaps it began with a phone call, a hospital stay, or a diagnosis that changed everything. Since then, your days have probably filled with appointments, medications, paperwork, and worry. In all of that, one person is easy to forget: you. Looking after yourself is not selfish. It is what allows you to keep showing up for the person you love.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Why Caregiver Well-Being Matters</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Recovery from a stroke, brain injury, surgery, or serious illness often unfolds over months or longer. Family members frequently take on tasks that were once handled by professionals, from helping with mobility to coordinating care. Over time, that load can wear down even the most devoted person.
        </p>
        <p className="text-[var(--color-ink)] leading-loose text-base mt-4">
          Research on family caregivers has repeatedly linked long-term caregiving with higher rates of stress, anxiety, depression, poor sleep, and physical health problems. Caregivers who feel depleted may also have less patience and energy, which can affect the care relationship itself. Taking care of yourself supports your loved one&apos;s recovery too.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Who Is Affected</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Caregivers come from every background. They are spouses, adult children, parents, siblings, and close friends. Some live with the person they support, while others manage care from a distance. Many also juggle jobs, children, or their own health conditions. Caregiving can arrive suddenly, as after an injury, or gradually, as needs increase over time. In either case, the emotional weight is real.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Recognizing the Signs of Caregiver Burnout</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Burnout builds quietly. It is a state of physical, emotional, and mental exhaustion that can develop when demands exceed resources for too long. Common signs include:
        </p>
        <ul className="my-4 space-y-2 text-[var(--color-ink)] leading-loose text-base">
          <li className="flex gap-3"><Check /><span>Constant fatigue, even after rest</span></li>
          <li className="flex gap-3"><Check /><span>Irritability, tearfulness, or feeling numb</span></li>
          <li className="flex gap-3"><Check /><span>Withdrawing from friends and activities you once enjoyed</span></li>
          <li className="flex gap-3"><Check /><span>Changes in appetite or sleep</span></li>
          <li className="flex gap-3"><Check /><span>Frequent headaches, aches, or getting sick more often</span></li>
          <li className="flex gap-3"><Check /><span>Feeling hopeless or resentful, then guilty about those feelings</span></li>
        </ul>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Mixed feelings are normal. You can love someone deeply and still feel overwhelmed. Naming those feelings honestly is a healthy first step.
        </p>

        <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant">
          Looking after yourself is not selfish.
        </blockquote>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Practical Self-Care Strategies</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Self-care does not require hours of free time. Small, consistent habits matter more than grand gestures. Consider these approaches:
        </p>
        <ul className="my-4 space-y-3 text-[var(--color-ink)] leading-loose text-base">
          {tips.map((t) => (
            <li key={t} className="flex gap-3"><Check /><span>{t}</span></li>
          ))}
        </ul>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Build a Support Team</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          No one should provide care entirely alone. Start by listing the tasks you handle each week, then decide which could be shared. Family meetings, even brief ones, can clarify who does what. Studies of caregiver interventions suggest that education, skills training, and peer support can reduce stress and improve confidence. Ask your loved one&apos;s care team about community resources, respite options, and training in safe techniques for transfers or daily activities. Therapists who work with your loved one can often show you approaches that make care easier on your body and theirs.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Care for Your Emotional Health</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Grief is common in caregiving, even when your loved one is improving. You may mourn the life you had, the plans you made, or the way things used to be. Allow space for these feelings. Journaling, mindfulness, prayer, or simply talking with someone you trust can help. If sadness, anxiety, or hopelessness lasts more than a couple of weeks, or if you have thoughts of harming yourself, contact a licensed mental health professional or a crisis line right away. Seeking help is a sign of strength.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">When to Seek Professional Help</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Recovery is a team effort, and caregivers belong on that team. If you are struggling, or you have questions about how to support your loved one&apos;s rehabilitation, reach out. Irvine Neuro Rehabilitation in Southfield, MI provides specialty medical care, and you can call us at (248) 415-2500 to ask how we may be able to help. You do not have to carry this alone.
        </p>
      </article>

      <section className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 px-6 flex gap-6 items-start animate-fade-up">
        <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center shrink-0 text-[var(--color-primary)]">
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
          <p className="text-white/80 mb-8">We are here to help.</p>
          <a href="/contact" className="inline-block bg-white text-[var(--color-primary)] px-8 py-3 rounded-full font-medium hover:bg-[var(--color-light)] transition-colors">Contact Us</a>
        </div>
      </section>
    </main>
  )
}
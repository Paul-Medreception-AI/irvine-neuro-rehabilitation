import type { Metadata } from 'next'
import SplitHero from '@/components/SplitHero'

export const metadata: Metadata = {
  title: 'Questions to Ask When Choosing a Rehabilitation Provider',
  description: 'A practical guide to the questions that help you evaluate a rehabilitation provider, from team makeup and goal setting to communication and follow-through.',
  alternates: { canonical: '/blog/questions-to-ask-when-choosing-a-rehabilitation-provider' },
  openGraph: {
    title: 'Questions to Ask When Choosing a Rehabilitation Provider',
    description: 'A practical guide to the questions that help you evaluate a rehabilitation provider, from team makeup and goal setting to communication and follow-through.',
    url: 'https://www.irvineneurorehabilitation.com/blog/questions-to-ask-when-choosing-a-rehabilitation-provider',
    siteName: 'Irvine Neuro Rehabilitation',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Questions to Ask When Choosing a Rehabilitation Provider',
    description: 'A practical guide to the questions that help you evaluate a rehabilitation provider, from team makeup and goal setting to communication and follow-through.',
  },
}

const check = (
  <svg className="w-6 h-6 shrink-0 mt-1 text-[var(--color-accent)]" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
)

const related = [
  { href: '/blog', label: 'Blog', title: 'More Patient Resources', text: 'Browse all of our patient education articles.' },
  { href: '/services', label: 'Services', title: 'Our Services', text: 'Learn about the rehabilitation services we provide.' },
  { href: '/contact', label: 'Contact', title: 'Contact Our Office', text: 'Reach out with questions about care.' },
]

export default function Page() {
  return (
    <main>
      <SplitHero src="/images/stock/blog-questions-to-ask-when-choosing-a-rehabilitation-provider.jpg" alt="Professional massage therapist performing head and neck massage on content female patient relieving sore neck tensions">
        <div>
          <nav className="text-sm text-white/70 mb-6">
            <a href="/" className="hover:text-white">Home</a> › <a href="/blog" className="hover:text-white">Resources</a> › Article
          </nav>
          <p className="text-xs uppercase tracking-widest text-white/70 mb-4">Patient Education</p>
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl">Questions to Ask When Choosing a Rehabilitation Provider</h1>
          <p className="text-white/70 mt-6 text-sm">Published October 2026 · 6 min read</p>
        </div>
      </SplitHero>


      <article className="bg-white py-20 max-w-3xl mx-auto px-6">
        <p className="text-[var(--color-ink)] leading-loose text-base">
          After an injury, illness, or diagnosis that changes how you move, speak, think, or cope, everyday life can feel unfamiliar. Recovery often depends on the people guiding it, yet most of us have never been taught how to choose them. The good news is that a handful of thoughtful questions can tell you a great deal about whether a rehabilitation provider is right for you or a loved one.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Why the Choice Matters</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Rehabilitation is not a single appointment. It is a process that unfolds over weeks or months, and it asks a lot of you: time, effort, and trust. Research on rehabilitation after conditions such as stroke and brain injury consistently shows that outcomes are shaped by how well care is matched to the individual, how consistently therapy is practiced, and how engaged the person feels in their own plan. A provider who listens and explains is more likely to help you stay engaged.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Who Needs to Think About This</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Anyone facing a neurological, cognitive, communication, or functional challenge may need rehabilitation. That includes people recovering from stroke or head injury, adults with changes in speech or swallowing, those struggling with daily tasks, and families supporting someone through emotional or behavioral changes. Caregivers often make these decisions too, and the questions below apply to them just as much.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Questions About the Team and Services</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Complex recovery rarely involves only one need. Someone healing from a brain injury may benefit from occupational therapy for daily tasks, speech therapy for communication, and counseling or psychiatric support for mood and coping. Ask how a provider brings these pieces together.
        </p>
        <ul className="my-6 space-y-3">
          <li className="flex gap-3 text-[var(--color-ink)] leading-loose">{check}<span>Which disciplines are part of your team, and how do they communicate with one another?</span></li>
          <li className="flex gap-3 text-[var(--color-ink)] leading-loose">{check}<span>Who will be my main point of contact if I have questions between visits?</span></li>
          <li className="flex gap-3 text-[var(--color-ink)] leading-loose">{check}<span>Is there support for case management and coordination with my other doctors?</span></li>
          <li className="flex gap-3 text-[var(--color-ink)] leading-loose">{check}<span>What are the credentials and licenses of the clinicians who will treat me?</span></li>
        </ul>

        <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant">
          A provider who listens and explains is more likely to help you stay engaged.
        </div>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Questions About Your Plan and Goals</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Good rehabilitation starts with a thorough evaluation and goals that matter to you, such as returning to a hobby, managing a household, or communicating clearly with family. Goals that are specific and measurable make progress easier to see.
        </p>
        <ul className="my-6 space-y-3">
          <li className="flex gap-3 text-[var(--color-ink)] leading-loose">{check}<span>How will you evaluate my needs before starting treatment?</span></li>
          <li className="flex gap-3 text-[var(--color-ink)] leading-loose">{check}<span>How are goals set, and how involved will I and my family be?</span></li>
          <li className="flex gap-3 text-[var(--color-ink)] leading-loose">{check}<span>How will we measure progress, and when will the plan be reviewed?</span></li>
          <li className="flex gap-3 text-[var(--color-ink)] leading-loose">{check}<span>What can I practice at home between sessions?</span></li>
        </ul>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Questions About Communication and Comfort</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Pay attention to how you feel when you first call or visit. Were your questions answered patiently? Did someone explain what to expect? Rehabilitation can be emotionally demanding, and a respectful, unhurried environment makes a real difference. It is also reasonable to ask how the practice involves family members and caregivers, and how it handles concerns if something is not working.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Practical Questions to Ask</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Logistics affect whether you can stick with care. Ask the office directly about scheduling, what to bring to a first visit, and what coverage or payment questions you should raise before you begin. Do not assume; confirming details early prevents surprises later.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Taking the Next Step</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          You do not need to have every answer before reaching out. Write your questions down, bring a trusted person if it helps, and expect clear, honest responses. If you are in Southfield, MI and would like to talk with Irvine Neuro Rehabilitation, you can call (248) 415-2500 or contact us through our website. Choosing a provider is the first step in your recovery, and asking questions is how you make it your own.
        </p>
      </article>

      <section className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 px-6 flex gap-6 items-start">
        <div className="bg-[var(--color-light)] rounded-full w-16 h-16 shrink-0 flex items-center justify-center text-[var(--color-primary)]">
          <svg className="w-8 h-8" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a7.5 7.5 0 0115 0" />
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
                <p className="text-xs uppercase tracking-widest text-[var(--color-muted)] mb-2">{r.label}</p>
                <h4 className="font-cormorant text-2xl text-[var(--color-primary)] mb-2">{r.title}</h4>
                <p className="text-[var(--color-ink)] text-sm leading-relaxed">{r.text}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light mb-4">Ready to Take the Next Step?</h2>
          <p className="text-white/80 mb-8">We are here to help.</p>
          <a href="/contact" className="inline-block bg-white text-[var(--color-primary)] px-8 py-3 rounded-full font-semibold hover:bg-[var(--color-light)] transition-colors">Contact Us</a>
        </div>
      </section>
    </main>
  )
}
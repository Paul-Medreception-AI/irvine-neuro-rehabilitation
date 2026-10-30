import type { Metadata } from 'next'
import SplitHero from '@/components/SplitHero'

export const metadata: Metadata = {
  title: 'What a Free Rehabilitation Consultation Includes',
  description: 'Learn what typically happens in a rehabilitation consultation, what to bring, and which questions to ask before starting therapy in Southfield, MI.',
  alternates: { canonical: '/blog/what-a-free-rehabilitation-consultation-includes' },
  openGraph: {
    title: 'What a Free Rehabilitation Consultation Includes',
    description: 'Learn what typically happens in a rehabilitation consultation, what to bring, and which questions to ask before starting therapy in Southfield, MI.',
    url: 'https://irvineneurorehabilitation.com/blog/what-a-free-rehabilitation-consultation-includes',
    siteName: 'Irvine Neuro Rehabilitation',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'What a Free Rehabilitation Consultation Includes',
    description: 'Learn what typically happens in a rehabilitation consultation, what to bring, and which questions to ask before starting therapy in Southfield, MI.',
  },
}

const tips = [
  'Bring a list of current medications and any allergies',
  'Gather recent medical records, imaging, or hospital discharge papers',
  'Write down your top three goals, such as dressing independently or speaking more clearly',
  'List questions about the process, timeline, and what to expect',
  'Consider bringing a family member or friend who knows your daily routine',
]

const related = [
  { href: '/blog', title: 'Browse All Resources', text: 'Patient education articles from Irvine Neuro Rehabilitation.' },
  { href: '/contact', title: 'Contact Our Southfield Office', text: 'Call or send a message to ask about next steps.' },
  { href: '/about', title: 'Meet Our Providers', text: 'Learn about the therapists and clinicians on our team.' },
]

export default function Page() {
  return (
    <main>
      <SplitHero src="/images/stock/blog-what-a-free-rehabilitation-consultation-includes.jpg" alt="Chiropractor demonstrating spine anatomy to a patient during consultation indoors.">
        <div>
          <nav className="text-sm text-white/70 mb-6">
            <a href="/" className="hover:text-white transition-colors">Home</a> › <a href="/blog" className="hover:text-white transition-colors">Resources</a> › Article
          </nav>
          <p className="text-xs uppercase tracking-widest text-white/70 mb-4">Patient Education</p>
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl">What a Free Rehabilitation Consultation Includes</h1>
          <p className="mt-6 text-sm text-white/70">Published October 2026 · 6 min read</p>
        </div>
      </SplitHero>


      <article className="bg-white py-20 max-w-3xl mx-auto px-6">
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Picking up the phone to ask about rehabilitation can feel like a big step. Maybe you are recovering from a stroke or brain injury, or you are supporting someone who is. You may be wondering what will be asked of you, whether you will be judged, and whether anything will actually change. A first consultation exists to answer those worries, and understanding it ahead of time can make the first conversation much easier.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What a Rehabilitation Consultation Is</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          A consultation is an introductory conversation between you and a rehabilitation team. It is not a full course of treatment. Its purpose is to help you and the practice understand whether the services are a good fit for your needs. You can describe what has changed, ask questions, and learn how therapy typically works. To confirm how a consultation is arranged at our Southfield, MI practice, call (248) 415-2500.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Who Can Benefit</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Rehabilitation supports people whose daily function has been affected by neurological injury or illness, surgery, or other medical events. Common concerns include difficulty with hand use and self-care, changes in speech, language, or swallowing, problems with memory and thinking, and emotional strain during recovery. Families and caregivers often have questions too, and they are an important part of the conversation.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What Is Usually Discussed</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          While every practice works a little differently, an initial consultation commonly covers several areas:
        </p>
        <ul className="my-6 space-y-3">
          {[
            'Your history: what happened, when, and how recovery has gone so far',
            'Your current challenges in everyday activities, communication, mood, or thinking',
            'Your goals and what matters most to you',
            'Which kinds of support, such as occupational therapy, speech therapy, psychiatry, or counseling and case management, may be relevant',
            'Practical questions about how to get started',
          ].map((t) => (
            <li key={t} className="flex gap-3 text-[var(--color-ink)] leading-loose text-base">
              <svg className="w-6 h-6 shrink-0 text-[var(--color-accent)] mt-1" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
              <span>{t}</span>
            </li>
          ))}
        </ul>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Our team includes an occupational therapist, a speech therapist, a psychiatrist who serves as medical director, and licensed counselors who provide case management and support. A consultation helps identify which of these areas fit your situation.
        </p>

        <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant">
          A consultation exists to answer those worries, and understanding it ahead of time can make the first conversation much easier.
        </div>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Why Early Conversations Matter</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Research on neuroplasticity shows that the brain can reorganize and form new connections in response to practice and repetition. Studies of stroke and brain injury recovery generally find that structured, goal-focused rehabilitation supports better functional outcomes than no therapy, and that starting sooner is often helpful. Recovery is also about more than physical skills. Mood, sleep, and stress affect how well people can participate in therapy, which is why a whole-person view is valuable. Individual results vary, and no one can promise a particular outcome.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">How to Prepare</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
          You do not need to have everything figured out. A little preparation, though, helps the conversation stay focused on you:
        </p>
        <ul className="my-6 space-y-3">
          {tips.map((t) => (
            <li key={t} className="flex gap-3 text-[var(--color-ink)] leading-loose text-base">
              <svg className="w-6 h-6 shrink-0 text-[var(--color-accent)] mt-1" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
              <span>{t}</span>
            </li>
          ))}
        </ul>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Questions Worth Asking</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Do not hold back. Ask who would be involved in your care, how goals are set, how progress is measured, and how family members can take part. Ask what practice you would do at home between sessions. If you have questions about coverage or costs, raise them directly, since those details depend on your own situation. Good rehabilitation is collaborative, and your questions help shape the plan.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Taking the Next Step</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Reaching out is not a commitment. It is a way to gather information and feel more confident about what comes next. If you or someone you love is facing changes after a neurological event, we invite you to call Irvine Neuro Rehabilitation in Southfield, MI at (248) 415-2500 or send us a message. We will listen first.
        </p>
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
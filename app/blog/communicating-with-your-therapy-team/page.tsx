import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Communicating With Your Therapy Team',
  description: 'Practical ways to talk openly with your therapy team, ask better questions, share progress and concerns, and get more from neuro rehabilitation.',
  alternates: { canonical: '/blog/communicating-with-your-therapy-team' },
  openGraph: {
    title: 'Communicating With Your Therapy Team',
    description: 'Practical ways to talk openly with your therapy team, ask better questions, share progress and concerns, and get more from neuro rehabilitation.',
    url: 'https://irvineneurorehabilitation.com/blog/communicating-with-your-therapy-team',
    siteName: 'Irvine Neuro Rehabilitation',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Communicating With Your Therapy Team',
    description: 'Practical ways to talk openly with your therapy team, ask better questions, share progress and concerns, and get more from neuro rehabilitation.',
  },
}

const tips = [
  'Write down your top three questions or concerns before each session.',
  'Describe your day-to-day experience, not only how you felt during the session.',
  'Tell your team when an exercise is too hard, too easy, painful, or confusing.',
  'Ask for instructions in writing or in a form you can review at home.',
  'Bring a family member or care partner when you want a second set of ears.',
  'Say so early if something is not working, including scheduling, goals, or medications.',
]

const related = [
  { title: 'Blog Resources Hub', desc: 'Browse all of our patient education articles.', href: '/blog' },
  { title: 'Our Services', desc: 'Learn about the care we provide.', href: '/services' },
  { title: 'Contact Our Team', desc: 'Reach out with questions about care.', href: '/contact' },
]

export default function Page() {
  return (
    <main>
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <nav className="text-sm text-white/70 mb-6">
            <a href="/" className="hover:text-white transition-colors">Home</a> › <a href="/blog" className="hover:text-white transition-colors">Resources</a> › Article
          </nav>
          <p className="text-xs uppercase tracking-widest text-white/70 mb-4">Patient Education</p>
          <h1 className="font-[family-name:var(--font-cormorant)] text-5xl font-light leading-tight max-w-3xl mx-auto text-center">Communicating With Your Therapy Team</h1>
          <p className="mt-6 text-sm text-white/70">Published October 2026 · 6 min read</p>
        </div>
      </section>

      {/* page-image:start */}
      <div className="max-w-5xl mx-auto px-6 -mt-10 relative z-10">
        <div className="w-full rounded-2xl overflow-hidden shadow-xl bg-[var(--color-light)]">
          <img src={"/images/stock/blog-communicating-with-your-therapy-team.jpg"} alt={"Doctor and patients during a consultation in a modern clinic, teamwork concept."} width={1200} height={627} loading="lazy" className="block w-full h-auto" />
        </div>
      </div>
      {/* page-image:end */}

      <article className="bg-white py-20 max-w-3xl mx-auto px-6">
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Recovery after a brain injury, stroke, or other neurological change can feel like learning a new language. There are new terms, new routines, and new people asking you questions. In the middle of it all, it is easy to nod along when you are unsure, or to stay quiet about something that is worrying you. Yet the way you talk with the people supporting your recovery can shape the care you receive every single week.
        </p>

        <h2 className="font-[family-name:var(--font-cormorant)] text-3xl text-[var(--color-ink)] mt-12 mb-4">Why Communication Matters in Rehabilitation</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Therapy is not something done to you; it is something built with you. Occupational therapy, speech therapy, counseling, case management, and psychiatric care all depend on understanding your goals, your daily challenges, and what is realistic for your life. Your therapists can observe a great deal in a session, but they cannot see your kitchen, your workday, or your nights. Only you and the people close to you can describe those.
        </p>
        <p className="text-[var(--color-ink)] leading-loose text-base mt-4">
          Research on patient engagement in healthcare has consistently linked clear, two-way communication with better understanding of treatment plans, greater satisfaction, and stronger follow-through on home programs. In rehabilitation specifically, setting goals together with patients is a widely recommended practice because people tend to work harder toward outcomes that matter to them.
        </p>

        <h2 className="font-[family-name:var(--font-cormorant)] text-3xl text-[var(--color-ink)] mt-12 mb-4">Who Benefits From Speaking Up</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Everyone does, but it is especially important for people whose conditions affect memory, attention, language, or mood. If finding words is hard, or if you tire quickly in conversation, it can feel easier to say nothing. Family members and care partners are affected too. They often notice changes that you do not, and they carry questions of their own. A good therapy team welcomes their perspective.
        </p>

        <h2 className="font-[family-name:var(--font-cormorant)] text-3xl text-[var(--color-ink)] mt-12 mb-4">Practical Ways to Communicate Better</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
          You do not need medical vocabulary to be a strong partner in your care. Plain, honest descriptions are the most useful. Consider these habits:
        </p>
        <ul className="space-y-3">
          {tips.map((t) => (
            <li key={t} className="flex gap-3 items-start text-[var(--color-ink)] leading-loose text-base">
              <svg className="w-6 h-6 shrink-0 mt-1 text-[var(--color-accent)]" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              <span>{t}</span>
            </li>
          ))}
        </ul>

        <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-[family-name:var(--font-cormorant)]">
          Therapy is not something done to you; it is something built with you.
        </div>

        <h2 className="font-[family-name:var(--font-cormorant)] text-3xl text-[var(--color-ink)] mt-12 mb-4">Asking Questions That Get Useful Answers</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Open questions often lead to the most helpful conversations. Instead of asking whether you are improving, you might ask, “What changes should I be watching for at home?” or “How will we know this strategy is working?” If a term is unfamiliar, ask for it to be explained in everyday words. A technique known as teach-back, where you repeat the plan in your own words, helps both sides confirm that nothing was lost in translation.
        </p>

        <h2 className="font-[family-name:var(--font-cormorant)] text-3xl text-[var(--color-ink)] mt-12 mb-4">Sharing the Hard Things</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Recovery is rarely a straight line. Frustration, sadness, anxiety, and fatigue are common after neurological events, and they can affect progress as much as physical or cognitive symptoms do. Telling your team about your mood, sleep, or stress is not complaining; it is giving them information they can act on. Because a team may include counseling and psychiatric support alongside therapy, concerns about emotional well-being can be raised and addressed as part of the same plan.
        </p>
        <p className="text-[var(--color-ink)] leading-loose text-base mt-4">
          If you ever feel rushed, dismissed, or confused about your plan, say so. It is reasonable to ask for more time to review something or to revisit a goal that no longer fits.
        </p>

        <h2 className="font-[family-name:var(--font-cormorant)] text-3xl text-[var(--color-ink)] mt-12 mb-4">Keeping Everyone on the Same Page</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          When several professionals support you, coordination matters. Let each person know about changes in medications, new symptoms, or appointments with other providers. A simple notebook or note on your phone, with dates, symptoms, and questions, can make every visit more productive and gives you a record of how far you have come.
        </p>

        <h2 className="font-[family-name:var(--font-cormorant)] text-3xl text-[var(--color-ink)] mt-12 mb-4">Take the Next Step</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          You deserve care in which your voice is heard. If you or someone you love is looking for support with neurological recovery, Irvine Neuro Rehabilitation in Southfield, MI is here to talk. Call us at (248) 415-2500 or reach out through our contact page to ask your questions.
        </p>
      </article>

      <section className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 px-6 flex gap-6 items-start animate-fade-up">
        <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center shrink-0 text-[var(--color-primary)]">
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
          <h3 className="font-[family-name:var(--font-cormorant)] text-3xl mb-8 text-[var(--color-ink)]">Related Resources</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {related.map((r) => (
              <a key={r.title} href={r.href} className="animate-fade-up block bg-white rounded-2xl p-6 border border-[var(--color-border)] hover:shadow-lg transition-shadow">
                <h4 className="font-[family-name:var(--font-cormorant)] text-2xl text-[var(--color-primary)] mb-2">{r.title}</h4>
                <p className="text-[var(--color-muted)]">{r.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl font-light mb-4">Ready to Take the Next Step?</h2>
          <p className="mb-8 text-white/80">We are here to help.</p>
          <a href="/contact" className="inline-block bg-[var(--color-accent)] border border-white/40 hover:bg-[var(--color-accent-dark)] transition-colors text-white px-8 py-3 rounded-full">Contact Us</a>
        </div>
      </section>
    </main>
  )
}
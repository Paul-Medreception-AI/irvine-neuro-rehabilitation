import type { Metadata } from 'next'
import SplitHero from '@/components/SplitHero'

export const metadata: Metadata = {
  title: 'Multiple Sclerosis and Rehabilitation Goals',
  description: 'Learn how rehabilitation can support people living with multiple sclerosis, and how to set realistic, meaningful goals for movement, thinking, speech, and daily life.',
  alternates: { canonical: '/blog/multiple-sclerosis-and-rehabilitation-goals' },
  openGraph: {
    title: 'Multiple Sclerosis and Rehabilitation Goals',
    description: 'Learn how rehabilitation can support people living with multiple sclerosis, and how to set realistic, meaningful goals for movement, thinking, speech, and daily life.',
    url: 'https://irvineneurorehabilitation.com/blog/multiple-sclerosis-and-rehabilitation-goals',
    siteName: 'Irvine Neuro Rehabilitation',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Multiple Sclerosis and Rehabilitation Goals',
    description: 'Learn how rehabilitation can support people living with multiple sclerosis, and how to set realistic, meaningful goals for movement, thinking, speech, and daily life.',
  },
}

const tips = [
  'Name two or three goals that matter most in your daily life, such as cooking, working, or walking with family.',
  'Break each goal into small steps you can measure over weeks, not days.',
  'Plan around fatigue by scheduling demanding tasks for your best part of the day.',
  'Revisit goals regularly, since symptoms can change and goals should change with them.',
  'Tell your care team about new symptoms, including changes in mood, memory, or swallowing.',
]

const related = [
  { title: 'Understanding Neurological Rehabilitation', href: '/blog' },
  { title: 'Occupational Therapy and Daily Living', href: '/services' },
  { title: 'Speech Therapy Resources', href: '/services' },
]

export default function Page() {
  return (
    <main>
      <SplitHero src="/images/stock/blog-multiple-sclerosis-and-rehabilitation-goals.jpg" alt="A woman assists a man with a prosthetic leg during a rehabilitation session on a yoga mat.">
        <div>
          <nav className="text-sm text-white/70 mb-6">
            <a href="/" className="hover:text-white transition-colors">Home</a> › <a href="/blog" className="hover:text-white transition-colors">Resources</a> › Article
          </nav>
          <p className="text-xs uppercase tracking-widest text-white/70 mb-4">Patient Education</p>
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl">Multiple Sclerosis and Rehabilitation Goals</h1>
          <p className="mt-6 text-sm text-white/70">Published October 2026 · 6 min read</p>
        </div>
      </SplitHero>


      <article className="bg-white py-20 max-w-3xl mx-auto px-6">
        <p className="text-[var(--color-ink)] leading-loose text-base">
          A multiple sclerosis diagnosis can change how you picture the future. Questions come quickly: Will I keep working? Will walking get harder? Will my thinking stay sharp? While MS is unpredictable, rehabilitation gives you something steady to hold onto: a plan built around what matters most to you.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What Multiple Sclerosis Is</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Multiple sclerosis is a chronic condition of the central nervous system. The immune system mistakenly attacks myelin, the protective coating around nerve fibers in the brain and spinal cord. When myelin is damaged, messages between the brain and body slow down or become disrupted. This can produce a wide range of symptoms, and no two people experience MS in exactly the same way.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Who It Affects and How It Shows Up</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          MS is most often diagnosed in young and middle-aged adults, and it is diagnosed more often in women than in men. Common symptoms include:
        </p>
        <ul className="my-4 space-y-2 text-[var(--color-ink)] leading-loose text-base list-disc pl-6">
          <li>Fatigue that is out of proportion to activity</li>
          <li>Weakness, stiffness, or spasticity</li>
          <li>Balance problems and difficulty walking</li>
          <li>Numbness, tingling, or pain</li>
          <li>Vision changes</li>
          <li>Difficulty with memory, attention, or planning</li>
          <li>Changes in speech or swallowing</li>
          <li>Mood changes, including depression and anxiety</li>
        </ul>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Some people have relapses followed by periods of recovery, while others experience gradual progression. Because the course varies, rehabilitation needs to be flexible.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Why Rehabilitation Matters</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Medications can help modify the course of MS, but they do not address every day-to-day challenge. Rehabilitation focuses on function: how you move, communicate, think, and carry out the activities that make up your life.
        </p>
        <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant animate-fade-up">
          Rehabilitation focuses on function: how you move, communicate, think, and carry out the activities that make up your life.
        </div>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Research reviews have found that exercise and structured rehabilitation can help with fatigue, walking, balance, and quality of life for many people with MS. Past advice often urged rest and avoiding exertion, but current thinking encourages appropriate, individualized activity.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Common Rehabilitation Goals</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Good goals are specific, personal, and realistic. They often fall into a few areas:
        </p>
        <ul className="my-4 space-y-2 text-[var(--color-ink)] leading-loose text-base list-disc pl-6">
          <li><strong>Daily living:</strong> Occupational therapy can help with energy conservation, adapting tasks, hand function, and organizing routines so you can keep doing what you value.</li>
          <li><strong>Communication and swallowing:</strong> Speech therapy can address slurred speech, voice strength, word-finding, and safe eating and drinking.</li>
          <li><strong>Thinking skills:</strong> Cognitive strategies can support memory, attention, and planning, which are affected in many people with MS.</li>
          <li><strong>Emotional well-being:</strong> Counseling and psychiatric care can help with the stress of living with a chronic condition, as well as depression and anxiety.</li>
          <li><strong>Coordination of care:</strong> Case management can help connect services and keep your plan organized.</li>
        </ul>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Practical Steps for Setting Goals</h2>
        <ul className="my-4 space-y-3">
          {tips.map((t) => (
            <li key={t} className="flex gap-3 text-[var(--color-ink)] leading-loose text-base">
              <svg className="w-6 h-6 shrink-0 text-[var(--color-accent)] mt-1" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
              <span>{t}</span>
            </li>
          ))}
        </ul>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Living With Change</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Progress with MS does not always look like a straight line. A good week may be followed by a hard one, and that does not mean you have failed. Goals can focus on maintaining abilities, preventing complications, and adapting with confidence, not only on regaining what was lost. Family members and caregivers can be part of the process too, by joining conversations about goals and learning strategies that support independence.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Take the Next Step</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          If MS is affecting your daily life, you do not have to sort it out alone. Irvine Neuro Rehabilitation in Southfield, MI offers occupational therapy, speech therapy, psychiatric care, counseling, and case management. Call (248) 415-2500 to talk about what support might fit your goals.
        </p>
      </article>

      <section className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 px-6 flex gap-6 items-start animate-fade-up">
        <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center shrink-0 text-[var(--color-primary)]">
          <svg className="w-8 h-8" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6.75a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a7.5 7.5 0 0115 0" /></svg>
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
              <svg className="w-8 h-8 text-[var(--color-accent)] mb-4" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75v12m0-12C10.5 5.25 8 4.5 5 4.5v12c3 0 5.5.75 7 2.25m0-12c1.5-1.5 4-2.25 7-2.25v12c-3 0-5.5.75-7 2.25" /></svg>
              <p className="font-cormorant text-2xl text-[var(--color-ink)]">{r.title}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light mb-4">Ready to Take the Next Step?</h2>
          <p className="mb-8 text-white/80">We are here to help.</p>
          <a href="/contact" className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] border border-white/40 text-white px-8 py-3 rounded-full transition-colors">Contact Us</a>
        </div>
      </section>
    </main>
  )
}
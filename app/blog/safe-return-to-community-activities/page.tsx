import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Safe Return to Community Activities | Irvine Neuro Rehab',
  description: 'How to return to work, driving, shopping and social life after a brain injury or neurological illness, with practical pacing tips and safety planning.',
  alternates: { canonical: '/blog/safe-return-to-community-activities' },
  openGraph: {
    title: 'Safe Return to Community Activities | Irvine Neuro Rehab',
    description: 'How to return to work, driving, shopping and social life after a brain injury or neurological illness, with practical pacing tips and safety planning.',
    url: 'https://irvineneurorehabilitation.com/blog/safe-return-to-community-activities',
    siteName: 'Irvine Neuro Rehabilitation',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Safe Return to Community Activities | Irvine Neuro Rehab',
    description: 'How to return to work, driving, shopping and social life after a brain injury or neurological illness, with practical pacing tips and safety planning.',
  },
}

const tips = [
  'Start with short, familiar outings and add time or complexity gradually.',
  'Plan rest breaks before you need them, not after you are exhausted.',
  'Bring a written list of your plans, medications and emergency contacts.',
  'Choose quieter times of day to limit noise, crowds and sensory overload.',
  'Tell a trusted person where you are going and when you expect to return.',
  'Review each outing afterward: what went well, what was hard, what to adjust.',
]

const related = [
  { href: '/blog', title: 'Resources Hub', text: 'Browse all patient education articles from Irvine Neuro Rehabilitation.' },
  { href: '/services', title: 'Our Services', text: 'Learn about the rehabilitation and support services we offer.' },
  { href: '/contact', title: 'Contact Our Team', text: 'Call or write to talk through your questions and next steps.' },
]

export default function Page() {
  return (
    <main>
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <nav className="text-sm text-white/70 mb-6">
            <a href="/" className="hover:text-white transition-colors">Home</a> › <a href="/blog" className="hover:text-white transition-colors">Resources</a> › Article
          </nav>
          <p className="text-xs uppercase tracking-widest text-white/70 mb-4">Patient Education</p>
          <h1 className="font-[Cormorant,serif] text-5xl font-light leading-tight max-w-3xl mx-auto text-center">Safe Return to Community Activities</h1>
          <p className="mt-6 text-sm text-white/70">Published October 2026 · 6 min read</p>
        </div>
      </section>

      {/* page-image:start */}
      <div className="max-w-5xl mx-auto px-6 -mt-10 relative z-10">
        <div className="w-full rounded-2xl overflow-hidden shadow-xl bg-[var(--color-light)]">
          <img src={"/images/stock/blog-safe-return-to-community-activities.jpg"} alt={"A contactless temperature check being conducted in an indoor classroom setting for safety measures."} width={1200} height={627} loading="lazy" className="block w-full h-auto" />
        </div>
      </div>
      {/* page-image:end */}

      <article className="bg-white py-20 max-w-3xl mx-auto px-6 text-[var(--color-ink)]">
        <p className="leading-loose text-base">
          After weeks or months focused on recovery, the world outside your front door can feel both inviting and intimidating. A trip to the grocery store, a family dinner or a first day back at work may once have been routine. Now each one raises questions: Will I tire quickly? Will I be overwhelmed? Can I trust myself to stay safe? These worries are normal, and with a thoughtful plan, they can be met step by step.
        </p>

        <h2 className="font-[Cormorant,serif] text-3xl text-[var(--color-ink)] mt-12 mb-4">What a Safe Return Means</h2>
        <p className="leading-loose text-base">
          Returning to community activities means gradually resuming the places, roles and routines that give life meaning, including shopping, attending worship, visiting friends, volunteering, working, studying and traveling. The word &ldquo;safe&rdquo; matters. The goal is not simply to get out, but to participate in a way that protects your health, builds confidence and respects your current abilities.
        </p>

        <h2 className="font-[Cormorant,serif] text-3xl text-[var(--color-ink)] mt-12 mb-4">Who Is Affected</h2>
        <p className="leading-loose text-base">
          Many people face this transition: those recovering from traumatic brain injury or concussion, stroke, or other neurological conditions, as well as people managing changes in thinking, communication, mood or daily function. Family members and caregivers are affected too, often wondering how much to help and when to step back.
        </p>

        <h2 className="font-[Cormorant,serif] text-3xl text-[var(--color-ink)] mt-12 mb-4">Why It Matters</h2>
        <p className="leading-loose text-base">
          Staying connected to community life supports mood, purpose and identity. Research on rehabilitation after brain injury and stroke consistently links social participation with better quality of life and lower rates of depression and isolation. At the same time, rushing back can cause setbacks. Fatigue, difficulty filtering noise, slowed processing and trouble with attention or memory can make busy settings risky or discouraging when demands exceed current capacity.
        </p>

        <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-[Cormorant,serif]">
          The goal is not simply to get out, but to participate in a way that protects your health, builds confidence and respects your current abilities.
        </blockquote>

        <h2 className="font-[Cormorant,serif] text-3xl text-[var(--color-ink)] mt-12 mb-4">What the Evidence Suggests</h2>
        <p className="leading-loose text-base">
          Rehabilitation research supports graded, goal-based re-engagement. Rather than waiting until you feel fully recovered, therapy teams commonly help people practice real-life tasks in increasing steps. Occupational therapy can address energy management, sensory tolerance, routines and home or community safety. Speech therapy can support communication, memory strategies and conversation in busy settings. Counseling and case management can help with worry, adjustment, resources and planning. Practicing skills in the settings where they will be used tends to carry over better than practicing in isolation.
        </p>

        <h2 className="font-[Cormorant,serif] text-3xl text-[var(--color-ink)] mt-12 mb-4">Practical Steps for Getting Started</h2>
        <p className="leading-loose text-base mb-4">
          Small, repeatable successes build confidence faster than a single ambitious outing. Consider these strategies:
        </p>
        <ul className="space-y-3">
          {tips.map((t) => (
            <li key={t} className="flex gap-3 items-start leading-loose text-base">
              <svg className="w-6 h-6 shrink-0 mt-1 text-[var(--color-accent)]" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              <span>{t}</span>
            </li>
          ))}
        </ul>

        <h2 className="font-[Cormorant,serif] text-3xl text-[var(--color-ink)] mt-12 mb-4">Driving, Work and Safety Questions</h2>
        <p className="leading-loose text-base">
          Some activities carry higher risk and deserve a professional opinion before you resume them. Driving is the most common example, since it depends on attention, reaction time, vision and judgment. Ask your physician or rehabilitation team whether an evaluation is appropriate before getting behind the wheel. A return to work often works best as a phased plan, with shorter hours, lighter duties and workplace adjustments, rather than an all-or-nothing change. Open conversations with employers, teachers and family help everyone set realistic expectations.
        </p>

        <h2 className="font-[Cormorant,serif] text-3xl text-[var(--color-ink)] mt-12 mb-4">Listening to Warning Signs</h2>
        <p className="leading-loose text-base">
          Increased headaches, confusion, irritability, unusual exhaustion, dizziness or worsening mood after an outing are signals to slow down and talk with your care team. Sudden or severe symptoms, such as new weakness, trouble speaking or a severe headache, need urgent medical attention. Setbacks are not failures. They are information that helps your team fine-tune the plan.
        </p>

        <h2 className="font-[Cormorant,serif] text-3xl text-[var(--color-ink)] mt-12 mb-4">Getting Support</h2>
        <p className="leading-loose text-base">
          You do not have to figure this out alone. Irvine Neuro Rehabilitation in Southfield, MI offers specialty medical care and rehabilitation support, with providers in occupational therapy, speech therapy, psychiatry, case management and counseling. If you or someone you love is preparing to return to community life, call us at (248) 415-2500 or reach out through our contact page to talk about your goals and next steps.
        </p>
      </article>

      <section className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 mx-6 flex gap-6 items-start">
        <div className="bg-[var(--color-light)] rounded-full w-16 h-16 shrink-0 flex items-center justify-center text-[var(--color-primary)]">
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
          <h3 className="font-[Cormorant,serif] text-3xl mb-8 text-[var(--color-ink)]">Related Resources</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {related.map((r) => (
              <a key={r.href} href={r.href} className="animate-fade-up block bg-white rounded-2xl p-6 border border-[var(--color-border)] hover:shadow-lg transition-shadow">
                <h4 className="font-[Cormorant,serif] text-2xl text-[var(--color-primary)] mb-2">{r.title}</h4>
                <p className="text-[var(--color-muted)] leading-relaxed">{r.text}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-[Cormorant,serif] text-4xl font-light mb-4">Ready to Take the Next Step?</h2>
          <p className="mb-8 text-white/80">We are here to help.</p>
          <a href="/contact" className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] border border-white/40 text-white px-8 py-3 rounded-full transition-colors">Contact Us</a>
        </div>
      </section>
    </main>
  )
}
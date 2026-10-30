import type { Metadata } from 'next'
import HeroBackdrop from '@/components/HeroBackdrop'

export const metadata: Metadata = {
  title: 'Life After Stroke: Rebuilding Skills at Home',
  description: 'Practical, evidence-based ways to support stroke recovery at home, from daily routines and safety to speech, movement and emotional health.',
  alternates: { canonical: '/blog/life-after-stroke-rebuilding-skills-at-home' },
  openGraph: {
    title: 'Life After Stroke: Rebuilding Skills at Home',
    description: 'Practical, evidence-based ways to support stroke recovery at home, from daily routines and safety to speech, movement and emotional health.',
    url: 'https://irvineneurorehabilitation.com/blog/life-after-stroke-rebuilding-skills-at-home',
    siteName: 'Irvine Neuro Rehabilitation',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Life After Stroke: Rebuilding Skills at Home',
    description: 'Practical, evidence-based ways to support stroke recovery at home, from daily routines and safety to speech, movement and emotional health.',
  },
}

const check = (
  <svg className="w-6 h-6 shrink-0 mt-1 text-[var(--color-accent)]" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
)

const related = [
  { href: '/blog', label: 'Resources', title: 'More Patient Education Articles', text: 'Browse all of our educational articles on neurological recovery and rehabilitation.' },
  { href: '/services', label: 'Services', title: 'Our Rehabilitation Services', text: 'Learn about the therapy and care services we offer in Southfield, MI.' },
  { href: '/contact', label: 'Contact', title: 'Talk With Our Team', text: 'Reach out to ask questions about recovery support and next steps.' },
]

export default function Page() {
  return (
    <main>
      <section className="hero-photo relative overflow-hidden bg-[var(--color-dark)] py-24 sm:py-32 text-white">
        <HeroBackdrop src="/images/stock/blog-life-after-stroke-rebuilding-skills-at-home.jpg" alt="A caregiver talks with an older woman holding forearm crutches in her kitchen." />
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <nav className="text-sm text-white/70 mb-6">
            <a href="/" className="hover:text-white transition-colors">Home</a> › <a href="/blog" className="hover:text-white transition-colors">Resources</a> › Article
          </nav>
          <p className="text-xs uppercase tracking-widest text-white/70 mb-4">Patient Education</p>
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl mx-auto text-center">Life After Stroke: Rebuilding Skills at Home</h1>
          <p className="mt-6 text-sm text-white/70">Published October 2026 · 6 min read</p>
        </div>
      </section>


      <article className="bg-white py-20 max-w-3xl mx-auto px-6 text-[var(--color-ink)] leading-loose text-base">
        <p className="mb-6">The first weeks after a stroke are often filled with appointments, hospital staff and urgent decisions. Then comes a quieter moment: you or someone you love is home, and the everyday tasks that once felt automatic, like buttoning a shirt, finding a word or climbing a step, now take real effort. That moment can feel overwhelming. It is also where much of recovery happens.</p>
        <p className="mb-6">This article explains how stroke affects daily skills, what research says about recovery, and practical ways to support progress at home alongside professional care.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What a Stroke Changes</h2>
        <p className="mb-6">A stroke occurs when blood flow to part of the brain is interrupted, either by a blockage or by bleeding. Brain cells in the affected area are injured, and the skills they supported can be disrupted. Which skills are affected depends on the location and size of the stroke.</p>
        <p className="mb-6">Common changes include weakness or paralysis on one side of the body, difficulty with balance and coordination, trouble speaking or understanding language, swallowing problems, changes in memory and attention, and shifts in mood. Stroke can affect adults of any age, though risk rises with age, high blood pressure, diabetes, smoking and heart rhythm conditions.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Why Recovery Is Possible</h2>
        <p className="mb-6">The brain has a capacity called neuroplasticity: the ability to form new connections and reorganize how tasks are handled. Research in stroke rehabilitation consistently shows that repeated, purposeful practice of a skill helps the brain rebuild pathways. Recovery is often fastest in the early months, but many people continue to make gains well beyond that period.</p>
        <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant">
          Repeated, purposeful practice of a skill helps the brain rebuild pathways.
        </blockquote>
        <p className="mb-6">The key words are repeated and purposeful. Practice that is meaningful, such as making a sandwich or writing a grocery list, tends to carry over into real life better than isolated exercises with no clear goal.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Rebuilding Daily Living Skills</h2>
        <p className="mb-6">Occupational therapy focuses on the activities that make up a person&apos;s day: dressing, bathing, cooking, managing medications and returning to hobbies or work. A therapist can suggest techniques and adaptive tools, then help you practice them until they become more natural. At home, small adjustments can make practice safer and more productive.</p>
        <ul className="space-y-3 mb-6">
          {[
            'Break tasks into small steps and practice one step at a time.',
            'Set up your space so frequently used items are within easy reach.',
            'Remove loose rugs, add good lighting and consider grab bars in the bathroom.',
            'Allow extra time rather than rushing, which raises frustration and fall risk.',
            'Use the weaker side during safe activities as your therapist advises.',
          ].map((t) => (
            <li key={t} className="flex gap-3">{check}<span>{t}</span></li>
          ))}
        </ul>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Communication and Swallowing</h2>
        <p className="mb-6">Aphasia, a language disorder caused by stroke, can affect speaking, understanding, reading and writing, even though intelligence is usually intact. Speech therapy addresses these difficulties and also helps with swallowing problems, which matter for nutrition and for preventing choking.</p>
        <p className="mb-6">Family members can help by speaking in short, clear sentences, giving the person time to respond, reducing background noise and not finishing every sentence for them. Gestures, writing and pictures can all support conversation. If swallowing seems difficult, such as coughing during meals, tell a clinician promptly.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Caring for Mood and Thinking</h2>
        <p className="mb-6">Depression and anxiety are common after stroke, and they are medical issues rather than signs of weakness. Fatigue, grief over lost abilities and changes in the brain itself can all play a part. Memory, attention and planning may also feel different. Counseling, psychiatric care and case management can help people and families cope and coordinate the many parts of recovery.</p>
        <ul className="space-y-3 mb-6">
          {[
            'Keep a simple daily routine with regular sleep, meals and movement.',
            'Use calendars, alarms and checklists to support memory.',
            'Stay connected with friends, family or support groups.',
            'Celebrate small gains; progress is often gradual.',
            'Tell your care team about persistent sadness, worry or loss of interest.',
          ].map((t) => (
            <li key={t} className="flex gap-3">{check}<span>{t}</span></li>
          ))}
        </ul>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Support for Caregivers</h2>
        <p className="mb-6">Caregivers are part of the recovery team, and their wellbeing matters. Accept help, take breaks and learn the exercises and strategies therapists recommend so practice at home stays consistent and safe. Know the warning signs of a new stroke, such as sudden face drooping, arm weakness or speech difficulty, and call 911 immediately if they appear.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">When to Seek Professional Help</h2>
        <p className="mb-6">Home practice works best when guided by professionals who can tailor goals to your needs and adjust as you improve. At Irvine Neuro Rehabilitation in Southfield, MI, our team includes occupational therapy, speech therapy, psychiatry and counseling and case management professionals. If you have questions about rebuilding skills after a stroke, call us at (248) 415-2500 or reach out through our contact page.</p>
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
          <h3 className="font-cormorant text-3xl mb-8 text-[var(--color-ink)]">Related Resources</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {related.map((r) => (
              <a key={r.href} href={r.href} className="animate-fade-up block bg-white border border-[var(--color-border)] rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <p className="text-xs uppercase tracking-widest text-[var(--color-muted)] mb-2">{r.label}</p>
                <h4 className="font-cormorant text-2xl text-[var(--color-primary)] mb-2">{r.title}</h4>
                <p className="text-[var(--color-ink)]">{r.text}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6 animate-fade-up">
          <h2 className="font-cormorant text-4xl font-light mb-4">Ready to Take the Next Step?</h2>
          <p className="mb-8 text-white/80">We are here to help.</p>
          <a href="/contact" className="inline-block bg-white text-[var(--color-primary)] px-8 py-3 rounded-full font-medium hover:bg-[var(--color-light)] transition-colors">Contact Us</a>
        </div>
      </section>
    </main>
  )
}
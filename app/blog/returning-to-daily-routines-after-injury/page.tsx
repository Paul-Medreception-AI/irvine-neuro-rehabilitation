import type { Metadata } from 'next'
import SplitHero from '@/components/SplitHero'

export const metadata: Metadata = {
  title: 'Returning to Daily Routines After Injury',
  description: 'Practical, evidence-based guidance for rebuilding daily routines after an injury, from pacing and sleep to work, mood, and when to seek professional help.',
  alternates: { canonical: '/blog/returning-to-daily-routines-after-injury' },
  openGraph: {
    title: 'Returning to Daily Routines After Injury',
    description: 'Practical, evidence-based guidance for rebuilding daily routines after an injury, from pacing and sleep to work, mood, and when to seek professional help.',
    url: 'https://irvineneurorehabilitation.com/blog/returning-to-daily-routines-after-injury',
    siteName: 'Irvine Neuro Rehabilitation',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Returning to Daily Routines After Injury',
    description: 'Practical, evidence-based guidance for rebuilding daily routines after an injury, from pacing and sleep to work, mood, and when to seek professional help.',
  },
}

const tips = [
  'Start with one or two routines that matter most, such as dressing, meals, or a short walk.',
  'Break tasks into small steps and rest between them before you feel exhausted.',
  'Keep a consistent wake time and bedtime to support healing and mood.',
  'Use written schedules, phone alarms, and checklists to reduce mental load.',
  'Track symptoms so you can see patterns and share them with your care team.',
  'Celebrate small gains rather than comparing yourself to your pre-injury self.',
]

const related = [
  { href: '/blog', label: 'Resources', title: 'Browse All Patient Education Articles', text: 'Explore more guidance on recovery, rehabilitation, and everyday wellbeing.' },
  { href: '/services', label: 'Services', title: 'Our Rehabilitation Services', text: 'Learn about the types of care available to support your recovery.' },
  { href: '/contact', label: 'Contact', title: 'Talk With Our Team', text: 'Reach out to ask questions about next steps in your recovery.' },
]

export default function Page() {
  return (
    <main>
      <SplitHero src="/images/stock/blog-returning-to-daily-routines-after-injury.jpg" alt="A smiling older woman sifts flour into a bowl in her kitchen.">
        <div>
          <nav className="text-sm text-white/70 mb-6">
            <a href="/" className="hover:text-white transition-colors">Home</a> › <a href="/blog" className="hover:text-white transition-colors">Resources</a> › Article
          </nav>
          <p className="text-xs uppercase tracking-widest text-white/70 mb-4">Patient Education</p>
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl">Returning to Daily Routines After Injury</h1>
          <p className="mt-6 text-sm text-white/70">Published October 2026 · 6 min read</p>
        </div>
      </SplitHero>


      <article className="bg-white py-20 max-w-3xl mx-auto px-6 text-[var(--color-ink)] leading-loose text-base">
        <p>One day you are moving through your morning without a second thought. The next, a simple shower, a drive to work, or a conversation at the dinner table feels like a mountain. An injury does not only affect the body part that was hurt. It can disrupt sleep, energy, thinking, mood, and the small habits that make a day feel like your own. If that sounds familiar, you are not alone, and rebuilding is possible.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Why Routines Matter in Recovery</h2>
        <p>Daily routines give the brain and body structure. Regular activity, meals, rest, and social contact help regulate sleep cycles, stress levels, and mood. After an injury, that structure often falls apart, and the loss can slow recovery in its own right. Rehabilitation research consistently supports gradual return to meaningful activity as part of healing, rather than prolonged inactivity, which can lead to deconditioning, low mood, and fear of movement.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Who This Affects</h2>
        <p>Almost anyone can face this challenge: people recovering from falls, car accidents, sports injuries, workplace injuries, or injuries involving the head and nervous system. Older adults, caregivers, students, and working parents each face different demands, but the common thread is the same. The activities that once felt automatic now require planning and effort.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">The Hidden Effects Beyond Pain</h2>
        <p>Pain and limited movement are the obvious problems. Less visible effects are often just as disruptive:</p>
        <ul className="my-4 space-y-2 list-none pl-0">
          <li>Fatigue that does not match how much you have done.</li>
          <li>Difficulty with attention, memory, or organizing tasks.</li>
          <li>Trouble finding words or following fast conversations.</li>
          <li>Anxiety, irritability, sadness, or loss of confidence.</li>
          <li>Disrupted sleep that makes every other symptom harder.</li>
        </ul>
        <p>These changes are common and are not a sign of weakness. They are also worth mentioning to a clinician, because they often respond to targeted support.</p>

        <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant">
          Recovery is rarely a straight line, and progress is often measured in small, repeatable steps.
        </div>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Practical Steps for Rebuilding Your Day</h2>
        <p>A gradual, paced approach tends to work better than pushing hard on good days and crashing on bad ones. Consider these strategies:</p>
        <ul className="my-6 space-y-3 list-none pl-0">
          {tips.map((t) => (
            <li key={t} className="flex gap-3 items-start animate-fade-up">
              <svg className="w-6 h-6 shrink-0 text-[var(--color-accent)]" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
              <span>{t}</span>
            </li>
          ))}
        </ul>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Returning to Work, Driving, and Social Life</h2>
        <p>Larger goals deserve their own plan. For work, it can help to discuss a phased return, with shorter days, scheduled breaks, or modified duties. For driving, make sure your clinician agrees that your vision, reaction time, attention, and strength are ready. For social life, begin with brief, low-stimulation gatherings and let people know you may need to leave early. Choosing what matters most to you gives the effort a purpose.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">How Rehabilitation Professionals Can Help</h2>
        <p>Different specialists support different parts of everyday life. Occupational therapy focuses on relearning and adapting daily tasks such as self-care, home management, and work activities. Speech therapy addresses communication, memory, and thinking skills. Mental health professionals, including psychiatrists and licensed counselors, can help with mood, anxiety, sleep, and adjustment to change. Case management can help coordinate these pieces so that care feels less overwhelming.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">When to Seek Help</h2>
        <p>Reach out to a healthcare professional if symptoms are getting worse, if you cannot manage basic tasks safely, if your mood is low for more than a couple of weeks, or if you have thoughts of harming yourself. In an emergency, call 911 or your local emergency number right away.</p>
        <p className="mt-4">You do not have to figure out recovery alone. If an injury has changed your daily life, Irvine Neuro Rehabilitation in Southfield, MI can be reached at (248) 415-2500 to discuss your questions and possible next steps.</p>
      </article>

      <div className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 px-6 flex gap-6 items-start animate-fade-up">
        <div className="bg-[var(--color-light)] rounded-full w-16 h-16 shrink-0 flex items-center justify-center text-[var(--color-primary)]">
          <svg className="w-8 h-8" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a7.5 7.5 0 0115 0" /></svg>
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
          <p className="mb-8 text-white/80">We are here to help.</p>
          <a href="/contact" className="inline-block bg-white text-[var(--color-primary)] px-8 py-3 rounded-full font-medium hover:bg-[var(--color-light)] transition-colors">Contact Us</a>
        </div>
      </section>
    </main>
  )
}
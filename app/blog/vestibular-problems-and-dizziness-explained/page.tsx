import type { Metadata } from 'next'
import SplitHero from '@/components/SplitHero'

export const metadata: Metadata = {
  title: 'Vestibular Problems and Dizziness Explained',
  description: 'Learn what causes vestibular problems and dizziness, common symptoms, how they are evaluated, and how rehabilitation may help you regain balance.',
  alternates: { canonical: '/blog/vestibular-problems-and-dizziness-explained' },
  openGraph: {
    title: 'Vestibular Problems and Dizziness Explained',
    description: 'Learn what causes vestibular problems and dizziness, common symptoms, how they are evaluated, and how rehabilitation may help you regain balance.',
    url: 'https://www.irvineneurorehabilitation.com/blog/vestibular-problems-and-dizziness-explained',
    siteName: 'Irvine Neuro Rehabilitation',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Vestibular Problems and Dizziness Explained',
    description: 'Learn what causes vestibular problems and dizziness, common symptoms, how they are evaluated, and how rehabilitation may help you regain balance.',
  },
}

const check = (
  <svg className="w-6 h-6 shrink-0 mt-1 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
)

export default function Page() {
  return (
    <main>
      <SplitHero src="/images/stock/blog-vestibular-problems-and-dizziness-explained.jpg" alt="A therapist places a hand on a woman's head to guide her head position.">
        <div>
          <nav className="text-sm text-white/70 mb-6">
            <a href="/" className="hover:text-white transition-colors">Home</a> › <a href="/blog" className="hover:text-white transition-colors">Resources</a> › Article
          </nav>
          <p className="text-xs uppercase tracking-widest text-white/70 mb-4">Patient Education</p>
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl">Vestibular Problems and Dizziness Explained</h1>
          <p className="mt-6 text-sm text-white/70">Published October 2026 · 6 min read</p>
        </div>
      </SplitHero>


      <article className="bg-white py-20 max-w-3xl mx-auto px-6 text-[var(--color-ink)] leading-loose text-base">
        <p className="animate-fade-up">The room tilts when you roll over in bed. The floor seems to sway while you stand in line at the store. You reach for a wall without knowing why. Dizziness can make ordinary life feel unpredictable and frightening, and it is easy to feel dismissed when the cause is not obvious. The good news is that many dizziness problems come from the vestibular system, and many of them can be identified and treated.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What Is the Vestibular System?</h2>
        <p>The vestibular system is your body's balance and spatial orientation network. It includes the inner ear structures, the semicircular canals and otolith organs, along with the vestibular nerve and areas of the brain that process movement signals. These parts work with your eyes and the sensors in your muscles and joints to tell your brain where your head is and how it is moving.</p>
        <p className="mt-4">When all of these signals agree, you move through the world without thinking about it. When one part sends faulty or mismatched information, the brain receives conflicting messages, and the result is often dizziness, vertigo, or unsteadiness.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Dizziness vs. Vertigo</h2>
        <p>People use the word dizzy to describe very different sensations. Vertigo is a false feeling that you or your surroundings are spinning or moving. Lightheadedness feels like you might faint. Disequilibrium is a sense of being off balance when standing or walking. Describing exactly what you feel, and when, helps clinicians narrow down the cause.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Common Vestibular Conditions</h2>
        <ul className="space-y-3">
          <li className="flex gap-3">{check}<span><strong>Benign paroxysmal positional vertigo (BPPV):</strong> brief spinning triggered by position changes, such as rolling over or looking up, caused by small crystals displaced within the inner ear canals.</span></li>
          <li className="flex gap-3">{check}<span><strong>Vestibular neuritis and labyrinthitis:</strong> inflammation of the vestibular nerve or inner ear, often following a viral illness, causing intense vertigo that may last days.</span></li>
          <li className="flex gap-3">{check}<span><strong>Meniere's disease:</strong> episodes of vertigo along with ear fullness, ringing, and fluctuating hearing loss.</span></li>
          <li className="flex gap-3">{check}<span><strong>Vestibular migraine:</strong> dizziness linked to migraine, sometimes without a headache.</span></li>
          <li className="flex gap-3">{check}<span><strong>Concussion-related dizziness:</strong> balance and visual-motion problems that can follow a head injury.</span></li>
        </ul>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Who Is Affected?</h2>
        <p>Vestibular problems can occur at any age, though they become more common as we get older. Research suggests that a substantial share of adults will experience dizziness or balance trouble at some point, and it is a leading contributor to falls in older adults. People recovering from concussion, stroke, or other neurological conditions may also have vestibular involvement.</p>

        <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant">
          The brain is remarkably adaptable, and vestibular rehabilitation is designed to take advantage of that ability.
        </div>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Why It Matters</h2>
        <p>Untreated dizziness rarely stays just a physical symptom. People often begin avoiding driving, work tasks, crowds, or exercise out of fear of an episode. Reduced activity can weaken balance further, and anxiety about falling can deepen the cycle. Persistent dizziness is also associated with difficulty concentrating, fatigue, and low mood. Addressing it early can protect independence and confidence.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What the Evidence Says About Treatment</h2>
        <p>Vestibular rehabilitation therapy is an exercise-based approach supported by clinical research for many forms of chronic dizziness and imbalance. It uses gaze stabilization, balance training, and graded exposure to movement to help the brain compensate for inner ear or neurological changes. For BPPV, specific repositioning maneuvers performed by a trained clinician often resolve symptoms in just a few sessions. Treatment is chosen based on the underlying cause, which is why an accurate evaluation matters.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Practical Tips for Living With Dizziness</h2>
        <ul className="space-y-3">
          <li className="flex gap-3">{check}<span>Keep a simple diary of when episodes occur, how long they last, and what triggers them.</span></li>
          <li className="flex gap-3">{check}<span>Rise slowly from lying or sitting, and pause before walking.</span></li>
          <li className="flex gap-3">{check}<span>Make your home safer with good lighting, secure rugs, and handrails where needed.</span></li>
          <li className="flex gap-3">{check}<span>Stay hydrated and keep regular sleep and meal routines, since both can influence symptoms.</span></li>
          <li className="flex gap-3">{check}<span>Avoid driving or climbing ladders during active episodes.</span></li>
        </ul>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">When to Seek Help</h2>
        <p>Seek emergency care right away if dizziness comes with sudden severe headache, weakness or numbness, trouble speaking, double vision, chest pain, or loss of consciousness, as these can signal a stroke or other urgent problem. For dizziness that keeps returning, interferes with daily life, or follows a head injury, a professional evaluation is the right next step.</p>
        <p className="mt-4">Irvine Neuro Rehabilitation in Southfield, MI provides specialty medical care and rehabilitation services. If dizziness or balance trouble is affecting your life, call (248) 415-2500 or reach out through our contact page to talk about your concerns.</p>
      </article>

      <section className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 px-6 flex gap-6 items-start animate-fade-up">
        <div className="bg-[var(--color-light)] rounded-full w-16 h-16 shrink-0 flex items-center justify-center text-[var(--color-primary)]">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
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
            <a href="/blog" className="animate-fade-up block bg-white rounded-2xl p-6 border border-[var(--color-border)] hover:shadow-lg transition-shadow">
              <svg className="w-8 h-8 text-[var(--color-accent)] mb-3" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" /></svg>
              <p className="font-semibold text-[var(--color-ink)]">Patient Education Blog</p>
              <p className="text-sm text-[var(--color-muted)] mt-2">Browse all articles from our resources hub.</p>
            </a>
            <a href="/services" className="animate-fade-up block bg-white rounded-2xl p-6 border border-[var(--color-border)] hover:shadow-lg transition-shadow">
              <svg className="w-8 h-8 text-[var(--color-accent)] mb-3" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
              <p className="font-semibold text-[var(--color-ink)]">Our Services</p>
              <p className="text-sm text-[var(--color-muted)] mt-2">See the rehabilitation services we offer.</p>
            </a>
            <a href="/contact" className="animate-fade-up block bg-white rounded-2xl p-6 border border-[var(--color-border)] hover:shadow-lg transition-shadow">
              <svg className="w-8 h-8 text-[var(--color-accent)] mb-3" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h2l2 5-2 1a11 11 0 005 5l1-2 5 2v2a2 2 0 01-2 2A16 16 0 013 5z" /></svg>
              <p className="font-semibold text-[var(--color-ink)]">Contact Us</p>
              <p className="text-sm text-[var(--color-muted)] mt-2">Reach out with questions about your care.</p>
            </a>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light mb-4">Ready to Take the Next Step?</h2>
          <p className="mb-8 text-white/80">We are here to help.</p>
          <a href="/contact" className="inline-block bg-white text-[var(--color-accent)] hover:bg-[var(--color-light)] transition-colors px-8 py-3 rounded-full font-semibold">Contact Us</a>
        </div>
      </section>
    </main>
  )
}
import type { Metadata } from 'next'
import HeroBackdrop from '@/components/HeroBackdrop'

export const metadata: Metadata = {
  title: 'Improving Hand Function After Neurological Injury',
  description: 'Learn how occupational therapy, repetition, and practical strategies can help improve hand function after stroke, brain injury, or other neurological conditions.',
  alternates: { canonical: '/blog/improving-hand-function-after-neurological-injury' },
  openGraph: {
    title: 'Improving Hand Function After Neurological Injury',
    description: 'Learn how occupational therapy, repetition, and practical strategies can help improve hand function after stroke, brain injury, or other neurological conditions.',
    url: 'https://irvineneurorehabilitation.com/blog/improving-hand-function-after-neurological-injury',
    siteName: 'Irvine Neuro Rehabilitation',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Improving Hand Function After Neurological Injury',
    description: 'Learn how occupational therapy, repetition, and practical strategies can help improve hand function after stroke, brain injury, or other neurological conditions.',
  },
}

const tips = [
  'Practice meaningful, everyday tasks such as buttoning, stirring, or turning pages.',
  'Use short, frequent practice sessions rather than one long session.',
  'Keep the affected hand involved in daily routines, even if progress feels slow.',
  'Protect the shoulder and wrist by supporting the arm with pillows or a table.',
  'Gently move and stretch the fingers daily to limit stiffness.',
  'Rest when fatigued, since tired muscles often compensate poorly.',
]

const related = [
  { href: '/blog', title: 'More Patient Resources', text: 'Browse all of our educational articles on neurological recovery.' },
  { href: '/contact', title: 'Talk With Our Team', text: 'Reach out to ask about occupational therapy and rehabilitation support.' },
  { href: '/blog', title: 'Resources Hub', text: 'Explore guides on rehabilitation, daily living, and recovery.' },
]

const Check = () => (
  <svg className="w-6 h-6 shrink-0 text-[var(--color-accent)] mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12.5l4.5 4.5L19 7.5" />
  </svg>
)

export default function Page() {
  return (
    <main>
      <section className="hero-photo relative overflow-hidden bg-[var(--color-dark)] py-24 sm:py-32 text-white">
        <HeroBackdrop src="/images/stock/blog-improving-hand-function-after-neurological-injury.jpg" alt="A therapist works on a patient's hand and wrist during a treatment session." />
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <nav className="text-sm text-white/70 mb-6">
            <a href="/" className="hover:text-white">Home</a> › <a href="/blog" className="hover:text-white">Resources</a> › Article
          </nav>
          <p className="text-xs uppercase tracking-widest text-white/70 mb-4">Patient Education</p>
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl mx-auto text-center">Improving Hand Function After Neurological Injury</h1>
          <p className="mt-6 text-sm text-white/70">Published October 2026 · 6 min read</p>
        </div>
      </section>


      <article className="bg-white py-20 max-w-3xl mx-auto px-6 text-[var(--color-ink)] leading-loose text-base">
        <p className="mb-6">Think about how often you use your hands before you have finished breakfast. You grip a cup, open a container, fasten a button, and hold a phone. After a stroke, brain injury, or another neurological condition, these small acts can suddenly feel out of reach. The frustration and grief that follow are real, and they are understandable. The encouraging news is that the nervous system can adapt, and hand function can often improve with the right approach.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Why Neurological Injury Affects the Hands</h2>
        <p className="mb-6">The hands require some of the most precise coordination in the body. A large area of the brain is devoted to controlling finger movement and interpreting touch. When injury disrupts the pathways between the brain and the hand, the result can include weakness, stiffness, tremor, poor coordination, numbness, or difficulty sensing where the hand is in space.</p>
        <p className="mb-6">These changes may follow a stroke, traumatic brain injury, spinal cord injury, or conditions such as multiple sclerosis and Parkinson disease. Each person&apos;s pattern is different, which is why a individualized evaluation matters.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">How the Brain Relearns: Neuroplasticity</h2>
        <p className="mb-6">The brain is able to reorganize itself by forming new connections, a process known as neuroplasticity. Research on stroke rehabilitation consistently shows that recovery is driven by practice that is repetitive, task-specific, and challenging enough to require effort. Simply put, the brain tends to rebuild what it is asked to do again and again.</p>

        <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant">
          The brain tends to rebuild what it is asked to do again and again.
        </blockquote>

        <p className="mb-6">Recovery is usually fastest in the early weeks and months, but studies show that meaningful gains can continue well beyond that window when practice continues.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What Occupational Therapy Offers</h2>
        <p className="mb-6">Occupational therapists focus on helping people return to the activities that matter to them. For hand recovery, therapy commonly includes:</p>
        <ul className="mb-6 space-y-3 list-none">
          <li className="flex gap-3"><Check /><span>Strengthening and range-of-motion exercises for the fingers, wrist, and arm.</span></li>
          <li className="flex gap-3"><Check /><span>Fine motor and coordination practice, such as handling small objects.</span></li>
          <li className="flex gap-3"><Check /><span>Sensory retraining to help the brain interpret touch and position.</span></li>
          <li className="flex gap-3"><Check /><span>Strategies to manage stiffness or abnormal muscle tone.</span></li>
          <li className="flex gap-3"><Check /><span>Adaptive tools and techniques that make daily tasks safer and easier.</span></li>
        </ul>
        <p className="mb-6">Approaches such as constraint-induced movement therapy, mirror therapy, and task-oriented training have research support for certain people, and a therapist can help determine what fits your situation.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Practical Tips for Daily Life</h2>
        <p className="mb-6">Therapy sessions are only part of recovery. What you do between visits matters too. These general suggestions can support your progress, though your therapist should tailor them to you:</p>
        <ul className="mb-6 space-y-3 list-none">
          {tips.map((t) => (
            <li key={t} className="flex gap-3"><Check /><span>{t}</span></li>
          ))}
        </ul>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">The Role of Emotional Well-Being</h2>
        <p className="mb-6">Losing hand function can affect independence, work, and identity. It is common to feel discouraged, anxious, or isolated. Mood and motivation influence how consistently someone can practice, so emotional support is a real part of rehabilitation. Counseling, a supportive circle of family and friends, and a care team that looks at the whole person can all help.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">When to Seek Professional Help</h2>
        <p className="mb-6">If you or someone you love is struggling with hand weakness, poor coordination, or changes in sensation after a neurological event, it is worth seeking a professional evaluation. Sudden new weakness, numbness, or trouble speaking requires emergency care, so call 911 right away. For ongoing recovery, Irvine Neuro Rehabilitation in Southfield, MI offers occupational therapy and related rehabilitation support. You can call us at (248) 415-2500 to ask about how we can help.</p>
      </article>

      <div className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 px-6 flex gap-6 items-start animate-fade-up">
        <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center shrink-0 text-[var(--color-primary)]">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
            <circle cx="12" cy="8" r="4" />
            <path strokeLinecap="round" d="M4 21c0-4 4-6 8-6s8 2 8 6" />
          </svg>
        </div>
        <div>
          <p className="font-semibold text-[var(--color-ink)]">From Irvine Neuro Rehabilitation</p>
          <p className="text-sm text-[var(--color-muted)] mt-1">This article is for general education and is not a substitute for personal medical advice.</p>
        </div>
      </div>

      <section className="bg-[var(--color-cream)] py-16 max-w-7xl mx-auto px-6">
        <h3 className="font-cormorant text-3xl mb-8 text-[var(--color-ink)]">Related Resources</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {related.map((r) => (
            <a key={r.title} href={r.href} className="animate-fade-up block bg-white rounded-2xl p-6 border border-[var(--color-border)] hover:shadow-lg transition-shadow">
              <svg className="w-8 h-8 text-[var(--color-accent)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 5h12a4 4 0 014 4v10H8a4 4 0 01-4-4V5z" />
              </svg>
              <h4 className="font-cormorant text-2xl text-[var(--color-primary)] mb-2">{r.title}</h4>
              <p className="text-sm text-[var(--color-muted)]">{r.text}</p>
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
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Parkinson's Disease and Staying Active",
  description: "Learn how exercise, movement and therapy support daily life with Parkinson's disease, plus practical tips for staying active safely.",
  alternates: { canonical: '/blog/parkinson-s-disease-and-staying-active' },
  openGraph: {
    title: "Parkinson's Disease and Staying Active",
    description: "Learn how exercise, movement and therapy support daily life with Parkinson's disease, plus practical tips for staying active safely.",
    url: 'https://irvineneurorehabilitation.com/blog/parkinson-s-disease-and-staying-active',
    siteName: 'Irvine Neuro Rehabilitation',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: "Parkinson's Disease and Staying Active",
    description: "Learn how exercise, movement and therapy support daily life with Parkinson's disease, plus practical tips for staying active safely.",
  },
}

const tips = [
  'Choose activities you enjoy, so that movement becomes a habit rather than a chore.',
  'Exercise at the time of day when your medication is working well and your energy is highest.',
  'Include aerobic activity, strength work, balance practice and stretching each week.',
  'Make big, deliberate movements: larger steps, wider arm swings and tall posture.',
  'Keep your home clear of clutter and loose rugs, and use good lighting.',
  'Exercise with a friend, family member or group for safety and motivation.',
  'Rest when you need to, and tell your care team about any new pain, dizziness or falls.',
]

const related = [
  { href: '/blog', label: 'Resources', title: 'Browse All Patient Education Articles' },
  { href: '/services', label: 'Services', title: 'Our Rehabilitation Services' },
  { href: '/contact', label: 'Contact', title: 'Talk With Our Team in Southfield, MI' },
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
          <h1 className="font-[Cormorant] text-5xl font-light leading-tight max-w-3xl mx-auto text-center">Parkinson&apos;s Disease and Staying Active</h1>
          <p className="mt-6 text-sm text-white/70">Published October 2026 · 6 min read</p>
        </div>
      </section>

      {/* page-image:start */}
      <div className="max-w-5xl mx-auto px-6 -mt-10 relative z-10">
        <div className="w-full rounded-2xl overflow-hidden shadow-xl bg-[var(--color-light)]">
          <img src={"/images/stock/blog-parkinson-s-disease-and-staying-active.jpg"} alt={"Close-up of senior hands holding an inhaler outdoors, showcasing health and respiratory care."} width={1200} height={627} loading="lazy" className="block w-full h-auto" />
        </div>
      </div>
      {/* page-image:end */}

      <article className="bg-white py-20 max-w-3xl mx-auto px-6 text-[var(--color-ink)] leading-loose text-base">
        <p className="mb-6">
          A Parkinson&apos;s diagnosis can make the future feel uncertain. Many people worry that tremor, stiffness or slowness will gradually take away the activities they love. The reassuring news is that movement itself is one of the most powerful tools available. Staying active will not cure Parkinson&apos;s disease, but it can help you keep moving, feeling and living well for longer.
        </p>

        <h2 className="font-[Cormorant] text-3xl text-[var(--color-ink)] mt-12 mb-4">What Is Parkinson&apos;s Disease?</h2>
        <p className="mb-6">
          Parkinson&apos;s disease is a progressive neurological condition. It develops when nerve cells in a part of the brain called the substantia nigra gradually lose their ability to produce dopamine, a chemical messenger that helps coordinate smooth, purposeful movement. As dopamine levels fall, movement becomes harder to start and control.
        </p>
        <p className="mb-6">
          The best known motor symptoms include tremor at rest, muscle stiffness, slowness of movement (bradykinesia), and problems with balance and posture. Many people also experience symptoms that are less visible, such as fatigue, sleep changes, constipation, low mood, anxiety, changes in handwriting, a softer voice and difficulty swallowing.
        </p>

        <h2 className="font-[Cormorant] text-3xl text-[var(--color-ink)] mt-12 mb-4">Who Is Affected?</h2>
        <p className="mb-6">
          Parkinson&apos;s is most often diagnosed in people over 60, though it can appear earlier. It is somewhat more common in men than in women. Age is the largest known risk factor, and researchers believe a combination of genetic and environmental influences plays a role. Families, partners and caregivers are affected too, which is why support for the whole household matters.
        </p>

        <h2 className="font-[Cormorant] text-3xl text-[var(--color-ink)] mt-12 mb-4">Why Staying Active Matters</h2>
        <p className="mb-6">
          When movement feels difficult, it is natural to do less. Unfortunately, inactivity can lead to weaker muscles, stiffer joints, poorer balance and lower mood, which in turn make movement even harder. Regular physical activity helps break that cycle.
        </p>
        <p className="mb-6">
          Research has shown that exercise can improve walking speed, balance, strength, flexibility and quality of life for people with Parkinson&apos;s disease. Studies also suggest that exercise may help with mood, sleep and thinking skills. Some laboratory and clinical research suggests that vigorous, sustained exercise may even influence how the brain adapts to the disease, although this is still being studied.
        </p>

        <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-[Cormorant]">
          Staying active will not cure Parkinson&apos;s disease, but it can help you keep moving, feeling and living well for longer.
        </blockquote>

        <h2 className="font-[Cormorant] text-3xl text-[var(--color-ink)] mt-12 mb-4">Types of Exercise That Can Help</h2>
        <p className="mb-6">
          A well-rounded routine addresses several areas at once. Common recommendations include:
        </p>
        <ul className="mb-6 space-y-3">
          <li><strong>Aerobic exercise:</strong> brisk walking, cycling or swimming to support heart health, stamina and mood.</li>
          <li><strong>Strength training:</strong> resistance bands or light weights to counter muscle weakness.</li>
          <li><strong>Balance and agility work:</strong> practice shifting weight, turning and stepping to reduce fall risk.</li>
          <li><strong>Flexibility and stretching:</strong> gentle stretching to ease stiffness and protect posture.</li>
          <li><strong>Mind-body activities:</strong> tai chi, yoga and dance have been studied and many people find them enjoyable and motivating.</li>
        </ul>

        <h2 className="font-[Cormorant] text-3xl text-[var(--color-ink)] mt-12 mb-4">Practical Tips for Staying Active</h2>
        <ul className="mb-6 space-y-3">
          {tips.map((tip) => (
            <li key={tip} className="flex gap-3 items-start">
              <svg className="w-6 h-6 shrink-0 mt-1 text-[var(--color-accent)]" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              <span>{tip}</span>
            </li>
          ))}
        </ul>

        <h2 className="font-[Cormorant] text-3xl text-[var(--color-ink)] mt-12 mb-4">The Role of Rehabilitation Therapy</h2>
        <p className="mb-6">
          Exercise works best when it fits your own abilities and goals. Rehabilitation professionals can help tailor a plan. Occupational therapy focuses on everyday tasks such as dressing, eating, writing and managing the home safely. Speech therapy can address a quiet voice, unclear speech and swallowing difficulties, which are common in Parkinson&apos;s. Counseling and psychiatric care can support mood, anxiety and the emotional side of living with a chronic condition.
        </p>
        <p className="mb-6">
          Because Parkinson&apos;s changes over time, it helps to revisit your plan regularly. What works now may need adjusting as symptoms or medications change.
        </p>

        <h2 className="font-[Cormorant] text-3xl text-[var(--color-ink)] mt-12 mb-4">Take the Next Step</h2>
        <p className="mb-6">
          You do not have to figure this out alone. If you or someone you love is living with Parkinson&apos;s disease and wants support staying active and independent, Irvine Neuro Rehabilitation in Southfield, MI can talk with you about your goals. Call us at (248) 415-2500 or reach out through our contact page. Always check with your own physician before starting a new exercise program.
        </p>
      </article>

      <section className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 px-6 flex gap-6 items-start animate-fade-up">
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
          <h3 className="font-[Cormorant] text-3xl mb-8 text-[var(--color-ink)]">Related Resources</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {related.map((r) => (
              <a key={r.href} href={r.href} className="animate-fade-up block bg-white border border-[var(--color-border)] rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <p className="text-xs uppercase tracking-widest text-[var(--color-muted)] mb-2">{r.label}</p>
                <p className="font-[Cormorant] text-2xl text-[var(--color-primary)]">{r.title}</p>
                <span className="inline-block mt-4 text-sm text-[var(--color-accent)]">Read more →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-[Cormorant] text-4xl font-light mb-4">Ready to Take the Next Step?</h2>
          <p className="mb-8 text-white/80">We are here to help.</p>
          <a href="/contact" className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] border border-white/40 text-white px-8 py-3 rounded-full transition-colors">Contact Us</a>
        </div>
      </section>
    </main>
  )
}
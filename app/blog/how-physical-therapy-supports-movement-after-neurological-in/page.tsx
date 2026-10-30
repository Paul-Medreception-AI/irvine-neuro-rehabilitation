import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Physical Therapy and Movement After Neurological Injury',
  description: 'Learn how physical therapy helps rebuild strength, balance and movement after stroke, brain injury or other neurological conditions, and what to expect.',
  alternates: { canonical: '/blog/how-physical-therapy-supports-movement-after-neurological-in' },
  openGraph: {
    title: 'Physical Therapy and Movement After Neurological Injury',
    description: 'Learn how physical therapy helps rebuild strength, balance and movement after stroke, brain injury or other neurological conditions, and what to expect.',
    url: 'https://irvineneurorehabilitation.com/blog/how-physical-therapy-supports-movement-after-neurological-in',
    siteName: 'Irvine Neuro Rehabilitation',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Physical Therapy and Movement After Neurological Injury',
    description: 'Learn how physical therapy helps rebuild strength, balance and movement after stroke, brain injury or other neurological conditions, and what to expect.',
  },
}

const tips = [
  'Practice the exercises you are given at the pace your therapist recommends, rather than all at once.',
  'Set small, specific goals such as standing for one more minute or walking to the mailbox.',
  'Rest when you are fatigued. Fatigue is common after neurological injury and is not a failure.',
  'Make your home safer by removing loose rugs, improving lighting and adding grab bars where needed.',
  'Tell your care team about new pain, dizziness, falls or changes in how you feel.',
  'Involve family members so they can encourage you and help you practice safely.',
]

const related = [
  { href: '/blog', label: 'Resources', title: 'Browse All Patient Education Articles', text: 'Explore more guides on recovery, therapy and daily living.' },
  { href: '/services', label: 'Services', title: 'Our Rehabilitation Services', text: 'See the therapies and support offered at our practice.' },
  { href: '/contact', label: 'Contact', title: 'Talk With Our Team', text: 'Ask a question or reach out about your next step.' },
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
          <h1 className="font-[Cormorant,serif] text-5xl font-light leading-tight max-w-3xl mx-auto text-center">How Physical Therapy Supports Movement After Neurological Injury</h1>
          <p className="mt-6 text-sm text-white/70">Published October 2026 · 6 min read</p>
        </div>
      </section>

      {/* page-image:start */}
      <div className="max-w-5xl mx-auto px-6 -mt-10 relative z-10">
        <div className="w-full rounded-2xl overflow-hidden shadow-xl bg-[var(--color-light)]">
          <img src={"/images/stock/blog-how-physical-therapy-supports-movement-after-neurological-in.jpg"} alt={"Side view of professional orthopedist in uniform and eyewear helping fit woman reaching arm with dumbbell in doctor office on blurred background"} width={1200} height={627} loading="lazy" className="block w-full h-auto" />
        </div>
      </div>
      {/* page-image:end */}

      <article className="bg-white py-20 max-w-3xl mx-auto px-6">
        <p className="text-[var(--color-ink)] leading-loose text-base">
          One day you could walk across a room, button a shirt or climb a flight of stairs without thinking about it. After a stroke, brain injury or spinal cord injury, those simple actions can suddenly feel out of reach. If that is where you or someone you love finds themselves, it is natural to feel frightened, frustrated and unsure what comes next. The encouraging truth is that the nervous system can adapt, and physical therapy is one of the most important ways to guide that adaptation.
        </p>

        <h2 className="font-[Cormorant,serif] text-3xl text-[var(--color-ink)] mt-12 mb-4">What Neurological Injury Does to Movement</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Movement begins in the brain, travels down the spinal cord and reaches the muscles through nerves. Damage anywhere along that pathway can disrupt the message. Depending on the location and severity of the injury, people may experience weakness on one side of the body, stiff or tight muscles, poor balance, tremor, numbness, trouble coordinating the arms and legs, or difficulty walking safely.
        </p>
        <p className="text-[var(--color-ink)] leading-loose text-base mt-4">
          These changes can follow stroke, traumatic brain injury, spinal cord injury, and conditions such as multiple sclerosis or Parkinson disease. Each person&apos;s pattern is different, which is why a one-size-fits-all exercise plan rarely works well.
        </p>

        <h2 className="font-[Cormorant,serif] text-3xl text-[var(--color-ink)] mt-12 mb-4">How the Brain Relearns Movement</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          The key concept behind rehabilitation is neuroplasticity, the brain&apos;s ability to form new connections and reorganize itself in response to experience. When one pathway is damaged, nearby areas can sometimes take over part of its job. This process does not happen automatically. It is shaped by practice that is repeated, meaningful and appropriately challenging.
        </p>
        <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-[Cormorant,serif]">
          The brain learns through repetition, and physical therapy provides the structure to make that repetition safe and purposeful.
        </blockquote>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          The brain learns through repetition, and physical therapy provides the structure to make that repetition safe and purposeful. A therapist chooses tasks that stretch your abilities without overwhelming them, then adjusts as you improve.
        </p>

        <h2 className="font-[Cormorant,serif] text-3xl text-[var(--color-ink)] mt-12 mb-4">What Physical Therapy Typically Involves</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Therapy usually starts with an assessment of strength, range of motion, muscle tone, balance, walking pattern and fall risk. From there, goals are set around what matters most to you, such as returning to work, caring for grandchildren or moving around the house independently. Common approaches include:
        </p>
        <ul className="mt-4 space-y-3 text-[var(--color-ink)] leading-loose text-base list-disc pl-6">
          <li>Strengthening exercises for weakened muscles</li>
          <li>Balance and gait training, sometimes with assistive devices or bracing</li>
          <li>Task-specific practice such as standing up, stepping and reaching</li>
          <li>Stretching and positioning to manage stiffness and reduce contracture risk</li>
          <li>Education on safe transfers, fall prevention and energy conservation</li>
        </ul>
        <p className="text-[var(--color-ink)] leading-loose text-base mt-4">
          Physical therapy often works alongside other disciplines. Occupational therapy focuses on daily activities such as dressing and cooking, speech therapy addresses communication and swallowing, and counseling can support the emotional side of recovery.
        </p>

        <h2 className="font-[Cormorant,serif] text-3xl text-[var(--color-ink)] mt-12 mb-4">What the Research Shows</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Clinical guidelines for stroke rehabilitation consistently recommend early, intensive, task-oriented practice, and studies have linked this kind of therapy to better walking ability and independence. Research on traumatic brain injury and conditions like Parkinson disease and multiple sclerosis also supports exercise and balance training for improving mobility and reducing falls. Progress varies widely, and recovery is often greatest in the first months, but meaningful gains can continue well beyond that period with ongoing practice.
        </p>

        <h2 className="font-[Cormorant,serif] text-3xl text-[var(--color-ink)] mt-12 mb-4">Practical Ways to Support Your Recovery</h2>
        <ul className="mt-4 space-y-4">
          {tips.map((t) => (
            <li key={t} className="flex gap-3 text-[var(--color-ink)] leading-loose text-base">
              <svg className="w-6 h-6 shrink-0 mt-1 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              <span>{t}</span>
            </li>
          ))}
        </ul>

        <h2 className="font-[Cormorant,serif] text-3xl text-[var(--color-ink)] mt-12 mb-4">Be Patient With Yourself</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Recovery rarely moves in a straight line. There will be good days, plateaus and days that feel like a step backward. Progress is often measured in small gains, and each one builds toward greater independence. Emotional changes such as sadness, anxiety or irritability are common and deserve attention too.
        </p>
        <p className="text-[var(--color-ink)] leading-loose text-base mt-4">
          If you or a loved one is struggling with movement after a neurological injury, professional guidance can make recovery safer and more effective. Irvine Neuro Rehabilitation in Southfield, MI offers specialty medical care and therapy support. Call (248) 415-2500 or reach out through our contact page to talk about your situation.
        </p>
      </article>

      <div className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 px-6 flex gap-6 items-start animate-fade-up">
        <div className="bg-[var(--color-light)] rounded-full w-16 h-16 shrink-0 flex items-center justify-center text-[var(--color-primary)]">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a7.5 7.5 0 0115 0" />
          </svg>
        </div>
        <div>
          <p className="font-semibold text-[var(--color-ink)]">From Irvine Neuro Rehabilitation</p>
          <p className="text-sm text-[var(--color-muted)] mt-1">This article is for general education and is not a substitute for personal medical advice.</p>
        </div>
      </div>

      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-[Cormorant,serif] text-3xl mb-8 text-[var(--color-ink)]">Related Resources</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {related.map((r) => (
              <a key={r.href} href={r.href} className="animate-fade-up block bg-white rounded-2xl p-6 border border-[var(--color-border)] hover:shadow-lg transition-shadow">
                <p className="text-xs uppercase tracking-widest text-[var(--color-muted)] mb-2">{r.label}</p>
                <p className="font-[Cormorant,serif] text-2xl text-[var(--color-ink)] mb-2">{r.title}</p>
                <p className="text-sm text-[var(--color-muted)]">{r.text}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-[Cormorant,serif] text-4xl font-light mb-4">Ready to Take the Next Step?</h2>
          <p className="text-white/80 mb-8">We are here to help.</p>
          <a href="/contact" className="inline-block bg-white text-[var(--color-primary)] px-8 py-3 rounded-full font-medium hover:bg-[var(--color-light)] transition-colors">Contact Us</a>
        </div>
      </section>
    </main>
  )
}
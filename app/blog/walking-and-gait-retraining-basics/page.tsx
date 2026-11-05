import type { Metadata } from 'next'
import SplitHero from '@/components/SplitHero'

export const metadata: Metadata = {
  title: 'Walking and Gait Retraining Basics | Irvine Neuro Rehab',
  description: 'Learn how gait retraining works, who may benefit, and practical steps for safer, steadier walking after a neurological injury or illness.',
  alternates: { canonical: '/blog/walking-and-gait-retraining-basics' },
  openGraph: {
    title: 'Walking and Gait Retraining Basics | Irvine Neuro Rehab',
    description: 'Learn how gait retraining works, who may benefit, and practical steps for safer, steadier walking after a neurological injury or illness.',
    url: 'https://www.irvineneurorehabilitation.com/blog/walking-and-gait-retraining-basics',
    siteName: 'Irvine Neuro Rehabilitation',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Walking and Gait Retraining Basics | Irvine Neuro Rehab',
    description: 'Learn how gait retraining works, who may benefit, and practical steps for safer, steadier walking after a neurological injury or illness.',
  },
}

const tips = [
  'Walk with a clear goal for each session, such as a longer stride or an even rhythm.',
  'Use the assistive device or brace that your therapist recommends, and use it every time.',
  'Practice in short, frequent sessions rather than one long, tiring one.',
  'Choose a safe space with a handrail, a clear path, and supportive, well-fitting shoes.',
  'Rest when you are fatigued. Poor form from tiredness can reinforce habits you are trying to change.',
  'Track your progress in distance, time, or ease so you can see gains that feel small day to day.',
]

const related = [
  { href: '/blog', label: 'Resources', title: 'Browse All Patient Education Articles' },
  { href: '/services', label: 'Services', title: 'Explore Our Rehabilitation Services' },
  { href: '/contact', label: 'Contact', title: 'Talk With Our Team About Your Goals' },
]

export default function Page() {
  return (
    <main>
      <SplitHero src="/images/stock/blog-walking-and-gait-retraining-basics.jpg" alt="An older person walks with a rolling walker beside a companion on a garden path.">
        <div>
          <nav className="text-sm text-white/70 mb-6">
            <a href="/" className="hover:text-white transition-colors">Home</a> › <a href="/blog" className="hover:text-white transition-colors">Resources</a> › Article
          </nav>
          <p className="text-xs uppercase tracking-widest text-white/70 mb-4">Patient Education</p>
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl">Walking and Gait Retraining Basics</h1>
          <p className="mt-6 text-sm text-white/70">Published October 2026 · 6 min read</p>
        </div>
      </SplitHero>


      <article className="bg-white py-20 max-w-3xl mx-auto px-6">
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Few things feel as ordinary, or as precious, as walking across a room without thinking about it. After a stroke, brain injury, or neurological illness, that effortless motion can become a daily puzzle of balance, timing, and worry about falling. If walking has become harder, you are not alone, and the way you walk can often be improved with focused, guided practice.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What Is Gait Retraining?</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Gait is the pattern of how you walk: your stride length, speed, rhythm, posture, and the way your feet meet the ground. Gait retraining is a rehabilitation approach that uses repeated, purposeful practice to help the nervous system relearn safer and more efficient walking. It often combines strengthening, balance work, stretching, and task-specific walking drills.
        </p>
        <p className="text-[var(--color-ink)] leading-loose text-base mt-4">
          The approach rests on neuroplasticity, the brain&apos;s ability to form new connections in response to experience. When movement is practiced often and with feedback, the brain and spinal cord can adapt, even after injury.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Who May Benefit</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Walking difficulties have many causes. People who may benefit from a gait evaluation include those living with:
        </p>
        <ul className="mt-4 space-y-2 text-[var(--color-ink)] leading-loose text-base list-disc pl-6">
          <li>Stroke or traumatic brain injury</li>
          <li>Parkinson&apos;s disease or multiple sclerosis</li>
          <li>Spinal cord injury or peripheral neuropathy</li>
          <li>Weakness, stiffness, or balance problems after surgery or a long illness</li>
          <li>Age-related changes in balance, strength, or confidence</li>
        </ul>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Why Gait Matters</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Walking is tied to independence. It affects whether you can get to the kitchen, attend a family event, or run errors on your own. Changes in gait, such as dragging a foot, shortened steps, or leaning to one side, can raise the risk of falls and cause pain or fatigue as other muscles compensate. Addressing these patterns early can help protect your safety and your confidence.
        </p>

        <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant">
          When movement is practiced often and with feedback, the brain and spinal cord can adapt, even after injury.
        </div>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What the Research Suggests</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Studies of rehabilitation after stroke and other neurological conditions generally find that task-specific, repetitive walking practice can improve walking speed, endurance, and balance. Approaches that raise the intensity of practice, such as treadmill training, sometimes with body-weight support, have shown benefit for many people. Results vary with the cause, the severity, and the time since onset, which is why an individual assessment matters.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What a Gait Assessment Looks At</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          A therapist typically observes how you stand, shift your weight, and walk over different surfaces. They may check strength, joint range of motion, sensation, muscle tone, and balance. The goal is to find what is driving the change in your walking, whether it is weakness, stiffness, slowed reaction, or reduced feeling in the feet, so the plan targets the right problem.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Practical Tips for Safer Walking</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
          These general suggestions can support your progress. Check with your care team before starting any new routine.
        </p>
        <ul className="space-y-3">
          {tips.map((t) => (
            <li key={t} className="flex gap-3 text-[var(--color-ink)] leading-loose text-base">
              <svg className="w-6 h-6 shrink-0 text-[var(--color-accent)] mt-1" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>{t}</span>
            </li>
          ))}
        </ul>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Getting Professional Support</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Recovery of walking is rarely a straight line, and progress can feel slow. A rehabilitation team can set realistic goals, adjust your plan as you improve, and help you practice safely. If walking has become difficult or frightening, Irvine Neuro Rehabilitation in Southfield, MI is here to talk through your concerns. Call (248) 415-2500 or reach out through our contact page.
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
          <h3 className="font-cormorant text-3xl mb-8 text-[var(--color-ink)]">Related Resources</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {related.map((r) => (
              <a key={r.href} href={r.href} className="animate-fade-up block bg-white rounded-2xl p-6 border border-[var(--color-border)] hover:shadow-lg transition-shadow">
                <p className="text-xs uppercase tracking-widest text-[var(--color-muted)] mb-2">{r.label}</p>
                <p className="font-cormorant text-2xl text-[var(--color-primary)]">{r.title}</p>
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
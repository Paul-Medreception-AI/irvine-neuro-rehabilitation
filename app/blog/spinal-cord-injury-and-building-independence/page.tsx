import type { Metadata } from 'next'
import SplitHero from '@/components/SplitHero'

export const metadata: Metadata = {
  title: 'Spinal Cord Injury and Building Independence',
  description: 'Learn how rehabilitation, occupational therapy, and emotional support can help people rebuild daily independence after a spinal cord injury.',
  alternates: { canonical: '/blog/spinal-cord-injury-and-building-independence' },
  openGraph: {
    title: 'Spinal Cord Injury and Building Independence',
    description: 'Learn how rehabilitation, occupational therapy, and emotional support can help people rebuild daily independence after a spinal cord injury.',
    url: 'https://irvineneurorehabilitation.com/blog/spinal-cord-injury-and-building-independence',
    siteName: 'Irvine Neuro Rehabilitation',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Spinal Cord Injury and Building Independence',
    description: 'Learn how rehabilitation, occupational therapy, and emotional support can help people rebuild daily independence after a spinal cord injury.',
  },
}

const tips = [
  'Set small, specific goals, such as dressing, transferring, or preparing a simple meal, and build from there.',
  'Practice new skills regularly, since repetition helps the nervous system and the body adapt.',
  'Ask about adaptive equipment and home modifications that can make daily tasks safer and easier.',
  'Protect your skin, bladder, and bowel health with a routine your care team has reviewed.',
  'Treat emotional health as part of recovery, and talk with someone when mood or stress feels heavy.',
  'Involve family or caregivers early so everyone understands the plan.',
]

const related = [
  { title: 'Occupational Therapy After Neurological Injury', href: '/blog', label: 'Browse all resources' },
  { title: 'Coping Emotionally After a Life-Changing Injury', href: '/blog', label: 'Browse all resources' },
  { title: 'Contact Our Southfield Team', href: '/contact', label: 'Get in touch' },
]

export default function Page() {
  return (
    <main>
      <SplitHero src="/images/stock/blog-spinal-cord-injury-and-building-independence.jpg" alt="Mother and daughter share a warm embrace in a park, highlighting love and mobility support.">
        <div>
          <nav className="text-sm text-white/70 mb-6">
            <a href="/" className="hover:text-white transition-colors">Home</a> › <a href="/blog" className="hover:text-white transition-colors">Resources</a> › Article
          </nav>
          <p className="text-xs uppercase tracking-widest text-white/70 mb-4">Patient Education</p>
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl">Spinal Cord Injury and Building Independence</h1>
          <p className="mt-6 text-sm text-white/70">Published October 2026 · 6 min read</p>
        </div>
      </SplitHero>


      <article className="bg-white py-20 max-w-3xl mx-auto px-6">
        <p className="text-[var(--color-ink)] leading-loose text-base">
          A spinal cord injury can change a life in an instant. Tasks that once happened without thought, like getting out of bed, buttoning a shirt, or making coffee, can suddenly feel out of reach. For many people and their families, the biggest question is not only about healing, but about what daily life will look like next. The encouraging truth is that independence is something that can be rebuilt, step by step, with the right support.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What Is a Spinal Cord Injury?</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          The spinal cord carries messages between the brain and the rest of the body. When it is damaged by trauma, such as a fall, a motor vehicle crash, or a sports injury, or by illness, those messages can be disrupted. The effects depend on where the injury occurs and how much of the cord is affected. Injuries are often described as complete or incomplete, and as involving the arms and legs (tetraplegia) or the legs and trunk (paraplegia).
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Who Is Affected</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Spinal cord injuries can affect people of any age, though they are most often seen in younger adults after accidents and in older adults after falls. Beyond the individual, the injury touches partners, parents, children, and friends, who often become part of the recovery team. Changes can include movement and sensation, but also bladder and bowel function, blood pressure regulation, pain, fatigue, and mood.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Why Independence Matters</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Independence is not an all-or-nothing idea. It means having as much choice and control over your life as possible, whether that involves doing a task yourself, using a tool, or directing others in how you want things done. Research on rehabilitation consistently links active participation in daily life with better confidence, a stronger sense of purpose, and improved quality of life.
        </p>

        <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant">
          Independence is not an all-or-nothing idea.
        </div>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What the Evidence Says About Rehabilitation</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Most recovery happens in the first months after injury, but studies show that people can continue to gain function and skill over time. Rehabilitation is built around task-specific practice, strengthening of the muscles that still work, and training in new ways of doing things. Occupational therapy focuses on daily activities such as dressing, grooming, eating, and managing the home. Speech therapy can help when an injury affects breathing, swallowing, or communication. Because the nervous system can adapt with repetition, consistent practice is a central part of most programs.
        </p>
        <p className="text-[var(--color-ink)] leading-loose text-base mt-4">
          Equally important is emotional care. Depression and anxiety are common after a spinal cord injury, and they can affect motivation and recovery. Counseling and psychiatric support, along with case management to help coordinate services, are recognized parts of comprehensive rehabilitation.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Practical Steps Toward Independence</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
          Every injury is different, so a plan should be personal. These general strategies are a helpful starting point to discuss with your care team:
        </p>
        <ul className="space-y-3">
          {tips.map((t) => (
            <li key={t} className="flex gap-3 text-[var(--color-ink)] leading-loose text-base">
              <svg className="w-6 h-6 shrink-0 mt-1 text-[var(--color-accent)]" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              <span>{t}</span>
            </li>
          ))}
        </ul>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Supporting Caregivers and Families</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Family members often learn transfers, skin checks, and equipment use alongside the person recovering. Caregivers also need rest, information, and emotional support of their own. Sharing responsibilities, asking questions, and connecting with community resources can prevent burnout and make home life more sustainable.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Taking the Next Step</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Rebuilding independence takes patience, and no one should have to figure it out alone. Irvine Neuro Rehabilitation in Southfield, MI, offers occupational therapy, speech therapy, psychiatric care, counseling, and case management. If you or someone you love is adjusting to life after a spinal cord injury, call (248) 415-2500 or reach out through our contact page to talk about your goals.
        </p>
      </article>

      <section className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 px-6 flex gap-6 items-start">
        <div className="bg-[var(--color-light)] rounded-full w-16 h-16 shrink-0 flex items-center justify-center text-[var(--color-primary)]">
          <svg className="w-8 h-8" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a7.5 7.5 0 0115 0" />
          </svg>
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
              <svg className="w-8 h-8 text-[var(--color-accent)] mb-4" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
              </svg>
              <h4 className="font-cormorant text-2xl text-[var(--color-ink)] mb-2">{r.title}</h4>
              <span className="text-sm text-[var(--color-accent)]">{r.label} →</span>
            </a>
          ))}
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
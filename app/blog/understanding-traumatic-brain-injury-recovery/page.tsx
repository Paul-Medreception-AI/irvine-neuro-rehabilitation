import type { Metadata } from 'next'
import SplitHero from '@/components/SplitHero'

export const metadata: Metadata = {
  title: 'Understanding Traumatic Brain Injury Recovery',
  description: 'Learn how traumatic brain injury recovery works, what affects healing, and how rehabilitation, therapy and support can help you or a loved one move forward.',
  alternates: { canonical: '/blog/understanding-traumatic-brain-injury-recovery' },
  openGraph: {
    title: 'Understanding Traumatic Brain Injury Recovery',
    description: 'Learn how traumatic brain injury recovery works, what affects healing, and how rehabilitation, therapy and support can help you or a loved one move forward.',
    url: 'https://irvineneurorehabilitation.com/blog/understanding-traumatic-brain-injury-recovery',
    siteName: 'Irvine Neuro Rehabilitation',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Understanding Traumatic Brain Injury Recovery',
    description: 'Learn how traumatic brain injury recovery works, what affects healing, and how rehabilitation, therapy and support can help you or a loved one move forward.',
  },
}

const tips = [
  'Rest early on, then return to activity gradually as your care team advises',
  'Keep a simple daily journal of symptoms, sleep, mood and energy',
  'Break tasks into small steps and use reminders, calendars and routines',
  'Protect your head from further injury during recovery',
  'Ask family and friends for specific help rather than waiting until you are overwhelmed',
  'Attend follow-up visits and therapy sessions consistently',
]

const related = [
  { title: 'Our Services', text: 'Explore the rehabilitation and support services we provide.', href: '/services' },
  { title: 'Conditions We Help With', text: 'Learn about neurological and related conditions.', href: '/conditions' },
  { title: 'More Patient Resources', text: 'Browse all of our patient education articles.', href: '/blog' },
]

export default function Page() {
  return (
    <main>
      <SplitHero src="/images/stock/blog-understanding-traumatic-brain-injury-recovery.jpg" alt="A man does an arm stretch while a therapist watches in a rehabilitation studio.">
        <div>
          <nav className="text-sm text-white/70 mb-6">
            <a href="/" className="hover:text-white transition-colors">Home</a> › <a href="/blog" className="hover:text-white transition-colors">Resources</a> › Article
          </nav>
          <p className="text-xs uppercase tracking-widest text-white/70 mb-4">Patient Education</p>
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl">Understanding Traumatic Brain Injury Recovery</h1>
          <p className="text-white/70 text-sm mt-6">Published October 2026 · 6 min read</p>
        </div>
      </SplitHero>


      <article className="bg-white py-20 max-w-3xl mx-auto px-6">
        <p className="text-[var(--color-ink)] leading-loose text-base">One moment can change everything. A fall, a car accident, a sports collision: and suddenly a person who once managed work, family and daily life with ease is struggling to find words, remember appointments or tolerate bright lights. If you or someone you love is facing a traumatic brain injury (TBI), the road ahead can feel uncertain. Understanding how recovery works is a powerful first step.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What Is a Traumatic Brain Injury?</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">A traumatic brain injury occurs when an external force, such as a blow, jolt or penetrating wound, disrupts normal brain function. TBIs are commonly grouped as mild, moderate or severe based on factors like loss of consciousness, memory loss around the event, and scores on standardized assessments. A concussion is a form of mild TBI. Even a &quot;mild&quot; injury can cause symptoms that significantly affect daily life.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Who Is Affected?</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">TBI can happen to anyone. Falls are a leading cause, particularly in young children and older adults. Motor vehicle crashes, sports injuries, workplace accidents and assaults also contribute. Military service members and athletes in contact sports face added risk. Because the brain controls movement, thinking, speech and emotion, the effects can reach nearly every part of a person&apos;s life.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Common Effects After a Brain Injury</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">Symptoms vary widely depending on which areas of the brain were affected. They often fall into several categories:</p>
        <ul className="my-6 space-y-3 text-[var(--color-ink)] leading-loose text-base list-disc pl-6">
          <li><strong>Physical:</strong> headaches, fatigue, dizziness, balance problems, sensitivity to light and noise, and changes in sleep.</li>
          <li><strong>Cognitive:</strong> trouble with attention, memory, planning and processing information.</li>
          <li><strong>Communication:</strong> difficulty finding words, following conversation, or speaking and swallowing clearly.</li>
          <li><strong>Emotional:</strong> irritability, anxiety, depression, mood swings and frustration.</li>
        </ul>

        <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant">
          Recovery from a brain injury is rarely a straight line, and progress often comes in small steps.
        </div>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What Does the Recovery Process Look Like?</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">Recovery is highly individual. Many people with mild TBI improve substantially within weeks to months, though some have symptoms that linger. Moderate and severe injuries often require longer, more structured rehabilitation. Research on neuroplasticity, the brain&apos;s ability to form new connections, shows that targeted, repeated practice can help people regain skills or develop new ways to accomplish tasks. Recovery is influenced by the severity of injury, age, overall health, and the quality of support available.</p>
        <p className="text-[var(--color-ink)] leading-loose text-base mt-4">Recovery is rarely a straight line. Good days and difficult days are common, and setbacks do not mean failure. Recovery is often most effective when care addresses the whole person.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">The Role of a Rehabilitation Team</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">Because TBI affects many areas of function, a coordinated approach is generally recommended. Different professionals contribute in different ways:</p>
        <ul className="my-6 space-y-3 text-[var(--color-ink)] leading-loose text-base list-disc pl-6">
          <li><strong>Occupational therapy</strong> helps people rebuild daily living skills, routines and independence.</li>
          <li><strong>Speech therapy</strong> addresses language, cognitive communication and swallowing difficulties.</li>
          <li><strong>Psychiatric care</strong> can help manage mood, anxiety, sleep and medication questions.</li>
          <li><strong>Counseling and case management</strong> support emotional adjustment and help families navigate resources.</li>
        </ul>
        <p className="text-[var(--color-ink)] leading-loose text-base">Family members matter too. Caregivers often carry significant stress, and support for them is part of healthy recovery.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Practical Tips for Everyday Recovery</h2>
        <ul className="my-6 space-y-4">
          {tips.map((t) => (
            <li key={t} className="flex gap-3 items-start text-[var(--color-ink)] leading-loose text-base">
              <svg className="w-6 h-6 shrink-0 mt-1 text-[var(--color-accent)]" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
              <span>{t}</span>
            </li>
          ))}
        </ul>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">When to Seek Professional Help</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">Seek emergency care right away for worsening headache, repeated vomiting, seizures, confusion, weakness, or loss of consciousness after a head injury. For symptoms that persist or interfere with work, school, relationships or mood, a professional evaluation can clarify what is happening and what support may help.</p>
        <p className="text-[var(--color-ink)] leading-loose text-base mt-4">You do not have to navigate recovery alone. To talk with Irvine Neuro Rehabilitation in Southfield, MI, call (248) 415-2500 or reach out through our contact page.</p>
      </article>

      <section className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 px-6 flex gap-6 items-start animate-fade-up">
        <div className="bg-[var(--color-light)] rounded-full w-16 h-16 shrink-0 flex items-center justify-center text-[var(--color-primary)]">
          <svg className="w-8 h-8" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a7.5 7.5 0 0115 0" /></svg>
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
                <h4 className="font-cormorant text-2xl text-[var(--color-primary)] mb-2">{r.title}</h4>
                <p className="text-[var(--color-muted)] text-base">{r.text}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light mb-4">Ready to Take the Next Step?</h2>
          <p className="text-white/80 mb-8">We are here to help.</p>
          <a href="/contact" className="inline-block bg-[var(--color-accent)] border border-white/40 hover:bg-[var(--color-accent-dark)] transition-colors text-white px-8 py-3 rounded-full">Contact Us</a>
        </div>
      </section>
    </main>
  )
}
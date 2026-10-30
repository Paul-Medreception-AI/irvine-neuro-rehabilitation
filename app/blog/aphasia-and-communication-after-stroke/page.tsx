import type { Metadata } from 'next'
import HeroBackdrop from '@/components/HeroBackdrop'

export const metadata: Metadata = {
  title: 'Aphasia and Communication After Stroke',
  description: 'Learn what aphasia is, how it affects speech and understanding after stroke, and practical ways families can support communication during recovery.',
  alternates: { canonical: '/blog/aphasia-and-communication-after-stroke' },
  openGraph: {
    title: 'Aphasia and Communication After Stroke',
    description: 'Learn what aphasia is, how it affects speech and understanding after stroke, and practical ways families can support communication during recovery.',
    url: 'https://irvineneurorehabilitation.com/blog/aphasia-and-communication-after-stroke',
    siteName: 'Irvine Neuro Rehabilitation',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Aphasia and Communication After Stroke',
    description: 'Learn what aphasia is, how it affects speech and understanding after stroke, and practical ways families can support communication during recovery.',
  },
}

const tips = [
  'Reduce background noise by turning off the television or radio before a conversation.',
  'Use short, simple sentences and give the person plenty of time to respond.',
  'Ask yes or no questions when open-ended questions feel overwhelming.',
  'Support words with gestures, drawing, writing, pictures or objects.',
  'Avoid finishing sentences unless the person asks for help.',
  'Treat your loved one as the capable adult they are, and speak to them with respect.',
]

const related = [
  { href: '/blog', title: 'Browse All Resources', text: 'Explore more patient education articles from our team.' },
  { href: '/services', title: 'Our Services', text: 'See the rehabilitation and support services we offer.' },
  { href: '/contact', title: 'Contact Our Practice', text: 'Reach out with questions about care and next steps.' },
]

export default function Page() {
  return (
    <main>
      <section className="hero-photo relative overflow-hidden bg-[var(--color-dark)] py-24 sm:py-32 text-white">
        <HeroBackdrop src="/images/stock/blog-aphasia-and-communication-after-stroke.jpg" alt="An older woman gestures as she talks face to face with a caregiver." />
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <nav className="text-sm text-white/70 mb-6">
            <a href="/" className="hover:text-white transition-colors">Home</a> › <a href="/blog" className="hover:text-white transition-colors">Resources</a> › Article
          </nav>
          <p className="text-xs uppercase tracking-widest text-white/70 mb-4">Patient Education</p>
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl mx-auto text-center">Aphasia and Communication After Stroke</h1>
          <p className="mt-6 text-sm text-white/70">Published October 2026 · 6 min read</p>
        </div>
      </section>


      <article className="bg-white py-20 max-w-3xl mx-auto px-6 text-[var(--color-ink)] leading-loose text-base">
        <p className="animate-fade-up">Imagine knowing exactly what you want to say, yet the words will not come. Or hearing someone speak and feeling as though they are using a language you once knew. For many people after a stroke, this is daily life. Aphasia can be frightening and isolating, but understanding it is the first step toward connection and recovery.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What Is Aphasia?</h2>
        <p>Aphasia is a language disorder caused by damage to the parts of the brain that handle language, most often the left side of the brain. It can affect speaking, understanding speech, reading and writing. Aphasia does not affect intelligence. A person with aphasia still has their thoughts, opinions and personality; the difficulty lies in getting language in or out.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Who Is Affected?</h2>
        <p>Aphasia is common after stroke, and it is estimated that roughly one third of stroke survivors experience it. It can also result from traumatic brain injury, brain tumors or infections affecting the brain. While stroke is more common in older adults, aphasia can occur at any age.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Common Types and Signs</h2>
        <p>Aphasia looks different from person to person, depending on the location and size of the brain injury. Clinicians often describe several broad patterns:</p>
        <ul className="my-6 space-y-3">
          {['Expressive (non-fluent) aphasia: understanding is relatively preserved, but speech is effortful, with short phrases and missing words.',
            'Receptive (fluent) aphasia: speech flows easily but may contain incorrect or invented words, and understanding others is difficult.',
            'Global aphasia: severe difficulty with both understanding and expressing language.',
            'Anomic aphasia: persistent trouble finding the right word, especially names of people and objects.'].map((t) => (
            <li key={t} className="flex gap-3">
              <svg className="w-6 h-6 shrink-0 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
              <span>{t}</span>
            </li>
          ))}
        </ul>

        <p className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant">Aphasia does not affect intelligence.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Why Early Support Matters</h2>
        <p>Communication is tied to independence, relationships and emotional well-being. When language is disrupted, people may withdraw from social life, and depression and anxiety are common. Families may feel helpless. Addressing communication early helps reduce frustration and keeps people engaged with the people and activities they value.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What the Research Tells Us</h2>
        <p>The brain has a capacity to adapt, known as neuroplasticity. Research on stroke rehabilitation shows that speech and language therapy can improve communication outcomes, and that therapy of sufficient intensity tends to be more beneficial. Most spontaneous recovery happens in the first months after a stroke, but many people continue to make gains for months and years with ongoing practice. Therapy often includes naming exercises, comprehension practice, reading and writing tasks, and strategies for everyday conversation. Group therapy and communication partner training can also help people use their skills in real life.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Practical Ways to Support Communication</h2>
        <p>Family and friends play an important role. These approaches are widely recommended:</p>
        <ul className="my-6 space-y-3">
          {tips.map((t) => (
            <li key={t} className="flex gap-3">
              <svg className="w-6 h-6 shrink-0 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
              <span>{t}</span>
            </li>
          ))}
        </ul>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Caring for the Whole Person</h2>
        <p>Recovery from stroke involves more than speech. Fatigue, mood changes, changes in daily routines and caregiver stress all affect communication. A coordinated approach that considers language, daily living skills, emotional health and family support often serves people best. Caregivers also need rest, information and support of their own.</p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">When to Seek Professional Help</h2>
        <p>If you or someone you love is having trouble speaking, understanding or finding words after a stroke, do not wait for it to pass on its own. Sudden changes in speech or language are an emergency and need immediate medical attention. For ongoing difficulties, a professional evaluation can clarify what is happening and guide next steps. Irvine Neuro Rehabilitation in Southfield, MI is here to answer your questions. Call us at (248) 415-2500 or reach out through our contact page.</p>
      </article>

      <section className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 px-6 flex gap-6 items-start animate-fade-up">
        <div className="bg-[var(--color-light)] rounded-full w-16 h-16 shrink-0 flex items-center justify-center text-[var(--color-primary)]">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6.75a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a7.5 7.5 0 0115 0" /></svg>
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
              <a key={r.title} href={r.href} className="animate-fade-up block bg-white rounded-2xl p-6 border border-[var(--color-border)] hover:shadow-lg transition-shadow">
                <svg className="w-8 h-8 text-[var(--color-accent)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75v10.5M6.75 12h10.5" /></svg>
                <h4 className="font-cormorant text-2xl text-[var(--color-ink)] mb-2">{r.title}</h4>
                <p className="text-[var(--color-muted)]">{r.text}</p>
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
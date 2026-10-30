import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Patient Reviews | Irvine Neuro Rehabilitation',
  description: 'Share your experience with Irvine Neuro Rehabilitation in Southfield, MI. We welcome feedback from patients and families about their care.',
  alternates: { canonical: '/reviews' },
  openGraph: {
    title: 'Patient Reviews | Irvine Neuro Rehabilitation',
    description: 'Share your experience with Irvine Neuro Rehabilitation in Southfield, MI. We welcome feedback from patients and families about their care.',
    url: 'https://irvineneurorehabilitation.com/reviews',
    siteName: 'Irvine Neuro Rehabilitation',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Patient Reviews | Irvine Neuro Rehabilitation',
    description: 'Share your experience with Irvine Neuro Rehabilitation in Southfield, MI. We welcome feedback from patients and families about their care.',
  },
}

export default function ReviewsPage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="font-[Cormorant,serif] text-5xl font-light mb-6">Patient Reviews</h1>
          <p className="text-lg text-white/90">
            If you or a loved one has worked with our team, we would be grateful to hear about your experience.
          </p>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-3xl mx-auto px-6 text-center animate-fade-up">
          <svg
            className="w-8 h-8 mx-auto mb-6 text-[var(--color-accent)]"
            stroke="currentColor"
            strokeWidth={1.5}
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h8M8 14h5m-9 6l2.5-3H18a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v14z" />
          </svg>
          <h2 className="font-[Cormorant,serif] text-4xl text-[var(--color-ink)] mb-4">We&apos;d Love Your Feedback</h2>
          {/* TODO(optimize): drop in real Google/Healthgrades reviews here once available */}
          <p className="text-[var(--color-muted)] text-lg leading-relaxed mb-8">
            Your voice helps us improve and helps other families understand what to expect. If you would like to share your experience with Irvine Neuro Rehabilitation, please get in touch with our team.
          </p>
          <a
            href="/contact"
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-3 rounded-md transition-colors"
          >
            Contact Us
          </a>
        </div>
      </section>

      <section className="bg-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6 animate-fade-up">
          <h2 className="font-[Cormorant,serif] text-4xl font-light mb-4">Ready to Talk About Your Recovery?</h2>
          <p className="text-white/85 mb-8">
            Start with a conversation about your goals and concerns. Call (248) 415-2500 or send us a message.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-[var(--color-primary)] hover:bg-[var(--color-light)] px-8 py-3 rounded-md transition-colors"
          >
            Request a Free Consultation
          </a>
        </div>
      </section>
    </main>
  )
}
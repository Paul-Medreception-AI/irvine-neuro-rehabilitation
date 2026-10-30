import type { Metadata } from 'next'
import HeroBackdrop from '@/components/HeroBackdrop'
import { TESTIMONIALS } from '@/lib/data/team'

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
      <section className="hero-photo relative overflow-hidden bg-[var(--color-dark)] py-28 sm:py-32 text-white text-center">
        <HeroBackdrop src="/images/stock/hub-reviews.jpg" alt="A caregiver warmly greeting an older woman at home" />
        <div className="relative max-w-3xl mx-auto px-6">
          <h1 className="font-cormorant text-5xl font-light mb-6">Patient Reviews</h1>
          <p className="text-lg text-white/90">
            Families tell us Irvine feels like home. Here is what some of our patients have shared.
          </p>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl text-center text-[var(--color-ink)] mb-4">What Our Patients Say</h2>
          <p className="text-center text-[var(--color-muted)] mb-14">In their own words, as shared with Irvine.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TESTIMONIALS.map((t) => (
              <figure key={t.name} className="animate-fade-up bg-white rounded-2xl p-8 border border-[var(--color-border)]">
                <blockquote className="font-cormorant text-2xl leading-snug text-[var(--color-ink)]">“{t.quote}”</blockquote>
                <figcaption className="mt-4 text-sm font-semibold text-[var(--color-primary)]">{t.name}</figcaption>
              </figure>
            ))}
          </div>
          <p className="text-center text-sm text-[var(--color-muted)] mt-10 max-w-2xl mx-auto">
            In Irvine’s client satisfaction survey, 91% of clients reported they are pleased with the quality of care and would recommend Irvine Neuro Rehabilitation to others.
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6 text-center animate-fade-up">
          <h2 className="font-cormorant text-4xl text-[var(--color-ink)] mb-4">We&apos;d Love Your Feedback</h2>
          <p className="text-[var(--color-muted)] text-lg leading-relaxed mb-8">
            If you or a loved one has worked with our team, your voice helps us improve and helps other families understand what to expect.
          </p>
          <a href="/contact" className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-3 rounded-md transition-colors">Share Your Experience</a>
        </div>
      </section>

      <section className="bg-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6 animate-fade-up">
          <h2 className="font-cormorant text-4xl font-light mb-4">Ready to Talk About Your Recovery?</h2>
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
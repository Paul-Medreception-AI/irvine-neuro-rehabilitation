import type { Metadata } from 'next'
import SplitHero from '@/components/SplitHero'

export const metadata: Metadata = {
  title: 'Visiting Our Office | Irvine Neuro Rehabilitation',
  description: 'Learn what to expect when you visit Irvine Neuro Rehabilitation in Southfield, MI, and how to reach the office by phone to arrange your first appointment.',
  alternates: { canonical: '/telehealth' },
  openGraph: {
    title: 'Visiting Our Office | Irvine Neuro Rehabilitation',
    description: 'Learn what to expect when you visit Irvine Neuro Rehabilitation in Southfield, MI, and how to reach the office by phone to arrange your first appointment.',
    url: 'https://www.irvineneurorehabilitation.com/telehealth',
    siteName: 'Irvine Neuro Rehabilitation',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Visiting Our Office | Irvine Neuro Rehabilitation',
    description: 'Learn what to expect when you visit Irvine Neuro Rehabilitation in Southfield, MI, and how to reach the office by phone to arrange your first appointment.',
  },
}

export default function Page() {
  return (
    <main>
      {/* The practice's website does not mention telehealth, so this page describes in-person visits. */}
      <SplitHero src="/images/irvine/campus-dusk.jpg" alt="Irvine Neuro Rehabilitation's Southfield campus at dusk">
        <div>
          <h1 className="font-cormorant text-5xl font-light">Visiting Our Office</h1>
          <p className="mt-6 text-lg text-white/90">
            Care starts with an in-person visit, and you can reach the office in Southfield, MI by phone at (248) 415-2500.
          </p>
        </div>
      </SplitHero>

      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light text-[var(--color-primary)] text-center">Your First Visit</h2>
          <p className="mt-4 max-w-2xl mx-auto text-center text-[var(--color-muted)]">
            An in-person visit for specialty medical care is generally a conversation first. You talk with our team about your story, your concerns and what you hope to achieve.
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="animate-fade-up rounded-lg border border-[var(--color-border)] bg-white p-8 transition hover:shadow-lg">
              <svg className="w-8 h-8 text-[var(--color-accent)]" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372a1.125 1.125 0 00-.852-1.091l-4.423-1.106a1.125 1.125 0 00-1.173.417l-.97 1.293a1.125 1.125 0 01-1.21.38 12.035 12.035 0 01-7.143-7.143 1.125 1.125 0 01.38-1.21l1.293-.97a1.125 1.125 0 00.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              <p className="mt-4 text-sm text-[var(--color-muted)]">Step 01</p>
              <h3 className="mt-1 text-xl font-semibold text-[var(--color-primary)]">Call or request an appointment</h3>
              <p className="mt-3 text-[var(--color-ink)]">Phone the office or send a request through our contact page. We can answer your initial questions and help you arrange a time.</p>
            </div>
            <div className="animate-fade-up rounded-lg border border-[var(--color-border)] bg-white p-8 transition hover:shadow-lg">
              <svg className="w-8 h-8 text-[var(--color-accent)]" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5M3.75 21V5.25L12 3l8.25 2.25V21M9 21v-6h6v6" />
              </svg>
              <p className="mt-4 text-sm text-[var(--color-muted)]">Step 02</p>
              <h3 className="mt-1 text-xl font-semibold text-[var(--color-primary)]">Visit the office</h3>
              <p className="mt-3 text-[var(--color-ink)]">Meet our team in person and share your history, your concerns and your goals. Bring any questions you would like to talk through.</p>
            </div>
            <div className="animate-fade-up rounded-lg border border-[var(--color-border)] bg-white p-8 transition hover:shadow-lg">
              <svg className="w-8 h-8 text-[var(--color-accent)]" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="mt-4 text-sm text-[var(--color-muted)]">Step 03</p>
              <h3 className="mt-1 text-xl font-semibold text-[var(--color-primary)]">Plan your care together</h3>
              <p className="mt-3 text-[var(--color-ink)]">Together we talk through how our programs may fit your needs and shape a personalized plan around your goals.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light text-[var(--color-primary)] text-center">Finding Us</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="animate-fade-up rounded-lg border border-[var(--color-border)] bg-[var(--color-cream)] p-8">
              <svg className="w-8 h-8 text-[var(--color-accent)]" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              <h3 className="mt-4 text-xl font-semibold text-[var(--color-primary)]">Address</h3>
              <p className="mt-3 text-[var(--color-ink)]">25700 Lahser Road</p>
              <p className="text-[var(--color-ink)]">Southfield, Michigan 48033</p>
              <a href="https://www.google.com/maps/search/?api=1&query=25700+Lahser+Road+Southfield+MI+48033" target="_blank" rel="noopener noreferrer" className="mt-3 inline-block text-[var(--color-accent)] underline">Get directions</a>
            </div>
            <div className="animate-fade-up rounded-lg border border-[var(--color-border)] bg-[var(--color-cream)] p-8">
              <svg className="w-8 h-8 text-[var(--color-accent)]" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372a1.125 1.125 0 00-.852-1.091l-4.423-1.106a1.125 1.125 0 00-1.173.417l-.97 1.293a1.125 1.125 0 01-1.21.38 12.035 12.035 0 01-7.143-7.143 1.125 1.125 0 01.38-1.21l1.293-.97a1.125 1.125 0 00.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              <h3 className="mt-4 text-xl font-semibold text-[var(--color-primary)]">Phone</h3>
              <a href="tel:+12484152500" className="mt-3 inline-block text-[var(--color-accent)] transition hover:text-[var(--color-accent-dark)] underline">(248) 415-2500</a>
            </div>
            <div className="animate-fade-up rounded-lg border border-[var(--color-border)] bg-[var(--color-cream)] p-8">
              <svg className="w-8 h-8 text-[var(--color-accent)]" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2m5-2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="mt-4 text-xl font-semibold text-[var(--color-primary)]">Office Hours</h3>
              <p className="mt-3 text-[var(--color-ink)]">Mon to Thu, 9:00am to 5:00pm<br />Fri, 9:00am to 12:00pm</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light">Start With a Conversation</h2>
          <p className="mt-4 text-white/90">Tell us about your goals and concerns, and we will help you understand how our programs may fit your needs.</p>
          <a href="/contact" className="mt-8 inline-block rounded bg-white px-8 py-3 font-medium text-[var(--color-primary)] transition hover:bg-[var(--color-light)]">
            Request a Free Consultation
          </a>
        </div>
      </section>
    </main>
  )
}
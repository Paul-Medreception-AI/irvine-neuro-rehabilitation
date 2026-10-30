import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Irvine Neuro Rehabilitation | Southfield, MI',
  description: 'Learn about Irvine Neuro Rehabilitation in Southfield, MI: personalized, holistic rehabilitation focused on your goals, serving patients since 1986.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About Irvine Neuro Rehabilitation | Southfield, MI',
    description: 'Learn about Irvine Neuro Rehabilitation in Southfield, MI: personalized, holistic rehabilitation focused on your goals, serving patients since 1986.',
    url: 'https://irvineneurorehabilitation.com/about',
    siteName: 'Irvine Neuro Rehabilitation',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'About Irvine Neuro Rehabilitation | Southfield, MI',
    description: 'Learn about Irvine Neuro Rehabilitation in Southfield, MI: personalized, holistic rehabilitation focused on your goals, serving patients since 1986.',
  },
}

export default function AboutPage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-28 text-white">
        <div className="mx-auto max-w-6xl px-6">
          <nav className="mb-6 text-sm text-white/70">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">›</span>
            <span>About</span>
          </nav>
          <h1 className="font-[Cormorant_Garamond,serif] text-6xl font-light">Rehabilitation That Starts With Understanding You</h1>
          <p className="mt-4 text-xl text-white/80">Personalized, holistic care shaped around your goals and your physical condition.</p>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-5">
          <div className="lg:col-span-3 lg:pr-12 space-y-6 text-lg leading-relaxed text-[var(--color-ink)]">
            <p>Since 1986, Irvine Neuro Rehabilitation has served patients with compassion and understanding. We know that when you or a loved one seeks a rehabilitation family, what matters most is finding one focused on your personal goals.</p>
            <p>We do not use cookie cutter, one-size-fits-all strategies. Our holistic approach is specific to your needs and your physical condition, and our programs target every component of rehabilitative care.</p>
            <p>Whether the focus is daily living skills, movement and function, or meaningful recreation, our aim is to help you get your lifestyle back. We listen first, because we know you and we understand your concerns.</p>
          </div>
          <aside className="lg:col-span-2">
            <div className="animate-fade-up rounded-2xl border border-[var(--color-border)] bg-white p-8">
              <h2 className="font-[Cormorant_Garamond,serif] text-3xl text-[var(--color-primary)] mb-6">Visit Us</h2>
              <ul className="space-y-5 text-[var(--color-ink)]">
                <li className="flex items-start gap-3">
                  <svg className="h-6 w-6 shrink-0 text-[var(--color-accent)]" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372a1.125 1.125 0 00-.852-1.091l-4.423-1.106a1.125 1.125 0 00-1.173.417l-.97 1.293a1.125 1.125 0 01-1.21.38 12.035 12.035 0 01-7.143-7.143 1.125 1.125 0 01.38-1.21l1.293-.97a1.125 1.125 0 00.417-1.173L6.963 3.102A1.125 1.125 0 005.872 2.25H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
                  <span>(248) 415-2500</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="h-6 w-6 shrink-0 text-[var(--color-accent)]" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>
                  <span>[Address to be added]</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="h-6 w-6 shrink-0 text-[var(--color-accent)]" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z" /></svg>
                  <span>[Hours to be added]</span>
                </li>
              </ul>
              <Link href="/contact" className="mt-8 inline-block rounded-lg bg-[var(--color-accent)] px-6 py-3 text-white transition-colors hover:bg-[var(--color-accent-dark)]">Contact Us</Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-[Cormorant_Garamond,serif] text-4xl text-center mb-16 text-[var(--color-primary)]">Our Approach</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="animate-fade-up rounded-2xl border border-[var(--color-border)] bg-[var(--color-cream)] p-8">
              <svg className="mb-4 h-8 w-8 text-[var(--color-accent)]" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg>
              <h3 className="font-[Cormorant_Garamond,serif] text-xl font-bold text-[var(--color-primary)] mb-3">Listening First</h3>
              <p className="text-[var(--color-muted)]">Every plan begins with your story, concerns and goals. We take the time to understand what matters most to you and your family.</p>
            </div>
            <div className="animate-fade-up rounded-2xl border border-[var(--color-border)] bg-[var(--color-cream)] p-8">
              <svg className="mb-4 h-8 w-8 text-[var(--color-accent)]" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <h3 className="font-[Cormorant_Garamond,serif] text-xl font-bold text-[var(--color-primary)] mb-3">Individualized Care</h3>
              <p className="text-[var(--color-muted)]">We avoid one-size-fits-all strategies. Each program is specific to your needs and your physical condition.</p>
            </div>
            <div className="animate-fade-up rounded-2xl border border-[var(--color-border)] bg-[var(--color-cream)] p-8">
              <svg className="mb-4 h-8 w-8 text-[var(--color-accent)]" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m9-9H3m15.364-6.364L5.636 18.364m12.728 0L5.636 5.636" /></svg>
              <h3 className="font-[Cormorant_Garamond,serif] text-xl font-bold text-[var(--color-primary)] mb-3">Whole-Person Recovery</h3>
              <p className="text-[var(--color-muted)]">Our holistic programs address every component of rehabilitative care. The aim is to help you regain independence and get your lifestyle back.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-center text-white">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="font-[Cormorant_Garamond,serif] text-4xl font-light mb-8">Ready to Get Started?</h2>
          <Link href="/contact" className="inline-block rounded-lg bg-[var(--color-accent)] px-8 py-4 text-white ring-1 ring-white/40 transition-colors hover:bg-[var(--color-accent-dark)]">Request a Free Consultation</Link>
        </div>
      </section>
    </main>
  )
}
import type { Metadata } from 'next'
import SplitHero from '@/components/SplitHero'
import Image from 'next/image'
import { focus } from '@/lib/imageFocus'
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

const HISTORY = [
  { year: '1986', text: 'The vision to care for patients began with the opening of Irvine AFC, an adult foster care facility. The Closed Head Injury program developed and grew into a full service organization to address the needs of patients and their families.' },
  { year: '1992', text: 'Irvine AFC, Inc. became Irvine Head Injury Home, Inc., providing cognitive rehabilitation and residential care for persons with closed head injuries. The team grew to include nurses, case managers, recreational therapists, social workers, counselors and residential care assistants.' },
  { year: '1993', text: 'An outpatient office opened for people not requiring residential care.' },
  { year: '1994', text: 'The Newport Care Center opened for the residential treatment of patients with dual diagnosis, and the therapeutic team expanded to include speech and language pathologists and physical and occupational therapists.' },
  { year: '1998', text: 'Construction began on a new rehabilitation campus on Lahser Road in Southfield, Michigan.' },
  { year: '1999', text: 'Grand opening of the Lahser Campus, the Irvine headquarters and main rehabilitation location, combining outpatient and semi-independent apartment programs in one facility. Clients who reside there can receive therapy in their own semi-independent apartment.' },
  { year: '2003', text: 'A special needs unit opened for individuals requiring nursing with physician supervision.' },
]

export default function AboutPage() {
  return (
    <main>
      <SplitHero src="/images/irvine/campus-exterior.jpg" alt="Irvine Neuro Rehabilitation's Lahser Road campus in Southfield, Michigan">
        <div>
          <nav className="mb-6 text-sm text-white/70">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">›</span>
            <span>About</span>
          </nav>
          <h1 className="font-cormorant text-5xl sm:text-6xl font-light">About Irvine Neuro Rehabilitation</h1>
          <p className="mt-4 text-xl text-white/90 max-w-2xl">One woman’s vision for excellence, serving people with brain injuries and their families in Southfield since 1986.</p>
        </div>
      </SplitHero>

      <section className="bg-[var(--color-cream)] py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-5">
          <div className="lg:col-span-3 lg:pr-12 space-y-6 text-lg leading-relaxed text-[var(--color-ink)]">
            <p>Since 1986, Irvine Neuro Rehabilitation has served patients with compassion and understanding. We know that when you or a loved one seeks a rehabilitation family, what matters most is finding one focused on your personal goals.</p>
            <p>We do not use cookie cutter, one-size-fits-all strategies. Our holistic approach is specific to your needs and your physical condition, and our programs target every component of rehabilitative care.</p>
            <p>Irvine Neuro Rehabilitation started in Oak Park as a way to offer a more patient-focused philosophy to rehabilitation services. Today our multi-disciplinary team cares for clients through a continuum of rehabilitation and residential services, from assisted living apartments, sub-acute rooms and adult foster care homes to outpatient therapy.</p>
            <p>Our program is licensed by the State of Michigan and CARF accredited. It is our belief that each client and their family are unique and should be treated with compassion, respect and integrity.</p>
          </div>
          <aside className="lg:col-span-2">
            <div className="animate-fade-up rounded-2xl border border-[var(--color-border)] bg-white p-8">
              <h2 className="font-cormorant text-3xl text-[var(--color-primary)] mb-6">Visit Us</h2>
              <ul className="space-y-5 text-[var(--color-ink)]">
                <li className="flex items-start gap-3">
                  <svg className="h-6 w-6 shrink-0 text-[var(--color-accent)]" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372a1.125 1.125 0 00-.852-1.091l-4.423-1.106a1.125 1.125 0 00-1.173.417l-.97 1.293a1.125 1.125 0 01-1.21.38 12.035 12.035 0 01-7.143-7.143 1.125 1.125 0 01.38-1.21l1.293-.97a1.125 1.125 0 00.417-1.173L6.963 3.102A1.125 1.125 0 005.872 2.25H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
                  <a href="tel:+12484152500" className="hover:underline">(248) 415-2500</a>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="h-6 w-6 shrink-0 text-[var(--color-accent)]" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>
                  <span>25700 Lahser Road<br />Southfield, Michigan 48033</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="h-6 w-6 shrink-0 text-[var(--color-accent)]" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z" /></svg>
                  <span>Mon to Thu, 9:00am to 5:00pm<br />Fri, 9:00am to 12:00pm</span>
                </li>
              </ul>
              <Link href="/contact" className="mt-8 inline-block rounded-lg bg-[var(--color-accent)] px-6 py-3 text-white transition-colors hover:bg-[var(--color-accent-dark)]">Contact Us</Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-cormorant text-4xl text-center mb-16 text-[var(--color-primary)]">Our Approach</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="animate-fade-up rounded-2xl border border-[var(--color-border)] bg-[var(--color-cream)] p-8">
              <svg className="mb-4 h-8 w-8 text-[var(--color-accent)]" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg>
              <h3 className="font-cormorant text-xl font-bold text-[var(--color-primary)] mb-3">Listening First</h3>
              <p className="text-[var(--color-muted)]">Every plan begins with your story, concerns and goals. We take the time to understand what matters most to you and your family.</p>
            </div>
            <div className="animate-fade-up rounded-2xl border border-[var(--color-border)] bg-[var(--color-cream)] p-8">
              <svg className="mb-4 h-8 w-8 text-[var(--color-accent)]" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <h3 className="font-cormorant text-xl font-bold text-[var(--color-primary)] mb-3">Individualized Care</h3>
              <p className="text-[var(--color-muted)]">We avoid one-size-fits-all strategies. Each program is specific to your needs and your physical condition.</p>
            </div>
            <div className="animate-fade-up rounded-2xl border border-[var(--color-border)] bg-[var(--color-cream)] p-8">
              <svg className="mb-4 h-8 w-8 text-[var(--color-accent)]" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m9-9H3m15.364-6.364L5.636 18.364m12.728 0L5.636 5.636" /></svg>
              <h3 className="font-cormorant text-xl font-bold text-[var(--color-primary)] mb-3">Whole-Person Recovery</h3>
              <p className="text-[var(--color-muted)]">Our holistic programs address every component of rehabilitative care. The aim is to help you regain independence and get your lifestyle back.</p>
            </div>
          </div>
        </div>
      </section>


      <section className="bg-[var(--color-cream)] py-24">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="font-cormorant text-4xl text-center mb-4 text-[var(--color-primary)]">Our History</h2>
          <p className="text-center text-[var(--color-muted)] mb-14">From one adult foster care home to a full service rehabilitation campus.</p>
          <ol className="relative border-l-2 border-[var(--color-border)] ml-3 space-y-10">
            {HISTORY.map((h) => (
              <li key={h.year} className="pl-8 relative">
                <span className="absolute -left-[11px] top-1.5 w-5 h-5 rounded-full bg-[var(--color-primary)] ring-4 ring-[var(--color-cream)]" aria-hidden="true" />
                <p className="font-cormorant text-3xl text-[var(--color-primary)]">{h.year}</p>
                <p className="mt-2 text-[var(--color-ink)] leading-relaxed">{h.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6 grid gap-10 md:grid-cols-2 items-center">
          <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden shadow-xl">
            <Image src="/images/irvine/campus-entrance.jpg" alt="The Irvine Rehab entrance at 25700 Lahser Road" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" style={{ objectPosition: focus("/images/irvine/campus-entrance.jpg") }} />
          </div>
          <div>
            <h2 className="font-cormorant text-4xl text-[var(--color-primary)]">Accreditations and Certifications</h2>
            <ul className="mt-6 space-y-3 text-[var(--color-ink)]">
              <li>CARF (Commission on Accreditation of Rehabilitation Facilities)</li>
              <li>State of Michigan Licensure</li>
            </ul>
            <h3 className="font-cormorant text-2xl text-[var(--color-primary)] mt-10">Affiliations</h3>
            <ul className="mt-4 space-y-2 text-[var(--color-muted)]">
              <li>Michigan Brain Injury Providers Council</li>
              <li>Brain Injury Association of Michigan</li>
              <li>CPAN, Coalition to Protect Auto No Fault</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-center text-white">
        <div className="relative mx-auto max-w-3xl px-6">
          <h2 className="font-cormorant text-4xl font-light mb-8">Ready to Get Started?</h2>
          <Link href="/contact" className="inline-block rounded-lg bg-[var(--color-accent)] px-8 py-4 text-[var(--color-dark)] bg-white font-semibold transition-colors hover:bg-[var(--color-cream)]">Request a Free Consultation</Link>
        </div>
      </section>
    </main>
  )
}
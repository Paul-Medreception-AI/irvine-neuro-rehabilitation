import type { Metadata } from 'next'
import HeroBackdrop from '@/components/HeroBackdrop'
import Image from 'next/image'
import { TEAM } from '@/lib/data/team'

export const metadata: Metadata = {
  title: 'Meet Our Team | Irvine Neuro Rehabilitation',
  description: 'Meet the physical therapists, occupational therapists, counselors and staff at Irvine Neuro Rehabilitation in Southfield, MI.',
  alternates: { canonical: '/team' },
  openGraph: {
    title: 'Meet Our Team | Irvine Neuro Rehabilitation',
    description: 'Meet the physical therapists, occupational therapists, counselors and staff at Irvine Neuro Rehabilitation in Southfield, MI.',
    url: 'https://irvineneurorehabilitation.com/team',
    siteName: 'Irvine Neuro Rehabilitation',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Meet Our Team | Irvine Neuro Rehabilitation',
    description: 'Meet the physical therapists, occupational therapists, counselors and staff at Irvine Neuro Rehabilitation in Southfield, MI.',
  },
}

export default function TeamPage() {
  return (
    <main>
      <section className="hero-photo relative overflow-hidden bg-[var(--color-dark)] py-28 sm:py-36 text-white text-center">
        <HeroBackdrop src="/images/irvine/walker-hallway.jpg" alt="An Irvine staff member walking beside a client using a walker in a hallway" position="center 35%" />
        <div className="relative max-w-3xl mx-auto px-6">
          <nav className="text-sm mb-6 text-white/85" aria-label="Breadcrumb">
            <a href="/" className="hover:underline">Home</a> <span className="mx-2">›</span> <a href="/about" className="hover:underline">About</a> <span className="mx-2">›</span> Our Team
          </nav>
          <h1 className="font-cormorant text-5xl sm:text-6xl font-light">Meet Our Team</h1>
          <p className="mt-6 text-lg text-white/90 leading-relaxed">
            Our team is diversified in all the innovative health care. Physical, occupational and speech therapy, nursing, counseling and case management work together on one plan built around each client.
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <blockquote className="font-cormorant text-2xl sm:text-3xl leading-snug text-[var(--color-ink)]">
            “Irvine Head Injury, Inc. is one woman’s vision for excellence. For over twenty years, our multi-disciplinary treatment team has successfully evaluated, treated and cared for hundreds of people with a known or suspected brain injury.”
          </blockquote>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl text-center mb-4 text-[var(--color-primary)]">Our Providers &amp; Staff</h2>
          <p className="text-center text-[var(--color-muted)] mb-14">Therapists, counselors, nursing leadership and staff at our Lahser Road campus in Southfield.</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
            {TEAM.map((m) => (
              <article key={m.name} className="animate-fade-up bg-white rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-sm hover:shadow-lg transition-shadow">
                <div className="relative h-56 sm:h-64 bg-[var(--color-light)] flex items-center justify-center">
                  {m.photo ? (
                    <Image src={m.photo} alt={`Portrait of ${m.name}`} fill sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw" className="object-cover object-top" />
                  ) : (
                    <span aria-hidden="true" className="font-cormorant text-6xl text-[var(--color-primary)] opacity-60">{m.name.split(' ').map((w) => w[0]).join('')}</span>
                  )}
                </div>
                <div className="p-4 sm:p-5">
                  <h3 className="font-cormorant text-xl sm:text-2xl text-[var(--color-ink)] leading-tight">
                    {m.name}{m.credentials ? <span className="text-base sm:text-lg text-[var(--color-muted)]">, {m.credentials}</span> : null}
                  </h3>
                  {m.role ? <p className="text-xs sm:text-sm text-[var(--color-primary)] font-semibold uppercase tracking-wide mt-1">{m.role}</p> : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-ink)] py-20 text-white text-center">
        <div className="max-w-2xl mx-auto px-6 animate-fade-up">
          <h2 className="font-cormorant text-4xl font-light">Talk With Our Team</h2>
          <p className="mt-4 text-white/80 leading-relaxed">
            There is no charge for a consultation. Call us or send a message and we will set up a time to talk, or to tour the campus.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a href="/contact" className="inline-block px-8 py-3 rounded-full bg-white text-[var(--color-dark)] font-semibold hover:bg-[var(--color-cream)] transition-colors">Request a Free Consultation</a>
            <a href="tel:+12484152500" className="inline-block px-8 py-3 rounded-full border border-white/40 text-white font-semibold hover:bg-white/10 transition-colors">Call (248) 415-2500</a>
          </div>
        </div>
      </section>
    </main>
  )
}

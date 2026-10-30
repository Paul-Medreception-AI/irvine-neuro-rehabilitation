import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Meet Our Team | Irvine Neuro Rehabilitation',
  description: 'Meet the therapists, psychiatrist and case management professionals at Irvine Neuro Rehabilitation in Southfield, MI.',
  alternates: { canonical: '/team' },
  openGraph: {
    title: 'Meet Our Team | Irvine Neuro Rehabilitation',
    description: 'Meet the therapists, psychiatrist and case management professionals at Irvine Neuro Rehabilitation in Southfield, MI.',
    url: 'https://irvineneurorehabilitation.com/team',
    siteName: 'Irvine Neuro Rehabilitation',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Meet Our Team | Irvine Neuro Rehabilitation',
    description: 'Meet the therapists, psychiatrist and case management professionals at Irvine Neuro Rehabilitation in Southfield, MI.',
  },
}

const team = [
  {
    name: 'Amy Cooper',
    role: 'Occupational Therapist',
    image: null,
    bio: 'Amy is an occupational therapist who helps patients regain the skills they need for everyday routines. Her care is tailored to each person’s abilities, habits and personal goals.',
  },
  {
    name: 'Regina Kinnard',
    role: 'Speech Therapist',
    image: null,
    bio: 'Regina is a speech therapist who supports patients recovering from neurological conditions and brain injury. She works with patients and families on communication and recovery goals with patience and care.',
  },
  {
    name: 'Dr. Theodore Ruza, DO',
    role: 'Medical Director, Psychiatrist',
    image: null,
    bio: 'Dr. Ruza serves as Medical Director and psychiatrist for our programs. He brings a thoughtful, compassionate perspective to the emotional and cognitive side of recovery.',
  },
  {
    name: 'Karen Dawson, MA, LPC',
    role: 'Case Management',
    image: '/images/3.jpeg',
    bio: 'Karen leads our case management program and helps coordinate each patient’s course of treatment. She serves as a point of contact between patients, families and care providers.',
  },
  {
    name: 'Michelle Honoway',
    role: 'MA, LPC',
    image: '/images/5.jpeg',
    bio: 'Michelle is a licensed professional counselor on our care team. She supports patients and families with understanding and compassion throughout the recovery process.',
  },
]

export default function TeamPage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-28 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="font-serif text-6xl font-light">Meet Our Team</h1>
          <p className="font-sans mt-6 text-lg text-white/80 leading-relaxed">
            A compassionate, family-centered care team in Southfield, MI, working together to build personalized recovery plans around your goals.
          </p>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-4xl text-center mb-16 text-[var(--color-primary)]">Our Providers &amp; Staff</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {team.map((m) => (
              <article
                key={m.name}
                className="animate-fade-up bg-white rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="relative bg-[var(--color-light)] h-72 flex items-center justify-center">
                  {m.image ? (
                    <Image
                      src={m.image}
                      alt={`Portrait of ${m.name}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      fill="none"
                      viewBox="0 0 24 24"
                      className="w-24 h-24 text-[var(--color-muted)]"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="8" r="4" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" />
                    </svg>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-2xl text-[var(--color-ink)]">{m.name}</h3>
                  <p className="font-sans text-sm text-[var(--color-primary)] font-semibold uppercase tracking-wide mt-1">{m.role}</p>
                  <p className="text-[var(--color-muted)] text-sm leading-relaxed mt-3">{m.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-ink)] py-20 text-white text-center">
        <div className="max-w-2xl mx-auto px-6 animate-fade-up">
          <h2 className="font-serif text-4xl font-light">Talk With Our Team</h2>
          <p className="font-sans mt-4 text-white/80 leading-relaxed">
            Start with a conversation about your goals and concerns. We will help you understand how our programs may fit your needs.
          </p>
          <a
            href="/contact"
            className="inline-block mt-8 px-8 py-3 rounded-full bg-[var(--color-accent)] border border-white/30 text-white font-semibold hover:bg-[var(--color-accent-dark)] transition-colors"
          >
            Request a Free Consultation
          </a>
        </div>
      </section>
    </main>
  )
}
import type { Metadata } from 'next'
import SplitHero from '@/components/SplitHero'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact Irvine Neuro Rehabilitation | Southfield, MI',
  description: 'Contact Irvine Neuro Rehabilitation in Southfield, MI. Call (248) 415-2500 or send a message to ask a question or request a free consultation.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact Irvine Neuro Rehabilitation | Southfield, MI',
    description: 'Contact Irvine Neuro Rehabilitation in Southfield, MI. Call (248) 415-2500 or send a message to ask a question or request a free consultation.',
    url: 'https://irvineneurorehabilitation.com/contact',
    siteName: 'Irvine Neuro Rehabilitation',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Contact Irvine Neuro Rehabilitation | Southfield, MI',
    description: 'Contact Irvine Neuro Rehabilitation in Southfield, MI. Call (248) 415-2500 or send a message to ask a question or request a free consultation.',
  },
}

export default function ContactPage() {
  return (
    <main>
      <SplitHero src="/images/irvine/campus-entrance.jpg" alt="The entrance to Irvine Rehab at 25700 Lahser Road, Southfield">
        <div>
          <h1 className="font-cormorant text-6xl font-light">Get In Touch</h1>
          <p className="mt-6 text-lg text-white/80">
            We'd love to hear from you. Reach out to schedule an appointment or ask a question.
          </p>
        </div>
      </SplitHero>

      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
          <div id="form" className="animate-fade-up bg-white rounded-2xl p-10 shadow-sm border border-[var(--color-border)] self-start">
            <h2 className="font-cormorant text-3xl mb-8 text-[var(--color-primary)]">Send Us a Message</h2>
            <p className="mb-6 text-[var(--color-ink)]">
              Leave a message below or call us at (248) 415-2500.
            </p>
            <ContactForm />
            <p className="text-[var(--color-muted)] text-xs mt-4">
              Please do not send medical details through the form or by email.
            </p>
          </div>

          <div className="space-y-8">
            <div className="animate-fade-up bg-white rounded-2xl p-8 border border-[var(--color-border)]">
              <svg className="w-8 h-8 stroke-[var(--color-primary)] mb-4" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s-7-6.2-7-11a7 7 0 1114 0c0 4.8-7 11-7 11z" />
                <circle cx="12" cy="10" r="2.5" />
              </svg>
              <h3 className="font-cormorant text-2xl text-[var(--color-primary)] mb-2">Visit Us</h3>
              <p className="text-[var(--color-ink)]">Irvine Neuro Rehabilitation</p>
              <p className="text-[var(--color-muted)]">25700 Lahser Road<br />Southfield, Michigan 48033</p>
              <a href="https://www.google.com/maps/search/?api=1&query=25700+Lahser+Road+Southfield+MI+48033" target="_blank" rel="noopener noreferrer" className="inline-block mt-3 text-sm font-semibold text-[var(--color-primary)] underline">Get directions</a>
            </div>

            <div className="animate-fade-up bg-white rounded-2xl p-8 border border-[var(--color-border)]">
              <svg className="w-8 h-8 stroke-[var(--color-primary)] mb-4" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h2.5l1.5 4-2 1.5a11 11 0 006 6L16.5 13l4 1.5V17a2 2 0 01-2 2A15 15 0 013 5z" />
              </svg>
              <h3 className="font-cormorant text-2xl text-[var(--color-primary)] mb-2">Call or Fax</h3>
              <a href="tel:+12484152500" className="font-cormorant text-4xl font-bold text-[var(--color-primary)] hover:text-[var(--color-accent-dark)] transition-colors">
                (248) 415-2500
              </a>
              <p className="text-[var(--color-muted)] mt-2">Fax (248) 415-2510</p>
              <p className="text-sm text-[var(--color-muted)] mt-4">Referring a patient? Fax the referral, or email it to Gloria Jackson, Office Manager, at <a href="mailto:gloria@irvineneurorehab.com" className="underline text-[var(--color-primary)]">gloria@irvineneurorehab.com</a>.</p>
            </div>

            <div className="animate-fade-up bg-[var(--color-light)] rounded-2xl p-8">
              <svg className="w-8 h-8 stroke-[var(--color-primary)] mb-4" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="9" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3 2" />
              </svg>
              <h3 className="font-cormorant text-2xl text-[var(--color-primary)] mb-2">Hours</h3>
              <p className="text-[var(--color-ink)]">Mon to Thu, 9:00am to 5:00pm<br />Fri, 9:00am to 12:00pm<br />Sat and Sun, closed</p>
            </div>

            <div className="animate-fade-up bg-[var(--color-primary)] text-white rounded-2xl p-8">
              <svg className="w-8 h-8 mb-4" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
                <rect x="3" y="5" width="18" height="16" rx="2" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 3v4M16 3v4M3 10h18" />
              </svg>
              <h3 className="font-cormorant text-2xl mb-2">Book an Appointment</h3>
              <p className="text-white/80 mb-6">
                There is no charge for a consultation, and you are welcome to schedule a tour. We are accepting new patients.
              </p>
              <a href="#form" className="inline-block rounded-full bg-white px-6 py-3 font-medium text-[var(--color-primary)] hover:bg-[var(--color-light)] transition-colors">
                Request a Free Consultation
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
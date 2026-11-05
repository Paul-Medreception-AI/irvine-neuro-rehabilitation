import type { Metadata } from 'next'
import SplitHero from '@/components/SplitHero'
import Image from 'next/image'
import { focus } from '@/lib/imageFocus'

export const metadata: Metadata = {
  title: 'Neuro Rehabilitation in Southfield, MI | Irvine Neuro Rehab',
  description: 'Our Lahser Road campus in Southfield, MI: a CARF-accredited residential brain injury program plus outpatient PT, OT and speech therapy. (248) 415-2500.',
  alternates: { canonical: '/locations/southfield-mi' },
  openGraph: {
    title: 'Neuro Rehabilitation in Southfield, MI | Irvine Neuro Rehab',
    description: 'Our Lahser Road campus in Southfield, MI: a CARF-accredited residential brain injury program plus outpatient PT, OT and speech therapy. (248) 415-2500.',
    url: 'https://www.irvineneurorehabilitation.com/locations/southfield-mi',
    siteName: 'Irvine Neuro Rehabilitation',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Neuro Rehabilitation in Southfield, MI | Irvine Neuro Rehab',
    description: 'Our Lahser Road campus in Southfield, MI: a CARF-accredited residential brain injury program plus outpatient PT, OT and speech therapy. (248) 415-2500.',
  },
}

const campus = [
  { title: 'Outpatient Therapy', body: 'Physical, occupational, speech and recreational therapy, including stroke and brain injury rehabilitation.' },
  { title: 'Assisted Living Apartments', body: 'Apartments on our Southfield campus that are at the heart of our in-patient care.' },
  { title: 'Sub-Acute Rooms', body: 'Rooms for clients who need a higher level of care during their recovery.' },
  { title: 'Adult Foster Care Homes', body: 'Homelike residential settings, where Irvine began in 1986.' },
  { title: 'Semi-Independent Apartments', body: 'Clients who reside at the Lahser Campus can receive therapy in their own semi-independent apartment.' },
  
  { title: 'Administrative Offices', body: 'The Lahser Campus is also home to our administrative offices and case management team.' },
]

const faqs = [
  { q: 'Where is the campus?', a: 'Our main rehabilitation location, the Lahser Campus, is at 25700 Lahser Road, Southfield, Michigan 48033.' },
  { q: 'Can I tour the campus before deciding?', a: 'Yes. Call (248) 415-2500 or send a message through our contact page to schedule a tour.' },
  { q: 'Is there a charge for a consultation?', a: 'No. There is no charge for a consultation. It is in person here on our campus and includes a tour.' },
  { q: 'What are your office hours?', a: 'Our office is open Monday to Thursday, 9:00am to 5:00pm, and Friday, 9:00am to 12:00pm.' },
]

export default function Page() {
  return (
    <main>
      <SplitHero src="/images/irvine/campus-exterior.jpg" alt="Irvine Neuro Rehabilitation's Lahser Road campus in Southfield, Michigan">
        <div>
          <nav className="text-sm text-white/70 mb-6">
            <a href="/" className="hover:text-white transition-colors">Home</a> › Locations › Southfield, MI
          </nav>
          <h1 className="font-cormorant text-5xl font-light mb-6">Neuro Rehabilitation in Southfield, Michigan</h1>
          <p className="text-xl text-white/80 mb-8">Our Lahser Road campus: residential care, therapy and our administrative offices, all in one place.</p>
          <a href="/contact" className="inline-block rounded-full bg-white px-8 py-3 font-medium text-[var(--color-primary)] hover:bg-[var(--color-light)] transition-colors">Schedule a Tour</a>
        </div>
      </SplitHero>


      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-6xl mx-auto px-6 grid gap-12 lg:grid-cols-2 items-center">
          <div className="animate-fade-up">
            <h2 className="font-cormorant text-4xl text-[var(--color-primary)] mb-6">Our Facility</h2>
            <p className="text-[var(--color-ink)] leading-relaxed mb-4">Our Lahser Road campus is home to our outpatient therapy clinic, for physical, occupational and speech therapy, and to our residential programs for clients who need more support.</p>
            <p className="text-[var(--color-ink)] leading-relaxed mb-4">Our assisted living apartments, sub-acute rooms and adult foster care homes are located at our Southfield campus, designed to provide a comfortable, homelike environment throughout our clients’ recovery.</p>
            <p className="text-[var(--color-ink)] leading-relaxed">As with most physical impairments, no two head injuries are alike, and each one is as unique as the person involved. It is that uniqueness that fuels our process of individualized care.</p>
          </div>
          <div className="relative h-80 sm:h-96 rounded-2xl overflow-hidden shadow-xl">
            <Image src="/images/irvine/campus-entrance.jpg" alt="The Irvine Rehab entrance at 25700 Lahser Road" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" style={{ objectPosition: focus("/images/irvine/campus-entrance.jpg") }} />
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl text-[var(--color-primary)] text-center mb-12">On the Lahser Campus</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {campus.map((c) => (
              <div key={c.title} className="animate-fade-up rounded-2xl border border-[var(--color-border)] bg-[var(--color-cream)] p-8">
                <h3 className="font-cormorant text-2xl text-[var(--color-primary)] mb-3">{c.title}</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-14">
            {[
              ['/images/irvine/garden-activity.jpg', 'A staff member and a client in the garden'],
              ['/images/irvine/pool-swim-lesson.jpg', 'Two swimmers with kickboards in the indoor pool'],
              ['/images/irvine/apartment-kitchen.jpg', 'An apartment kitchen with a granite breakfast bar'],
              ['/images/irvine/aquatic-therapy.jpg', 'A client exercising in the pool with a foam noodle'],
              ['/images/irvine/two-staff.jpg', 'Two Irvine staff members'],
              ['/images/irvine/hands-on-therapy.jpg', 'A therapist providing hands-on therapy to a client'],
            ].map(([src, alt]) => (
              <div key={src} className="relative h-40 sm:h-52 rounded-xl overflow-hidden">
                <Image src={src} alt={alt} fill sizes="(max-width: 768px) 50vw, 33vw" className="object-cover" style={{ objectPosition: focus(src) }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-6xl mx-auto px-6 grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-cormorant text-4xl text-[var(--color-primary)] mb-6">Visit Us</h2>
            <address className="not-italic text-[var(--color-ink)] leading-relaxed">
              Irvine Neuro Rehabilitation<br />25700 Lahser Road<br />Southfield, Michigan 48033
            </address>
            <p className="mt-4"><a href="tel:+12484152500" className="text-[var(--color-accent)] underline">(248) 415-2500</a></p>
            <p className="mt-2 text-[var(--color-ink)]">Mon to Thu, 9:00am to 5:00pm<br />Fri, 9:00am to 12:00pm</p>
            <div className="space-y-6 mt-10">
              {faqs.map((f) => (
                <div key={f.q} className="rounded-2xl bg-white border border-[var(--color-border)] p-6">
                  <h3 className="font-semibold text-[var(--color-ink)] mb-2">{f.q}</h3>
                  <p className="text-[var(--color-muted)] leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden border border-[var(--color-border)] min-h-[24rem]">
            <iframe
              title="Map to Irvine Neuro Rehabilitation, 25700 Lahser Road, Southfield"
              src="https://www.google.com/maps?q=25700+Lahser+Road,+Southfield,+MI+48033&output=embed"
              className="w-full h-full min-h-[24rem]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] text-white py-24 text-center">
        <div className="relative max-w-3xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl mb-6">Schedule a Tour</h2>
          <p className="text-white/90 mb-8">No charge for your in-person consultation and tour. Call (248) 415-2500 or send us a message.</p>
          <a href="/contact" className="inline-block rounded-full bg-white px-8 py-3 font-medium text-[var(--color-primary)] hover:bg-[var(--color-light)] transition-colors">Request a Free Consultation</a>
        </div>
      </section>
    </main>
  )
}
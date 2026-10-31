import type { Metadata } from 'next'
import Image from 'next/image'
import SplitHero from '@/components/SplitHero'
import ContactForm from '@/components/ContactForm'
import { focus } from '@/lib/imageFocus'
import { TEAM, TESTIMONIALS } from '@/lib/data/team'

export const metadata: Metadata = {
  title: 'Brain Injury & Neuro Rehab in Southfield, MI | Irvine Rehab',
  description: 'Irvine Neuro Rehabilitation has served patients since 1986. Explore personalized brain injury and neurological rehabilitation in Southfield, Michigan.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Brain Injury & Neuro Rehab in Southfield, MI | Irvine Rehab',
    description: 'Irvine Neuro Rehabilitation has served patients since 1986. Explore personalized brain injury and neurological rehabilitation in Southfield, Michigan.',
    url: 'https://irvineneurorehabilitation.com/',
    siteName: 'Irvine Neuro Rehabilitation',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Brain Injury & Neuro Rehab in Southfield, MI | Irvine Rehab',
    description: 'Irvine Neuro Rehabilitation has served patients since 1986. Explore personalized brain injury and neurological rehabilitation in Southfield, Michigan.',
  },
}

const conditions = [
  { name: 'Traumatic Brain Injury', slug: 'traumatic-brain-injury', body: 'Rehabilitation after a head injury from a fall, car crash or other trauma.' },
  { name: 'Stroke', slug: 'stroke', body: 'Rebuilding movement, speech and daily skills after a stroke.' },
  { name: 'Acquired Brain Injury', slug: 'acquired-brain-injury', body: 'Care after brain injury from illness, infection or other causes.' },
  { name: 'Anoxic Brain Injury', slug: 'anoxic-brain-injury', body: 'Rehabilitation after the brain is deprived of oxygen.' },
  { name: 'Concussion', slug: 'concussion', body: 'Support when symptoms after a concussion affect daily life.' },
  { name: 'Spinal Cord Injury', slug: 'spinal-cord-injury', body: 'Building strength, mobility and independence after injury.' },
  { name: 'Aphasia', slug: 'aphasia', body: 'Speech and language therapy for communication after brain injury or stroke.' },
  { name: 'Balance Disorders', slug: 'balance-disorders', body: 'Therapy for balance, walking and fall prevention.' },
]

// The core programs, each shown with Irvine's own photograph. All 17 programs are listed below.
const programs = [
  { name: 'Physical Therapy', href: '/services/physical-therapy', image: '/images/irvine/balance-training.jpg', alt: 'A client practicing balance on a balance trainer in the Irvine therapy gym', body: 'Focused on the prevention of impairments and disabilities related to movement, function and health.' },
  { name: 'Occupational Therapy', href: '/services/occupational-therapy', image: '/images/irvine/pulley-therapy.jpg', alt: 'A therapist working with a client in a wheelchair on an overhead pulley exercise', body: 'Dedicated to helping you independently complete the daily activities you need to, want to and are expected to do.' },
  { name: 'Speech and Language Pathology', href: '/services/speech-language-pathology', image: '/images/irvine/staff-with-client.jpg', alt: 'An Irvine staff member smiling beside a client', body: 'Support for communication, swallowing and thinking skills after a brain injury or neurological condition.' },
  { name: 'Head Injury Rehabilitation', href: '/services/head-injury-rehabilitation', image: '/images/irvine/puzzle-activity.jpg', alt: 'A client working on a jigsaw puzzle during a cognitive activity', body: 'Cognitive rehabilitation and care for people with a known or suspected brain injury, the work Irvine was founded on.' },
  { name: 'Recreational and Pool Therapy', href: '/services/recreational-therapy', image: '/images/irvine/aquatic-therapy.jpg', alt: 'A client exercising in the pool with a foam noodle and a therapist', body: 'Meaningful activity, from the pool to the garden, that rebuilds strength, confidence and engagement in daily life.' },
  { name: 'Residential Rehabilitation', href: '/services/residential-rehabilitation', image: '/images/irvine/campus-awning.jpg', alt: 'The purple Irvine Rehab awning at the Lahser Road campus', body: 'Assisted living apartments, sub-acute rooms and adult foster care homes on our Southfield campus, with therapy built into each day.' },
]

const allPrograms = [
  ['Behavioral Modification', 'behavioral-modification'],
  ['Case Management', 'case-management'],
  ['Cognitive Day Group', 'cognitive-day-group'],
  ['Counseling', 'counseling'],
  ['Leisure Activities', 'leisure-activities'],
  ['Life Activity and Skill Building', 'life-activity-and-skill-building'],
  ['Medication Management', 'medication-management'],
  ['Medical Rehabilitation', 'medical-rehabilitation'],
  ['Nursing Care', 'nursing-care'],
  ['Occupational Therapy', 'occupational-therapy'],
  ['Physical Therapy', 'physical-therapy'],
  ['Recreational Therapy', 'recreational-therapy'],
  ['Residential Rehabilitation', 'residential-rehabilitation'],
  ['Respite Care', 'respite-care'],
  ['Social Work', 'social-work'],
  ['Speech and Language Pathology', 'speech-language-pathology'],
  ['Semi-Independent Apartment Living', 'semi-independent-apartment-living'],
]

// Every line here is a practice fact: its own website, its Studio records or the 2026-10-30 call.
const reasons = [
  { title: 'Focused on brain injury since 1986', body: 'Irvine began with a closed head injury program and has grown into a full service rehabilitation organization for patients and their families.' },
  { title: 'CARF accredited and state licensed', body: 'Our residential Brain Injury Specialty Program is accredited by CARF, the Commission on Accreditation of Rehabilitation Facilities, and Irvine is licensed by the State of Michigan.' },
  { title: 'One team under one roof', body: 'Physical, occupational and speech therapy, recreational and pool therapy, nursing, counseling and case management work together on one plan.' },
  { title: 'Outpatient and residential care', body: 'Outpatient therapy and residential programs on the same Southfield campus, so care can change as needs change.' },
  { title: 'A plan built for one person', body: 'We don’t employ cookie cutter, one-size-fits-all strategies. Your plan is specific to your needs and your physical condition.' },
  { title: 'Practical help getting started', body: 'We provide transportation within 5 miles, and based upon your availability we should be able to see you within 7 days.' },
]

const resources = [
  { title: 'New Patients', href: '/new-patients', body: 'What to expect at your first visit and what to bring.' },
  { title: 'Refer a Patient', href: '/refer', body: 'For physicians, case managers and discharge planners.' },
  { title: 'Insurance & Billing', href: '/insurance', body: 'The plans we work with and how billing works.' },
  { title: 'Questions & Answers', href: '/faq', body: 'Programs, transportation, tours and more.' },
  { title: 'Visit Our Campus', href: '/locations/southfield-mi', body: 'Directions, hours and how to schedule a tour.' },
  { title: 'Health Articles', href: '/blog', body: 'Practical guides for patients and families.' },
]

const clinicLd = {
  '@context': 'https://schema.org',
  '@type': 'MedicalClinic',
  name: 'Irvine Neuro Rehabilitation',
  alternateName: 'Irvine Head Injury, Inc.',
  url: 'https://irvineneurorehabilitation.com/',
  logo: 'https://irvineneurorehabilitation.com/logo.png',
  image: 'https://irvineneurorehabilitation.com/images/irvine/campus-entrance.jpg',
  telephone: '+1-248-415-2500',
  faxNumber: '+1-248-415-2510',
  foundingDate: '1986',
  medicalSpecialty: ['PhysicalTherapy', 'SpeechPathology'],
  address: { '@type': 'PostalAddress', streetAddress: '25700 Lahser Road', addressLocality: 'Southfield', addressRegion: 'MI', postalCode: '48033', addressCountry: 'US' },
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'], opens: '09:00', closes: '17:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Friday', opens: '09:00', closes: '12:00' },
  ],
  sameAs: ['https://www.facebook.com/IrvineManor/', 'https://www.instagram.com/irvineneurorehabllc/', 'https://www.linkedin.com/company/49111151/'],
}

export default function Home() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicLd) }} />

      <SplitHero src="/images/irvine/walker-hallway.jpg" alt="An Irvine staff member walking beside a client using a walker in a hallway">
        <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-white/75">Southfield, Michigan · Established 1986</p>
        <h1 className="font-cormorant text-5xl sm:text-6xl font-light tracking-tight leading-[1.05] mt-5 max-w-xl">
          Brain Injury &amp; Neurological Rehabilitation
        </h1>
        <p className="text-lg sm:text-xl text-white/85 mt-7 leading-relaxed max-w-lg">
          Personalized care for brain injury, stroke, and neurological conditions, helping patients regain independence and improve quality of life.
        </p>
        <div className="flex flex-wrap gap-4 mt-10">
          <a href="#consultation" className="bg-white text-[var(--color-dark)] px-7 py-4 rounded-xl font-bold shadow-xl hover:-translate-y-0.5 transition-all">Request a Free Consultation</a>
          <a href="tel:+12484152500" className="border-2 border-white/80 text-white px-7 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all">Call (248) 415-2500</a>
        </div>
      </SplitHero>

      <section className="bg-white border-b border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 md:divide-x md:divide-[var(--color-border)]">
          <div className="flex items-start gap-4 md:pr-8">
            <a href="https://www.carf.org" target="_blank" rel="noopener noreferrer" aria-label="CARF accredited, visit carf.org" className="shrink-0"><img src="/images/carf-seal.png" alt="CARF Accredited seal" width={64} height={64} className="w-16 h-16" /></a>
            <div>
              <p className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] leading-tight">CARF Accredited</p>
              <p className="text-sm text-[var(--color-muted)] mt-1">Brain Injury Specialty Program, residential rehabilitation. <a href="https://carf.org/provider/irvine-head-injury-inc-75341" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 text-[var(--color-primary)]">View on carf.org</a></p>
            </div>
          </div>
          {[
            { title: 'Licensed by the State of Michigan', body: 'Outpatient therapy and residential programs' },
            { title: 'Specialized Brain Injury Care', body: 'Personalized rehabilitation programs focused on independence and recovery.' },
          ].map((t) => (
            <div key={t.title} className="flex items-start gap-4 md:px-8">
              <svg className="w-8 h-8 shrink-0 mt-1 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M12 3 4.5 6v5.25c0 4.5 3.2 8.2 7.5 9.75 4.3-1.55 7.5-5.25 7.5-9.75V6L12 3Z" /></svg>
              <div>
                <p className="font-cormorant text-2xl text-[var(--color-ink)] leading-tight">{t.title}</p>
                <p className="text-sm text-[var(--color-muted)] mt-1">{t.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
            <div>
              <p className="text-sm uppercase tracking-widest text-[var(--color-primary)] font-semibold">Conditions We Treat</p>
              <h2 className="font-cormorant text-4xl sm:text-5xl text-[var(--color-ink)] mt-2">Brain Injury, Stroke and Neurological Conditions</h2>
            </div>
            <a href="/conditions" className="text-[var(--color-primary)] font-semibold hover:underline">All conditions we treat →</a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {conditions.map((c) => (
              <a key={c.slug} href={`/conditions/${c.slug}`} className="group rounded-2xl border border-[var(--color-border)] bg-[var(--color-cream)] p-6 hover:border-[var(--color-primary)] hover:shadow-lg transition-all">
                <h3 className="font-cormorant text-2xl text-[var(--color-ink)] group-hover:text-[var(--color-primary)]">{c.name}</h3>
                <p className="text-sm text-[var(--color-muted)] mt-2 leading-relaxed">{c.body}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
            <div>
              <p className="text-sm uppercase tracking-widest text-[var(--color-primary)] font-semibold">Our Rehabilitation Services</p>
              <h2 className="font-cormorant text-4xl sm:text-5xl text-[var(--color-ink)] mt-2">Every Component of Rehabilitative Care</h2>
            </div>
            <a href="/services" className="text-[var(--color-primary)] font-semibold hover:underline">All services →</a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((p) => (
              <a key={p.name} href={p.href} className="group bg-white rounded-2xl overflow-hidden border border-[var(--color-border)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="relative h-56 bg-[var(--color-light)]">
                  <Image src={p.image} alt={p.alt} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover" style={{ objectPosition: focus(p.image) }} />
                </div>
                <div className="p-7">
                  <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)]">{p.name}</h3>
                  <p className="text-[var(--color-muted)] text-sm leading-relaxed mt-3">{p.body}</p>
                  <span className="inline-block text-[var(--color-primary)] font-semibold text-sm mt-5 group-hover:underline">Learn more →</span>
                </div>
              </a>
            ))}
          </div>
          <div className="mt-14 bg-white rounded-2xl border border-[var(--color-border)] p-8">
            <h3 className="font-cormorant text-2xl text-[var(--color-ink)] text-center">All 17 Programs</h3>
            <div className="flex flex-wrap justify-center gap-3 mt-6">
              {allPrograms.map(([label, slug]) => (
                <a key={slug} href={`/services/${slug}`} className="px-4 py-2 rounded-full border border-[var(--color-border)] text-sm text-[var(--color-ink)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-colors">{label}</a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-ink)] text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm uppercase tracking-widest text-white/70 font-semibold">Why Irvine Rehab</p>
          <h2 className="font-cormorant text-4xl sm:text-5xl mt-2 max-w-3xl">We know you, and we understand your concerns.</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {reasons.map((r) => (
              <div key={r.title} className="border-t border-white/20 pt-6">
                <h3 className="font-cormorant text-2xl">{r.title}</h3>
                <p className="text-white/75 text-sm leading-relaxed mt-3">{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-80 sm:h-[26rem] rounded-2xl overflow-hidden shadow-xl">
            <Image src="/images/irvine/campus-entrance.jpg" alt="The Irvine Rehab entrance at 25700 Lahser Road in Southfield" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" style={{ objectPosition: focus('/images/irvine/campus-entrance.jpg') }} />
          </div>
          <div>
            <p className="text-sm uppercase tracking-widest text-[var(--color-primary)] font-semibold">Our Facility &amp; Team</p>
            <h2 className="font-cormorant text-4xl sm:text-5xl text-[var(--color-ink)] mt-2">One Campus on Lahser Road</h2>
            <p className="text-[var(--color-muted)] leading-relaxed mt-6">
              Our Southfield campus is home to our outpatient therapy clinic and our residential programs: assisted living apartments, sub-acute rooms, adult foster care homes and semi-independent apartments where clients can receive therapy in their own apartment.
            </p>
            <div className="flex -space-x-3 mt-8">
              {TEAM.filter((m) => m.photo).slice(0, 7).map((m) => (
                <div key={m.name} className="relative w-14 h-14 rounded-full overflow-hidden ring-4 ring-white" title={m.name}>
                  <Image src={m.photo as string} alt={`Portrait of ${m.name}`} fill sizes="56px" className="object-cover object-top" />
                </div>
              ))}
            </div>
            <p className="text-sm text-[var(--color-muted)] mt-3">Physical and occupational therapists, counselors, nursing and office staff.</p>
            <div className="flex flex-wrap gap-6 mt-8">
              <a href="/team" className="text-[var(--color-primary)] font-semibold hover:underline">Meet our team →</a>
              <a href="/locations/southfield-mi" className="text-[var(--color-primary)] font-semibold hover:underline">Tour the campus →</a>
              <a href="/about" className="text-[var(--color-primary)] font-semibold hover:underline">Our story →</a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-sm uppercase tracking-widest text-[var(--color-primary)] font-semibold">Our Testimonials</p>
          <h2 className="font-cormorant text-4xl sm:text-5xl text-center text-[var(--color-ink)] mt-2">What Our Patients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {TESTIMONIALS.map((t) => (
              <figure key={t.name} className="bg-white rounded-2xl p-8 border border-[var(--color-border)]">
                <blockquote className="font-cormorant text-2xl leading-snug text-[var(--color-ink)]">“{t.quote}”</blockquote>
                <figcaption className="mt-4 text-sm font-semibold text-[var(--color-primary)]">{t.name}</figcaption>
              </figure>
            ))}
          </div>
          <p className="text-center text-sm text-[var(--color-muted)] mt-10">
            In Irvine’s client satisfaction survey, 91% of clients reported they are pleased with the quality of care and would recommend Irvine Neuro Rehabilitation to others.
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm uppercase tracking-widest text-[var(--color-primary)] font-semibold">Patient &amp; Family Resources</p>
          <h2 className="font-cormorant text-4xl sm:text-5xl text-[var(--color-ink)] mt-2">Admissions, Referrals and Coverage</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
            {resources.map((r) => (
              <a key={r.href} href={r.href} className="group rounded-2xl border border-[var(--color-border)] p-6 hover:border-[var(--color-primary)] hover:shadow-lg transition-all">
                <h3 className="font-cormorant text-2xl text-[var(--color-ink)] group-hover:text-[var(--color-primary)]">{r.title} →</h3>
                <p className="text-sm text-[var(--color-muted)] mt-2">{r.body}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="consultation" className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] text-white py-20 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-sm uppercase tracking-widest text-white/70 font-semibold">Start Your Recovery Journey</p>
            <h2 className="font-cormorant text-4xl sm:text-5xl mt-2">Request a Free Consultation</h2>
            <p className="text-white/90 leading-relaxed mt-6">There is no charge for a consultation. It takes place in person at our Lahser Road campus in Southfield and includes a tour. Send us a short message, or call, and tell us a little about what you or your loved one needs.</p>
            <h3 className="font-semibold text-lg mt-10">What happens next</h3>
            <ol className="mt-4 space-y-4">
              {[
                'Our team will contact you to discuss your needs and set up a time for your consultation.',
                'Meet our team in person at our Southfield campus and take a tour.',
                'We design a care plan around your goals, and based upon your availability we should be able to see you within 7 days.',
              ].map((x, i) => (
                <li key={x} className="flex gap-4"><span className="font-cormorant text-3xl leading-none text-white/50">{i + 1}</span><span className="text-white/85">{x}</span></li>
              ))}
            </ol>
            <div className="mt-10 space-y-2 text-white/85">
              <p>Call <a href="tel:+12484152500" className="font-semibold text-white underline underline-offset-2">(248) 415-2500</a> · Fax (248) 415-2510</p>
              <p>Mon to Thu, 9:00am to 5:00pm · Fri, 9:00am to 12:00pm</p>
              <p>Referring a patient? <a href="/refer" className="font-semibold text-white underline underline-offset-2">See how to send a referral</a></p>
            </div>
          </div>
          <div className="bg-white text-[var(--color-ink)] rounded-2xl p-8 shadow-2xl">
            <ContactForm pagePath="/" />
          </div>
        </div>
      </section>
    </main>
  )
}

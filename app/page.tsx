import type { Metadata } from 'next'
import Image from 'next/image'
import HeroBackdrop from '@/components/HeroBackdrop'
import { TEAM, TESTIMONIALS } from '@/lib/data/team'

export const metadata: Metadata = {
  title: 'Neuro Rehabilitation in Southfield, MI | Irvine Neuro',
  description: 'CARF accredited brain injury and neuro rehabilitation in Southfield, MI since 1986. Residential care, PT, OT, speech and recreational therapy. Call (248) 415-2500.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Neuro Rehabilitation in Southfield, MI | Irvine Neuro',
    description: 'CARF accredited brain injury and neuro rehabilitation in Southfield, MI since 1986. Residential care, PT, OT, speech and recreational therapy. Call (248) 415-2500.',
    url: 'https://irvineneurorehabilitation.com/',
    siteName: 'Irvine Neuro Rehabilitation',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Neuro Rehabilitation in Southfield, MI | Irvine Neuro',
    description: 'CARF accredited brain injury and neuro rehabilitation in Southfield, MI since 1986. Residential care, PT, OT, speech and recreational therapy. Call (248) 415-2500.',
  },
}

const trust = [
  'Serving Patients Since 1986',
  'CARF Accredited',
  'Licensed by the State of Michigan',
  'No Charge for Consultation',
]

// The core programs, each shown with Irvine's own photograph. All 17 programs are listed below.
const programs = [
  { name: 'Residential Rehabilitation', href: '/services/residential-rehabilitation', image: '/images/irvine/campus-awning.jpg', alt: 'The purple Irvine Rehab awning at the Lahser Road campus', body: 'Assisted living apartments, sub-acute rooms and adult foster care homes on our Southfield campus, with therapy built into each day.' },
  { name: 'Physical Therapy', href: '/services/physical-therapy', image: '/images/irvine/balance-training.jpg', alt: 'A client practicing balance on a balance trainer in the Irvine therapy gym', body: 'Focused on the prevention of impairments and disabilities related to movement, function and health.' },
  { name: 'Occupational Therapy', href: '/services/occupational-therapy', image: '/images/irvine/pulley-therapy.jpg', alt: 'A therapist working with a client in a wheelchair on an overhead pulley exercise', body: 'Dedicated to helping you independently complete the daily activities you need to, want to and are expected to do.' },
  { name: 'Head Injury Rehabilitation', href: '/services/head-injury-rehabilitation', image: '/images/irvine/puzzle-activity.jpg', alt: 'A client working on a jigsaw puzzle during a cognitive activity', body: 'Cognitive rehabilitation and care for people with a known or suspected brain injury, the work Irvine was founded on.' },
  { name: 'Recreational Therapy', href: '/services/recreational-therapy', image: '/images/irvine/garden-activity.jpg', alt: 'An Irvine staff member and a client tending plants in the garden', body: 'Meaningful activities, from the garden to the pool, that rebuild confidence and engagement in daily life.' },
  { name: 'Speech and Language Pathology', href: '/services/speech-language-pathology', image: '/images/irvine/staff-with-client.jpg', alt: 'An Irvine staff member smiling beside a client', body: 'Support for communication, swallowing and thinking skills after a brain injury or neurological condition.' },
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

const values = ['Accountability', 'Caring & Compassion', 'Professional Duty', 'Integrity', 'Social Responsibility']

const steps = [
  { number: '01', title: 'Free Consultation or Tour', description: 'Call us or send a message. There is no charge for a consultation, and you are welcome to schedule a tour of the campus.' },
  { number: '02', title: 'A Plan Built for You', description: 'No two head injuries are alike. Our multi-disciplinary team designs a care plan around your needs and your physical condition.' },
  { number: '03', title: 'Get Your Lifestyle Back', description: 'Work with your therapists toward your highest level of functioning, with your plan adjusted as you progress.' },
]

const affiliations = ['Michigan Brain Injury Providers Council', 'Brain Injury Association of Michigan', 'CPAN, Coalition to Protect Auto No Fault']

export default function Home() {
  return (
    <main>
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] text-white">
        <div className="max-w-7xl mx-auto px-6 py-14 sm:py-20 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div>
            <p className="text-sm sm:text-base uppercase tracking-[0.2em] text-white/80 mb-5">Southfield, Michigan · Since 1986</p>
            <h1 className="font-cormorant text-5xl sm:text-6xl font-light tracking-tight leading-[1.05]">
              Brain Injury and Neuro Rehabilitation, Built Around You
            </h1>
            <p className="text-lg sm:text-xl text-white/90 mt-6 leading-relaxed max-w-xl">
              What could be more important to you or a loved one than finding a rehabilitation family focused on your personal goals? Since 1986, Irvine Neuro Rehabilitation has served our patients with compassion and understanding.
            </p>
            <div className="flex flex-wrap gap-4 mt-9">
              <a href="/contact" className="bg-white text-[var(--color-dark)] px-8 py-4 rounded-xl font-bold shadow-xl hover:-translate-y-0.5 transition-all">
                Request a Free Consultation
              </a>
              <a href="tel:+12484152500" className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all">
                Call (248) 415-2500
              </a>
            </div>
          </div>
          <div className="relative h-72 sm:h-96 lg:h-[32rem] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10">
            <Image
              src="/images/irvine/campus-entrance.jpg"
              alt="The entrance to Irvine Rehab at 25700 Lahser Road in Southfield, Michigan"
              fill
              priority
              quality={85}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              style={{ objectPosition: 'center 60%' }}
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-8 border-b border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-x-12 gap-y-4">
          {trust.map((t) => (
            <div key={t} className="flex items-center gap-2 text-[var(--color-primary)]">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                <circle cx="12" cy="12" r="9" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 12l3 3 5-6" />
              </svg>
              <span className="font-bold text-[var(--color-ink)]">{t}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <p className="text-sm uppercase tracking-widest text-[var(--color-primary)] font-semibold">Irvine Head Injury, Inc.</p>
            <h2 className="font-cormorant text-4xl sm:text-5xl text-[var(--color-ink)] mt-3">We know you, and we understand your concerns.</h2>
            <p className="text-[var(--color-muted)] leading-relaxed mt-6">
              We don’t employ cookie cutter, one-size-fits-all strategies. Our holistic approach is specific to your needs and your physical condition, and our programs are geared toward targeting every component of rehabilitative care.
            </p>
            <p className="text-[var(--color-muted)] leading-relaxed mt-4">
              Irvine began in 1986 as an adult foster care home with a closed head injury program, and grew into a full service organization for patients and their families: outpatient therapy, residential care, nursing, counseling and case management, all on one team.
            </p>
            <div className="flex flex-wrap gap-6 mt-8">
              <a href="/about" className="text-[var(--color-primary)] font-semibold hover:underline">Our story →</a>
              <a href="/team" className="text-[var(--color-primary)] font-semibold hover:underline">Meet our team →</a>
            </div>
          </div>
          <div className="relative h-80 sm:h-[26rem] rounded-2xl overflow-hidden shadow-xl">
            <Image src="/images/irvine/walker-hallway.jpg" alt="An Irvine staff member walking beside a client using a walker" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-sm uppercase tracking-widest text-[var(--color-primary)] font-semibold">Our Programs</p>
          <h2 className="font-cormorant text-4xl sm:text-5xl text-center text-[var(--color-ink)] mt-3 mb-4">Every Component of Rehabilitative Care</h2>
          <p className="text-center text-[var(--color-muted)] mb-14 max-w-2xl mx-auto">Personalized service to help each client achieve an optimal level of recovery and performance.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((p) => (
              <a key={p.name} href={p.href} className="group animate-fade-up bg-white rounded-2xl overflow-hidden border border-[var(--color-border)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="relative h-56 bg-[var(--color-light)]">
                  <Image src={p.image} alt={p.alt} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover" />
                </div>
                <div className="p-7">
                  <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)]">{p.name}</h3>
                  <p className="text-[var(--color-muted)] text-sm leading-relaxed mt-3">{p.body}</p>
                  <span className="inline-block text-[var(--color-primary)] font-semibold text-sm mt-5 group-hover:underline">Learn more →</span>
                </div>
              </a>
            ))}
          </div>
          <div className="mt-16 bg-white rounded-2xl border border-[var(--color-border)] p-8">
            <h3 className="font-cormorant text-2xl text-[var(--color-ink)] text-center">All 17 Programs</h3>
            <div className="flex flex-wrap justify-center gap-3 mt-6">
              {allPrograms.map(([label, slug]) => (
                <a key={slug} href={`/services/${slug}`} className="px-4 py-2 rounded-full border border-[var(--color-border)] text-sm text-[var(--color-ink)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-colors">{label}</a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-80 sm:h-[26rem] rounded-2xl overflow-hidden shadow-xl order-last lg:order-first">
            <Image src="/images/irvine/campus-exterior.jpg" alt="Irvine Neuro Rehabilitation's Lahser Road campus in Southfield" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
          </div>
          <div className="animate-fade-up">
            <p className="text-sm uppercase tracking-widest text-[var(--color-primary)] font-semibold">Our Facility</p>
            <h2 className="font-cormorant text-4xl sm:text-5xl text-[var(--color-ink)] mt-3">Outpatient Therapy and Residential Care</h2>
            <p className="text-[var(--color-muted)] leading-relaxed mt-6">
              Outpatient physical, occupational and speech therapy for stroke, brain injury and other conditions, and residential care for clients who need more support, all on our Lahser Road campus in Southfield.</p>
            <ul className="mt-6 space-y-3 text-[var(--color-ink)]">
              {['Outpatient physical, occupational and speech therapy', 'Stroke and brain injury rehabilitation', 'Assisted living apartments and sub-acute rooms', 'Adult foster care homes', 'Semi-independent apartments with therapy at home'].map((x) => (
                <li key={x} className="flex gap-3"><span className="text-[var(--color-primary)]" aria-hidden="true">✓</span><span>{x}</span></li>
              ))}
            </ul>
            <a href="/locations/southfield-mi" className="inline-block text-[var(--color-primary)] font-semibold mt-8 hover:underline">Visit our Southfield campus →</a>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-ink)] text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-cormorant text-3xl sm:text-4xl">Our team proudly delivers professional quality treatment with</h2>
          <div className="flex flex-wrap justify-center gap-3 mt-10">
            {values.map((v) => (
              <span key={v} className="px-5 py-2.5 rounded-full border border-white/25 text-white/90">{v}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl sm:text-5xl text-center text-[var(--color-ink)]">Meet Some of Our Team</h2>
          <p className="text-center text-[var(--color-muted)] mt-4">Physical and occupational therapists, counselors and staff who know our clients by name.</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 mt-12">
            {TEAM.filter((m) => m.photo).slice(0, 6).map((m) => (
              <div key={m.name} className="text-center">
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 mx-auto rounded-full overflow-hidden ring-4 ring-white shadow-md">
                  <Image src={m.photo as string} alt={`Portrait of ${m.name}`} fill sizes="128px" className="object-cover object-top" />
                </div>
                <p className="font-cormorant text-xl text-[var(--color-ink)] mt-4 leading-tight">{m.name}</p>
                {m.credentials ? <p className="text-xs text-[var(--color-muted)] mt-1">{m.credentials}</p> : null}
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a href="/team" className="inline-block border-2 border-[var(--color-primary)] text-[var(--color-primary)] px-8 py-3 rounded-xl font-semibold hover:bg-[var(--color-primary)] hover:text-white transition-colors">Meet the whole team</a>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-sm uppercase tracking-widest text-[var(--color-primary)] font-semibold">Our Testimonials</p>
          <h2 className="font-cormorant text-4xl sm:text-5xl text-center text-[var(--color-ink)] mt-3">What Our Patients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-14">
            {TESTIMONIALS.map((t) => (
              <figure key={t.name} className="bg-[var(--color-cream)] rounded-2xl p-8 border border-[var(--color-border)]">
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

      <section className="bg-[var(--color-ink)] text-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl sm:text-5xl text-center mb-16">Getting Started Is Simple</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {steps.map((s) => (
              <div key={s.number} className="animate-fade-up">
                <div className="font-cormorant text-7xl text-white/40">{s.number}</div>
                <h3 className="font-cormorant text-2xl mt-2">{s.title}</h3>
                <p className="text-sm text-white/75 mt-3 leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 border-b border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)]">Accreditation and Affiliations</h2>
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 mt-8 text-[var(--color-muted)]">
            <span className="font-semibold text-[var(--color-ink)]">CARF (Commission on Accreditation of Rehabilitation Facilities)</span>
            <span className="font-semibold text-[var(--color-ink)]">State of Michigan Licensure</span>
            {affiliations.map((a) => <span key={a}>{a}</span>)}
          </div>
        </div>
      </section>

      <section className="hero-photo relative overflow-hidden bg-[var(--color-dark)] text-white py-28 text-center">
        <HeroBackdrop src="/images/irvine/campus-dusk.jpg" alt="Irvine Neuro Rehabilitation's Southfield campus at dusk" />
        <div className="relative max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl sm:text-5xl font-light">We’re Here to Help You</h2>
          <p className="text-lg text-white/90 mt-5">No charge for consultation. Schedule a tour, or call us at (248) 415-2500.</p>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <a href="/contact" className="inline-block bg-white text-[var(--color-dark)] font-bold px-10 py-4 rounded-2xl shadow-2xl hover:-translate-y-1 transition-all text-lg">Request a Free Consultation</a>
            <a href="/contact" className="inline-block border-2 border-white text-white font-semibold px-10 py-4 rounded-2xl hover:bg-white/10 transition-all text-lg">Schedule a Tour</a>
          </div>
        </div>
      </section>
    </main>
  )
}

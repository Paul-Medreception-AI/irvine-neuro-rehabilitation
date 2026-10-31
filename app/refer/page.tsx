import type { Metadata } from 'next'
import SplitHero from '@/components/SplitHero'

// Every practice fact here comes from the practice's own Studio records (referral route, fax,
// insurance list) or its website (programs, campus). Nothing about turnaround or eligibility is
// stated because the practice has not said.
export const metadata: Metadata = {
  title: 'Refer a Patient | Irvine Neuro Rehabilitation, Southfield MI',
  description: 'How physicians, case managers and discharge planners refer a patient to Irvine Neuro Rehabilitation in Southfield, MI. Fax (248) 415-2510 or call (248) 415-2500.',
  alternates: { canonical: '/refer' },
  openGraph: {
    title: 'Refer a Patient | Irvine Neuro Rehabilitation, Southfield MI',
    description: 'How physicians, case managers and discharge planners refer a patient to Irvine Neuro Rehabilitation in Southfield, MI.',
    url: 'https://irvineneurorehabilitation.com/refer',
    siteName: 'Irvine Neuro Rehabilitation',
    type: 'website',
  },
}

const PLANS = ['Medicare', 'Medicare Plus Blue', 'Blue Cross Blue Shield of Michigan', 'Blue Care Network', 'UnitedHealthcare', 'Brain Injury Medicaid Waiver', 'Auto insurance', "Workers' compensation"]

const programs = [
  ['Outpatient physical therapy', '/services/physical-therapy'],
  ['Outpatient occupational therapy', '/services/occupational-therapy'],
  ['Speech and language pathology', '/services/speech-language-pathology'],
  ['Head injury rehabilitation', '/services/head-injury-rehabilitation'],
  ['Residential rehabilitation', '/services/residential-rehabilitation'],
  ['Semi-independent apartment living', '/services/semi-independent-apartment-living'],
  ['Cognitive day group', '/services/cognitive-day-group'],
  ['Respite care', '/services/respite-care'],
]

export default function ReferPage() {
  return (
    <main>
      <SplitHero src="/images/irvine/two-staff.jpg" alt="Two Irvine staff members">
        <nav className="text-sm mb-6 opacity-90" aria-label="Breadcrumb">
          <a href="/" className="hover:underline">Home</a> <span className="mx-2">›</span> <a href="/new-patients" className="hover:underline">Patients</a> <span className="mx-2">›</span> Refer a Patient
        </nav>
        <h1 className="font-cormorant text-5xl sm:text-6xl font-light leading-tight">Refer a Patient</h1>
        <p className="text-lg sm:text-xl text-white/90 mt-6 leading-relaxed">
          For physicians, hospital case managers, discharge planners and insurance case managers referring someone with a brain injury, stroke or other neurological condition.
        </p>
        <div className="flex flex-wrap gap-4 mt-8">
          <a href="mailto:gloria@irvineneurorehab.com?subject=Patient%20referral" className="bg-white text-[var(--color-dark)] px-7 py-4 rounded-xl font-bold shadow-xl hover:-translate-y-0.5 transition-all">Email a Referral</a>
          <a href="tel:+12484152500" className="border-2 border-white text-white px-7 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all">Call (248) 415-2500</a>
        </div>
      </SplitHero>

      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6 grid gap-10 md:grid-cols-3">
          <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-cream)] p-8">
            <h2 className="font-cormorant text-3xl text-[var(--color-primary)]">Fax</h2>
            <p className="mt-3 text-2xl font-semibold text-[var(--color-ink)]">(248) 415-2510</p>
            <p className="mt-2 text-sm text-[var(--color-muted)]">Fax the referral and any supporting records.</p>
          </div>
          <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-cream)] p-8">
            <h2 className="font-cormorant text-3xl text-[var(--color-primary)]">Email</h2>
            <p className="mt-3"><a href="mailto:gloria@irvineneurorehab.com?subject=Patient%20referral" className="text-lg font-semibold text-[var(--color-ink)] underline underline-offset-2 break-all">gloria@irvineneurorehab.com</a></p>
            <p className="mt-2 text-sm text-[var(--color-muted)]">Gloria Jackson, Office Manager.</p>
          </div>
          <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-cream)] p-8">
            <h2 className="font-cormorant text-3xl text-[var(--color-primary)]">Phone</h2>
            <p className="mt-3"><a href="tel:+12484152500" className="text-2xl font-semibold text-[var(--color-ink)]">(248) 415-2500</a></p>
            <p className="mt-2 text-sm text-[var(--color-muted)]">Mon to Thu, 9:00am to 5:00pm. Fri, 9:00am to 12:00pm.</p>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-6xl mx-auto px-6 grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-cormorant text-4xl text-[var(--color-ink)]">Programs on One Campus</h2>
            <p className="mt-4 text-[var(--color-muted)] leading-relaxed">Outpatient therapy and residential programs at 25700 Lahser Road, Southfield. Our multi-disciplinary team includes physical, occupational and speech therapy, nursing, counseling and case management.</p>
            <ul className="mt-6 grid sm:grid-cols-2 gap-3">
              {programs.map(([label, href]) => (
                <li key={href}><a href={href} className="block rounded-xl bg-white border border-[var(--color-border)] px-4 py-3 text-[var(--color-ink)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-colors">{label} →</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-cormorant text-4xl text-[var(--color-ink)]">Coverage</h2>
            <p className="mt-4 text-[var(--color-muted)] leading-relaxed">We work with these plans and programs. Some services are billed to insurance and some are paid directly, so tell us which service the referral is for.</p>
            <ul className="mt-6 grid sm:grid-cols-2 gap-3">
              {PLANS.map((p) => (
                <li key={p} className="rounded-xl bg-white border border-[var(--color-border)] px-4 py-3 text-[var(--color-ink)]">{p}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl text-[var(--color-ink)]">Helpful to Include</h2>
          <ul className="mt-6 space-y-3 text-[var(--color-ink)] list-disc pl-6">
            <li>The patient’s name, date of birth and a phone number</li>
            <li>Insurance or payer information</li>
            <li>The diagnosis and the reason for the referral</li>
            <li>Whether you are asking about outpatient therapy or a residential program</li>
            <li>Your name and a number where our team can reach you</li>
          </ul>
          <p className="mt-6 text-sm text-[var(--color-muted)]">Our office will ask for anything else it needs. Please send records by fax or email, not through this website’s forms.</p>
        </div>
      </section>
    </main>
  )
}

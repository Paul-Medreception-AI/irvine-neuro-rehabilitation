import type { Metadata } from 'next'
import SplitHero from '@/components/SplitHero'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'FAQ | Irvine Neuro Rehabilitation in Southfield, MI',
  description: 'Answers to common questions about neuro rehabilitation, therapy programs, head injury recovery, consultations and what to expect at Irvine Neuro Rehabilitation.',
  alternates: { canonical: '/faq' },
  openGraph: {
    title: 'FAQ | Irvine Neuro Rehabilitation in Southfield, MI',
    description: 'Answers to common questions about neuro rehabilitation, therapy programs, head injury recovery, consultations and what to expect at Irvine Neuro Rehabilitation.',
    url: 'https://irvineneurorehabilitation.com/faq',
    siteName: 'Irvine Neuro Rehabilitation',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'FAQ | Irvine Neuro Rehabilitation in Southfield, MI',
    description: 'Answers to common questions about neuro rehabilitation, therapy programs, head injury recovery, consultations and what to expect at Irvine Neuro Rehabilitation.',
  },
}

const faqs = [
  {
    q: 'Are you accepting new patients?',
    a: 'Yes, we are accepting new patients. Based upon your availability, we should be able to see you within 7 days. Call (248) 415-2500 or send us a message.',
  },
  {
    q: 'Do you offer transportation?',
    a: 'Yes, we provide transportation within 5 miles.',
  },
  {
    q: 'How do I send a referral?',
    a: 'Please fax referrals to (248) 415-2510, or email them to Gloria Jackson, our Office Manager, at gloria@irvineneurorehab.com.',
  },
  {
    q: 'Can I tour the campus?',
    a: 'Yes. Call (248) 415-2500 or use the contact form to schedule a tour of our Lahser Road campus in Southfield.',
  },
  {
    q: 'Is Irvine accredited?',
    a: 'Yes. Our program is licensed by the State of Michigan and accredited by CARF, the Commission on Accreditation of Rehabilitation Facilities.',
  },
  {
    q: 'What is neuro rehabilitation?',
    a: 'Neuro rehabilitation is a form of care that helps people recover function after an injury or illness affecting the brain or nervous system. It can address movement, daily living skills, communication, thinking, mood and confidence. At Irvine Neuro Rehabilitation, programs are shaped around your needs, your physical condition and your personal goals rather than a one-size-fits-all plan.',
  },
  {
    q: 'What services does Irvine Neuro Rehabilitation offer?',
    a: 'We offer 17 programs, including residential rehabilitation, physical therapy, occupational therapy, speech and language pathology, recreational and pool (aquatic) therapy, nursing care, counseling, case management, a cognitive day group, respite care and semi-independent apartment living. We see outpatients for therapy, and we also have residential programs on our Southfield campus. There is no charge for a consultation.',
  },
  {
    q: 'What does the free consultation involve?',
    a: 'The free consultation is an in-person visit at our Lahser Road campus in Southfield, and it includes a tour. We talk about your story, your concerns and what you hope to achieve, answer your questions and explain how our programs may fit your needs. There is no charge.',
  },
  {
    q: 'How do I schedule a consultation or appointment?',
    a: 'The simplest way is to call our office at (248) 415-2500 or use the contact form on our website. Tell us a little about your situation and which service interests you, and our team will follow up with next steps. If you are unsure which program fits, choose the free consultation option and we will help you sort it out.',
  },
  {
    q: 'Are you accepting new patients?',
    a: 'Availability can change, so we recommend calling the office at (248) 415-2500 to ask about current openings. Our team can tell you what to expect and how soon an initial conversation might be arranged. Please do not hesitate to reach out even if you are still in the early stages of deciding.',
  },
  {
    q: 'What insurance do you accept?',
    a: 'Coverage varies widely depending on your plan, your diagnosis and the type of therapy involved. We do not want to give you inaccurate information here, so please call us at (248) 415-2500 to ask about insurance and payment questions. It also helps to contact your insurance carrier to ask what rehabilitation benefits your plan includes.',
  },
  {
    q: 'How much does treatment cost?',
    a: 'Costs depend on the services involved and on your individual coverage, so we do not list fees on our website. The best step is to call our office at (248) 415-2500 and speak with our team about your situation. Starting with the free consultation is also a good way to understand your options before making any decisions.',
  },
  {
    q: 'Do I need a referral?',
    a: 'Requirements for referrals can depend on your insurance plan and the type of service you are seeking. Some plans ask for a physician referral or authorization, while others do not. Call our office at (248) 415-2500 and we can help you understand what may be needed. Your primary care doctor or specialist can also advise you.',
  },
  {
    q: 'What should I expect at my first visit?',
    a: 'Expect a conversation focused on you: your history, your daily routines, your challenges and what matters most to you. Our team uses this information to begin building a personalized plan. You are welcome to bring questions, and family members or caregivers are encouraged to be part of the discussion if you wish.',
  },
  {
    q: 'What should I bring to my appointment?',
    a: 'It is helpful to bring a list of your current medications, any relevant medical records or imaging reports, and your insurance information. Writing down your questions and goals beforehand can make the conversation more productive. If you are not sure what applies to you, call us at (248) 415-2500 and we can advise.',
  },
  {
    q: 'How is a personalized plan created?',
    a: 'After listening to your story and goals, our team builds a holistic plan specific to your needs and physical condition. Your goals guide every part of the program, from the types of therapy used to the activities practiced in sessions. As you progress, the plan is adjusted so that your care continues to match where you are in recovery.',
  },
  {
    q: 'What is occupational therapy, and how can it help?',
    a: 'Occupational therapy helps you independently complete the daily activities you need to, want to and are expected to do. This might include self-care, household tasks, work-related skills or hobbies. Treatment is tailored to your routines, abilities and goals, with the aim of building greater independence in everyday life.',
  },
  {
    q: 'What does physical therapy focus on?',
    a: 'Physical therapy focuses on preventing impairments and disabilities related to movement, function and health. It can address issues such as strength, balance, mobility and coordination. Each plan targets your specific physical condition and is adjusted as your abilities change.',
  },
  {
    q: 'What is recreational therapy?',
    a: 'Recreational therapy uses meaningful activities to support recovery, confidence and engagement in daily life. Rather than repetitive exercises alone, sessions are designed around your interests and personal goals. Many people find that enjoyable, purposeful activity helps them stay motivated and reconnect with things they value.',
  },
  {
    q: 'How do you support people recovering from a head injury?',
    a: 'We understand the concerns that follow a brain injury and approach recovery with compassion. Care is individualized to help you get your lifestyle back, and may combine several types of therapy depending on your needs. Our team also recognizes that families are affected, and we aim to support them throughout the process.',
  },
  {
    q: 'Can family members or caregivers be involved?',
    a: 'Yes. Our approach is compassionate and family-centered, and we have served patients and families since 1986. With your permission, family members and caregivers can take part in conversations about goals and progress. Their insight often helps the team understand daily challenges and support recovery at home.',
  },
  {
    q: 'Should I keep taking my medications during therapy?',
    a: 'Continue taking your medications as prescribed by your physician unless a doctor tells you otherwise. Therapy does not replace medical treatment, and any medication changes should come from your prescribing clinician. Please share your medication list with our team so they understand your overall health picture. If you have questions, call us at (248) 415-2500.',
  },
  {
    q: 'How long does recovery take?',
    a: 'Recovery timelines vary a great deal depending on the type and severity of the condition, your overall health and your goals. We do not promise specific outcomes or timeframes. What we can do is build a plan around your needs and adjust your care as you progress, so you always know where you stand and what comes next.',
  },
  {
    q: 'What if I need to reschedule or miss an appointment?',
    a: 'Please contact our office as early as you can by calling (248) 415-2500. Our team can talk with you about rescheduling and answer any questions about scheduling policies. We understand that recovery can involve unexpected challenges, and we encourage you to keep us informed.',
  },
]

export default function FAQPage() {
  return (
    <main>
      <SplitHero src="/images/stock/hub-faq.jpg" alt="An older man talking with a clinician in a bright office">
        <div>
          <nav className="text-sm text-white/70 mb-6 flex justify-start gap-2">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>›</span>
            <span className="text-white">FAQ</span>
          </nav>
          <h1 className="font-cormorant text-5xl font-light mb-4">Frequently Asked Questions</h1>
          <p className="text-lg text-white/80">Everything you need to know about our practice and services</p>
        </div>
      </SplitHero>

      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-4xl mx-auto px-6">
          {faqs.map((f) => (
            <details key={f.q} className="animate-fade-up group border border-[var(--color-border)] rounded-xl mb-3 bg-white">
              <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-cormorant text-xl list-none flex justify-between items-center gap-4">
                <span>{f.q}</span>
                <svg className="w-5 h-5 shrink-0 text-[var(--color-accent)] transition-transform group-open:rotate-180" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed text-sm">{f.a}</div>
            </details>
          ))}
        </div>
      </section>

      <section className="bg-[var(--color-ink)] text-white py-20 text-center">
        <div className="max-w-3xl mx-auto px-6 animate-fade-up">
          <h2 className="font-cormorant text-4xl font-light mb-4">Still Have Questions?</h2>
          <p className="text-white/80 mb-8">Call (248) 415-2500 or send us a message. We are glad to talk through your goals and concerns.</p>
          <Link href="/contact" className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] border border-white/40 text-white px-8 py-4 rounded-lg font-semibold transition-colors">
            Request a Free Consultation
          </Link>
        </div>
      </section>
    </main>
  )
}
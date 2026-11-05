import type { Metadata } from 'next'
import SplitHero from '@/components/SplitHero'

export const metadata: Metadata = {
  title: 'Individual vs Group Therapy: Which Fits Your Recovery?',
  description: 'Compare individual and group therapy sessions side by side: effectiveness, cost, time commitment and who each format suits best during recovery.',
  alternates: { canonical: '/compare/individual-vs-group-therapy' },
  openGraph: {
    title: 'Individual vs Group Therapy: Which Fits Your Recovery?',
    description: 'Compare individual and group therapy sessions side by side: effectiveness, cost, time commitment and who each format suits best during recovery.',
    url: 'https://www.irvineneurorehabilitation.com/compare/individual-vs-group-therapy',
    siteName: 'Irvine Neuro Rehabilitation',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Individual vs Group Therapy: Which Fits Your Recovery?',
    description: 'Compare individual and group therapy sessions side by side: effectiveness, cost, time commitment and who each format suits best during recovery.',
  },
}

const rows = [
  { label: 'Effectiveness', a: 'Care is tailored to your specific goals, history and pace. Well suited to complex or highly personal concerns.', b: 'Peer support, shared practice and feedback. Research supports group formats for many concerns, especially social and coping skills.' },
  { label: 'Side effects', a: 'No medical side effects. Discussing sensitive topics can be emotionally tiring at first.', b: 'No medical side effects. Sharing in front of others can feel uncomfortable, and attention is divided among members.' },
  { label: 'Cost', a: 'Typically billed per session. Copays and deductibles may apply depending on your coverage.', b: 'Often lower per session because the clinician’s time is shared. Copays and deductibles may still apply.' },
  { label: 'Time commitment', a: 'Regular one-on-one appointments, with scheduling that can often be adjusted to your needs.', b: 'Fixed meeting times and a set group rhythm, often over a series of weeks.' },
  { label: 'Best for', a: 'People wanting privacy, focused attention, or work on specific skills or complex needs.', b: 'People who benefit from community, shared experience and practicing skills with others.' },
]

const faqs = [
  { q: 'Is individual therapy more effective than group therapy?', a: 'Neither is better for everyone. Research shows both can be effective, and the better fit depends on your goals, comfort level and the type of concern being addressed.' },
  { q: 'Can I do both individual and group therapy?', a: 'Yes. Many people combine the two, using individual sessions for personal goals and group sessions for peer support and practice. Your care team can help you plan a combination.' },
  { q: 'Will I have to share personal details in a group?', a: 'Group members usually share at their own comfort level. A facilitator guides the conversation, and you can ask about expectations before joining.' },
  { q: 'How do I know which format to start with?', a: 'Start by considering your goals, your need for privacy, and your schedule. A conversation with a clinician can help you choose and adjust over time.' },
  { q: 'Does insurance cover both formats?', a: 'Coverage varies by plan and by service. Call our office at (248) 415-2500 to talk through your questions, and check your plan’s benefits with your insurer.' },
]

const Check = () => (
  <svg className="w-5 h-5 shrink-0 mt-0.5 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
)

export default function Page() {
  const aList = ['You want private, one-on-one attention', 'Your concerns are complex or sensitive', 'You need a plan tailored closely to your goals', 'You prefer flexibility in the pace of your care']
  const bList = ['You want to connect with others who understand', 'You want to practice skills in a social setting', 'You value shared experience and encouragement', 'You are comfortable with a set schedule']
  return (
    <main>
      <SplitHero src="/images/stock/compare-individual-vs-group-therapy.jpg" alt="A man having a counseling session with a therapist in a modern office setting.">
        <div className="animate-fade-up">
          <nav className="text-sm mb-6 text-[var(--color-light)]">Home › Resources › Comparison</nav>
          <h1 className="font-cormorant text-5xl font-light">Individual vs Group Therapy Sessions: Which Fits Your Recovery?</h1>
          <p className="mt-6 text-lg text-[var(--color-light)] max-w-2xl">A clear look at how each format works, so you can make a confident decision about your care in Southfield, MI.</p>
        </div>
      </SplitHero>


      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl mb-12 text-[var(--color-primary)]">Side-by-Side Comparison</h2>
          <div className="rounded-2xl overflow-hidden border border-[var(--color-border)] animate-fade-up">
            <div className="grid grid-cols-3 bg-[var(--color-primary)] text-white font-semibold">
              <div className="p-4">Factor</div>
              <div className="p-4">Individual Therapy</div>
              <div className="p-4">Group Therapy</div>
            </div>
            {rows.map((r, i) => (
              <div key={r.label} className={`grid grid-cols-3 text-[var(--color-ink)] ${i % 2 === 0 ? 'bg-white' : 'bg-[var(--color-light)]'}`}>
                <div className="p-4 font-semibold text-[var(--color-primary)]">{r.label}</div>
                <div className="p-4 text-sm">{r.a}</div>
                <div className="p-4 text-sm">{r.b}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-[var(--color-ink)]">
          <div className="animate-fade-up">
            <h2 className="font-cormorant text-4xl mb-6 text-[var(--color-primary)]">Individual Therapy</h2>
            <p className="mb-4">Individual therapy is a one-on-one relationship between you and a clinician. Sessions focus entirely on your history, symptoms and goals, so the approach can be adjusted as your needs change.</p>
            <p className="mb-4">Evidence supports individual therapy across many concerns, including mood, anxiety, adjustment after illness or injury, and skill rebuilding. The consistent one-to-one relationship is often cited as a helpful factor.</p>
            <p className="mb-12">A typical patient values privacy, has complex or sensitive concerns, or needs focused work. Expect an initial conversation about goals, then regular sessions with practical steps to work on between visits.</p>
          </div>
          <div className="animate-fade-up">
            <h2 className="font-cormorant text-4xl mb-6 text-[var(--color-primary)]">Group Therapy</h2>
            <p className="mb-4">Group therapy brings several people together with a facilitator. Members share experiences, practice skills and learn that they are not alone in what they are facing.</p>
            <p className="mb-4">Research indicates group formats can be effective for many concerns, particularly those involving coping, communication and social connection. Hearing different perspectives can open new ways of approaching challenges.</p>
            <p>A typical participant wants community and accountability and is comfortable learning alongside others. Expect a set meeting rhythm, shared ground rules about confidentiality, and participation at your own comfort level.</p>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-light)] rounded-2xl p-12 max-w-3xl mx-auto my-20 animate-fade-up">
        <h2 className="font-cormorant text-4xl mb-8 text-[var(--color-primary)]">How to Decide</h2>
        <h3 className="font-semibold text-xl mb-3 text-[var(--color-primary)]">Choose individual therapy if…</h3>
        <ul className="space-y-2 mb-8 text-[var(--color-ink)]">
          {aList.map((t) => (<li key={t} className="flex gap-3"><Check />{t}</li>))}
        </ul>
        <h3 className="font-semibold text-xl mb-3 text-[var(--color-primary)]">Choose group therapy if…</h3>
        <ul className="space-y-2 text-[var(--color-ink)]">
          {bList.map((t) => (<li key={t} className="flex gap-3"><Check />{t}</li>))}
        </ul>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl mb-8 text-[var(--color-primary)]">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((f) => (
              <details key={f.q} className="border border-[var(--color-border)] rounded-xl p-5 animate-fade-up">
                <summary className="cursor-pointer font-semibold text-[var(--color-primary)]">{f.q}</summary>
                <p className="mt-3 text-[var(--color-ink)]">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-primary)] py-20 text-center text-white">
        <div className="max-w-2xl mx-auto px-6 animate-fade-up">
          <h2 className="font-cormorant text-4xl mb-4">Not sure which is right for you?</h2>
          <p className="mb-8 text-[var(--color-light)]">Talk with our team at Irvine Neuro Rehabilitation in Southfield, MI, or call (248) 415-2500.</p>
          <a href="/contact" className="inline-block rounded-full bg-white text-[var(--color-accent)] px-8 py-3 font-semibold transition-colors hover:bg-[var(--color-light)]">Discuss Your Options</a>
        </div>
      </section>
    </main>
  )
}
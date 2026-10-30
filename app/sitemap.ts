// Written by the MedReception website builder from the site's final route set (code,
// not a model). Data-driven pages are mapped from lib/data, so pages appended there
// are listed automatically.
import type { MetadataRoute } from 'next'
import { SERVICES as DATA_0 } from '../lib/data/services'
import { CONDITIONS as DATA_1 } from '../lib/data/conditions'

type Freq = 'daily' | 'weekly' | 'monthly' | 'yearly'
const BASE = "https://irvineneurorehabilitation.com"
const STATIC: [string, number, Freq][] = [
  ["/", 1.00, 'weekly'],
  ["/about", 0.70, 'monthly'],
  ["/blog", 0.70, 'weekly'],
  ["/blog/adapting-your-home-for-greater-independence", 0.60, 'monthly'],
  ["/blog/aphasia-and-communication-after-stroke", 0.60, 'monthly'],
  ["/blog/balance-and-fall-prevention-after-neurological-conditions", 0.60, 'monthly'],
  ["/blog/caregiver-self-care-during-a-loved-one-s-recovery", 0.60, 'monthly'],
  ["/blog/cerebral-palsy-and-lifelong-therapy-goals", 0.60, 'monthly'],
  ["/blog/cognitive-challenges-after-brain-injury", 0.60, 'monthly'],
  ["/blog/communicating-with-your-therapy-team", 0.60, 'monthly'],
  ["/blog/concussion-recovery-when-to-seek-rehabilitation-support", 0.60, 'monthly'],
  ["/blog/emotional-adjustment-after-a-brain-injury", 0.60, 'monthly'],
  ["/blog/how-families-can-support-a-loved-one-in-rehabilitation", 0.60, 'monthly'],
  ["/blog/how-physical-therapy-supports-movement-after-neurological-in", 0.60, 'monthly'],
  ["/blog/improving-hand-function-after-neurological-injury", 0.60, 'monthly'],
  ["/blog/life-after-stroke-rebuilding-skills-at-home", 0.60, 'monthly'],
  ["/blog/making-therapy-part-of-everyday-life", 0.60, 'monthly'],
  ["/blog/managing-fatigue-during-neurological-recovery", 0.60, 'monthly'],
  ["/blog/multiple-sclerosis-and-rehabilitation-goals", 0.60, 'monthly'],
  ["/blog/occupational-therapy-for-daily-independence", 0.60, 'monthly'],
  ["/blog/parkinson-s-disease-and-staying-active", 0.60, 'monthly'],
  ["/blog/planning-long-term-recovery-with-your-family", 0.60, 'monthly'],
  ["/blog/preparing-for-your-first-rehabilitation-consultation", 0.60, 'monthly'],
  ["/blog/questions-to-ask-when-choosing-a-rehabilitation-provider", 0.60, 'monthly'],
  ["/blog/returning-to-daily-routines-after-injury", 0.60, 'monthly'],
  ["/blog/safe-return-to-community-activities", 0.60, 'monthly'],
  ["/blog/setting-realistic-goals-in-neuro-rehabilitation", 0.60, 'monthly'],
  ["/blog/sleep-and-brain-injury-recovery", 0.60, 'monthly'],
  ["/blog/spinal-cord-injury-and-building-independence", 0.60, 'monthly'],
  ["/blog/staying-motivated-through-a-long-recovery", 0.60, 'monthly'],
  ["/blog/the-role-of-routine-in-neurological-recovery", 0.60, 'monthly'],
  ["/blog/understanding-neuroplasticity-in-rehabilitation", 0.60, 'monthly'],
  ["/blog/understanding-spasticity-and-movement-challenges", 0.60, 'monthly'],
  ["/blog/understanding-traumatic-brain-injury-recovery", 0.60, 'monthly'],
  ["/blog/using-recreation-to-rebuild-confidence", 0.60, 'monthly'],
  ["/blog/vestibular-problems-and-dizziness-explained", 0.60, 'monthly'],
  ["/blog/walking-and-gait-retraining-basics", 0.60, 'monthly'],
  ["/blog/what-a-free-rehabilitation-consultation-includes", 0.60, 'monthly'],
  ["/blog/what-is-recreational-therapy-and-who-can-benefit", 0.60, 'monthly'],
  ["/blog/what-to-expect-from-neuro-rehabilitation-after-a-brain-injur", 0.60, 'monthly'],
  ["/blog/why-holistic-rehabilitation-matters", 0.60, 'monthly'],
  ["/blog/why-one-size-fits-all-rehabilitation-falls-short", 0.60, 'monthly'],
  ["/compare/holistic-vs-standard-rehabilitation", 0.70, 'monthly'],
  ["/compare/individual-vs-group-therapy", 0.70, 'monthly'],
  ["/compare/occupational-therapy-vs-physical-therapy", 0.70, 'monthly'],
  ["/compare/outpatient-vs-inpatient-neuro-rehabilitation", 0.70, 'monthly'],
  ["/compare/recreational-therapy-vs-exercise-therapy", 0.70, 'monthly'],
  ["/conditions", 0.90, 'weekly'],
  ["/contact", 0.70, 'monthly'],
  ["/faq", 0.70, 'monthly'],
  ["/insurance", 0.70, 'monthly'],
  ["/locations/southfield-mi", 0.80, 'monthly'],
  ["/new-patients", 0.70, 'monthly'],
  ["/patient-form-sms", 0.30, 'yearly'],
  ["/privacy-sms", 0.30, 'yearly'],
  ["/reviews", 0.70, 'monthly'],
  ["/services", 0.90, 'weekly'],
  ["/team", 0.70, 'monthly'],
  ["/telehealth", 0.70, 'monthly'],
  ["/terms-sms", 0.30, 'yearly'],
]

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const seen = new Set<string>()
  const out: MetadataRoute.Sitemap = []
  const add = (path: string, priority: number, changeFrequency: Freq) => {
    if (seen.has(path)) return
    seen.add(path)
    // With no origin (no usable target_domain) the URLs stay root-relative: '/' for home, never ''.
    out.push({ url: BASE ? BASE + (path === '/' ? '' : path) : path, lastModified: now, changeFrequency, priority })
  }
  for (const [path, priority, freq] of STATIC) add(path, priority, freq)
  for (const x of DATA_0) add("/services/" + x.slug, 0.85, 'monthly')
  for (const x of DATA_1) add("/conditions/" + x.slug, 0.85, 'monthly')
  return out
}

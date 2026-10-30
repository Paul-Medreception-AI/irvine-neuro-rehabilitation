// Irvine Neuro Rehabilitation's team. WHO is listed comes from the practice's own current records
// in MedReception Studio (2026-10-30), which the phone receptionist answers from; names, credentials
// and headshots are as shown on the practice's own "Our Team" page (irvineneurorehabilitation.com/
// our-team/). Roles for Dr. Ruza and Bill Thornton are from the practice's older team page; Gloria
// Jackson's is from Studio. Credentials are expanded to their standard meaning only.
// People on the old website but NOT in Studio's current list (Karen Dawson, Milieu Hall, Melissa
// Ingram) are left out until the practice confirms them.
export type TeamMember = { name: string; credentials: string | null; role: string | null; photo: string | null }

export const TEAM: TeamMember[] = [
  { name: 'Megan Gillard', credentials: 'MPT', role: 'Clinical Director', photo: '/images/team/megan-gillard.jpg' },
  { name: 'Theodore Ruza', credentials: 'DO', role: 'Medical Director', photo: null },
  { name: 'Bill Thornton', credentials: null, role: 'Director of Physical Therapy', photo: null },
  { name: 'Gloria Jackson', credentials: null, role: 'Office Manager', photo: '/images/team/gloria-jackson.jpg' },
  { name: 'Christina Betz', credentials: 'PTA', role: 'Physical Therapist Assistant', photo: '/images/team/christina-betz.jpg' },
  { name: 'Cynthia Bantom', credentials: 'OTR', role: 'Registered Occupational Therapist', photo: '/images/team/cynthia-bantom.jpg' },
  { name: 'Delta Scott', credentials: 'PTA', role: 'Physical Therapist Assistant', photo: '/images/team/delta-scott.jpg' },
  { name: 'Jaquita Lovelace', credentials: 'OTR', role: 'Registered Occupational Therapist', photo: '/images/team/jaquita-lovelace.jpg' },
  { name: 'Supryi Joshi', credentials: 'MPT', role: 'Physical Therapist', photo: '/images/team/supryi-joshi.jpg' },
  { name: 'Nadine Sompako', credentials: 'PTA', role: 'Physical Therapist Assistant', photo: '/images/team/nadine-sompako.jpg' },
  { name: 'Michelle Honoway', credentials: 'MA, LPC', role: 'Licensed Professional Counselor', photo: '/images/team/michelle-honoway.jpg' },
  { name: 'Celeste Cole', credentials: 'MA, LLPC', role: 'Limited Licensed Professional Counselor', photo: null },
  { name: 'Olesa Allen', credentials: 'LMT', role: 'Licensed Massage Therapist', photo: '/images/team/olesa-allen.jpg' },
  { name: 'Patricia Parker', credentials: 'BS, LMT', role: 'Licensed Massage Therapist', photo: '/images/team/patricia-parker.jpg' },
]

// The practice's own patient comments, verbatim from its homepage testimonial slider (first initial
// and surname as shown there). Nothing is added; one comment ("It works.!") is left out.
export const TESTIMONIALS: { quote: string; name: string }[] = [
  { quote: 'Very well organized. Friendly. Therapy is suited to the individual.', name: 'K. Dunn' },
  { quote: 'They have helped me so much. I would definitely recommend Irvine. Irvine is a good place to be if you’re in rehab.', name: 'C. Harris' },
  { quote: 'The Staff at Irvine help me with my disability. I feel like I am at home.', name: 'Gabby S.' },
  { quote: 'Irvine feels like family. They push and motivate you to bring out the best.', name: 'L. Carr' },
]

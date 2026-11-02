// Interviews Irvine filmed with its own staff, sent by the practice for the website (2026-11-02).
// Served from /public/videos as 720p H.264 with faststart, so they start playing before the
// whole file arrives.
//
// They were recorded during the COVID-19 pandemic and the speakers talk about it, so every
// place that shows one says when it was filmed (VIDEO_DATE_NOTE). Without that, a line such as
// "no occurrences of COVID within the inpatient setting" would read as a claim about today.
//
// Names and credentials are checked against the NPI registry: Theodore J. Ruza, DO and Marsha
// Carr, MA, CCC-SLP. Megan is captioned by first name only: her original slate says "Megan
// Gordon" while the practice's team list has Megan Gillard, and nothing yet says which is right.
// The original files carried a spoken name slate before the first answer; it is trimmed off.
export type StaffVideo = {
  src: string
  poster: string
  name: string
  role: string
  title: string
  summary: string
}

export const VIDEO_DATE_NOTE = 'Filmed during the COVID-19 pandemic.'

export const STAFF_VIDEOS = {
  ruza: {
    src: '/videos/dr-theodore-ruza.mp4',
    poster: '/videos/dr-theodore-ruza.jpg',
    name: 'Dr. Theodore Ruza, DO',
    role: 'Medical Director',
    title: 'A complete program under one roof',
    summary:
      'Dr. Ruza on the therapies and the medical and psychiatric care that work together here, staff on site around the clock, and why families and guardians are part of every team meeting.',
  },
  megan: {
    src: '/videos/megan.mp4',
    poster: '/videos/megan.jpg',
    name: 'Megan',
    role: 'Longtime member of the Irvine team',
    title: 'A place where clients are accepted',
    summary:
      'Megan on the leadership behind Irvine, and on a community where clients are cared for, welcomed and treated like family.',
  },
  marsha: {
    src: '/videos/marsha-carr.mp4',
    poster: '/videos/marsha-carr.jpg',
    name: 'Marsha Carr, MA, CCC-SLP',
    role: 'Speech-Language Pathologist',
    title: 'Speech therapy built around each person',
    summary:
      'Marsha on shaping speech therapy to each client, from people who are nonverbal to people rebuilding full conversation, and on helping families adjust too.',
  },
} satisfies Record<string, StaffVideo>

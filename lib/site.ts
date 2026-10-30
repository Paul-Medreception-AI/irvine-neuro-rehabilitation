// Practice facts the Studio forms and their server routes read. Written by the MedReception
// website builder in code (src/lib/studioPathway.js) from the build's resolved contact facts.
// A value the build did not know is null and the forms leave it out: nothing here is invented.
export const SITE: {
  name: string
  legalName: string | null
  phone: string | null
  phoneHref: string | null
  email: string | null
  domain: string | null
  origins: string[]
  behavioralHealth: boolean
} = {
  name: "Irvine Neuro Rehabilitation",
  legalName: null,
  phone: "(248) 415-2500",
  phoneHref: "tel:+12484152500",
  email: null,
  domain: "irvineneurorehabilitation.com",
  origins: ["https://irvineneurorehabilitation.com","https://www.irvineneurorehabilitation.com"],
  behavioralHealth: false,
}

// The brand colours, for the plain HTML page /api/contact answers a no-JavaScript post with.
export const COLORS = {"primary":"#2b2b4f","dark":"#1c1c33","light":"#dfdfe5","ink":"#1a2030","cream":"#f9f9fa","muted":"#64748b","border":"#d5d9ea","accent":"#2b2b4f"}

export const PHONE_PLACEHOLDER = "(248) 555-0123"

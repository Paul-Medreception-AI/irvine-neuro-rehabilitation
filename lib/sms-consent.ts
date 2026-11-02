/**
 * The exact sentence a patient agrees to when they opt in to text messages, beside its checkbox.
 *
 * 🔴 This string is the evidence. A carrier reviewer, or a TCPA complaint, asks what the patient
 * actually agreed to, so it is defined in ONE place, rendered next to its checkbox, and
 * snapshotted verbatim into the opt-in record at the moment of consent. If you edit it, you are
 * changing what every future opt-in record says; records already taken keep the wording they
 * were given, because the server stores the text it received rather than re-reading this file.
 *
 * ⚠️ It is also quoted word for word in the A2P campaign's message flow. Written by the
 * MedReception website builder (src/lib/studioPathway.js) from the carrier-approved template
 * (gables-pain, campaign CIJGQ83, approved 2026-09-24); only the business name differs.
 *
 * 🔴 ONE box, for appointment and care messages only (2026-11-02). The builder's second box,
 * consent to marketing and promotional texts, was removed: this practice's A2P campaign
 * (CLKQROX) is registered for patient-care messages with no marketing, and a campaign's use
 * case cannot be changed once it is filed. Carriers reject a sign-up form that asks for
 * marketing consent under a campaign that declares none (code 602: the call to action does not
 * match the use case). Do not put a marketing box back without a campaign that declares
 * marketing.
 *
 * The box is optional and never pre-checked: carriers refuse a form that forces consent.
 */
export const SMS_CONSENT_NON_MARKETING_TEXT =
  "By checking this box, I consent to receive non-marketing text messages from Irvine Neuro Rehabilitation related to my appointments, services, or account. These messages may include appointment reminders, confirmations, care instructions, and account notifications. Message frequency varies. Message and data rates may apply. Reply HELP for help or STOP to opt out at any time."

// A call button that is always on screen on phones (below lg). The MedReception widget launcher
// (#medreception-widget-host, inline bottom:24px) is lifted above it in globals.css, and the body
// gets matching bottom padding in layout.tsx so the footer is never hidden behind the bar.
export default function MobileCallBar() {
  return (
    <div className="lg:hidden fixed inset-x-0 bottom-0 z-40 bg-white/95 backdrop-blur border-t border-[var(--color-border)] shadow-[0_-4px_16px_rgba(0,0,0,0.08)]">
      <div className="grid grid-cols-2 gap-3 px-4 py-3">
        <a href="tel:+12484152500" className="flex items-center justify-center gap-2 rounded-xl bg-[var(--color-primary)] text-white font-semibold py-3 text-sm">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h2.5l1.5 4-2 1.5a11 11 0 006 6L16.5 13l4 1.5V17a2 2 0 01-2 2A15 15 0 013 5z" /></svg>
          Call Now
        </a>
        <a href="/contact" className="flex items-center justify-center rounded-xl border-2 border-[var(--color-primary)] text-[var(--color-primary)] font-semibold py-3 text-sm">
          Free Consultation
        </a>
      </div>
    </div>
  )
}

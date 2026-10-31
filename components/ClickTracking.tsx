'use client'

import { useEffect } from 'react'

// GA4 events for the actions that matter, so changes to the site can be judged by what visitors
// do: phone_click (any tel: link), email_click (any mailto:), consultation_click (a link to the
// consultation form). The contact form itself fires contact_form_submit (components/ContactForm).
// One delegated listener, nothing sent when GA is not loaded.
export default function ClickTracking() {
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const a = (e.target as HTMLElement | null)?.closest?.('a') as HTMLAnchorElement | null
      if (!a) return
      const href = a.getAttribute('href') || ''
      const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag
      if (!gtag) return
      const params = { page_path: window.location.pathname, link_text: (a.textContent || '').trim().slice(0, 60) }
      if (href.startsWith('tel:')) gtag('event', 'phone_click', params)
      else if (href.startsWith('mailto:')) gtag('event', 'email_click', params)
      else if (href === '/contact' || href.endsWith('#consultation') || href === '/refer') gtag('event', 'consultation_click', { ...params, link_url: href })
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])
  return null
}

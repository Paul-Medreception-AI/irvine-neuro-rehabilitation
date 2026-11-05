import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import './globals.css'
import Script from 'next/script'
import SiteHeader from '../components/SiteHeader'
import MobileCallBar from '../components/MobileCallBar'
import ClickTracking from '../components/ClickTracking'

import { GoogleAnalytics } from '@next/third-parties/google'
const cormorant = Cormorant_Garamond({ subsets: ['latin'], weight: ['300','400','500','600','700'], variable: '--font-cormorant' })
const dmSans = DM_Sans({ subsets: ['latin'], weight: ['300','400','500','600'], variable: '--font-dm-sans' })

const siteTitle = 'Irvine Neuro Rehabilitation | Rehabilitation in Southfield, MI'
const siteDescription = 'Since 1986, Irvine Neuro Rehabilitation has served patients and families with compassion and understanding. Our holistic programs are shaped around your needs and physical condition, never a one-size-fits-all plan.'


const GA_ID = process.env.NEXT_PUBLIC_GA_ID

export const metadata: Metadata = {
  verification: { google: 'CD8xRi7kLa6I4aDk3_CWfq2cx_KFfPkIsxQGCrp3Uz0' },
  title: siteTitle,
  description: siteDescription,
  metadataBase: new URL('https://irvineneurorehabilitation.com'),
  icons: {
    icon: [{ url: '/favicon.ico' }, { url: '/favicon.png', type: 'image/png' }],
    apple: '/favicon.png',
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: 'https://irvineneurorehabilitation.com',
    siteName: 'Irvine Neuro Rehabilitation',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: siteTitle,
    description: siteDescription,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="font-sans bg-[var(--color-cream)] text-[var(--color-ink)] pb-[72px] lg:pb-0">
        <SiteHeader />
        <div id="content">{children}</div>
        <footer className="bg-[var(--color-ink)] text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div>
                <a href="/" className="inline-block" aria-label="Irvine Neuro Rehabilitation, home"><img src="/logo-white.png" alt="Irvine Neuro Rehabilitation" className="h-[66px] w-auto max-w-full" /></a>
                <p className="mt-4 text-white/70 text-sm">Rehabilitation, physical therapy and residential care in Southfield, Michigan since 1986. Licensed by the State of Michigan. Our residential Brain Injury Specialty Program is CARF accredited.</p>
                <a href="https://www.carf.org" target="_blank" rel="noopener noreferrer" aria-label="CARF accredited, visit carf.org" className="inline-block mt-4"><img src="/images/carf-seal.png" alt="CARF Accredited seal" width={56} height={56} className="w-14 h-14" /></a>
                <div className="flex items-center gap-4 mt-6">
                  <a href="https://www.facebook.com/IrvineManor/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-white/70 hover:text-white transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M13.5 22v-8.2h2.8l.5-3.3h-3.3V8.4c0-.9.4-1.7 1.8-1.7h1.600V3.800c-.3 0-1.300-.2-2.500-.2-2.500 0-4.200 1.500-4.200 4.300v2.600H7.400v3.300h2.800V22h3.300z"/></svg>
                  </a>
                  <a href="https://www.instagram.com/irvineneurorehabllc/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white/70 hover:text-white transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7.800 2h8.400A5.800 5.800 0 0122 7.800v8.400a5.800 5.800 0 01-5.800 5.800H7.800A5.800 5.800 0 012 16.200V7.800A5.800 5.800 0 017.800 2zm-.2 2A3.600 3.600 0 004 7.600v8.800A3.600 3.600 0 007.600 20h8.800a3.600 3.600 0 003.600-3.600V7.600A3.600 3.600 0 0016.400 4H7.600zM12 7a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6zm5.200-3.300a1.200 1.200 0 110 2.400 1.200 1.200 0 010-2.400z"/></svg>
                  </a>
                  <a href="https://www.linkedin.com/company/49111151/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-white/70 hover:text-white transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4.900 3a2 2 0 110 4 2 2 0 010-4zM3 9h4v12H3V9zm7 0h3.800v1.700c.6-1 1.900-2 3.900-2 4 0 4.300 2.600 4.300 5.900V21h-4v-5.700c0-1.400 0-3.100-1.900-3.100s-2.200 1.500-2.200 3V21h-4V9z"/></svg>
                  </a>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2 text-sm text-white/70">
                  <li><a href="/services" className="hover:text-white transition-colors">Services</a></li>
                  <li><a href="/conditions" className="hover:text-white transition-colors">Conditions</a></li>
                  <li><a href="/about" className="hover:text-white transition-colors">About</a></li>
                  <li><a href="/team" className="hover:text-white transition-colors">Our Team</a></li>
                  <li><a href="/locations/southfield-mi" className="hover:text-white transition-colors">Our Southfield Campus</a></li>
                  <li><a href="/reviews" className="hover:text-white transition-colors">Patient Reviews</a></li>
                  <li><a href="/refer" className="hover:text-white transition-colors">Refer a Patient</a></li>
                  <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Contact</h3>
                <address className="not-italic text-sm text-white/70 space-y-2">
                  <p>25700 Lahser Road<br />Southfield, Michigan 48033</p>
                  <p>Phone: <a href="tel:+12484152500" className="hover:text-white transition-colors">(248) 415-2500</a></p>
                  <p>Mon to Thu, 9:00am to 5:00pm<br />Fri, 9:00am to 12:00pm</p>
                  <p><a href="https://www.google.com/maps/search/?api=1&query=25700+Lahser+Road+Southfield+MI+48033" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-white">Get directions</a></p>
                </address>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-white/10 text-sm text-white/70">
              <p>This website does not collect protected health information. Please do not send medical details through this website.</p>
              <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2">
                <span>© {new Date().getFullYear()} Irvine Neuro Rehabilitation, L.L.C.</span>
                <span>|</span>
                <a href="/privacy-sms" className="hover:text-white transition-colors">Privacy Policy</a>
                <span>|</span>
                <a href="/terms-sms" className="hover:text-white transition-colors">Terms of Service</a>
                <span>|</span>
                <a href="/terms-sms#sms-terms" className="hover:text-white transition-colors">SMS Terms</a>
                <span>|</span>
                <a href="/patient-form-sms" className="hover:text-white transition-colors">Text Message Sign-Up</a>
              </div>
            </div>
            {/* site-credits:start */}
            <p className="mt-6 text-center sm:text-left text-xs opacity-60">Photos by <a href="https://www.pexels.com" target="_blank" rel="noopener noreferrer" className="underline-offset-2 hover:underline">Pexels</a>{' · '}Website built by <a href="https://www.medreception.ai/" target="_blank" rel="noopener" className="underline-offset-2 hover:underline">MedReception AI</a></p>
            {/* site-credits:end */}
          </div>
        </footer>
        <MobileCallBar />
        <ClickTracking />
        {/* MedReception patient widget: callback, appointment request and the AI chat, filed on
            the practice's Studio board (qa-api lambdaWidget, client id irvine-neuro-rehabilitation). */}
        <Script src="https://widget.medreception.ai/embed.js" data-client-id="irvine-neuro-rehabilitation" strategy="afterInteractive" />
      </body>
      {GA_ID && <GoogleAnalytics gaId={GA_ID} />}

    </html>
  )
}
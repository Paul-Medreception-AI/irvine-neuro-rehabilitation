/** @type {import("next").NextConfig} */
// Written by the MedReception website builder (code, not a model). Redirects run
// BEFORE the filesystem, so no rule here may name a path the site serves; the builder
// checks every source against the final route set and every destination exists.
const nextConfig = {
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
  async redirects() {
    return [
      { source: '/privacy', destination: '/privacy-sms', permanent: true },
      { source: '/privacy-policy', destination: '/privacy-sms', permanent: true },
      { source: '/terms', destination: '/terms-sms', permanent: true },
      { source: '/terms-of-service', destination: '/terms-sms', permanent: true },
      { source: '/sms-terms', destination: '/terms-sms', permanent: true },
      // The old site's URLs that have no page of the same path here.
      { source: '/we-can-recover-your-body-injury-pain-by-exercise', destination: '/', permanent: true },
      { source: '/we-can-recover-your-body-injury-pain-by-exercise-2', destination: '/', permanent: true },
      { source: '/we-can-recover-your-body-injury-pain-by-exercise-3', destination: '/', permanent: true },
      { source: '/sample-page', destination: '/', permanent: true },
      { source: '/shop', destination: '/', permanent: true },
      { source: '/cart', destination: '/', permanent: true },
      { source: '/checkout', destination: '/', permanent: true },
      { source: '/my-account', destination: '/', permanent: true },
      { source: '/wishlist', destination: '/', permanent: true },
      { source: '/mission', destination: '/about', permanent: true },
      { source: '/about-us', destination: '/about', permanent: true },
      { source: '/facilities', destination: '/', permanent: true },
      { source: '/resources', destination: '/blog', permanent: true },
      { source: '/privacy-policy-2', destination: '/privacy-sms', permanent: true },
      { source: '/programs', destination: '/', permanent: true },
      { source: '/our-team-2-2', destination: '/team', permanent: true },
      { source: '/our-team', destination: '/team', permanent: true },
      { source: '/outcome', destination: '/', permanent: true },
      { source: '/category/uncategorized', destination: '/blog', permanent: true },
      { source: '/author/admin', destination: '/team', permanent: true },
    ];
  },
};
module.exports = nextConfig;

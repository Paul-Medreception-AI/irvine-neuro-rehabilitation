import Image from 'next/image'

/**
 * The photograph behind a page's opening section, with the scrim that keeps white copy readable.
 *
 * Drop it in as the FIRST child of a `relative overflow-hidden` section and give the section's
 * content wrapper `relative` so it paints above. The section keeps its own padding, breadcrumbs
 * and headline, so every page keeps its own layout and only gains the photo.
 *
 * The scrim is an inline rgba gradient on purpose: Tailwind cannot put an alpha modifier on an
 * arbitrary var() colour (`from-[var(--color-dark)]/80` compiles to nothing), which is how a
 * bright photo ends up behind white text. The two layers are the site's navy (#1c1c33 / #2b2b4f).
 */
export default function HeroBackdrop({
  src,
  alt,
  position = 'center',
}: {
  src: string
  alt: string
  /** CSS object-position, for photos whose subject is not in the middle. */
  position?: string
}) {
  return (
    <>
      <Image
        src={src}
        alt={alt}
        fill
        priority
        quality={80}
        sizes="100vw"
        className="object-cover"
        style={{ objectPosition: position }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom right, rgba(28,28,51,0.72) 0%, rgba(43,43,79,0.52) 55%, rgba(28,28,51,0.40) 100%)',
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 70% 65% at 50% 50%, rgba(20,20,38,0.42) 0%, rgba(20,20,38,0.18) 60%, rgba(20,20,38,0) 100%)',
        }}
      />
    </>
  )
}

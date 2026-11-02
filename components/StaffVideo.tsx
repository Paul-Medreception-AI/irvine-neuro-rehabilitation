import type { StaffVideo as Video } from '@/lib/data/videos'

/**
 * One of the practice's own staff interviews, self-hosted. preload="none" with a poster frame,
 * so a page with three of these downloads nothing until somebody presses play.
 */
export default function StaffVideo({ video, large = false }: { video: Video; large?: boolean }) {
  return (
    <figure className="animate-fade-up">
      <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-lg bg-black">
        <video
          controls
          preload="none"
          playsInline
          poster={video.poster}
          className="absolute inset-0 h-full w-full object-contain"
          aria-label={`${video.name}: ${video.title}`}
        >
          <source src={video.src} type="video/mp4" />
        </video>
      </div>
      <figcaption className="mt-4">
        <p className={`font-cormorant text-[var(--color-ink)] leading-tight ${large ? 'text-3xl' : 'text-2xl'}`}>{video.title}</p>
        <p className="text-xs sm:text-sm text-[var(--color-primary)] font-semibold uppercase tracking-wide mt-2">
          {video.name} · {video.role}
        </p>
        <p className="text-[var(--color-muted)] leading-relaxed mt-2">{video.summary}</p>
      </figcaption>
    </figure>
  )
}

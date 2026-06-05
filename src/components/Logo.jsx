import { Link } from 'react-router-dom';

export default function Logo({ variant = 'dark' }) {
  const textClass = variant === 'light' ? 'text-white' : 'text-ink';
  const subClass = variant === 'light' ? 'text-white/55' : 'text-muted';

  return (
    <Link to="/" className="group flex items-center gap-3 focus-ring rounded-xl" aria-label="Optilinked home">
      <span className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-2xl bg-brand shadow-glow">
        <span className="absolute inset-1 rounded-xl bg-navy/35" />
        <span className="relative h-4 w-4 rounded-full border-2 border-white/90" />
      </span>
      <span className="leading-none">
        <span className={`block font-heading text-xl font-bold tracking-tight ${textClass}`}>Optilinked</span>
        <span className={`mt-1 hidden text-[11px] font-medium uppercase tracking-[0.18em] sm:block ${subClass}`}>
          AI systems for NGOs
        </span>
      </span>
    </Link>
  );
}

import { Link } from 'react-router-dom';

export default function Logo({ variant = 'dark' }) {
  const textClass = variant === 'light' ? 'text-white' : 'text-ink';
  const subClass = variant === 'light' ? 'text-white/55' : 'text-muted';

  return (
    <Link to="/" className="group flex items-center gap-3 focus-ring rounded-xl" aria-label="Optilinked home">
      <img src="/favicon.svg" alt="" className="h-10 w-10 rounded-2xl" />
      <span className="leading-none">
        <span className={`block font-heading text-xl font-bold tracking-tight ${textClass} transition-colors`}>Optilinked</span>
        <span className={`mt-1 hidden text-[11px] font-medium uppercase tracking-[0.18em] sm:block ${subClass}`}>
          AI systems for NGOs
        </span>
      </span>
    </Link>
  );
}

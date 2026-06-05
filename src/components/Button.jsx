import { Link } from 'react-router-dom';

const base = 'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-bold transition focus-ring';

export function PrimaryButton({ to = '/contact', children, className = '', ...props }) {
  return (
    <Link to={to} className={`${base} bg-brand text-white shadow-glow hover:scale-[1.01] ${className}`} {...props}>
      {children}
    </Link>
  );
}

export function SecondaryButton({ to = '/services', children, dark = false, className = '', ...props }) {
  const styles = dark
    ? 'border border-white/20 bg-white/10 text-white hover:bg-white/15'
    : 'border border-line bg-white text-ink hover:border-blue/40 hover:text-blue';

  return (
    <Link to={to} className={`${base} ${styles} ${className}`} {...props}>
      {children}
    </Link>
  );
}

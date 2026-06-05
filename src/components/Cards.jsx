import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const accentMap = {
  blue: 'from-blue to-blue text-blue bg-blue/10',
  violet: 'from-violet to-magenta text-violet bg-violet/10',
  teal: 'from-teal to-blue text-teal bg-teal/10',
  magenta: 'from-magenta to-violet text-magenta bg-magenta/10',
};

export function IconCircle({ accent = 'blue', children }) {
  const classes = accentMap[accent] || accentMap.blue;
  return (
    <span className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${classes.split(' ').slice(2).join(' ')}`}>
      <span className="text-lg font-black">{children}</span>
    </span>
  );
}

export function OfferCard({ service }) {
  const classes = accentMap[service.accent] || accentMap.blue;
  const gradient = classes.split(' ').slice(0, 2).join(' ');
  const text = classes.split(' ')[2];

  return (
    <article className="card-hover group rounded-[2rem] border border-line bg-white p-7 shadow-card transition hover:border-blue/25">
      <div className={`mb-6 h-1.5 w-20 rounded-full bg-gradient-to-r ${gradient}`} />
      <p className={`text-sm font-extrabold uppercase tracking-[0.18em] ${text}`}>{service.eyebrow}</p>
      <h3 className="mt-3 font-heading text-2xl font-bold tracking-tight text-ink">{service.title}</h3>
      <p className="mt-4 text-base leading-7 text-muted">{service.short}</p>
      <ul className="mt-6 space-y-3">
        {service.included.slice(0, 5).map((item) => (
          <li key={item} className="flex gap-3 text-sm font-medium text-ink">
            <span className={`mt-1 h-2 w-2 shrink-0 rounded-full ${text.replace('text-', 'bg-')}`} />
            {item}
          </li>
        ))}
      </ul>
      <Link to={service.path} className="link-underline mt-7 inline-flex items-center gap-1.5 text-sm font-extrabold text-blue hover:text-violet transition-colors">
        Learn more <ArrowRight className="w-3.5 h-3.5" />
      </Link>
    </article>
  );
}

export function PricingCard({ title, prices, note }) {
  return (
    <div className="rounded-[2rem] border border-line bg-white p-7 shadow-card">
      <h3 className="font-heading text-2xl font-bold tracking-tight">{title}</h3>
      <div className="mt-6 space-y-4">
        {prices.map((price) => (
          <div key={price} className="rounded-2xl border border-line bg-soft p-4 text-sm font-bold text-ink">
            {price}
          </div>
        ))}
      </div>
      {note && <p className="mt-5 text-sm leading-7 text-muted">{note}</p>}
    </div>
  );
}

export function FeatureCard({ title, text, accent = 'blue', children }) {
  const classes = accentMap[accent] || accentMap.blue;
  const textClass = classes.split(' ')[2];
  const bgClass = classes.split(' ')[3];

  return (
    <article className="card-hover rounded-[2rem] border border-line bg-white p-6 shadow-card">
      <div className={`mb-5 inline-flex rounded-2xl px-3 py-2 text-sm font-extrabold ${textClass} ${bgClass}`}>
        {children || title.slice(0, 2)}
      </div>
      <h3 className="font-heading text-xl font-bold tracking-tight">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-muted">{text}</p>
    </article>
  );
}

export function ResourceCard({ item }) {
  return (
    <article className="card-hover rounded-[2rem] border border-line bg-white p-7 shadow-card">
      <span className="rounded-full bg-blue/10 px-3 py-1 text-xs font-extrabold uppercase tracking-[0.14em] text-blue">
        {item.status}
      </span>
      <h3 className="mt-5 font-heading text-xl font-bold tracking-tight">{item.title}</h3>
      <p className="mt-3 text-sm leading-7 text-muted">{item.text}</p>
    </article>
  );
}

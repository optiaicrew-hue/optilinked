import { processSteps } from '../data/site.js';

export default function ProcessSteps({ compact = false }) {
  return (
    <div className={`grid gap-5 ${compact ? 'lg:grid-cols-5' : 'lg:grid-cols-5'}`}>
      {processSteps.map((step, index) => (
        <article key={step.title} className="rounded-[1.75rem] border border-line bg-white p-6 shadow-card">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand text-sm font-black text-white">
            {index + 1}
          </div>
          <h3 className="mt-5 font-heading text-lg font-bold tracking-tight">{step.title}</h3>
          <p className="mt-3 text-sm leading-7 text-muted">{step.text}</p>
        </article>
      ))}
    </div>
  );
}

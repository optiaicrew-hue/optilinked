export default function SectionHeader({ eyebrow, title, text, center = false, light = false }) {
  return (
    <div className={`${center ? 'mx-auto text-center' : ''} max-w-3xl`}>
      {eyebrow && (
        <p className={`mb-4 text-sm font-extrabold uppercase tracking-[0.18em] ${light ? 'text-blue' : 'text-blue'}`}>
          {eyebrow}
        </p>
      )}
      <h2 className={`font-heading text-3xl font-bold tracking-tight sm:text-4xl ${light ? 'text-white' : 'text-ink'}`}>
        {title}
      </h2>
      {text && <p className={`mt-5 text-lg leading-8 ${light ? 'text-white/70' : 'text-muted'}`}>{text}</p>}
    </div>
  );
}

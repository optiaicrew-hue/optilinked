import { PrimaryButton, SecondaryButton } from './Button.jsx';

export default function PageHero({ eyebrow, title, text, primaryText = 'Book Your NGO AI Readiness Audit', secondaryText, secondaryTo = '/services' }) {
  return (
    <section className="relative overflow-hidden bg-navy py-20 text-white sm:py-24">
      <div className="absolute -left-28 top-12 h-72 w-72 rounded-full bg-blue/25 blur-3xl" />
      <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-magenta/20 blur-3xl" />
      <div className="container-pad relative">
        <div className="max-w-4xl">
          {eyebrow && (
            <p className="mb-5 inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold text-white/80">
              {eyebrow}
            </p>
          )}
          <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">{title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">{text}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <PrimaryButton to="/contact">{primaryText}</PrimaryButton>
            {secondaryText && <SecondaryButton to={secondaryTo} dark>{secondaryText}</SecondaryButton>}
          </div>
        </div>
      </div>
    </section>
  );
}

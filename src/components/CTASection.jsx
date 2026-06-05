import { PrimaryButton, SecondaryButton } from './Button.jsx';

export default function CTASection({ title = 'Ready to see where AI support fits your NGO?', text = 'Start with a practical audit and leave with clearer next steps for workflow, content, and fundraising.', secondary = true }) {
  return (
    <section className="bg-navy py-16 text-white">
      <div className="container-pad">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 sm:p-12 lg:p-14">
          <div className="absolute -right-12 -top-12 h-56 w-56 rounded-full bg-brand opacity-30 blur-3xl glow-pulse" />
          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl">
              <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
              <p className="mt-4 text-lg leading-8 text-white/70">{text}</p>
            </div>
            <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <PrimaryButton to="/contact">Book Your NGO AI Readiness Audit</PrimaryButton>
              {secondary && <SecondaryButton to="/services" dark>See the Three NGO Offers</SecondaryButton>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

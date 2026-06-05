import PageHero from '../components/PageHero.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import CTASection from '../components/CTASection.jsx';
import { PrimaryButton } from '../components/Button.jsx';
import { PricingCard } from '../components/Cards.jsx';
import { services } from '../data/site.js';

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Choose the support your NGO needs most right now."
        text="Optilinked helps NGOs save time, show impact, and raise more support with practical AI-supported systems."
        secondaryText="Start With an Audit"
        secondaryTo="/ai-readiness-audit"
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="container-pad">
          <SectionHeader
            center
            eyebrow="All services"
            title="Three focused offers and one complete growth system."
            text="Each service is built to solve a clear NGO problem and create practical assets your team uses."
          />
          <div className="mt-12 space-y-10">
            {services.map((service) => <ServiceDetail key={service.id} service={service} />)}
          </div>
        </div>
      </section>

      <section className="bg-soft py-16 sm:py-20">
        <div className="container-pad">
          <div className="rounded-[2rem] border border-line bg-white p-8 shadow-card lg:p-12">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <SectionHeader
                eyebrow="Complete package"
                title="NGO Growth System"
                text="For NGOs that need long-term structure, better communication, and stronger fundraising support in one practical system."
              />
              <PricingCard
                title="NGO Growth System pricing"
                prices={['Setup: 3,000 to 8,000 USD', 'Monthly support: 1,000 to 3,500 USD', 'Optional milestone bonuses based on agreed deliverables or campaign activity']}
              />
            </div>
            <div className="mt-8">
              <PrimaryButton to="/ngo-growth-system">View NGO Growth System</PrimaryButton>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

function ServiceDetail({ service }) {
  return (
    <article id={service.id} className="scroll-mt-28 rounded-[2rem] border border-line bg-soft p-6 shadow-card lg:p-9">
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-blue">{service.eyebrow}</p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight">{service.title}</h2>
          <p className="mt-5 text-base leading-8 text-muted">{service.short}</p>
          <div className="mt-6 rounded-3xl border border-line bg-white p-5">
            <h3 className="font-heading text-lg font-bold">Problem solved</h3>
            <p className="mt-2 text-sm leading-7 text-muted">{service.problem}</p>
          </div>
          <div className="mt-5 rounded-3xl border border-line bg-white p-5">
            <h3 className="font-heading text-lg font-bold">Best fit</h3>
            <p className="mt-2 text-sm leading-7 text-muted">{service.bestFit}</p>
          </div>
          <div className="mt-6">
            <PrimaryButton to="/contact">Book an AI Readiness Audit</PrimaryButton>
          </div>
        </div>
        <div className="grid gap-6 lg:grid-cols-[1fr_0.85fr]">
          <div className="rounded-[2rem] border border-line bg-white p-6">
            <h3 className="font-heading text-xl font-bold">What is included</h3>
            <ul className="mt-5 grid gap-3">
              {service.included.map((item) => (
                <li key={item} className="flex gap-3 text-sm font-semibold text-ink">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-blue" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <PricingCard title="Pricing" prices={service.pricing} />
        </div>
      </div>
    </article>
  );
}

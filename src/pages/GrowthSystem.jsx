import PageHero from '../components/PageHero.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import CTASection from '../components/CTASection.jsx';
import { PricingCard, FeatureCard } from '../components/Cards.jsx';

export default function GrowthSystem() {
  return (
    <>
      <PageHero
        eyebrow="NGO Growth System"
        title="Organize your work, show your impact, and raise more support with one practical AI-supported system."
        text="The NGO Growth System combines workflow setup, content systems, and fundraising campaign support for NGOs that need long-term structure."
        primaryText="Book a Strategy Call"
        secondaryText="See All Services"
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="container-pad">
          <SectionHeader center eyebrow="Complete package" title="One system, three connected outcomes." />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <FeatureCard title="AI Workflow Setup" text="Reduce admin pressure with reusable prompts, templates, planning systems, and team workflow support." accent="blue">01</FeatureCard>
            <FeatureCard title="Social Impact Content Engine" text="Turn NGO work into social posts, newsletters, campaign captions, donor updates, and impact stories." accent="violet">02</FeatureCard>
            <FeatureCard title="Fundraising Campaign Accelerator" text="Build campaign structure, donor follow-up, sponsor outreach, content, and reporting." accent="teal">03</FeatureCard>
          </div>
        </div>
      </section>

      <section className="bg-soft py-16 sm:py-20">
        <div className="container-pad grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-start">
          <div className="rounded-[2rem] border border-line bg-white p-8 shadow-card lg:p-10">
            <SectionHeader
              eyebrow="Best fit"
              title="For NGOs that need more than one isolated service."
              text="The Growth System is best for NGOs that want one connected system across internal work, public visibility, donor trust, and campaign execution."
            />
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {['Long-term structure', 'Better communication', 'Fundraising support', 'Team implementation support'].map((item) => (
                <li key={item} className="rounded-2xl bg-soft p-5 text-sm font-bold text-ink">{item}</li>
              ))}
            </ul>
          </div>
          <PricingCard
            title="Growth System pricing"
            prices={['Setup: 3,000 to 8,000 USD', 'Monthly support: 1,000 to 3,500 USD', 'Optional milestone bonuses based on agreed deliverables or campaign activity']}
          />
        </div>
      </section>

      <CTASection title="Build one practical system for workflow, content, and fundraising." text="Start with the contact form and Optilinked will help you choose the right path." secondary={false} />
    </>
  );
}

import PageHero from '../components/PageHero.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import CTASection from '../components/CTASection.jsx';
import { PricingCard, FeatureCard } from '../components/Cards.jsx';
import { services } from '../data/site.js';

const fundraising = services.find((service) => service.id === 'fundraising');

export default function Fundraising() {
  return (
    <>
      <PageHero
        eyebrow="Fundraising Campaign Accelerator"
        title="Launch a clearer fundraising campaign with message, content, follow-up, and reporting already built."
        text="Optilinked helps NGOs plan, write, launch, and manage a focused fundraising campaign with practical AI-supported messaging and donor communication."
        primaryText="Plan Your Fundraising Campaign"
        secondaryText="See All Services"
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="container-pad grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeader
            eyebrow="The campaign problem"
            title="Many NGOs need funds, but the campaign structure is missing."
            text="A strong campaign needs a clear angle, a donor journey, sponsor outreach, follow-up assets, and a simple way to report progress."
          />
          <div className="grid gap-5 sm:grid-cols-2">
            <FeatureCard title="Unclear message" text="The campaign needs one focused story that donors understand quickly." accent="blue">01</FeatureCard>
            <FeatureCard title="Missing follow-up" text="Donors and sponsors need a clear sequence before, during, and after the campaign." accent="violet">02</FeatureCard>
            <FeatureCard title="Weak calendar" text="Campaign activity works better when posts, emails, updates, and reports follow a planned rhythm." accent="teal">03</FeatureCard>
            <FeatureCard title="Limited reporting" text="Simple weekly reports help the team see progress and keep donors informed." accent="magenta">04</FeatureCard>
          </div>
        </div>
      </section>

      <section className="bg-soft py-16 sm:py-20">
        <div className="container-pad">
          <SectionHeader center eyebrow="What Optilinked delivers" title="A practical campaign system your NGO launches with more structure." />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {fundraising.included.map((item) => (
              <article key={item} className="rounded-[1.75rem] border border-line bg-white p-6 shadow-card">
                <h3 className="font-heading text-lg font-bold tracking-tight">{item}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="container-pad grid gap-8 lg:grid-cols-[1fr_0.8fr]">
          <div className="rounded-[2rem] border border-line bg-navy p-8 text-white lg:p-10">
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-teal">Pricing guidance</p>
            <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight">Fixed fees and milestone bonuses keep fundraising support clear.</h2>
            <p className="mt-5 text-base leading-8 text-white/70">
              Optilinked avoids percentage-based fundraising compensation. A safer structure uses fixed setup fees, campaign management fees, and milestone bonuses based on agreed deliverables or campaign activity.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {['Assets approved', 'Follow-up system completed', 'Campaign activity target reached'].map((item) => (
                <div key={item} className="rounded-3xl border border-white/10 bg-white/5 p-4 text-sm font-bold text-white/80">{item}</div>
              ))}
            </div>
          </div>
          <PricingCard title="Campaign pricing" prices={fundraising.pricing} />
        </div>
      </section>

      <CTASection title="Ready to plan a clearer fundraising campaign?" text="Start with the contact form and Optilinked will help identify the best next step for your NGO." secondary={false} />
    </>
  );
}

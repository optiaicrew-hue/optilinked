import PageHero from '../components/PageHero.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import CTASection from '../components/CTASection.jsx';
import { FeatureCard, PricingCard } from '../components/Cards.jsx';

export default function Audit() {
  const reviewItems = [
    'Current workflow and repeated admin tasks',
    'Internal planning and reporting needs',
    'Social media activity and content rhythm',
    'Donor communication and update process',
    'Fundraising needs and campaign readiness',
  ];

  return (
    <>
      <PageHero
        eyebrow="NGO AI Readiness Audit"
        title="See where practical AI support fits your NGO before you invest in a bigger system."
        text="Start with a free introductory audit. Optilinked reviews your workflow, content, donor communication, and fundraising needs, then gives you a clear action plan."
        secondaryText="See the Three NGO Offers"
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="container-pad grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeader
            eyebrow="What the audit is"
            title="A practical first step for NGOs that want more clarity."
            text="The audit helps your team see what to improve first, where repeated work slows you down, and which Optilinked support option fits your current needs."
          />
          <div className="grid gap-5 sm:grid-cols-2">
            <FeatureCard title="Free introduction" text="Start with a simple first review and identify your strongest next step." accent="blue">01</FeatureCard>
            <FeatureCard title="Paid deeper audit" text="A deeper audit is available from 150 USD when your NGO needs more detailed analysis." accent="violet">02</FeatureCard>
            <FeatureCard title="Clear next steps" text="Leave with a practical action plan and a best-fit offer recommendation." accent="teal">03</FeatureCard>
            <FeatureCard title="Low-risk entry" text="Understand the value before choosing workflow, content, or fundraising support." accent="magenta">04</FeatureCard>
          </div>
        </div>
      </section>

      <section className="bg-soft py-16 sm:py-20">
        <div className="container-pad">
          <SectionHeader center eyebrow="What Optilinked reviews" title="The audit looks at the systems behind your daily workload." />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {reviewItems.map((item, index) => (
              <article key={item} className="rounded-[1.75rem] border border-line bg-white p-6 shadow-card">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-brand text-sm font-black text-white">{index + 1}</div>
                <p className="mt-5 text-sm font-bold leading-7 text-ink">{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="container-pad grid gap-8 lg:grid-cols-[1fr_0.8fr]">
          <div className="rounded-[2rem] border border-line bg-soft p-8 lg:p-10">
            <SectionHeader
              eyebrow="What you receive"
              title="A simple action plan your team understands."
              text="Optilinked maps the key friction points, identifies useful AI-supported workflows, and recommends the next practical step."
            />
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {['60-minute review', 'Simple action plan', 'Recommended next steps', 'Best-fit offer recommendation'].map((item) => (
                <li key={item} className="rounded-2xl bg-white p-5 text-sm font-bold text-ink shadow-sm">{item}</li>
              ))}
            </ul>
          </div>
          <PricingCard
            title="Audit pricing"
            prices={['Free introductory audit', 'Paid deeper audit available from 150 USD']}
            note="The introductory audit is the easiest first step. The deeper audit is useful when your NGO needs more detailed workflow, content, and fundraising analysis."
          />
        </div>
      </section>

      <CTASection title="Start with the audit before choosing a larger offer." text="Share your NGO needs through the contact form and Optilinked will follow up with the next step." secondary={false} />
    </>
  );
}

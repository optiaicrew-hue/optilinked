import { PrimaryButton, SecondaryButton } from '../components/Button.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import CTASection from '../components/CTASection.jsx';
import ProcessSteps from '../components/ProcessSteps.jsx';
import { FeatureCard, OfferCard, ResourceCard } from '../components/Cards.jsx';
import { resources, services } from '../data/site.js';

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy py-20 text-white sm:py-24 lg:py-28">
        <div className="absolute left-1/2 top-0 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-blue/20 blur-3xl" />
        <div className="absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-magenta/20 blur-3xl" />
        <div className="container-pad relative grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="mb-6 inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold text-white/80">
              Save time. Show impact. Raise more support.
            </p>
            <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Practical AI systems for NGOs that need more time, stronger visibility, and better fundraising.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
              Optilinked helps NGOs reduce admin pressure, show impact clearly, and launch better fundraising campaigns with simple AI-supported workflows.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <PrimaryButton to="/contact">Book Your NGO AI Readiness Audit</PrimaryButton>
              <SecondaryButton to="/services" dark>See the Three NGO Offers</SecondaryButton>
            </div>
          </div>

          <HeroDashboard />
        </div>
      </section>

      <section className="py-16 bg-soft sm:py-20">
        <div className="container-pad">
          <SectionHeader
            eyebrow="The NGO workload problem"
            title="Small teams carry a large amount of repeated work."
            text="Most NGOs need to communicate the mission, manage volunteers, update donors, create content, report impact, and raise funds with limited capacity."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <FeatureCard title="Too much admin work" text="Repeated emails, notes, planning, reporting, and coordination take time away from mission work." accent="blue">01</FeatureCard>
            <FeatureCard title="Inconsistent communication" text="Social posts, donor updates, and newsletters often happen late because the team has too much to handle." accent="violet">02</FeatureCard>
            <FeatureCard title="Weak campaign structure" text="Fundraising needs a clear message, donor journey, follow-up system, and calendar." accent="teal">03</FeatureCard>
            <FeatureCard title="Hard to show impact" text="Meaningful work needs clear stories, simple reporting, and donor-friendly communication." accent="magenta">04</FeatureCard>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="container-pad">
          <SectionHeader
            center
            eyebrow="Three clear outcomes"
            title="Choose the support your NGO needs most right now."
            text="Optilinked builds practical AI-supported systems around outcomes, not technical complexity."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {services.map((service) => <OfferCard key={service.id} service={service} />)}
          </div>
        </div>
      </section>

      <section className="bg-soft py-16 sm:py-20">
        <div className="container-pad">
          <div className="grid items-center gap-8 rounded-[2rem] border border-line bg-white p-8 shadow-card lg:grid-cols-[0.95fr_1.05fr] lg:p-12">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-blue">Easy first step</p>
              <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight sm:text-4xl">Start with a free introductory AI Readiness Audit.</h2>
              <p className="mt-5 text-lg leading-8 text-muted">
                In the audit, Optilinked reviews your workflow, content, donor communication, and fundraising needs. You receive a simple action plan and a best-fit recommendation.
              </p>
              <div className="mt-8">
                <PrimaryButton to="/contact">Book Your AI Readiness Audit</PrimaryButton>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {['60-minute review', 'Simple action plan', 'Workflow and content review', 'Fundraising needs review'].map((item) => (
                <div key={item} className="rounded-3xl border border-line bg-soft p-5">
                  <p className="font-heading text-xl font-bold">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-navy py-16 text-white sm:py-20">
        <div className="container-pad grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SectionHeader
            eyebrow="Premium offer"
            title="Launch a clearer fundraising campaign with structure, content, follow-up, and reporting already built."
            text="The Fundraising Campaign Accelerator gives your NGO a focused campaign message, donor follow-up assets, sponsor outreach, content, and a weekly reporting structure."
            light
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {['Campaign angle', 'Fundraising page copy', 'Email sequence', 'Sponsor outreach message', 'Campaign calendar', 'Weekly reporting'].map((item) => (
              <div key={item} className="rounded-3xl border border-white/10 bg-white/5 p-5 text-sm font-bold text-white/80">
                {item}
              </div>
            ))}
          </div>
          <div className="lg:col-span-2">
            <PrimaryButton to="/contact">Plan Your Fundraising Campaign</PrimaryButton>
          </div>
        </div>
      </section>

      <section className="bg-soft py-16 sm:py-20">
        <div className="container-pad">
          <SectionHeader center eyebrow="How it works" title="A simple path from audit to implementation." />
          <div className="mt-10">
            <ProcessSteps />
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="container-pad">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <SectionHeader
              eyebrow="Example NGO work"
              title="Practical NGO support projects focused on parent and family support."
              text="Example NGO work includes support systems for Autism Parents United and Autism Dad United. Testimonials and deeper results will be added later."
            />
            <div className="grid gap-5 sm:grid-cols-2">
              <ExampleMini title="Autism Parents United" link="autismparentsunited.org" />
              <ExampleMini title="Autism Dad United" link="autismdadunited.com" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-soft py-16 sm:py-20">
        <div className="container-pad">
          <SectionHeader center eyebrow="Resources" title="Helpful NGO resources are being prepared." text="These resources will help NGOs plan workflows, communication, fundraising, and impact stories." />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {resources.slice(0, 3).map((item) => <ResourceCard key={item.title} item={item} />)}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

function HeroDashboard() {
  const items = [
    ['Workflow tasks', 'Donor email draft', 'Volunteer onboarding', 'Meeting summary'],
    ['Content calendar', 'Impact story', 'Newsletter draft', 'Thank-you post'],
    ['Fundraising campaign', 'Sponsor outreach', 'Donor follow-up', 'Weekly report'],
  ];

  return (
    <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-4 shadow-glow backdrop-blur">
      <div className="rounded-[1.5rem] bg-white p-4 text-ink">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-muted">Optilinked system view</p>
            <h2 className="mt-1 font-heading text-xl font-bold">NGO growth workflow</h2>
          </div>
          <div className="rounded-full bg-teal/10 px-3 py-1 text-xs font-extrabold text-teal">Live plan</div>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {items.map(([title, ...rows]) => (
            <div key={title} className="rounded-2xl border border-line bg-soft p-4">
              <h3 className="font-heading text-base font-bold">{title}</h3>
              <div className="mt-4 space-y-3">
                {rows.map((row) => (
                  <div key={row} className="rounded-xl bg-white px-3 py-3 text-xs font-bold text-muted shadow-sm">{row}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ExampleMini({ title, link }) {
  return (
    <article className="rounded-[2rem] border border-line bg-soft p-7">
      <h3 className="font-heading text-2xl font-bold tracking-tight">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-muted">
        Example NGO support project connected to website structure, content systems, community communication, and AI-supported workflow development.
      </p>
      <p className="mt-5 text-sm font-extrabold text-blue">{link}</p>
    </article>
  );
}

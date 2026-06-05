import PageHero from '../components/PageHero.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import CTASection from '../components/CTASection.jsx';
import { FeatureCard } from '../components/Cards.jsx';

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About Optilinked"
        title="A practical AI partner for NGOs, not another AI tool provider."
        text="Optilinked helps NGOs reduce workload, improve communication, and fundraise with more structure through simple AI-supported systems."
        secondaryText="How It Works"
        secondaryTo="/how-it-works"
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="container-pad grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeader
            eyebrow="Who Optilinked helps"
            title="NGOs with meaningful missions and limited capacity."
            text="Many small teams need to manage admin, content, donors, volunteers, campaigns, and reporting with limited time. Optilinked turns that pressure into practical workflows and reusable systems."
          />
          <div className="grid gap-5 sm:grid-cols-2">
            <FeatureCard title="Simple systems" text="Clear workflow structures your team understands and repeats." accent="blue">01</FeatureCard>
            <FeatureCard title="Practical workflows" text="Prompts, templates, and task systems built around real NGO work." accent="violet">02</FeatureCard>
            <FeatureCard title="Clear communication" text="Content and donor updates that make your work easier to understand." accent="teal">03</FeatureCard>
            <FeatureCard title="Less pressure" text="Reusable systems that reduce the weekly load on small teams." accent="magenta">04</FeatureCard>
          </div>
        </div>
      </section>

      <section className="bg-soft py-16 sm:py-20">
        <div className="container-pad">
          <div className="rounded-[2rem] border border-line bg-white p-8 shadow-card lg:p-12">
            <SectionHeader
              center
              eyebrow="The Optilinked approach"
              title="Make the NGO outcome the main product."
              text="Optilinked does not sell AI tools. Optilinked builds practical AI-supported systems that help NGOs save time, show impact, build donor trust, and raise support."
            />
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {['Save time', 'Show impact', 'Raise support'].map((item) => (
                <div key={item} className="rounded-3xl border border-line bg-soft p-6 text-center font-heading text-2xl font-bold">{item}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="container-pad">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-line bg-soft p-8">
              <h2 className="font-heading text-3xl font-bold tracking-tight">What Optilinked is</h2>
              <ul className="mt-6 space-y-4 text-sm font-semibold leading-7 text-ink">
                <li>Practical AI-supported workflow partner</li>
                <li>Content and donor communication support system</li>
                <li>Fundraising campaign structure partner</li>
                <li>Implementation support for small NGO teams</li>
              </ul>
            </div>
            <div className="rounded-[2rem] border border-line bg-soft p-8">
              <h2 className="font-heading text-3xl font-bold tracking-tight">What Optilinked is not</h2>
              <ul className="mt-6 space-y-4 text-sm font-semibold leading-7 text-ink">
                <li>Not a robotic AI tool company</li>
                <li>Not focused on replacing your team</li>
                <li>Not built around technical complexity</li>
                <li>Not offering guaranteed fundraising results</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

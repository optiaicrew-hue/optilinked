import PageHero from '../components/PageHero.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import ProcessSteps from '../components/ProcessSteps.jsx';
import CTASection from '../components/CTASection.jsx';

export default function HowItWorks() {
  return (
    <>
      <PageHero
        eyebrow="How It Works"
        title="A simple process from first audit to working NGO systems."
        text="Optilinked starts with your current needs, then builds practical workflows, content assets, and campaign support around the clearest next step."
        secondaryText="See Services"
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="container-pad">
          <SectionHeader center eyebrow="The process" title="Five steps from clarity to implementation." />
          <div className="mt-10">
            <ProcessSteps />
          </div>
        </div>
      </section>

      <section className="bg-soft py-16 sm:py-20">
        <div className="container-pad">
          <div className="rounded-[2rem] border border-line bg-white p-8 shadow-card lg:p-12">
            <SectionHeader
              eyebrow="What happens after the audit"
              title="Your NGO chooses the support level that fits your current need."
              text="Some NGOs start with workflow setup. Others need content structure. Some need a fundraising campaign system. Larger organizations choose the full NGO Growth System."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {['Workflow setup', 'Content engine', 'Fundraising campaign', 'Growth system'].map((item) => (
                <div key={item} className="rounded-3xl border border-line bg-soft p-5 text-sm font-bold text-ink">{item}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection title="Start with a simple AI Readiness Audit." text="Use the contact form to share what your NGO needs most right now." secondary={false} />
    </>
  );
}

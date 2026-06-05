import PageHero from '../components/PageHero.jsx';
import CTASection from '../components/CTASection.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import { ResourceCard } from '../components/Cards.jsx';
import { resources } from '../data/site.js';

export default function Resources() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Practical NGO resources for workflow, content, donor communication, and fundraising."
        text="Optilinked resources will help NGOs plan simple systems, improve communication, and prepare stronger campaigns."
        secondaryText="Book an Audit"
        secondaryTo="/contact"
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="container-pad">
          <SectionHeader center eyebrow="Coming soon" title="Resource cards are ready for future lead magnets." text="Replace these cards with live downloads when each resource is finished." />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {resources.map((item) => <ResourceCard key={item.title} item={item} />)}
          </div>
        </div>
      </section>

      <CTASection title="Want help deciding which resource or service fits your NGO?" text="Start with a free introductory audit and get a practical next step." secondary={false} />
    </>
  );
}

import PageHero from '../components/PageHero.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import CTASection from '../components/CTASection.jsx';
import { FeatureCard } from '../components/Cards.jsx';

export default function Examples() {
  return (
    <>
      <PageHero
        eyebrow="Example NGO Work"
        title="Example NGO support projects connected to content systems, community communication, and practical workflows."
        text="Optilinked has supported NGO-style projects focused on free and practical support for parents and fathers raising autistic children. Testimonials and deeper examples will be added later."
        secondaryText="See Services"
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="container-pad">
          <SectionHeader center eyebrow="Project examples" title="Two NGO-style support projects." text="These examples show the type of structure Optilinked builds around communication, content, community, and workflow support." />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <ProjectCard
              title="Autism Parents United"
              url="autismparentsunited.org"
              text="A free global support project for parents and relatives raising autistic children. Example support areas include website structure, member communication, social content systems, support content, and AI-supported workflow planning."
            />
            <ProjectCard
              title="Autism Dad United"
              url="autismdadunited.com"
              text="A support project focused on fathers raising autistic children. Example support areas include Swedish adaptation, content planning, voiceover scripts, community structure, and practical communication systems."
            />
          </div>
        </div>
      </section>

      <section className="bg-soft py-16 sm:py-20">
        <div className="container-pad">
          <SectionHeader center eyebrow="What these examples show" title="Optilinked works on practical systems, not abstract AI ideas." />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <FeatureCard title="Website structure" text="Clear pages, calls to action, member journeys, and support pathways." accent="blue">01</FeatureCard>
            <FeatureCard title="Content systems" text="Reusable post, Reel, newsletter, and campaign structures." accent="violet">02</FeatureCard>
            <FeatureCard title="Community communication" text="Clear messaging that helps members understand the support available." accent="teal">03</FeatureCard>
            <FeatureCard title="Workflow support" text="AI-supported systems that reduce repeated planning and writing tasks." accent="magenta">04</FeatureCard>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="container-pad">
          <div className="rounded-[2rem] border border-line bg-soft p-8 lg:p-10">
            <SectionHeader
              eyebrow="Testimonials"
              title="Testimonials coming soon."
              text="This section is ready for approved testimonials, results, and deeper project examples once they are prepared."
            />
          </div>
        </div>
      </section>

      <CTASection title="See what Optilinked could build for your NGO." text="Start with a free introductory audit and get a practical action plan." secondary={false} />
    </>
  );
}

function ProjectCard({ title, url, text }) {
  return (
    <article className="rounded-[2rem] border border-line bg-soft p-8 shadow-card">
      <div className="mb-6 h-1.5 w-24 rounded-full bg-brand" />
      <h2 className="font-heading text-3xl font-bold tracking-tight">{title}</h2>
      <p className="mt-5 text-base leading-8 text-muted">{text}</p>
      <p className="mt-6 text-sm font-extrabold text-blue">{url}</p>
    </article>
  );
}

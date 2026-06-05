import PageHero from '../components/PageHero.jsx';
import { contact } from '../data/site.js';

export default function Terms() {
  return (
    <>
      <PageHero
        eyebrow="Terms"
        title="Basic terms for using the Optilinked website."
        text="These terms explain the basic conditions for using this website and contacting Optilinked."
        primaryText="Contact Optilinked"
        secondaryText="Back to Home"
        secondaryTo="/"
      />
      <section className="bg-white py-16 sm:py-20">
        <div className="container-pad max-w-4xl">
          <div className="rounded-[2rem] border border-line bg-soft p-8 lg:p-10">
            <p className="text-sm font-bold text-muted">Last updated: June 2026</p>
            <LegalBlock title="1. Website use">
              <p>This website provides information about Optilinked services for NGOs, including workflow support, content systems, fundraising campaign support, and related resources.</p>
            </LegalBlock>
            <LegalBlock title="2. No guaranteed results">
              <p>Optilinked provides practical support, planning, messaging, content, and workflow systems. Fundraising results, donor responses, campaign outcomes, and organizational results are not guaranteed.</p>
            </LegalBlock>
            <LegalBlock title="3. Service information">
              <p>Pricing ranges, service descriptions, and package details are provided for general guidance. Final scope, timeline, and pricing are confirmed after discussion with Optilinked.</p>
            </LegalBlock>
            <LegalBlock title="4. Website content">
              <p>Website content is for general information. You should not treat website content as legal, financial, fundraising, or compliance advice.</p>
            </LegalBlock>
            <LegalBlock title="5. Third-party services">
              <p>The website uses third-party services such as Web3Forms for contact form processing. Third-party platforms have their own terms and policies.</p>
            </LegalBlock>
            <LegalBlock title="6. Intellectual property">
              <p>Website copy, structure, design elements, and brand materials belong to Optilinked unless otherwise stated. You should not copy or reuse them without written permission.</p>
            </LegalBlock>
            <LegalBlock title="7. Contact">
              <p>Email: <a href={`mailto:${contact.email}`} className="font-bold text-blue">{contact.email}</a></p>
              <p>Phone: <a href={`tel:${contact.phone.replaceAll(' ', '')}`} className="font-bold text-blue">{contact.phone}</a></p>
            </LegalBlock>
          </div>
        </div>
      </section>
    </>
  );
}

function LegalBlock({ title, children }) {
  return (
    <div className="mt-8 border-t border-line pt-8 text-base leading-8 text-muted first:mt-0 first:border-t-0 first:pt-0">
      <h2 className="font-heading text-2xl font-bold tracking-tight text-ink">{title}</h2>
      <div className="mt-3 space-y-3">{children}</div>
    </div>
  );
}

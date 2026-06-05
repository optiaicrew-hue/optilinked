import PageHero from '../components/PageHero.jsx';
import { contact } from '../data/site.js';

export default function Privacy() {
  return (
    <>
      <PageHero
        eyebrow="Privacy Policy"
        title="How Optilinked handles contact information."
        text="This basic privacy policy explains how Optilinked handles information submitted through the website contact form."
        primaryText="Contact Optilinked"
        secondaryText="Back to Home"
        secondaryTo="/"
      />
      <LegalContent />
    </>
  );
}

function LegalContent() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="container-pad max-w-4xl">
        <div className="rounded-[2rem] border border-line bg-soft p-8 lg:p-10">
          <p className="text-sm font-bold text-muted">Last updated: June 2026</p>
          <LegalBlock title="1. Information we collect">
            <p>Optilinked collects information you choose to submit through the website contact form. This includes your name, email address, contact number, NGO name, website, service interest, main challenge, and message.</p>
          </LegalBlock>
          <LegalBlock title="2. How we use your information">
            <p>Optilinked uses your information to respond to your inquiry, discuss your NGO needs, book or prepare an AI Readiness Audit, and provide information about Optilinked services.</p>
          </LegalBlock>
          <LegalBlock title="3. Contact form processing">
            <p>The contact form uses Web3Forms to process form submissions. When you submit the form, your information is sent through Web3Forms and delivered to Optilinked.</p>
          </LegalBlock>
          <LegalBlock title="4. Data sharing">
            <p>Optilinked does not sell contact form information. Information is only shared when needed to operate the website, process submissions, respond to your request, or meet a legal requirement.</p>
          </LegalBlock>
          <LegalBlock title="5. Data retention">
            <p>Optilinked keeps inquiry information only as long as needed to respond, manage communication, provide services, or keep basic business records.</p>
          </LegalBlock>
          <LegalBlock title="6. Your choices">
            <p>You may contact Optilinked to request access, correction, or deletion of information you submitted through the website.</p>
          </LegalBlock>
          <LegalBlock title="7. Contact">
            <p>Email: <a href={`mailto:${contact.email}`} className="font-bold text-blue">{contact.email}</a></p>
            <p>Phone: <a href={`tel:${contact.phone.replaceAll(' ', '')}`} className="font-bold text-blue">{contact.phone}</a></p>
          </LegalBlock>
        </div>
      </div>
    </section>
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

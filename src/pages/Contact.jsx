import PageHero from '../components/PageHero.jsx';
import ContactForm from '../components/ContactForm.jsx';
import { contact } from '../data/site.js';

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact Optilinked"
        title="Book your NGO AI Readiness Audit or ask about Optilinked support."
        text="Share your NGO needs, your main challenge, and the service area you want to explore. Optilinked will contact you soon."
        primaryText="Send a Message"
        secondaryText="See Services"
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="container-pad grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-blue">Get in touch</p>
            <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight sm:text-4xl">Tell us what your NGO needs most right now.</h2>
            <p className="mt-5 text-lg leading-8 text-muted">
              Use the form to book a free introductory NGO AI Readiness Audit, ask about pricing, or explore the right support path.
            </p>
            <div className="mt-8 grid gap-4 rounded-[2rem] border border-line bg-soft p-6">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-muted">Email</p>
                <a href={`mailto:${contact.email}`} className="mt-1 block font-heading text-xl font-bold text-blue">{contact.email}</a>
              </div>
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-muted">Phone</p>
                <a href={`tel:${contact.phone.replaceAll(' ', '')}`} className="mt-1 block font-heading text-xl font-bold text-blue">{contact.phone}</a>
              </div>
            </div>
            <div className="mt-8 rounded-[2rem] border border-line bg-soft p-6">
              <h3 className="font-heading text-xl font-bold">Expected next step</h3>
              <p className="mt-3 text-sm leading-7 text-muted">
                Optilinked reviews your message, clarifies the best next step, and helps you decide whether to start with the free introductory audit, a deeper audit from 150 USD, or one of the core NGO offers.
              </p>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  );
}

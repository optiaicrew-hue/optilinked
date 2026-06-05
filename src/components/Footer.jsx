import { Link } from 'react-router-dom';
import Logo from './Logo.jsx';
import brandBanner from '../assets/optilinked-brand-banner.png';
import { contact, menuItems, socialLinks } from '../data/site.js';

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="container-pad py-16">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr_0.7fr]">
          <div>
            <Logo variant="light" />
            <p className="mt-6 max-w-xl text-base leading-8 text-white/70">
              Practical AI-supported systems that help NGOs save time, show impact, and raise more support.
            </p>
            <p className="mt-5 max-w-xl rounded-2xl border border-white/10 bg-white/5 p-4 text-sm font-semibold text-white/80">
              Educated AI is our product. Added value is our business.
            </p>
            <div className="mt-6 max-w-lg overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-2">
              <img src={brandBanner} alt="Optilinked brand banner" className="w-full rounded-2xl object-cover" />
            </div>
          </div>

          <div>
            <h2 className="font-heading text-lg font-bold">Pages</h2>
            <div className="mt-5 grid gap-3">
              {menuItems.map((item) => (
                <Link key={item.path} to={item.path} className="text-sm font-medium text-white/65 hover:text-white">
                  {item.label}
                </Link>
              ))}
              <Link to="/privacy-policy" className="text-sm font-medium text-white/65 hover:text-white">Privacy Policy</Link>
              <Link to="/terms" className="text-sm font-medium text-white/65 hover:text-white">Terms</Link>
            </div>
          </div>

          <div>
            <h2 className="font-heading text-lg font-bold">Contact</h2>
            <div className="mt-5 grid gap-3 text-sm font-medium text-white/65">
              <a href={`mailto:${contact.email}`} className="hover:text-white">{contact.email}</a>
              <a href={`tel:${contact.phone.replaceAll(' ', '')}`} className="hover:text-white">{contact.phone}</a>
            </div>
            <h3 className="mt-8 font-heading text-base font-bold">Social</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="rounded-full border border-white/10 px-3 py-2 text-xs font-bold text-white/65 hover:bg-white/10 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-sm text-white/45">
          © {new Date().getFullYear()} Optilinked. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

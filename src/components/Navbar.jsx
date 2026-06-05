import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './Logo.jsx';
import { PrimaryButton } from './Button.jsx';
import { menuItems } from '../data/site.js';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-white/90 backdrop-blur-xl transition-shadow duration-300">
      <div className="container-pad flex h-20 items-center justify-between gap-4">
        <Logo />

        <nav className="hidden items-center gap-1 xl:flex" aria-label="Main navigation">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) =>
                `rounded-full px-3 py-2 text-sm font-semibold transition-all duration-200 focus-ring ${
                  isActive ? 'bg-soft text-blue' : 'text-muted hover:bg-soft hover:text-ink'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 xl:flex">
          <PrimaryButton to="/contact" className="px-5 py-2.5">Book an Audit</PrimaryButton>
        </div>

        <button
          type="button"
          className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white xl:hidden transition-colors hover:bg-soft"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className="relative h-5 w-5">
            <span className={`absolute left-0 top-1 h-0.5 w-5 bg-ink transition-all duration-300 ${open ? 'top-2.5 rotate-45' : ''}`} />
            <span className={`absolute left-0 top-2.5 h-0.5 w-5 bg-ink transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
            <span className={`absolute left-0 top-4 h-0.5 w-5 bg-ink transition-all duration-300 ${open ? 'top-2.5 -rotate-45' : ''}`} />
          </span>
        </button>
      </div>

      <div className={`overflow-hidden transition-all duration-300 ease-in-out xl:hidden ${open ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="border-t border-line bg-white">
          <nav className="container-pad grid gap-2 py-5" aria-label="Mobile navigation">
            {menuItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-2xl px-4 py-3 text-sm font-semibold transition-colors ${
                    isActive ? 'bg-soft text-blue' : 'text-muted hover:bg-soft hover:text-ink'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <PrimaryButton to="/contact" className="mt-2 w-full" onClick={() => setOpen(false)}>
              Book Your NGO AI Readiness Audit
            </PrimaryButton>
          </nav>
        </div>
      </div>
    </header>
  );
}

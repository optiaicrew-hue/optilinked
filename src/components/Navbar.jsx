import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './Logo.jsx';
import { PrimaryButton } from './Button.jsx';
import { menuItems } from '../data/site.js';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-white/90 backdrop-blur-xl">
      <div className="container-pad flex h-20 items-center justify-between gap-4">
        <Logo />

        <nav className="hidden items-center gap-1 xl:flex" aria-label="Main navigation">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `rounded-full px-3 py-2 text-sm font-semibold transition focus-ring ${
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
          className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white xl:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className="sr-only">Menu</span>
          <span className="space-y-1.5">
            <span className="block h-0.5 w-5 bg-ink" />
            <span className="block h-0.5 w-5 bg-ink" />
            <span className="block h-0.5 w-5 bg-ink" />
          </span>
        </button>
      </div>

      {open && (
        <div className="border-t border-line bg-white xl:hidden">
          <nav className="container-pad grid gap-2 py-5" aria-label="Mobile navigation">
            {menuItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-2xl px-4 py-3 text-sm font-semibold ${
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
      )}
    </header>
  );
}

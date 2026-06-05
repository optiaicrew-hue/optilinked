import { PrimaryButton, SecondaryButton } from '../components/Button.jsx';

export default function NotFound() {
  return (
    <section className="bg-white py-24">
      <div className="container-pad text-center">
        <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-blue">404</p>
        <h1 className="mt-4 font-heading text-4xl font-bold tracking-tight">Page not found</h1>
        <p className="mx-auto mt-4 max-w-xl text-lg leading-8 text-muted">The page you requested does not exist.</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <PrimaryButton to="/">Go Home</PrimaryButton>
          <SecondaryButton to="/contact">Contact Optilinked</SecondaryButton>
        </div>
      </div>
    </section>
  );
}

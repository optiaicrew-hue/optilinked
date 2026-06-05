import { useState } from 'react';
import { serviceOptions } from '../data/site.js';

const WEB3FORMS_ACCESS_KEY = 'YOUR_WEB3FORMS_ACCESS_KEY';

const initialForm = {
  name: '',
  email: '',
  phone: '',
  ngoName: '',
  website: '',
  mainChallenge: '',
  serviceInterest: 'NGO AI Readiness Audit',
  message: '',
  botcheck: false,
};

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setForm((current) => ({ ...current, [name]: type === 'checkbox' ? checked : value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus('loading');
    setError('');

    const payload = {
      access_key: WEB3FORMS_ACCESS_KEY,
      subject: 'New Optilinked NGO website inquiry',
      from_name: 'Optilinked Website',
      name: form.name,
      email: form.email,
      phone: form.phone,
      ngo_name: form.ngoName,
      website: form.website,
      main_challenge: form.mainChallenge,
      service_interest: form.serviceInterest,
      message: form.message,
      botcheck: form.botcheck,
    };

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setForm(initialForm);
        return;
      }

      setStatus('error');
      setError(result.message || 'The form was not sent. Please email hello@optilinked.com.');
    } catch (submissionError) {
      setStatus('error');
      setError('The form was not sent. Please email hello@optilinked.com.');
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-[2rem] border border-teal/20 bg-teal/10 p-8">
        <h3 className="font-heading text-2xl font-bold text-ink">Thank you.</h3>
        <p className="mt-3 text-base leading-7 text-muted">Your message has been sent. Optilinked will contact you soon.</p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="focus-ring mt-6 rounded-full bg-brand px-6 py-3 text-sm font-bold text-white"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-[2rem] border border-line bg-white p-6 shadow-card sm:p-8">
      <input type="checkbox" name="botcheck" checked={form.botcheck} onChange={handleChange} className="hidden" tabIndex="-1" autoComplete="off" />
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" name="name" value={form.name} onChange={handleChange} required />
        <Field label="Email" name="email" type="email" value={form.email} onChange={handleChange} required />
        <Field label="Contact number" name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="Optional" />
        <Field label="NGO name" name="ngoName" value={form.ngoName} onChange={handleChange} required />
        <Field label="Website" name="website" type="url" value={form.website} onChange={handleChange} placeholder="https://" />
        <label className="grid gap-2 text-sm font-bold text-ink">
          Service interest
          <select
            name="serviceInterest"
            value={form.serviceInterest}
            onChange={handleChange}
            className="focus-ring rounded-2xl border border-line bg-white px-4 py-3 text-sm font-semibold text-ink"
          >
            {serviceOptions.map((option) => <option key={option}>{option}</option>)}
          </select>
        </label>
      </div>

      <label className="mt-5 grid gap-2 text-sm font-bold text-ink">
        Main challenge
        <textarea
          name="mainChallenge"
          value={form.mainChallenge}
          onChange={handleChange}
          rows="4"
          required
          className="focus-ring resize-none rounded-2xl border border-line bg-white px-4 py-3 text-sm font-medium text-ink"
          placeholder="Tell us what your NGO needs most right now."
        />
      </label>

      <label className="mt-5 grid gap-2 text-sm font-bold text-ink">
        Message
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows="5"
          className="focus-ring resize-none rounded-2xl border border-line bg-white px-4 py-3 text-sm font-medium text-ink"
          placeholder="Share extra context, goals, or questions."
        />
      </label>

      {error && <p className="mt-4 rounded-2xl bg-red-50 p-4 text-sm font-semibold text-red-700">{error}</p>}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="focus-ring mt-6 w-full rounded-full bg-brand px-6 py-4 text-sm font-extrabold text-white shadow-glow disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === 'loading' ? 'Sending...' : 'Send Message'}
      </button>

      <p className="mt-4 text-xs leading-6 text-muted">
        Replace YOUR_WEB3FORMS_ACCESS_KEY in src/components/ContactForm.jsx with your Web3Forms access key before launch.
      </p>
    </form>
  );
}

function Field({ label, name, type = 'text', value, onChange, required = false, placeholder = '' }) {
  return (
    <label className="grid gap-2 text-sm font-bold text-ink">
      {label}
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="focus-ring rounded-2xl border border-line bg-white px-4 py-3 text-sm font-medium text-ink"
      />
    </label>
  );
}

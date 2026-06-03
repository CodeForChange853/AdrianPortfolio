import './SecureTransmission.css';
import { useState } from 'react';
import GalaxyBackground from '../effects/GalaxyBackground';
import { useReveal } from '../hooks/useReveal';
import { PROFILE } from '../data';
import { IconEmail, IconGitHub } from './icons';

const API_URL = import.meta.env.VITE_API_URL || '';

function ContactForm() {
  const [fields, setFields] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [errorMsg, setErrorMsg] = useState('');

  const set = k => e => setFields(f => ({ ...f, [k]: e.target.value }));

  async function handleSubmit(e) {
    e.preventDefault();
    const { name, email, message } = fields;
    if (!name.trim() || !email.trim() || !message.trim()) return;
    setStatus('submitting');
    try {
      const res = await fetch(`${API_URL}/api/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name.trim(), email: email.trim(), message: message.trim() }),
      });
      if (res.ok) {
        setStatus('success');
      } else {
        setErrorMsg('Something went wrong. Try emailing directly.');
        setStatus('error');
      }
    } catch {
      setErrorMsg('Could not reach server. Try emailing directly.');
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="cf-success">
        <span className="cf-success-mark">✓</span>
        Message received — I&apos;ll get back to you soon.
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="cf-row">
        <input className="cf-input" type="text" placeholder="Your name" value={fields.name} onChange={set('name')} required disabled={status === 'submitting'} />
        <input className="cf-input" type="email" placeholder="Your email" value={fields.email} onChange={set('email')} required disabled={status === 'submitting'} />
      </div>
      <textarea className="cf-textarea" placeholder="What are you working on?" value={fields.message} onChange={set('message')} rows={4} required disabled={status === 'submitting'} />
      {status === 'error' && <p className="cf-error">{errorMsg}</p>}
      <button className="cf-submit" type="submit" disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Sending…' : 'Send Message →'}
      </button>
    </form>
  );
}

export default function SecureTransmission() {
  const ref = useReveal();
  return (
    <section id="contact" className="contact-page reveal-block" ref={ref}>
      <div className="contact-card-wrapper">
        <div className="contact-card">
          <GalaxyBackground contained />
          <div className="contact-card-tint" />
          <span className="contact-ghost" aria-hidden="true">CONTACT</span>

          {/* Left — Let's Work */}
          <div className="contact-col-left">
            <div className="contact-col-left-bottom">
              <div className="contact-lets-work">
                <span>Let's</span>
                <span>Work.</span>
              </div>
              <p className="contact-sub-text">
                Open for internships, freelance, and collaboration.
              </p>
              <div className="contact-avail-pill">
                <span className="contact-avail-dot" />
                Available for Opportunities
              </div>
            </div>
          </div>

          {/* Right — Get in touch */}
          <div className="contact-col-right">
            <div>
              <p className="contact-get-eyebrow">Open Channels</p>
              <h2 className="contact-get-heading">Get in touch</h2>
              <p className="contact-get-sub">
                Have a question or ready to transform your business with automation?
              </p>
            </div>

            <div className="contact-channels">
              <a href={`mailto:${PROFILE.email}`} className="contact-channel-link">
                <span className="contact-channel-icon">
                  <IconEmail />
                </span>
                {PROFILE.email}
              </a>

              <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className="contact-channel-link">
                <span className="contact-channel-icon">
                  <IconGitHub />
                </span>
                github.com/CodeForChange853
              </a>

              <div className="contact-channel-link contact-channel-phone">
                <span className="contact-channel-icon">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13 19.79 19.79 0 0 1 1.61 4.4 2 2 0 0 1 3.6 2.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.09 6.09l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 17.92z"/>
                  </svg>
                </span>
                {PROFILE.phone}
              </div>
            </div>

            <div className="cf-divider"><span>or send a message</span></div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

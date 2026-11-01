import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { ArrowUpRight, Mail, MapPin, Send } from 'lucide-react';

export function Contact() {
  const [state, handleSubmit] = useForm('xbljepkq');

  if (state.succeeded) {
    return (
      <section id="contact" className="section section--contact">
        <div className="section-container contact-success"><span className="contact-success__symbol">✓</span><div className="eyebrow"><span className="eyebrow__line" /> Message received</div><h2>Thank you for<br /><em>reaching out.</em></h2><p>Your message has been received. We’ll get back to you as soon as we can.</p><button className="button button--primary" onClick={() => window.location.reload()}>Send another message <ArrowUpRight size={17} /></button></div>
      </section>
    );
  }

  return (
    <section id="contact" className="section section--contact">
      <div className="section-container contact-layout">
        <div className="contact-copy">
          <div className="eyebrow eyebrow--light"><span className="eyebrow__line" /> Start something good</div>
          <h2>Have an idea?<br /><em>Let’s talk.</em></h2>
          <p>Tell us a little about what you’re building, what’s not working or where you want to go. We’ll take it from there.</p>
          <div className="contact-details">
            <a href="mailto:admin@embrise.in"><span><Mail size={18} /></span><div><small>Email</small><strong>admin@embrise.in</strong></div><ArrowUpRight size={17} /></a>
            <div className="contact-details__location"><span><MapPin size={18} /></span><div><small>Based in</small><strong>India · Working worldwide</strong></div></div>
          </div>
        </div>

        <div className="contact-form-card">
          <div className="contact-form-card__heading"><span>YOUR NEXT CHAPTER</span><span>01 — 03</span></div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-form__field"><label htmlFor="name">Your name</label><input type="text" id="name" name="name" placeholder="Jane Smith" required /></div>
            <ValidationError prefix="Name" field="name" errors={state.errors} />
            <div className="contact-form__field"><label htmlFor="email">Email address</label><input type="email" id="email" name="email" placeholder="you@company.com" required /></div>
            <ValidationError prefix="Email" field="email" errors={state.errors} />
            <div className="contact-form__field"><label htmlFor="message">What would you like to build?</label><textarea id="message" name="message" rows={4} placeholder="A little context about your idea, goals or challenge…" required /></div>
            <ValidationError prefix="Message" field="message" errors={state.errors} />
            <button type="submit" className="button button--form" disabled={state.submitting}><span>{state.submitting ? 'Sending…' : 'Send your message'}</span><Send size={17} /></button>
            {state.errors && <p className="contact-form__error" role="alert">Something went wrong. Please check the form and try again.</p>}
          </form>
        </div>
      </div>
    </section>
  );
}

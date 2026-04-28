import type { FormEvent } from 'react'

import { PHONE_DISPLAY, PHONE_TEL } from '../lib/constants'

const CONTACT_BG = '/images/531ce8fcbeeca0b364a2cfa855fa43b601c51fe9.jpg'

export function ContactSection() {
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    window.alert(
      'This is a standalone demo UI. Hook this form up to your email API or backend when you deploy.'
    )
  }

  return (
    <section className="contact-shell" id="contact">
      <div
        className="contact-shell__bg"
        aria-hidden
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(247,249,251,0.88) 0%, rgba(232,236,242,0.94) 100%), url(${CONTACT_BG})`,
          backgroundAttachment: 'scroll',
        }}
      />
      <div className="hero__content" style={{ maxWidth: '1100px' }}>
        <h2 className="contact-heading">
          Get An Electrician Sent to Your Doorstep in 40 Minutes!
        </h2>
        <div className="contact-call">
          <a className="contact-call__btn" href={PHONE_TEL}>
            <svg width="22" height="22" viewBox="0 0 512 512" aria-hidden>
              <path
                fill="currentColor"
                d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"
              />
            </svg>
            Call now — {PHONE_DISPLAY}
          </a>
        </div>
        <form className="contact-form-panel" onSubmit={onSubmit}>
          <label htmlFor="needs">Your Electrical Needs *</label>
          <textarea
            id="needs"
            name="needs"
            required
            placeholder="Tell Us About Your Electrical Needs"
          />
          <label htmlFor="name">Name *</label>
          <input id="name" name="name" type="text" autoComplete="name" placeholder="Name" required />
          <label htmlFor="email">Email *</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="Email"
            required
          />
          <label htmlFor="phone">Number</label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="Number" />
          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  )
}

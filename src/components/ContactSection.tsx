import type { FormEvent } from 'react'
import { useState } from 'react'

import { CONTACT_EMAIL, PHONE_DISPLAY, PHONE_TEL } from '../lib/constants'

const CONTACT_BG = '/images/531ce8fcbeeca0b364a2cfa855fa43b601c51fe9.jpg'

/** FormSubmit free tier forwards JSON POST to the recipient inbox (requires one-time inbox activation email on first submission). */
const FORMSUBMIT_ENDPOINT = `https://formsubmit.co/ajax/${encodeURIComponent(CONTACT_EMAIL)}`

export function ContactSection() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const fd = new FormData(form)
    const name = String(fd.get('name') ?? '').trim()
    const email = String(fd.get('email') ?? '').trim()
    const phone = String(fd.get('phone') ?? '').trim()
    const needs = String(fd.get('needs') ?? '').trim()

    setStatus('sending')

    try {
      const res = await fetch(FORMSUBMIT_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          _subject: 'LK Electric — New website contact',
          _replyto: email,
          name,
          email,
          phone: phone || '(not provided)',
          message: needs,
        }),
      })

      if (!res.ok) throw new Error('Request failed')

      setStatus('success')
      form.reset()
    } catch {
      setStatus('error')
    }
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
        <p className="contact-email-note">
          Or email{' '}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
        </p>
        <form className="contact-form-panel" onSubmit={onSubmit}>
          {status === 'success' ? (
            <p className="contact-form-status contact-form-status--success" role="status">
              Thanks — your message was sent. We&apos;ll reply soon.
            </p>
          ) : null}
          {status === 'error' ? (
            <p className="contact-form-status contact-form-status--error" role="alert">
              Something went wrong. Please call {PHONE_DISPLAY} or email {CONTACT_EMAIL}.
            </p>
          ) : null}
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
          <button type="submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending…' : 'Send'}
          </button>
        </form>
      </div>
    </section>
  )
}

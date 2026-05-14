import { PHONE_DISPLAY, PHONE_TEL } from '../lib/constants'

const HERO_BG = '/images/ChatGPT-Image-Apr-27-2026-03_06_40-PM.png'

function IconLightning() {
  return (
    <svg viewBox="0 0 24 24" width={20} height={20} aria-hidden>
      <path fill="currentColor" d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" />
    </svg>
  )
}

function IconPhone() {
  return (
    <svg viewBox="0 0 24 24" width={36} height={36} aria-hidden>
      <path
        fill="currentColor"
        d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"
      />
    </svg>
  )
}

function IconMapPin() {
  return (
    <svg viewBox="0 0 24 24" width={18} height={18} aria-hidden>
      <path
        fill="currentColor"
        d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1112 6a2.5 2.5 0 010 5.5z"
      />
    </svg>
  )
}

export function HeroSection() {
  return (
    <section className="hero" id="top">
      <div
        className="hero__bg"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(8,12,22,0.35) 0%, rgba(8,12,22,0.72) 55%, rgba(5,8,14,0.82) 100%), url(${HERO_BG})`,
        }}
      />
      <div className="hero__content">
        <div className="ls-hero-eyebrow">
          <span className="hero__eyebrow-icon">
            <IconLightning />
          </span>
          <span className="hero__eyebrow-text">
            Emergency Electrician Services Near Me - <strong>Toronto</strong> | LK Electric |
            Electrical Services
          </span>
        </div>
        <h1 className="hero__title">
          <span className="hero__title-line">MASTER</span>
          <span className="hero__title-line">ELECTRICIAN</span>
          <span className="hero__title-line hero__title-line--orange">IN THE GTA</span>
        </h1>
        <div className="hero__title-rule" aria-hidden />
        <p className="hero__sub">
          <span className="hero__sub-line">Done Right the First Time –</span>
          <span className="hero__sub-line">Open 24/7</span>
        </p>

        <div className="hero__actions">
          <a className="hero__btn hero__btn--primary" href={PHONE_TEL}>
            <span className="hero__btn-icon">
              <IconPhone />
            </span>
            <span className="hero__btn-copy">
              <span className="hero__btn-label">Call Today to Get 15% Off!</span>
              <span className="hero__btn-phone">{PHONE_DISPLAY}</span>
            </span>
          </a>
          <div className="hero__actions-row" aria-label="Service areas">
            <a className="hero__btn hero__btn--area" href="#contact">
              <IconMapPin />
              Scarborough | North York | Pickering
            </a>
            <a className="hero__btn hero__btn--area" href="#contact">
              <IconMapPin />
              Markham | Etobicoke | Toronto
            </a>
          </div>
        </div>

        <div className="trust-bar">
          <div className="trust-item">
            <span className="trust-icon" aria-hidden>
              <svg viewBox="0 0 24 24">
                <path d="M9 16.2l-3.5-3.5L4 14.2l5 5 12-12-1.5-1.5z" />
              </svg>
            </span>
            <span className="trust-item__text">
              <span className="trust-item__title">ESA LICENSED</span>
              <span className="trust-item__sub">Fully certified & insured</span>
            </span>
          </div>
          <div className="trust-item">
            <span className="trust-icon" aria-hidden>
              <svg viewBox="0 0 24 24">
                <path d="M9 16.2l-3.5-3.5L4 14.2l5 5 12-12-1.5-1.5z" />
              </svg>
            </span>
            <span className="trust-item__text">
              <span className="trust-item__title">45+ YEARS OF EXPERIENCE</span>
              <span className="trust-item__sub">Decades of trusted service</span>
            </span>
          </div>
          <div className="trust-item">
            <span className="trust-icon" aria-hidden>
              <svg viewBox="0 0 24 24">
                <path d="M9 16.2l-3.5-3.5L4 14.2l5 5 12-12-1.5-1.5z" />
              </svg>
            </span>
            <span className="trust-item__text">
              <span className="trust-item__title">FAMILY OWNED & OPERATED</span>
              <span className="trust-item__sub">Proudly serving our community</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

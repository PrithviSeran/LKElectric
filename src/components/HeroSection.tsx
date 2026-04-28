const HERO_BG = '/images/ChatGPT-Image-Apr-27-2026-03_06_40-PM.png'

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
          Emergency Electrician Services Near Me – <strong>Toronto</strong> | LK Electric
        </div>
        <h1 className="hero__title">
          <span className="hero__title-line">
            Get Your Electrical Issues Fixed for
          </span>
          <span className="hero__title-highlight">14% Off!</span>
        </h1>

        <div className="hero__actions">
          <a className="hero__btn hero__btn--primary" href="#contact">
            Find Your Electrical Service
          </a>
          <div className="hero__actions-row" aria-label="Service areas">
            <a className="hero__btn hero__btn--ghost" href="#contact">
              Scarborough | North York | Pickering
            </a>
            <a className="hero__btn hero__btn--ghost" href="#contact">
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
            ESA Licensed
          </div>
          <div className="trust-item">
            <span className="trust-icon" aria-hidden>
              <svg viewBox="0 0 24 24">
                <path d="M9 16.2l-3.5-3.5L4 14.2l5 5 12-12-1.5-1.5z" />
              </svg>
            </span>
            45+ Years of Experience
          </div>
          <div className="trust-item">
            <span className="trust-icon" aria-hidden>
              <svg viewBox="0 0 24 24">
                <path d="M9 16.2l-3.5-3.5L4 14.2l5 5 12-12-1.5-1.5z" />
              </svg>
            </span>
            Family Owned & Operated
          </div>
        </div>
      </div>
    </section>
  )
}

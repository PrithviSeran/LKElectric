export function ValueSection() {
  return (
    <section className="ls-value-section">
      <div className="ls-value-wrap">
        <div className="ls-value-eyebrow">FAST. SAFE. RELIABLE.</div>

        <h2 className="ls-value-title">The Fastest & Safest Way to Get It Fixed!</h2>

        <p className="ls-value-subtitle">
          Everything works the way it should again—with solutions designed to last 3+ years
          without recurring issues.
        </p>

        <div className="ls-value-grid">
          <div className="ls-value-card">
            <div className="ls-value-icon-wrap">
              <svg className="ls-value-icon" viewBox="0 0 64 64" aria-hidden>
                <polyline points="34 4 14 36 30 36 26 60 50 24 34 24 34 4" />
              </svg>
            </div>
            <div className="ls-value-number">1</div>
            <h3>Fix Problems in 1 Day</h3>
            <p>
              You’ll have a master electrician at your doorstep in 40 minutes, ready to fix
              most issues on the spot.
            </p>
            <div className="ls-value-divider" />
            <a className="ls-value-btn" href="#contact">
              Get Now
            </a>
          </div>

          <div className="ls-value-card">
            <div className="ls-value-icon-wrap">
              <svg className="ls-value-icon" viewBox="0 0 64 64" aria-hidden>
                <path d="M8 32l24-24h16v16L24 48z" />
                <circle cx="40" cy="16" r="3" />
              </svg>
            </div>
            <div className="ls-value-number">2</div>
            <h3>3% Spring Discount</h3>
            <p>
              Get 3% off your first hour on service calls with clear, competitive pricing.
            </p>
            <div className="ls-value-divider" />
            <a className="ls-value-btn" href="#contact">
              Check Prices
            </a>
          </div>

          <div className="ls-value-card">
            <div className="ls-value-icon-wrap">
              <svg className="ls-value-icon" viewBox="0 0 64 64" aria-hidden>
                <path d="M32 6l22 10v16c0 14-9 24-22 28C19 56 10 46 10 32V16z" />
                <polyline points="22 32 30 40 44 24" />
              </svg>
            </div>
            <div className="ls-value-number">3</div>
            <h3>100% Risk Free</h3>
            <p>
              You’re protected with licensed work done right the first time—no stress, no
              guesswork.
            </p>
            <div className="ls-value-divider" />
            <a className="ls-value-btn" href="#contact">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

import { PHONE_DISPLAY, PHONE_TEL } from '../lib/constants'

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__grid">
        <div>
          <img
            src="/images/lk-electric-logo.png"
            alt="LK Electric"
            width={280}
            height={140}
            style={{ height: 56, width: 'auto', marginBottom: 16, display: 'block' }}
          />
          <p style={{ fontSize: 15, lineHeight: 1.6, margin: 0, color: 'var(--lk-muted)' }}>
            LK Electric — Licensed electrical services serving Toronto &amp; the GTA.
          </p>
        </div>
        <div>
          <h3>Contact</h3>
          <a href={PHONE_TEL}>{PHONE_DISPLAY}</a>
          <a href="#contact">Request an estimate</a>
        </div>
        <div>
          <h3>Service areas</h3>
          <span style={{ fontSize: 15, lineHeight: 1.7 }}>
            Toronto, Scarborough, North York, Mississauga, Brampton, Oakville, Vaughan, Burlington
            &amp; GTA
          </span>
        </div>
      </div>
      <div className="site-footer__bottom">
        © {new Date().getFullYear()} LK Electric.
      </div>
    </footer>
  )
}

export function AboutSection() {
  return (
    <section className="lk-about-section">
      <div className="lk-about-wrap">
        <div className="lk-about-content">
          <div className="lk-about-kicker">About Us</div>
          <h2 className="lk-about-title">LK Electric Is a Licensed & Reliable Electrical Company</h2>
          <div className="lk-about-text">
            <p>
              LK Electric specializes in <strong>residential electrical troubleshooting</strong>,
              panel upgrades, and home electrical repairs across Toronto and the GTA.
            </p>
            <p>
              With over <strong>45+ years of experience</strong>, our team helps homeowners move
              from outdated fuse systems to safer breaker panels while delivering clean,
              long-lasting work.
            </p>
            <p>
              As a <strong>family-owned business</strong>, LK Electric is committed to reliable
              service, clear communication, and doing the job right the first time.
            </p>
          </div>
          <div className="lk-about-badges">
            <div className="lk-about-badge">
              <span>✓</span> ESA Licensed
            </div>
            <div className="lk-about-badge">
              <span>✓</span> Bonded & Insured
            </div>
            <div className="lk-about-badge">
              <span>✓</span> Family Owned
            </div>
          </div>
        </div>
        <div className="lk-about-image">
          <img
            src="/images/3-IMG_3153.jpeg"
            alt="LK Electric electrician working on residential wiring"
            loading="lazy"
            width={959}
            height={1290}
          />
        </div>
      </div>
    </section>
  )
}

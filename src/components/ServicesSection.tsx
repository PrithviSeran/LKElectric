import type { ReactNode } from 'react'

type ServiceCard = {
  title: string
  subtitle?: string
  body: ReactNode[]
  image: string
  cta?: { href: string; label: string }
}

const SERVICES: ServiceCard[] = [
  {
    title: 'Electrical Repairs (Outlets–Breakers)',
    subtitle: 'If You Have:',
    body: [
      <>
        • <strong>Hot outlets</strong> that provide 0 power.
      </>,
      <>
        • <strong>Flickering lights</strong> and inconsistent power.
      </>,
      <>• Sparks and <strong>burning smells</strong> from outlets.</>,
    ],
    image: '/images/Electrician-working-on-electrical-outlet.png',
    cta: { href: '#contact', label: 'Get 14% Off' },
  },
  {
    title: 'Pot Lights (Recessed Lighting)',
    subtitle: 'If You Have:',
    body: [
      <>• Bulbs are <strong>flickering or burnt-out</strong>.</>,
      <>
        • <strong>Sagging light trim</strong> or blown sockets.
      </>,
      <>• Faulty switches or <strong>loose connections</strong>.</>,
    ],
    image: '/images/Bright-kitchen-with-recessed-lighting.png',
    cta: { href: '#contact', label: 'Get Started' },
  },
  {
    title: 'Panel Upgrades / Replacements',
    subtitle: 'If You Have:',
    body: [
      <>
        • <strong>Frequent breaker trips</strong> / power issues.
      </>,
      <>
        • Homes with <strong>higher energy usage</strong>.
      </>,
      <>
        • Home is <strong>old</strong> with outdated panels.
      </>,
    ],
    image: '/images/ChatGPT-Image-Apr-7-2026-05_09_28-AM.png',
    cta: { href: '#contact', label: 'Upgrade Today' },
  },
  {
    title: 'Knob & Tube Wiring Replacement',
    subtitle: 'If You Have an Old Home:',
    body: [
      <>
        • <strong>Knob & tube wiring</strong> (pre-1950s).
      </>,
      <>
        • <strong>Flickering lights</strong>, blown fuses.
      </>,
      <>
        • <strong>Burning smells</strong> or warm outlets.
      </>,
    ],
    image: '/images/Old-fuse-holders-in-electrical-panel.png',
    cta: { href: '#contact', label: 'Get Free Estimate' },
  },
  {
    title: 'EV Charger Installation',
    subtitle: 'Pick Your Charger:',
    body: [
      <>
        • <strong>Level 1:</strong> Basic home charging.
      </>,
      <>
        • <strong>Level 2:</strong> Faster daily use.
      </>,
      <>
        • <strong>Level 3:</strong> High-speed charging.
      </>,
      <>
        • <strong>Install within 1 day (Start Charging ASAP)</strong>
      </>,
    ],
    image: '/images/8.jpg',
    cta: { href: '#contact', label: 'Request Install' },
  },
  {
    title: 'Not Sure What’s Wrong?',
    body: [
      <>If you have power issues with no clear cause...</>,
      <>
        We’ll find the <strong>exact problem</strong> fast.
      </>,
      <>
        Call an <strong>expert electrician near you</strong>.
      </>,
    ],
    image: '/images/ChatGPT-Image-Apr-9-2026-03_45_32-AM.png',
    cta: { href: '#contact', label: 'Talk to an Electrician' },
  },
]

export function ServicesSection() {
  return (
    <section className="services-wrap" id="services">
      <div className="services-header">
        <div className="services-main-title">What Electrical Solution Do You Need?</div>
        <div className="services-description">
          Choose the exact service that matches your issue and get a licensed electrician
          dispatched fast—no guesswork, no delays.
        </div>
      </div>
      <div className="services-grid">
        {SERVICES.map((s) => (
          <article key={s.title} className="service-card">
            <img src={s.image} alt="" loading="lazy" width={1024} height={768} />
            <div className="service-content">
              <div className="service-copy">
                <div className="service-title">{s.title}</div>
                {s.subtitle ? <div className="service-subtitle">{s.subtitle}</div> : null}
                <div className="service-list">
                  {s.body.map((line, i) => (
                    <div key={i}>{line}</div>
                  ))}
                </div>
              </div>
              {s.cta ? (
                <a className="service-cta" href={s.cta.href}>
                  {s.cta.label}
                </a>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

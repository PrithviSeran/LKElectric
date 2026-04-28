import { useState } from 'react'

const FAQS = [
  {
    q: 'Do you offer same-day service?',
    a: 'Yes. For most repairs and urgent issues, we can provide same-day service depending on availability.',
  },
  {
    q: 'What areas do you serve?',
    a: 'We serve Toronto and surrounding GTA areas. Contact us to confirm your location.',
  },
  {
    q: 'Do you provide free quotes?',
    a: 'Yes. We provide clear quotes so you know exactly what to expect before work begins.',
  },
  {
    q: 'Can you handle emergency electrical repairs?',
    a: 'Yes. We handle urgent issues like power loss, tripping breakers, and faulty outlets.',
  },
  {
    q: 'What types of EV chargers do you install?',
    a: 'We install Level 1, Level 2, and advanced charging systems based on your needs.',
  },
  {
    q: 'Are you licensed and insured?',
    a: 'Yes. We are fully licensed and insured for both residential and commercial work.',
  },
]

export function FaqSection() {
  const [open, setOpen] = useState(0)

  return (
    <div className="faq-section">
      <div className="faq-wrap">
        <div className="faq-title">Frequently Asked Questions</div>
        {FAQS.map((item, idx) => {
          const isOpen = open === idx
          return (
            <div key={item.q} className={`faq-item${isOpen ? ' active' : ''}`}>
              <button
                type="button"
                className="faq-question"
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? -1 : idx)}
              >
                {item.q}
              </button>
              <div className="faq-answer" style={{ maxHeight: isOpen ? 200 : 0 }}>
                <p>{item.a}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

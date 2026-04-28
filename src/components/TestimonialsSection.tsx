const REVIEWS = [
  {
    quote:
      "Luke is great! The outlets and exhaust chimney in my rental home's kitchen stopped working. Called him yesterday evening and he was there today morning to fix it. He showed me exactly what was wrong and repaired it within the original quoted budget.",
    name: 'Jaspreet',
  },
  {
    quote:
      "I would highly recommend this company to anyone in need of reliable and skilled electrical services. It's rare to find such a combination of professionalism, expertise, and excellent customer service.",
    name: 'Harman Sekhon',
  },
  {
    quote:
      'The electrician arrived on time, diagnosed the problem quickly, and explained everything clearly. The work was efficient and thorough. I highly recommend LK Electric for any electrical needs.',
    name: 'Kimberley J',
  },
]

export function TestimonialsSection() {
  return (
    <section className="testimonial-section" id="testimonials">
      <div className="testimonial-wrap">
        <h2 className="testimonial-title">
          See What Others Have Experienced With LK Electric
        </h2>
        <div className="testimonial-grid">
          {REVIEWS.map((r) => (
            <div key={r.name} className="testimonial-card">
              <div className="testimonial-quote">{r.quote}</div>
              <div className="testimonial-profile">
                <div className="testimonial-name">{r.name}</div>
                <div className="testimonial-verified">✔ Verified Customer</div>
                <div className="testimonial-stars">★★★★★</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

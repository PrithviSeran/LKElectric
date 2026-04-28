import { PHONE_TEL } from '../lib/constants'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const LOCAL_SLIDES = [
  {
    city: 'Scarborough',
    desc: '3 Electricians Available + Master Technician.',
    bg: '/images/west-hill-10-commute.webp',
  },
  {
    city: 'North York',
    desc: '2 Electricians Available.',
    bg: '/images/f86ba256-639b-40d2-9ee8-44e2d537e219.avif',
  },
  {
    city: 'Pickering',
    desc: '2 Electricians Available.',
    bg: '/images/googlemaps_westoaktrails.webp',
  },
  {
    city: 'Markham',
    desc: '3 Electricians Available.',
    bg: '/images/cq5dam.web_.1280.1280.jpeg',
  },
  {
    city: 'Etobicoke',
    desc: '2 Electricians Available.',
    bg: '/images/cq5dam.web_.1280.1280-1.jpeg',
  },
  {
    city: 'Toronto',
    desc: '4 Electricians Available.',
    bg: '/images/5694-jenvic-grove-mississauga-W11904582-1.jpg',
  },
]

function slideBg(url: string) {
  return `linear-gradient(to top, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.35)), url(${url})`
}

export function LocationsSlider() {
  return (
    <section className="locations-block" id="locations">
      <h2>Available Teams Around Toronto</h2>
      <Swiper
        className="ls-swiper"
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        loop
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
      >
        {LOCAL_SLIDES.map((slide) => (
          <SwiperSlide key={slide.city}>
            <div className="ls-loc-slide">
              <div className="ls-loc-slide__bg" style={{ backgroundImage: slideBg(slide.bg) }} />
              <div className="ls-loc-slide__inner">
                <div className="ls-loc-slide__title">{slide.city}</div>
                <div className="ls-loc-slide__desc">{slide.desc}</div>
                <a className="ls-loc-slide__cta" href={PHONE_TEL}>
                  Call Now
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

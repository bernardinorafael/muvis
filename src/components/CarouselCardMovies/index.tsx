import { ReactNode } from 'react'
import { useKeenSlider } from 'keen-slider/react'

import 'keen-slider/keen-slider.min.css'

export function CarouselCardMovies({ children }: { children: ReactNode }) {
  const [sliderRef] = useKeenSlider({
    loop: true,
    slides: { perView: 5.4, spacing: 24 },

    breakpoints: {
      '(max-width: 1750px)': {
        slides: { perView: 4.2, spacing: 24 },
      },

      '(max-width: 1550px)': {
        slides: { perView: 3.7, spacing: 24 },
      },

      '(max-width: 1280px)': {
        slides: { perView: 3.2, spacing: 24 },
      },

      '(max-width: 1000px)': {
        slides: { perView: 4.2, spacing: 24 },
      },

      '(max-width: 853px)': {
        slides: { perView: 3.2, spacing: 24 },
      },

      '(max-width: 670px)': {
        slides: { perView: 1.8, spacing: 24 },
      },
    },
  })

  return (
    <div className="keen-slider" ref={sliderRef}>
      {children}
    </div>
  )
}

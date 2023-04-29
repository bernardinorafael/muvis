import { ReactNode } from 'react'
import { useKeenSlider } from 'keen-slider/react'

import 'keen-slider/keen-slider.min.css'

export function CarouselCardMovie({ children }: { children: ReactNode }) {
  const [sliderRef] = useKeenSlider({
    loop: true,
    slides: { perView: 1, spacing: 24 },
  })

  return (
    <div className="keen-slider" ref={sliderRef}>
      {children}
    </div>
  )
}

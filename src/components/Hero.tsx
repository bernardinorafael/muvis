import Image from 'next/image'
import { cn } from '@/utils/cn'

import { HeroBannerMask } from './HeroBannerMask'
import { ImageOverlay } from './ImageOverlay'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'

export function Hero() {
  const [sliderRef] = useKeenSlider({})

  return (
    <div
      className={cn(
        'keen-slider',
        'relative z-10 h-[740px] w-full select-none',
        '2xl:h-[480px]',
      )}
      ref={sliderRef}
    >
      {Array.from({ length: 4 }).map((_, i) => {
        return (
          <div className="keen-slider__slide" key={i}>
            <Image
              fill
              priority
              quality={100}
              alt="MadMax Fury Road"
              src="/bg/mad_max-fury_road.jpg"
              className={cn('z-10 object-cover')}
            />

            <HeroBannerMask />
            <ImageOverlay />
          </div>
        )
      })}
    </div>
  )
}

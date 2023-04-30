import Image from 'next/image'
import { cn } from '@/utils/cn'

import { HeroBannerMask } from './HeroBannerMask'
import { ImageOverlay } from './ImageOverlay'
import 'keen-slider/keen-slider.min.css'
import React from 'react'
import { useKeenSlider } from 'keen-slider/react'

import { Movie } from '@/types/movie'

interface HeroProps {
  movies: Movie[]
}

export function Hero({ movies }: HeroProps) {
  const [sliderRef] = useKeenSlider({
    loop: true,
    slides: { perView: 1 },
  })

  return (
    <div
      className={cn(
        'keen-slider',
        'relative z-10 h-[740px] w-full select-none',
        '2xl:h-[480px]',
      )}
      ref={sliderRef}
    >
      {movies.map((movie, i) => {
        return (
          <div className="keen-slider__slide" key={i}>
            <Image
              fill
              priority
              quality={100}
              alt={movie.title}
              src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
              className={cn('z-10 object-cover object-top')}
            />

            <HeroBannerMask
              id={movie.id}
              overview={movie.overview}
              title={movie.title}
              vote_average={movie.vote_average}
              vote_count={movie.vote_count}
            />
            <ImageOverlay />
          </div>
        )
      })}
    </div>
  )
}

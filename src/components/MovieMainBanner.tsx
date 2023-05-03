import Image from 'next/image'
import { cn } from '@/utils/cn'

import { Movie } from '@/types/movie'

import { HeroBannerMask } from './HeroBannerMask'
import { ImageOverlay } from './ImageOverlay'

interface HeroProps {
  movie: Movie
}

export function MovieMainBanner({ movie }: HeroProps) {
  return (
    <div
      className={cn('relative z-10 h-[740px] w-full select-none', '2xl:h-[480px]')}
    >
      <div className="keen-slider__slide">
        <Image
          className={cn('z-10 object-cover object-top')}
          src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
          priority
          alt={movie.title}
          quality={100}
          fill
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
    </div>
  )
}

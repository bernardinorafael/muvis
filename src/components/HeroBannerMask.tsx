import router from 'next/router'
import { cn } from '@/utils/cn'
import Balancer from 'react-wrap-balancer'

import { Movie } from '@/types/movie'

import { Button } from './Button'
import { RatedMovie } from './RatedMovie'

type HeroBannerMaskProps = Pick<
  Movie,
  'title' | 'id' | 'overview' | 'vote_average' | 'vote_count'
>

export function HeroBannerMask(props: HeroBannerMaskProps) {
  return (
    <div className="absolute z-50 flex h-full w-full flex-col justify-center p-10">
      <div
        className={cn('flex w-full max-w-[50%] flex-col gap-2', 'md:max-w-[75%]')}
      >
        <h1
          className={cn(
            'font-cursive text-9xl tracking-tight text-white',
            '2xl:text-7xl',
            'xl:text-6xl',
          )}
        >
          <Balancer>{props.title}</Balancer>
        </h1>

        <RatedMovie
          vote_average={props.vote_average}
          vote_count={props.vote_count}
        />

        <p
          className={cn(
            'mt-2 line-clamp-4 max-w-[75%] overflow-hidden text-ellipsis text-lg text-zinc-300',
            '2xl:max-w-[100%]',
            'leading-tight xl:text-sm',
            'md:hidden',
          )}
        >
          {props.overview}
        </p>

        <Button
          className="mt-4 self-start"
          onClick={() => router.push(`/movie/${props.id}`)}
        >
          Ver mais
        </Button>
      </div>
    </div>
  )
}

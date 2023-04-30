import { cn } from '@/utils/cn'
import { Star } from '@phosphor-icons/react'
import Balancer from 'react-wrap-balancer'

import { Movie } from '@/types/movie'

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

        <div className="flex items-center gap-1">
          <Star size={26} weight="fill" className="fill fill-red-700" />
          <span className="pt-1 text-lg font-medium">
            {props.vote_average} | {props.vote_count}
          </span>
        </div>

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

        <button
          className={cn(
            'mt-6 flex items-center justify-center gap-3 self-start rounded bg-violet-800 px-7 py-2',
            'outline-2 outline-offset-2 outline-violet-800 focus-within:outline',
            'transition-colors hover:bg-violet-700',
            'active:scale-95',
            'xl:px-7 xl:py-3',
          )}
        >
          <span className="text-lg font-bold">Ver mais</span>
        </button>
      </div>
    </div>
  )
}

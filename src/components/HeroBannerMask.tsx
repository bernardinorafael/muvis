import { useRouter } from 'next/router'
import { cn } from '@/utils/cn'
import Balancer from 'react-wrap-balancer'

import { Movie } from '@/types/movie'

import { RatedMovie } from './RatedMovie'

type HeroBannerMaskProps = Pick<
  Movie,
  'title' | 'id' | 'overview' | 'vote_average' | 'vote_count'
>

export function HeroBannerMask(props: HeroBannerMaskProps) {
  const router = useRouter()

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

        <button
          className={cn(
            'mt-6 flex items-center justify-center gap-3 self-start rounded bg-violet-800 px-7 py-2',
            'outline-2 outline-offset-2 outline-violet-800 focus-within:outline',
            'transition-colors hover:bg-violet-700',
            'active:scale-95',
            'xl:px-7 xl:py-3',
          )}
          onClick={() => router.push(`/movie/${props.id}`)}
        >
          <span className="text-lg font-bold">Ver mais</span>
        </button>
      </div>
    </div>
  )
}

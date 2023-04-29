import { cn } from '@/utils/cn'
import { Play, Star } from '@phosphor-icons/react'
import Balancer from 'react-wrap-balancer'

interface HeroBannerMaskProps {}

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
          <Balancer>Mad Max: Estrada da Fúria</Balancer>
        </h1>

        <div className="flex items-center gap-1">
          <Star size={26} weight="fill" className="fill fill-yellow-400" />
          <span className="pt-1 text-lg font-medium">8.2 | 3478</span>
        </div>

        <p
          className={cn(
            'mt-2 max-w-[75%] text-lg text-zinc-400',
            '2xl:max-w-[100%]',
            'xl:text-base',
            'md:hidden',
          )}
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae provident
          soluta veritatis sed aliquid quasi autem doloribus odio pariatur. Vitae
          cumque dolore molestiae iusto facere omnis voluptates eaque a voluptatibus?
        </p>

        <div className="flex items-center gap-1">
          <span className="font-bold text-zinc-400">2h35</span>
          <span className="font-bold text-zinc-400">•</span>
          <span className="font-bold text-zinc-400">Ação, Aventura, Drama</span>
          <span className="font-bold text-zinc-400">•</span>
          <span className="font-bold text-zinc-400">2021</span>
        </div>

        <button
          className={cn(
            'mt-6 flex items-center justify-center gap-3 self-start rounded-full bg-violet-800 px-10 py-5',
            'outline-2 outline-offset-2 outline-violet-800 focus-within:outline',
            'transition-colors hover:bg-violet-700',
            'active:scale-95',
            'xl:px-7 xl:py-3',
          )}
        >
          <Play size={34} weight="fill" />
          <span className="text-2xl font-bold">Assistir</span>
        </button>
      </div>
    </div>
  )
}

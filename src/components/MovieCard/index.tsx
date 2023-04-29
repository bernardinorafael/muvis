import Image from 'next/image'
import { cn } from '@/utils/cn'

interface MovieCardProps {
  image: string
}

export function MovieCard(props: MovieCardProps) {
  return (
    <div className={cn('group relative h-[490px] bg-opacity-40 shadow-4xl')}>
      <Image
        className={cn(
          'cursor-pointer rounded-lg object-cover object-top opacity-60',
          'transition-transform group-hover:z-10 group-hover:scale-110 group-hover:shadow-5xl',
          'transition-all duration-300 hover:opacity-100',
        )}
        priority
        fill
        quality={100}
        src={props.image}
        alt=""
      />
    </div>
  )
}

import Image from 'next/image'
import { cn } from '@/utils/cn'

interface MovieCardProps {
  image: string
}

export function MovieCard(props: MovieCardProps) {
  return (
    <div
      className={cn(
        'group relative h-[550px] bg-opacity-40 shadow-4xl',
        'xl:h-[430px]',
        'lg:h-[290px]',
        'sm:h-[430px]',
      )}
    >
      <Image
        className={cn(
          'rounded-lg object-cover object-top opacity-60',
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

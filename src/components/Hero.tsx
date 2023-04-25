import { cn } from '@/utils/cn'
import Image from 'next/image'

export function Hero() {
  return (
    <div className={cn('relative h-[740px] w-full', '2xl:h-[480px]')}>
      <Image
        fill
        priority
        quality={100}
        alt="MadMax Fury Road"
        src="/bg/mad_max-fury_road.jpg"
        className={cn('object-cover')}
      />
    </div>
  )
}

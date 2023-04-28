import Image from 'next/image'
import { cn } from '@/utils/cn'

import { HeroBannerMask } from './HeroBannerMask'
import { ImageOverlay } from './ImageOverlay'

export function Hero() {
  return (
    <div className={cn('relative h-[740px] w-full select-none', '2xl:h-[480px]')}>
      <Image
        fill
        priority
        quality={100}
        alt="MadMax Fury Road"
        src="/bg/mad_max-fury_road.jpg"
        className={cn('object-cover')}
      />

      <HeroBannerMask />

      <ImageOverlay />
    </div>
  )
}

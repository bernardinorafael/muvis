import { cn } from '@/utils/cn'
import Image from 'next/image'

export function HeroBanner() {
  return (
    <div className={cn('relative h-[780px]')}>
      <Image
        fill
        priority
        quality={100}
        alt="Filme interestelar"
        src="/bg/the_hobbit_the_battle_of_the_five_armies.jpg"
        className={cn('object-cover object-top')}
      />
    </div>
  )
}

import { cn } from '@/utils/cn'

export function ImageOverlay() {
  return (
    <div
      className={cn(
        'absolute left-0 top-0 z-30 h-full w-full bg-gradient-to-b from-transparent to-zinc-900',
      )}
    />
  )
}

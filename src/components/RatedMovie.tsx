import { cn } from '@/utils/cn'
import { Star } from 'lucide-react'

interface RatedMovieProps {
  vote_average: number
  vote_count: number
  className?: string
}

export function RatedMovie({ className, ...props }: RatedMovieProps) {
  return (
    <div className={cn('flex items-center gap-1', className)}>
      <Star
        size={24}
        strokeWidth={1.5}
        className="fill fill-red-700 stroke-red-700"
      />

      <span className="pt-1 text-lg font-medium text-zinc-200">
        {props.vote_average} | {props.vote_count}
      </span>
    </div>
  )
}

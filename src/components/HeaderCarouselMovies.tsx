import Link from 'next/link'
import { cn } from '@/utils/cn'
import { ArrowRight } from '@phosphor-icons/react'

interface HeaderCarouselMoviesProps {
  description: string
  href?: string
}

export function HeaderCarouselMovies(props: HeaderCarouselMoviesProps) {
  return (
    <div className="flex items-center gap-10">
      <h2 className={cn('text-4xl font-bold', 'md:text-2xl')}>
        {props.description}
      </h2>

      <Link
        className={cn(
          'flex items-center gap-2 pt-2 text-2xl font-semibold text-violet-800',
          'hover:text-violet-700 hover:transition-colors',
          'pt-0 md:text-base',
        )}
        href={props.href!}
      >
        Ver mais
        <ArrowRight />
      </Link>
    </div>
  )
}

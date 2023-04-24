import { cn } from '@/utils/cn'

import { MagnifyingGlass } from '@phosphor-icons/react'
import { ButtonHTMLAttributes } from 'react'

type SearchButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export function SearchMoviesButton(props: SearchButtonProps) {
  return (
    <button
      {...props}
      className={cn(
        'flex items-center justify-center p-3 border border-transparent rounded-full',
        'hover:border-zinc-700 transition-all',
        'active:scale-95',
      )}
    >
      <MagnifyingGlass className={cn('fill-zinc-600')} size={28} weight="bold" />
    </button>
  )
}

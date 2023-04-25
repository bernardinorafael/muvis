import { cn } from '@/utils/cn'

import { User } from '@phosphor-icons/react'
import { ButtonHTMLAttributes } from 'react'

type SearchButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export function LoginDialogButton(props: SearchButtonProps) {
  return (
    <button
      {...props}
      className={cn(
        'flex items-center justify-center gap-2 p-2 text-zinc-300 text-sm border border-transparent rounded-full',
        'hover:border-zinc-700 transition-all',
        'active:scale-[0.98]',
      )}
    >
      <User className={cn('fill-zinc-600')} size={28} weight="duotone" />
    </button>
  )
}
import { ButtonHTMLAttributes } from 'react'
import { cn } from '@/utils/cn'
import { User } from '@phosphor-icons/react'

type SearchButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export function LoginDialogButton(props: SearchButtonProps) {
  return (
    <button
      {...props}
      className={cn(
        'flex items-center justify-center gap-2 rounded-full border border-transparent p-2 text-sm text-zinc-300',
        'hover:border-zinc-700 hover:transition-all',
        'outline-2 outline-offset-2 outline-zinc-800 focus-within:outline',
      )}
    >
      <User className={cn('fill-zinc-600')} size={28} weight="duotone" />
    </button>
  )
}

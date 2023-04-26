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
        'transition-all hover:border-zinc-700',
        'active:scale-[0.98]',
      )}
    >
      <User className={cn('fill-zinc-600')} size={28} weight="duotone" />
    </button>
  )
}

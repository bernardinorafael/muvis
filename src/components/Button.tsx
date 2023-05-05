import { ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/utils/cn'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  className?: string
}

export function Button({ className, children, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        'flex items-center justify-center rounded bg-violet-800 px-4 py-2 font-semibold text-zinc-300',
        'outline-2 outline-offset-2 outline-violet-800 focus-within:outline',
        'transition-colors hover:bg-violet-700',
        'active:scale-95',
        'xl:px-7 xl:py-3',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}

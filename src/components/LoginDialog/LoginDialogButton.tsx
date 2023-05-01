import { ButtonHTMLAttributes } from 'react'
import { cn } from '@/utils/cn'
import { User } from 'lucide-react'

type SearchButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export function LoginDialogButton(props: SearchButtonProps) {
  return (
    <button
      {...props}
      className={cn(
        'flex items-center justify-center gap-2 rounded-full p-1 text-sm text-zinc-400',
        'outline-2 outline-offset-2 outline-zinc-950 focus-within:outline',
      )}
    >
      <User className="fill-zinc-400" size={32} strokeWidth={1} />

      <div className="flex flex-col text-left">
        <span className="text-sm font-extrabold text-zinc-300">Olá!</span>
        <span className="text-xs font-light"> Seja bem-vindo</span>
      </div>
    </button>
  )
}

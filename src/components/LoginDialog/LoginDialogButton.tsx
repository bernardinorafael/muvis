import { ButtonHTMLAttributes } from 'react'
import { User } from 'lucide-react'

type SearchButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export function LoginDialogButton(props: SearchButtonProps) {
  return (
    <button
      className="flex items-center justify-center gap-2 rounded-full p-1 text-sm text-zinc-400"
      {...props}
    >
      <User className="fill-zinc-400" size={32} strokeWidth={1} />

      <div className="flex flex-col text-left">
        <span className="text-sm font-extrabold text-zinc-300">Olá!</span>
        <span className="text-xs font-light"> Seja bem-vindo</span>
      </div>
    </button>
  )
}

import { cn } from '@/utils/cn'
import { Checkbox } from '../primitives/Checkbox'

export function LoginForm() {
  return (
    <form
      className={cn(
        'w-full flex flex-col gap-4 p-4 border border-zinc-800 rounded-lg',
      )}
    >
      <label className={cn('flex flex-col gap-3 text-zinc-300')}>
        E-mail*
        <input
          className={cn(
            'h-12 rounded-md bg-zinc-800 placeholder:text-zinc-500 px-4 text-lg',
            'focus:outline outline-offset-2 outline-2 focus:outline-zinc-800',
          )}
          type="text"
          autoFocus
        />
      </label>

      <label className={cn('flex flex-col gap-3 text-zinc-300')}>
        Senha*
        <input
          className={cn(
            'h-12 rounded-md bg-zinc-800 placeholder:text-zinc-500 px-4 text-lg',
            'focus:outline outline-offset-2 outline-2 focus:outline-zinc-800',
          )}
          type="password"
        />
      </label>

      <label
        className={cn(
          'inline-flex items-center text-sm cursor-pointer select-none gap-2 text-zinc-300',
        )}
      >
        <Checkbox />
        Mantenha-me conectado
      </label>

      <button
        className={cn(
          'flex items-center mt-4 justify-center gap-3 text-zinc-300 font-semibold text-lg h-12 bg-violet-900 rounded-md',
          'hover:bg-violet-800 transition-colors',
          'focus:outline outline-offset-2 outline-2 focus:outline-violet-800',
          'active:scale-[0.98]',
        )}
        type="button"
      >
        Entrar
      </button>
    </form>
  )
}

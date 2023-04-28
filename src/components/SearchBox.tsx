import { cn } from '@/utils/cn'
import { MagnifyingGlass } from '@phosphor-icons/react'

export function SearchBox() {
  return (
    <div
      className={cn(
        'flex w-full max-w-lg items-center gap-4 rounded bg-zinc-950 px-4 py-2',
        'outline-2 outline-offset-2 outline-zinc-950 focus-within:outline',
      )}
    >
      <MagnifyingGlass className="fill-zinc-400" size={28} weight="fill" />

      <input
        className={cn(
          'w-full border-none bg-transparent outline-none',
          'focus:outline-none',
          'placeholder:text-zinc-500',
        )}
        type="text"
        placeholder="Buscar"
      />
    </div>
  )
}

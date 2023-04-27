import { cn } from '@/utils/cn'
import { MagnifyingGlass } from '@phosphor-icons/react'

export function SearchBox() {
  return (
    <div
      className={cn(
        'flex w-full max-w-lg items-center gap-3 rounded border border-zinc-800 bg-zinc-950 px-4 py-3',
        'outline-2 outline-offset-2 outline-zinc-950 focus-within:outline',
      )}
    >
      <MagnifyingGlass size={24} />

      <input
        className={cn(
          'w-full border-none bg-transparent outline-none',
          'focus:outline-none',
        )}
        type="text"
        placeholder="Buscar"
      />
    </div>
  )
}

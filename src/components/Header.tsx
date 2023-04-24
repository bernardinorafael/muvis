import { cn } from '@/utils/cn'
import { CaretDown } from '@phosphor-icons/react'
import { SearchMoviesButton } from './SearchMoviesButton'
import { SearchMoviesDialog } from './SearchMoviesDialog'

export function Header() {
  const BUTTONS_NAV = ['Home', 'Categorias', 'Minha lista']

  return (
    <header className={cn('w-full h-16 flex items-center shadow-2xl')}>
      <div
        className={cn(
          'flex items-center justify-between w-full max-w-[1100px] mx-auto px-4 h-full',
        )}
      >
        <div className={cn('flex items-center gap-6')}>
          <nav className={cn('flex items-center gap-4')}>
            {BUTTONS_NAV.map((label, index) => {
              return (
                <button
                  className={cn(
                    'font-semibold text-sm flex items-center justify-center gap-2 px-3 py-2 rounded-md text-zinc-400',
                    'hover:bg-zinc-800 hover:text-zinc-200 transition-all',
                    'active:scale-95',
                  )}
                  key={index}
                >
                  {label}
                  <CaretDown size={18} />
                </button>
              )
            })}
          </nav>
        </div>

        <SearchMoviesDialog>
          <SearchMoviesButton />
        </SearchMoviesDialog>
      </div>
    </header>
  )
}

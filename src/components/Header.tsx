import { cn } from '@/utils/cn'
import { CaretDown } from '@phosphor-icons/react'

import { LoginDialogButton } from './LoginDialog/LoginDialogButton'
import { LoginDialogContent } from './LoginDialog/LoginDialogContent'

export function Header() {
  const BUTTONS_NAV = ['Home', 'Categorias', 'Minha lista']

  return (
    <header
      className={cn(
        'flex h-16 w-full items-center border-b border-zinc-800 shadow-2xl',
      )}
    >
      <div
        className={cn(
          'mx-auto flex h-full w-full max-w-[1100px] items-center justify-between px-4',
        )}
      >
        <div className={cn('flex items-center gap-6')}>
          <nav className={cn('flex items-center gap-4')}>
            {BUTTONS_NAV.map((label, i) => {
              return (
                <button
                  className={cn(
                    'flex items-center justify-center gap-2 rounded-md px-3 py-2 text-sm font-semibold text-zinc-400',
                    'transition-all hover:bg-zinc-800 hover:text-zinc-200',
                    'active:scale-[0.95]',
                  )}
                  key={i}
                >
                  {label}
                  <CaretDown size={18} />
                </button>
              )
            })}
          </nav>
        </div>

        <LoginDialogContent>
          <LoginDialogButton />
        </LoginDialogContent>
      </div>
    </header>
  )
}

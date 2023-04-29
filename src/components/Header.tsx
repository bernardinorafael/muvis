import React from 'react'
import Link from 'next/link'
import { useHeaderSticky } from '@/hook/use-header-sticky'
import { cn } from '@/utils/cn'
import { CaretDown, Popcorn } from '@phosphor-icons/react'

import { DropdownMenuHeader } from './DropdownMenuHeader'
import { LoginDialogButton } from './LoginDialog/LoginDialogButton'
import { LoginDialogContent } from './LoginDialog/LoginDialogContent'
import { SearchBox } from './SearchBox'

export function Header() {
  const { isHeaderShown } = useHeaderSticky()

  return (
    <header
      className={cn(
        'shadow-2xl flex h-16 w-full items-center border-b border-zinc-800 bg-zinc-900',
        { 'sticky top-0 z-20 animate-shown-header shadow-4xl': isHeaderShown },
      )}
    >
      <div className="mx-auto flex h-full w-full max-w-[1100px] items-center justify-between px-4">
        <Link className="active:scale-[0.95]" href="/">
          <Popcorn className="fill-zinc-400" size={38} weight="fill" />
        </Link>

        <SearchBox />

        <div className={cn('flex items-center gap-6')}>
          <nav className={cn('flex items-center gap-4')}>
            <DropdownMenuHeader>
              <button
                className={cn(
                  'flex select-none items-center justify-center gap-2 rounded p-3 text-sm font-semibold text-zinc-400',
                  'transition-colors hover:bg-zinc-800 hover:text-zinc-200',
                )}
              >
                Categorias
                <CaretDown size={18} />
              </button>
            </DropdownMenuHeader>
          </nav>

          <LoginDialogContent>
            <LoginDialogButton />
          </LoginDialogContent>
        </div>
      </div>
    </header>
  )
}

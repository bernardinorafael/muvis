import Link from 'next/link'
import Router from 'next/router'
import { cn } from '@/utils/cn'
import { Popcorn } from '@phosphor-icons/react'
import { ChevronDown } from 'lucide-react'

import { DropdownMenuHeader } from './DropdownMenuHeader'
import { LoginDialogButton } from './LoginDialog/LoginDialogButton'
import { LoginDialogContent } from './LoginDialog/LoginDialogContent'
import { SearchBox } from './SearchBox'

export function Header() {
  return (
    <header className={cn('absolute top-4 z-50 flex h-16 w-full items-center', {})}>
      <div className="mx-auto flex h-full w-full max-w-[1100px] items-center justify-between rounded-full bg-zinc-800/50 px-4 shadow-4xl backdrop-blur-md">
        <div className={cn('flex items-center gap-6')}>
          <Link className="active:scale-[0.95]" href="/">
            <Popcorn className="fill-zinc-400" size={38} weight="fill" />
          </Link>

          <button
            className={cn(
              'flex select-none items-center justify-center gap-2 rounded px-2 text-sm font-semibold text-zinc-300',
              'underline-offset-4 hover:underline',
            )}
            onClick={() => Router.push('/discover')}
          >
            Descobrir
          </button>

          <DropdownMenuHeader>
            <button
              className={cn(
                'flex select-none items-center justify-center gap-2 rounded px-2 text-sm font-semibold text-zinc-300',
                'underline-offset-4 hover:underline',
              )}
            >
              Categorias
              <ChevronDown size={18} />
            </button>
          </DropdownMenuHeader>
        </div>

        <SearchBox />

        <LoginDialogContent>
          <LoginDialogButton />
        </LoginDialogContent>
      </div>
    </header>
  )
}

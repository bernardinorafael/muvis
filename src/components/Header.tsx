import Link from 'next/link'
import Router from 'next/router'
import { cn } from '@/utils/cn'
import { Popcorn } from '@phosphor-icons/react'

import { LoginDialogButton } from './LoginDialog/LoginDialogButton'
import { LoginDialogContent } from './LoginDialog/LoginDialogContent'
import { SearchBox } from './SearchBox'

export function Header() {
  return (
    <header className="z-50 flex h-16 w-full items-center bg-zinc-800/50 backdrop-blur-md">
      <div className="mx-auto flex h-full w-full max-w-[1100px] items-center justify-between px-4">
        <div className={cn('flex items-center gap-6')}>
          <Link className="active:scale-[0.95]" href="/">
            <Popcorn className="fill-zinc-100" size={38} weight="fill" />
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
        </div>

        <SearchBox />

        <LoginDialogContent>
          <LoginDialogButton />
        </LoginDialogContent>
      </div>
    </header>
  )
}

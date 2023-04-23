import { cn } from '@/utils/cn'
import { Input } from './primitive/Input'

import Link from 'next/link'

export function Header() {
  return (
    <header
      className={cn(
        'w-full h-20 flex items-center backdrop-blur-sm border-b border-zinc-800',
      )}
    >
      <div
        className={cn(
          'flex items-center justify-between w-full max-w-[1280px] mx-auto px-4 h-full',
        )}
      >
        <div className={cn('flex items-center gap-6')}>
          <span>MU</span>

          <nav>
            <Link href="/">Item 1</Link>
            <Link href="/">Item 2</Link>
            <Link href="/">Item 3</Link>
            <Link href="/">Item 4</Link>
            <Link href="/">Item 5</Link>
          </nav>
        </div>

        <div>
          <Input type="text" placeholder="Buscar filme" />
        </div>
      </div>
    </header>
  )
}

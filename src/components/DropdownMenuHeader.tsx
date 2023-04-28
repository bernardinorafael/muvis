import { ReactNode } from 'react'
import { cn } from '@/utils/cn'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import { CATEGORIES } from '@/config/menu-categories'

interface DropdownMenuHeaderProps {
  children: ReactNode
}

export function DropdownMenuHeader(props: DropdownMenuHeaderProps) {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger
        className={cn(
          'group',
          'outline-2 outline-offset-2 outline-zinc-800 focus-within:outline',
        )}
        asChild
      >
        {props.children}
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className={cn(
            'w-full rounded border border-zinc-800 bg-zinc-900 p-2 shadow-4xl',
            'data-[side=bottom]:animate-slide-down-fade',
          )}
          align="end"
        >
          {CATEGORIES.map(({ category, id }) => {
            return (
              <DropdownMenu.Item
                className={cn(
                  'w-64 cursor-pointer rounded p-2 pl-5 font-medium text-zinc-300',
                  'data-[highlighted]:bg-zinc-950',
                  'active:scale-[0.97]',
                  'focus:outline-none',
                )}
                key={id}
              >
                {category}
              </DropdownMenu.Item>
            )
          })}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}

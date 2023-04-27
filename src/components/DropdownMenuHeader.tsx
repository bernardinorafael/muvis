import { ReactNode } from 'react'
import { cn } from '@/utils/cn'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

interface DropdownMenuHeaderProps {
  children: ReactNode
}

export function DropdownMenuHeader(props: DropdownMenuHeaderProps) {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>{props.children}</DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className={cn(
            'w-full rounded bg-zinc-800 p-2 shadow-2xl',
            'data-[side=bottom]:animate-slide-down-fade',
          )}
        >
          {Array.from({ length: 8 }).map((_, index) => {
            return (
              <DropdownMenu.Item
                className={cn(
                  'w-64 cursor-pointer rounded p-2 font-medium text-zinc-300',
                  'data-[highlighted]:bg-zinc-950',
                  'active:scale-[0.97]',
                  'focus:outline-none',
                )}
                key={index}
              >
                Hi Lorena
              </DropdownMenu.Item>
            )
          })}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}

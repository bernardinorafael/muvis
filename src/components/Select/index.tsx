import { cn } from '@/utils/cn'
import * as SelectComponent from '@radix-ui/react-select'
import { ChevronDown } from 'lucide-react'

import { Item } from './Item'

interface SelectProps extends SelectComponent.SelectProps {
  className?: string
  options: string[]
  placeholder: string
}

export function Select({ className, options, placeholder, ...props }: SelectProps) {
  return (
    <SelectComponent.Root {...props}>
      <SelectComponent.Trigger
        className={cn(
          'group flex h-12 w-full max-w-[190px] select-none items-center justify-between gap-2 rounded-lg border border-zinc-800 bg-zinc-900 p-3 text-sm text-zinc-400',
          'hover:border-zinc-700 hover:transition-colors',
          'focus:outline-none',
        )}
      >
        <SelectComponent.Value placeholder={placeholder} />

        <SelectComponent.Icon
          className={cn(
            'group-data-[state=open]:rotate-180 group-data-[state=open]:duration-300',
          )}
        >
          <ChevronDown size={18} />
        </SelectComponent.Icon>
      </SelectComponent.Trigger>

      <SelectComponent.Portal>
        <SelectComponent.Content
          className={cn(
            'w-select-width overflow-hidden rounded-md border border-zinc-800 bg-zinc-950/70 shadow-4xl backdrop-blur-md',
            'data-[state=open]:animate-slide-down-fade',
            className,
          )}
          position="popper"
          sideOffset={3}
        >
          <SelectComponent.Viewport>
            {options.map((option, i) => {
              return (
                <Item key={`${option}-${i}`} value={option}>
                  {option}
                </Item>
              )
            })}
          </SelectComponent.Viewport>
        </SelectComponent.Content>
      </SelectComponent.Portal>
    </SelectComponent.Root>
  )
}

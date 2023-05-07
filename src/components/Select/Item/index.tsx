import React from 'react'
import { cn } from '@/utils/cn'
import * as SelectComponent from '@radix-ui/react-select'

interface SelectItemprops {
  children: React.ReactNode
  className?: string
  value: string
}

type Ref = React.ForwardedRef<HTMLInputElement>

const SelectItem = ({ className, ...props }: SelectItemprops, ref: Ref) => {
  return (
    <SelectComponent.Item
      className={cn(
        'relative cursor-pointer rounded p-2 pl-6 text-sm font-semibold text-zinc-500',
        'focus:outline-none',
        'data-[highlighted]:text-zinc-200 data-[highlighted]:transition-colors',
        className,
      )}
      value={props.value}
      ref={ref}
    >
      <SelectComponent.ItemText>{props.children}</SelectComponent.ItemText>

      <SelectComponent.ItemIndicator className="absolute left-0 top-1/2 z-10 h-full w-[6px] -translate-y-1/2 bg-zinc-400" />
    </SelectComponent.Item>
  )
}

export const Item = React.forwardRef(SelectItem)

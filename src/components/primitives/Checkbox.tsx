import { cn } from '@/utils/cn'
import { CheckFat } from '@phosphor-icons/react'
import * as CheckboxComponent from '@radix-ui/react-checkbox'

export function Checkbox(props: CheckboxComponent.CheckboxProps) {
  return (
    <CheckboxComponent.Root
      className={cn(
        'flex aspect-square h-[22px] items-center justify-center rounded border border-zinc-700 transition-colors',
        'data-[state=checked]:border-none data-[state=checked]:bg-violet-900',
        'outline-2 outline-offset-2 outline-violet-800 focus:outline',
      )}
      {...props}
    >
      <CheckboxComponent.Indicator>
        <CheckFat size={18} weight="fill" />
      </CheckboxComponent.Indicator>
    </CheckboxComponent.Root>
  )
}

import { cn } from '@/utils/cn'
import { X } from '@phosphor-icons/react'
import { Close } from '@radix-ui/react-dialog'

export function CloseDialogButton() {
  return (
    <Close
      className={cn(
        'absolute right-10 top-10 rounded-lg p-2 text-zinc-400',
        'transition-colors hover:bg-zinc-800',
        'active:scale-[0.9]',
      )}
    >
      <X size={28} />
    </Close>
  )
}

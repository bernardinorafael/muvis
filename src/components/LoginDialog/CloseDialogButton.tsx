import { cn } from '@/utils/cn'
import { X } from '@phosphor-icons/react'
import { Close } from '@radix-ui/react-dialog'

export function CloseDialogButton() {
  return (
    <Close
      className={cn(
        'absolute right-6 top-6 z-50 rounded p-1 text-zinc-200',
        'transition-colors hover:bg-zinc-800/50',
        'active:scale-[0.9]',
      )}
    >
      <X size={28} />
    </Close>
  )
}

import { cn } from '@/utils/cn'
import { X } from '@phosphor-icons/react'
import { Close } from '@radix-ui/react-dialog'

export function CloseDialogButton() {
  return (
    <Close
      className={cn(
        'absolute top-10 right-10 text-zinc-400 p-2 rounded-lg',
        'hover:bg-zinc-800 transition-colors',
        'active:scale-[0.9]',
      )}
    >
      <X size={28} />
    </Close>
  )
}

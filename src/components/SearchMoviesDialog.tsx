import { cn } from '@/utils/cn'
import { X } from '@phosphor-icons/react'
import * as DialogComponent from '@radix-ui/react-dialog'
import { ReactNode } from 'react'

interface SearchMoviesProps extends DialogComponent.DialogProps {
  children: ReactNode
}

export function SearchMoviesDialog({ children, ...props }: SearchMoviesProps) {
  return (
    <DialogComponent.Root {...props}>
      <DialogComponent.Trigger asChild>{children}</DialogComponent.Trigger>

      <DialogComponent.Portal>
        <DialogComponent.Overlay
          className={cn(
            'fixed inset-0 z-50 w-screen h-screen flex items-center justify-center',
          )}
        />

        <DialogComponent.Content
          className={cn(
            'absolute top-0 flex flex-col gap-8 z-50 h-screen w-screen bg-zinc-900 p-14',
            'data-[state=open]:animate-searchMoviesShown',
          )}
        >
          <DialogComponent.Close
            className={cn(
              'absolute top-10 right-10 text-zinc-400 p-2 rounded-lg',
              'hover:bg-zinc-800 transition-colors',
            )}
          >
            <X size={28} />
          </DialogComponent.Close>

          <DialogComponent.Title className={cn('font-bold text-5xl text-zinc-200')}>
            Busque por séries, filmes ou atores...
          </DialogComponent.Title>
        </DialogComponent.Content>
      </DialogComponent.Portal>
    </DialogComponent.Root>
  )
}

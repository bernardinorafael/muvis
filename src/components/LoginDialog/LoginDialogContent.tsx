import { ReactNode } from 'react'
import { cn } from '@/utils/cn'
import * as DialogComponent from '@radix-ui/react-dialog'
import * as TabsComponent from '@radix-ui/react-tabs'

import { CloseDialogButton } from './CloseDialogButton'
import { CreateAccountForm } from './CreateAccountForm'
import { LoginForm } from './LoginForm'

interface SearchMoviesProps extends DialogComponent.DialogProps {
  children: ReactNode
}

export function LoginDialogContent({ children, ...props }: SearchMoviesProps) {
  return (
    <DialogComponent.Root {...props}>
      <DialogComponent.Trigger asChild>{children}</DialogComponent.Trigger>

      <DialogComponent.Portal>
        <DialogComponent.Overlay className="fixed inset-0 z-50 flex h-screen w-screen items-center justify-center" />

        <DialogComponent.Content
          className={cn(
            'absolute top-0 z-50 flex h-screen w-screen flex-col gap-8 overflow-auto bg-zinc-900 py-14',
            'data-[state=open]:animate-search-dialog-shown',
          )}
        >
          <CloseDialogButton />

          <DialogComponent.Title className="text-center text-5xl font-extrabold leading-tight text-zinc-300">
            Sign-in
          </DialogComponent.Title>

          <TabsComponent.Root
            className={cn('shadow-lg mx-auto w-full max-w-xl')}
            defaultValue="login"
          >
            <TabsComponent.List className="shadow-xl mb-4 grid grid-cols-2 gap-5 rounded bg-zinc-800 p-2">
              <TabsComponent.Trigger
                className={cn(
                  'h-10 rounded font-semibold text-zinc-300',
                  'transition-colors data-[state=active]:bg-zinc-950',
                  'active:scale-[0.95]',
                )}
                value="login"
              >
                Login
              </TabsComponent.Trigger>

              <TabsComponent.Trigger
                className={cn(
                  'h-10 rounded font-semibold text-zinc-300',
                  'transition-colors data-[state=active]:bg-zinc-950',
                  'active:scale-[0.95]',
                )}
                value="create-account"
              >
                Criar conta
              </TabsComponent.Trigger>
            </TabsComponent.List>

            <TabsComponent.Content value="login">
              <LoginForm />
            </TabsComponent.Content>

            <TabsComponent.Content value="create-account">
              <CreateAccountForm />
            </TabsComponent.Content>
          </TabsComponent.Root>
        </DialogComponent.Content>
      </DialogComponent.Portal>
    </DialogComponent.Root>
  )
}

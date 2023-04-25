import { cn } from '@/utils/cn'
import * as DialogComponent from '@radix-ui/react-dialog'
import * as TabsComponent from '@radix-ui/react-tabs'
import { ReactNode } from 'react'
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
        <DialogComponent.Overlay
          className={cn(
            'fixed inset-0 z-50 w-screen h-screen flex items-center justify-center',
          )}
        />

        <DialogComponent.Content
          className={cn(
            'absolute top-0 overflow-auto flex flex-col gap-8 z-50 h-screen w-screen bg-zinc-900 py-14',
            'data-[state=open]:animate-searchMoviesShown',
          )}
        >
          <CloseDialogButton />

          <DialogComponent.Title
            className={cn('text-center text-zinc-300 font-semibold text-4xl')}
          >
            Faça login ou crie sua conta
          </DialogComponent.Title>

          <TabsComponent.Root
            className={cn('w-full max-w-xl mx-auto shadow-lg')}
            defaultValue="login"
          >
            <TabsComponent.List
              className={cn(
                'mb-4 p-2 bg-zinc-800 rounded-lg grid grid-cols-2 gap-5 shadow-xl',
              )}
            >
              <TabsComponent.Trigger
                className={cn(
                  'text-zinc-300 font-semibold h-10 rounded-lg',
                  'data-[state=active]:bg-zinc-950 transition-colors',
                  'active:scale-[0.95]',
                )}
                value="login"
              >
                Login
              </TabsComponent.Trigger>

              <TabsComponent.Trigger
                className={cn(
                  'text-zinc-300 font-semibold h-10 rounded-lg',
                  'data-[state=active]:bg-zinc-950 transition-colors',
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

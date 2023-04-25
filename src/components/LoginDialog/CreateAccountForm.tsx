import { cn } from '@/utils/cn'
import { Input } from './Input'

export function CreateAccountForm() {
  return (
    <form
      className={cn(
        'w-full flex flex-col gap-4 p-6 border border-zinc-800 rounded-lg',
      )}
    >
      <Input autoFocus label="Nome completo*" type="text" />
      <Input label="E-mail*" type="text" />
      <Input label="Telefone*" type="text" />

      <div className={cn('grid grid-cols-2 gap-6')}>
        <Input label="Senha*" type="password" />
        <Input label="Confirme sua senha*" type="password" />
      </div>

      <span
        className={cn(
          'underline cursor-pointer text-sm text-zinc-400',
          'hover:text-zinc-300 transition-colors',
        )}
      >
        Ajuda com a senha?
      </span>

      <span className={cn('text-xs leading-tight text-zinc-400 mt-4')}>
        Ao clicar em criar conta com o processo de criação de conta, você está
        concordando com nossos{' '}
        <span
          className={cn(
            'underline cursor-pointer',
            'hover:text-zinc-300 transition-colors',
          )}
        >
          Termos de Uso
        </span>
        . Por favor, leia-os com atenção antes de prosseguir.
      </span>

      <button
        className={cn(
          'flex items-center mt-4 justify-center gap-3 text-zinc-300 font-semibold text-lg h-12 bg-violet-900 rounded-md',
          'hover:bg-violet-800 transition-colors',
          'focus:outline outline-offset-2 outline-2 focus:outline-violet-800',
          'active:scale-[0.98]',
        )}
        type="button"
      >
        Criar conta
      </button>
    </form>
  )
}

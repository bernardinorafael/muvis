import { cn } from '@/utils/cn'
import { Input } from './Input'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const createAccountSchema = z
  .object({
    name: z
      .string()
      .min(3, 'Seu nome precisa conter no mínimo 3 letras')
      .max(30, 'Você atingiu o limite de 30 letras')
      .regex(
        /^[A-Za-z]+(?:[^\w\s]*[A-Za-z]+)*(?:\s+[A-Za-z]+(?:[^\w\s]*[A-Za-z]+)*)+$/,
        'Favor informar nome e sobrenome válido.',
      ),

    email: z.string().email('Favor inserir um e-mail válido'),

    fone: z
      .string()
      .nonempty('Telefone é um campo obrigatório')
      .max(11, 'Favor inserir um número de telefone válido'),

    password: z
      .string()
      .min(8, 'Mínimo de 8 caracteres')
      .max(24, 'Máximo de 24 caracteres')
      .regex(/\d/, 'Sua senha deve conter pelo menos 1 número')
      .regex(/[A-Z]/, 'Sua senha deve conter pelo menos 1 letra maíuscula')
      .regex(
        /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/,
        'Sua senha deve conter pelo menos 1 caracter especial',
      ),

    confirmPassword: z.string(),
  })
  .refine((data) => data.confirmPassword === data.password, {
    message: 'As senhas precisam ser iguais',
    path: ['confirmPassword'],
  })

type CreateUserForm = z.infer<typeof createAccountSchema>

export function CreateAccountForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<CreateUserForm>({
    resolver: zodResolver(createAccountSchema),
  })

  const handleCreateNewUser = async (data: CreateUserForm) => {
    await new Promise((resolve) => setTimeout(resolve, 700))
    console.log(data)

    reset()
  }

  return (
    <form
      className={cn(
        'w-full flex flex-col gap-4 p-6 border border-zinc-800 rounded-lg',
      )}
      onSubmit={handleSubmit(handleCreateNewUser)}
    >
      <Input
        error={!!errors.name}
        message={errors.name?.message}
        autoFocus
        label="Nome completo*"
        type="text"
        {...register('name')}
      />

      <Input
        error={!!errors.email}
        message={errors.email?.message}
        label="E-mail*"
        type="text"
        {...register('email')}
      />

      <Input
        error={!!errors.fone}
        message={errors.fone?.message}
        label="Telefone*"
        type="text"
        {...register('fone')}
      />

      <div className={cn('grid grid-cols-2 gap-6')}>
        <Input
          error={!!errors.password}
          message={errors.password?.message}
          label="Senha*"
          type="password"
          {...register('password')}
        />

        <Input
          error={!!errors.confirmPassword}
          message={errors.confirmPassword?.message}
          label="Confirme sua senha*"
          type="password"
          {...register('confirmPassword')}
        />
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
          'disabled:opacity-40 disabled:pointer-events-none',
          'focus:outline outline-offset-2 outline-2 focus:outline-violet-800',
          'active:scale-[0.98]',
        )}
        disabled={isSubmitting}
        type="submit"
      >
        Criar conta
      </button>
    </form>
  )
}

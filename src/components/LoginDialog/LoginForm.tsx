import { cn } from '@/utils/cn'
import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'

import { Checkbox } from '../primitives/Checkbox'
import { Input } from './Input'

const loginSchema = z.object({
  email: z.string().email('Favor inserir um e-mail válido'),
  password: z.string().nonempty('Senha é um campo obrigatório'),
  remember: z.boolean().default(false),
})

type LoginFormSchema = z.infer<typeof loginSchema>

export function LoginForm() {
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = useForm<LoginFormSchema>({
    resolver: zodResolver(loginSchema),
  })

  const handleFormLogin = async (data: LoginFormSchema) => {
    await new Promise((resolve) => setTimeout(resolve, 700))
    console.log(data)

    reset()
  }

  return (
    <form
      className="flex w-full flex-col gap-4 rounded-lg border border-zinc-800 p-6"
      onSubmit={handleSubmit(handleFormLogin)}
    >
      <Input
        autoFocus
        message={errors.email?.message}
        error={!!errors.email}
        label="E-mail*"
        type="text"
        {...register('email')}
      />

      <Input
        message={errors.password?.message}
        error={!!errors.password}
        label="Senha*"
        type="password"
        {...register('password')}
      />

      <div className={cn('mt-4 flex w-full items-center justify-between')}>
        <Controller
          control={control}
          name="remember"
          render={({ field }) => {
            return (
              <label
                className={cn(
                  'inline-flex cursor-pointer select-none items-center gap-2 text-sm text-zinc-300',
                )}
              >
                <Checkbox
                  onCheckedChange={(checked) => field.onChange(checked === true)}
                />
                Mantenha-me conectado
              </label>
            )
          }}
        />

        <span
          className={cn(
            'cursor-pointer text-sm text-zinc-400 underline',
            'transition-colors hover:text-zinc-300',
          )}
        >
          Esqueceu sua senha?
        </span>
      </div>

      <button
        className={cn(
          'mt-4 flex h-12 select-none items-center justify-center gap-3 rounded-md bg-violet-900 text-lg font-semibold text-zinc-300',
          'transition-colors hover:bg-violet-800',
          'outline-2 outline-offset-2 focus:outline focus:outline-violet-800',
          'active:scale-[0.98]',
          'disabled:pointer-events-none disabled:opacity-40',
        )}
        disabled={isSubmitting}
        type="submit"
      >
        Entrar
      </button>
    </form>
  )
}

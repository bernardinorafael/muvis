import { cn } from '@/utils/cn'
import { Checkbox } from '../primitives/Checkbox'
import { Input } from './Input'
import { z } from 'zod'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

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
      className={cn(
        'w-full flex flex-col gap-4 p-6 border border-zinc-800 rounded-lg',
      )}
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

      <div className={cn('w-full flex items-center justify-between mt-4')}>
        <Controller
          control={control}
          name="remember"
          render={({ field }) => {
            return (
              <label
                className={cn(
                  'inline-flex items-center text-sm cursor-pointer select-none gap-2 text-zinc-300',
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
            'underline cursor-pointer text-sm text-zinc-400',
            'hover:text-zinc-300 transition-colors',
          )}
        >
          Esqueceu sua senha?
        </span>
      </div>

      <button
        className={cn(
          'flex items-center mt-4 justify-center gap-3 select-none text-zinc-300 font-semibold text-lg h-12 bg-violet-900 rounded-md',
          'hover:bg-violet-800 transition-colors',
          'focus:outline outline-offset-2 outline-2 focus:outline-violet-800',
          'active:scale-[0.98]',
          'disabled:opacity-40 disabled:pointer-events-none',
        )}
        disabled={isSubmitting}
        type="submit"
      >
        Entrar
      </button>
    </form>
  )
}

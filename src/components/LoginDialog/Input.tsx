import { ForwardedRef, InputHTMLAttributes, forwardRef } from 'react'
import { cn } from '@/utils/cn'

type Ref = ForwardedRef<HTMLInputElement>

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: boolean
  message?: string
}

const InputComponent = (props: InputProps, ref: Ref) => {
  const { error, message, label, ...rest } = props

  return (
    <label className={cn('flex flex-col gap-3 text-zinc-300')}>
      {label}
      <input
        ref={ref}
        className={cn(
          'h-12 rounded-md border border-transparent bg-zinc-800 px-4 text-lg placeholder:text-zinc-500',
          'outline-2 outline-offset-2 focus:outline focus:outline-zinc-800',
          { 'border-red-900 focus:outline-red-900': error },
        )}
        {...rest}
      />
      {error && (
        <span className={cn('-mt-2 text-sm font-semibold text-red-900')}>
          {message}
        </span>
      )}
    </label>
  )
}

export const Input = forwardRef(InputComponent)

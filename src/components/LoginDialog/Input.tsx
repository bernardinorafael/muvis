import { cn } from '@/utils/cn'
import { ForwardedRef, InputHTMLAttributes, forwardRef } from 'react'

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
          'h-12 rounded-md bg-zinc-800 border border-transparent placeholder:text-zinc-500 px-4 text-lg',
          'focus:outline outline-offset-2 outline-2 focus:outline-zinc-800',
          { 'focus:outline-red-900 border-red-900': error },
        )}
        {...rest}
      />
      {error && (
        <span className={cn('text-sm font-semibold -mt-2 text-red-900')}>
          {message}
        </span>
      )}
    </label>
  )
}

export const Input = forwardRef(InputComponent)

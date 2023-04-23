import { cn } from '@/utils/cn'
import { ForwardedRef, InputHTMLAttributes, forwardRef } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

type Ref = ForwardedRef<HTMLInputElement>

const InputComponent = (props: InputProps, ref: Ref) => {
  return (
    <input
      className={cn(
        'h-11 px-3 bg-zinc-800 rounded-full placeholder:text-zinc-500 w-full',
      )}
      ref={ref}
      {...props}
    />
  )
}

export const Input = forwardRef(InputComponent)

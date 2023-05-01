import { useRouter } from 'next/router'
import { cn } from '@/utils/cn'
import { zodResolver } from '@hookform/resolvers/zod'
import { MagnifyingGlass } from '@phosphor-icons/react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const querySearchSchema = z.object({
  query: z.string(),
})

type QuerySearchForm = z.infer<typeof querySearchSchema>

export function SearchBox() {
  const { handleSubmit, register, reset } = useForm<QuerySearchForm>({
    resolver: zodResolver(querySearchSchema),
  })

  const router = useRouter()

  const handleQuerySearch = async (data: QuerySearchForm) => {
    await router.push({
      pathname: '/search',
      query: {
        query: String(data.query),
      },
    })

    reset()
  }

  return (
    <form
      className={cn(
        'flex w-full max-w-lg items-center gap-4 rounded-full bg-zinc-950 px-4 py-2',
        'outline-2 outline-offset-2 outline-zinc-950 focus-within:outline',
      )}
      onSubmit={handleSubmit(handleQuerySearch)}
    >
      <MagnifyingGlass className="fill-zinc-400" size={28} weight="fill" />

      <input
        className={cn(
          'w-full border-none bg-transparent outline-none',
          'focus:outline-none',
          'placeholder:text-zinc-500',
        )}
        type="text"
        placeholder="Buscar"
        {...register('query')}
      />
    </form>
  )
}

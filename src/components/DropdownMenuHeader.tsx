import { ReactNode } from 'react'
import { useRouter } from 'next/router'
import { cn } from '@/utils/cn'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { useQuery } from '@tanstack/react-query'

import { api } from '@/lib/axios'

interface DropdownMenuHeaderProps {
  children: ReactNode
}

interface Category {
  id: number
  name: string
}

export function DropdownMenuHeader(props: DropdownMenuHeaderProps) {
  const router = useRouter()

  const handleRedirectDiscover = async (genreId: number) => {
    await router.push({
      pathname: '/discover',
      query: {
        genre: genreId,
      },
    })
  }

  const category = useQuery(
    ['movie-categories'],
    async (): Promise<Category[]> => {
      const response = await api.get('/genre/movie/list', {
        params: { language: 'pt-BR' },
      })
      return response.data.genres
    },
    { cacheTime: Infinity },
  )

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="focus:outline-none" asChild>
        {props.children}
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className={cn(
            'z-50 w-full rounded-lg border border-zinc-800 bg-zinc-950/70 p-2 shadow-4xl backdrop-blur-md',
            'data-[side=bottom]:animate-slide-down-fade',
            'max-h-select-viewport overflow-auto',
          )}
          align="start"
          sideOffset={5}
        >
          {category.data?.map((movie) => {
            return (
              <DropdownMenu.Item
                className={cn(
                  'w-64 cursor-pointer rounded p-2 pl-5 font-medium text-zinc-300',
                  'data-[highlighted]:underline',
                  'active:scale-[0.97]',
                  'focus:outline-none',
                )}
                key={movie.id}
                onClick={() => handleRedirectDiscover(movie.id)}
              >
                {movie.name}
              </DropdownMenu.Item>
            )
          })}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}

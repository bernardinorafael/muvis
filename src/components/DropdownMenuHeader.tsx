import { ReactNode } from 'react'
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
  const { data: categories } = useQuery(
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
      <DropdownMenu.Trigger
        className={cn(
          'group',
          'outline-2 outline-offset-2 outline-zinc-800 focus-within:outline',
        )}
        asChild
      >
        {props.children}
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className={cn(
            'z-20 w-full rounded border border-zinc-800 bg-zinc-900 p-2 shadow-4xl',
            'data-[side=bottom]:animate-slide-down-fade',
          )}
          align="end"
        >
          {categories?.map(({ name, id }) => {
            return (
              <DropdownMenu.Item
                className={cn(
                  'w-64 cursor-pointer rounded p-2 pl-5 font-medium text-zinc-300',
                  'data-[highlighted]:bg-zinc-950',
                  'active:scale-[0.97]',
                  'focus:outline-none',
                )}
                key={id}
              >
                {name}
              </DropdownMenu.Item>
            )
          })}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}

import React from 'react'
import Image from 'next/image'
import { cn } from '@/utils/cn'
import { FilmStrip, Star } from '@phosphor-icons/react'
import * as DialogComponent from '@radix-ui/react-dialog'
import { useQuery } from '@tanstack/react-query'
import dayjs from 'dayjs'
import Balancer from 'react-wrap-balancer'

import { MovieDetailed } from '@/types/movie-detailed'
import { api } from '@/lib/axios'

import { ImageOverlay } from '../ImageOverlay'
import { CloseDialogButton } from '../LoginDialog/CloseDialogButton'

interface SheetMoviePreviewProps {
  children: React.ReactNode
  movieId: number
}

export function SheetMoviePreview(props: SheetMoviePreviewProps) {
  const today = dayjs(new Date()).add(1, 'day').toDate()

  const { data } = useQuery(
    ['movie', props.movieId],
    async (): Promise<MovieDetailed> => {
      const response = await api.get(`/movie/${props.movieId}`, {
        params: { language: 'pt-BR' },
      })
      return response.data
    },
  )

  const formatDate = (date: string) => dayjs(date).format('DD[ de ]MMMM[ de ]YYYY')

  return (
    <DialogComponent.Root>
      <DialogComponent.Trigger className="focus:outline-none">
        {props.children}
      </DialogComponent.Trigger>

      <DialogComponent.Portal>
        <DialogComponent.Overlay className="fixed inset-0 z-40 h-screen w-screen bg-zinc-950/40 backdrop-blur-[8px]" />

        <DialogComponent.Content
          className={cn(
            'fixed right-0 top-0 z-50 flex min-h-screen w-full max-w-[720px] flex-col bg-zinc-900',
            'data-[state=open]:animate-sheet-movie-information',
          )}
        >
          <CloseDialogButton />

          <div className={cn('relative h-[420px] w-full')} title={data?.title!}>
            <Image
              className={cn('object-cover object-top')}
              src={`https://image.tmdb.org/t/p/w1280/${data?.backdrop_path}`}
              alt={data?.title!}
              fill
            />

            <ImageOverlay />
          </div>

          <section className={cn('z-50 flex w-full flex-col gap-3 p-6')}>
            <h1
              className={cn(
                '-mt-12 font-cursive text-7xl tracking-tight text-zinc-300',
              )}
            >
              <Balancer>{data?.title}</Balancer>
            </h1>

            <div className="group flex w-full items-center justify-start gap-1">
              <Star size={24} weight="fill" className="fill fill-yellow-400" />
              <span className="pt-1 text-lg font-medium text-zinc-300">
                {data?.vote_average} | {data?.vote_count}
              </span>

              <div className="ml-auto flex flex-col text-right leading-none">
                <strong className="font-medium text-zinc-300">Lançamento</strong>
                <span className="text-lg font-bold text-green-800">
                  {formatDate(data?.release_date!)}
                </span>
              </div>
            </div>

            <p className="mt-2 text-sm font-medium leading-relaxed text-zinc-500">
              {data?.overview}
            </p>

            <div className="mt-2 flex select-none items-center gap-1 self-start rounded bg-zinc-800 p-2">
              {data?.genres.map((genre) => {
                return (
                  <strong
                    className="rounded bg-zinc-950 px-4 py-1 text-xs text-zinc-200"
                    key={genre.id}
                  >
                    {genre.name}
                  </strong>
                )
              })}
            </div>

            {dayjs(data?.release_date).isAfter(today) ? (
              <button
                className={cn(
                  'mt-6 flex items-center justify-center gap-3 self-start rounded bg-violet-800 px-4 py-2 text-zinc-300',
                  'outline-2 outline-offset-2 outline-violet-800 focus-within:outline',
                  'transition-colors hover:bg-violet-700',
                  'active:scale-95',
                  'xl:px-7 xl:py-3',
                )}
              >
                <FilmStrip size={22} weight="fill" />
                <span className="text-lg font-bold">Ver trailer</span>
              </button>
            ) : (
              <button
                className={cn(
                  'mt-6 flex items-center justify-center gap-3 self-start rounded bg-violet-800 px-4 py-2 text-zinc-300',
                  'outline-2 outline-offset-2 outline-violet-800 focus-within:outline',
                  'transition-colors hover:bg-violet-700',
                  'active:scale-95',
                  'xl:px-7 xl:py-3',
                )}
              >
                <Star size={22} weight="fill" />
                <span className="text-lg font-bold">Avaliar filme</span>
              </button>
            )}
          </section>
        </DialogComponent.Content>
      </DialogComponent.Portal>
    </DialogComponent.Root>
  )
}

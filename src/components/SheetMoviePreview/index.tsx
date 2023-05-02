import React from 'react'
import Image from 'next/image'
import Router from 'next/router'
import { cn } from '@/utils/cn'
import * as DialogComponent from '@radix-ui/react-dialog'
import { useQuery } from '@tanstack/react-query'
import dayjs from 'dayjs'
import { ArrowRight, Star } from 'lucide-react'
import Balancer from 'react-wrap-balancer'

import { Cast } from '@/types/cast'
import { MovieDetailed } from '@/types/movie-detailed'
import { api } from '@/lib/axios'

import { ImageOverlay } from '../ImageOverlay'
import { CloseDialogButton } from '../LoginDialog/CloseDialogButton'
import { FallbackCast } from './components/FallbackCast'

interface SheetMoviePreviewProps {
  children: React.ReactNode
  movieId: number
}

export function SheetMoviePreview({ movieId, children }: SheetMoviePreviewProps) {
  const movie = useQuery(
    ['movie', movieId],
    async (): Promise<MovieDetailed> => {
      const response = await api.get(`/movie/${movieId}`, {
        params: { language: 'pt-BR' },
      })
      return response.data
    },
    { staleTime: 60 * 60 * 24 }, // 1day
  )

  const cast = useQuery(
    ['cast', movieId],
    async (): Promise<Cast[]> => {
      const response = await api.get(`/movie/${movieId}/credits`, {
        params: { language: 'pt-BR' },
      })
      return response.data.cast.slice(0, 8)
    },
    { staleTime: 60 * 60 * 24 }, // 1day
  )

  const formatDate = (date: string) => dayjs(date).format('DD[ de ]MMMM[ de ]YYYY')

  return (
    <DialogComponent.Root>
      <DialogComponent.Trigger className="focus:outline-none">
        {children}
      </DialogComponent.Trigger>

      <DialogComponent.Portal>
        <DialogComponent.Overlay className="fixed inset-0 z-40 h-screen w-screen bg-zinc-950/40 backdrop-blur-[8px]" />

        <DialogComponent.Content
          className={cn(
            'fixed right-0 top-0 z-50 flex w-full max-w-[720px] flex-col bg-zinc-900',
            'data-[state=open]:animate-sheet-movie-information',
          )}
        >
          <CloseDialogButton />

          <div className="h-[100vh] overflow-y-auto">
            <div className="relative -z-10 h-[330px]" title={movie.data?.title!}>
              <Image
                src={`https://image.tmdb.org/t/p/w1280/${movie.data?.backdrop_path}`}
                className={cn('object-cover object-top')}
                alt={movie.data?.title!}
                fill
              />

              <ImageOverlay />
            </div>

            <section className={cn('z-50 flex w-full flex-col gap-3 p-6')}>
              <h1 className="-mt-12 font-cursive text-7xl tracking-tight text-zinc-300">
                <Balancer>{movie.data?.title}</Balancer>
              </h1>

              <div className="group flex w-full items-center justify-start gap-1">
                <Star
                  size={24}
                  strokeWidth={1.5}
                  className="fill fill-red-700 stroke-red-700"
                />
                <span className="pt-1 text-lg font-medium text-zinc-300">
                  {movie.data?.vote_average} | {movie.data?.vote_count}
                </span>

                <div className="ml-auto flex flex-col text-right leading-none">
                  <strong className="font-medium text-zinc-300">Lançamento</strong>
                  <span className="text-lg font-bold text-green-800">
                    {formatDate(movie.data?.release_date!)}
                  </span>
                </div>
              </div>

              <p className="line-clamp-3 overflow-hidden text-ellipsis text-sm font-medium leading-relaxed text-zinc-500">
                {movie.data?.overview}
              </p>

              <div className="flex select-none items-center gap-1 self-start rounded bg-zinc-800 p-2">
                {movie.data?.genres.map((genre) => {
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

              <button
                className={cn(
                  'mt-6 flex items-center justify-center gap-1 self-start rounded bg-violet-800 px-4 py-2 text-zinc-300',
                  'outline-2 outline-offset-2 outline-violet-800 focus-within:outline',
                  'transition-colors hover:bg-violet-700',
                  'active:scale-95',
                  'xl:px-7 xl:py-3',
                )}
                onClick={() => Router.push(`/movie/${movieId}`)}
              >
                <span className="text-lg font-bold">Ver mais</span>
                <ArrowRight size={22} />
              </button>

              <div className="mt-8 grid grid-cols-3 gap-3">
                {cast.data?.map((actor) => {
                  return (
                    <div className="flex gap-2" key={actor.id}>
                      {actor.profile_path ? (
                        <Image
                          className="rounded"
                          height={38}
                          width={38}
                          src={`https://image.tmdb.org/t/p/w185/${actor.profile_path}`}
                          alt={actor.name}
                        />
                      ) : (
                        <FallbackCast />
                      )}

                      <div className="flex flex-col">
                        <strong className="text-sm font-extrabold text-zinc-300">
                          {actor.name}
                        </strong>

                        <span className="text-xs text-zinc-400">
                          {actor.character}
                        </span>
                      </div>
                    </div>
                  )
                })}
              </div>
            </section>
          </div>
        </DialogComponent.Content>
      </DialogComponent.Portal>
    </DialogComponent.Root>
  )
}

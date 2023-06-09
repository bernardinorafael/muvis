import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { GetServerSideProps } from 'next/types'
import { cn } from '@/utils/cn'
import { useQuery } from '@tanstack/react-query'

import { Movie } from '@/types/movie'
import { api } from '@/lib/axios'
import { Select } from '@/components/Select'
import { SheetMoviePreview } from '@/components/SheetMoviePreview'

/**
 * Discover API
 *
 * @see {@link https://developers.themoviedb.org/3/discover/movie-discover}
 */

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await api.get('/discover/movie')

  return {
    props: {
      initialMovies: response.data.results,
    },
  }
}

interface DiscoverProps {
  initialMovies: Movie[]
}

export default function Discover(props: DiscoverProps) {
  const router = useRouter()
  const genreId = String(router.query.genre)

  const movies = useQuery(
    ['movies-discover', genreId],
    async (): Promise<Movie[]> => {
      const URL = `/discover/movie?with_genres=${genreId}`
      const response = await api.get(URL)

      return response.data.results
    },
    { initialData: props.initialMovies },
  )

  const RELEASE_YEARS = ['2023', '2022', '2021', '2020']

  const GENRES = [
    'Ação',
    'Aventura',
    'Romance',
    'Crimes',
    'Comédia',
    'Ficção',
    'Documentário',
    'Anime',
  ]

  return (
    <>
      <Head>
        <title>Descobrir | Muvis</title>
      </Head>

      <section className="mb-8 border-b border-zinc-800 px-16 py-4">
        <div className="flex items-center gap-4">
          <Select options={RELEASE_YEARS} placeholder="Lançamento" />
          <Select options={GENRES} placeholder="Gênero" />
        </div>
      </section>

      <section className="flex w-full flex-col gap-8 px-16 pb-16">
        <div className="grid grid-cols-5 gap-5">
          {movies.data?.map((movie) => {
            return movies.isFetching || movies.isLoading ? (
              <div className="flex h-[500px] animate-pulse items-center justify-center rounded bg-zinc-800 duration-500" />
            ) : (
              <SheetMoviePreview movieId={movie.id}>
                <div className="group relative h-[500px] bg-opacity-40 shadow-4xl">
                  <Image
                    className={cn(
                      'rounded-lg object-cover object-center opacity-60',
                      'transition-all duration-300 hover:opacity-100',
                    )}
                    fill
                    priority
                    quality={100}
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    alt={movie.title}
                  />
                </div>
              </SheetMoviePreview>
            )
          })}
        </div>
      </section>
    </>
  )
}

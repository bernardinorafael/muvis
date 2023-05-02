import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { GetServerSideProps } from 'next/types'
import { cn } from '@/utils/cn'
import { useQuery } from '@tanstack/react-query'
import { Loader } from 'lucide-react'

import { Movie } from '@/types/movie'
import { api } from '@/lib/axios'
import { MovieMainBanner } from '@/components/MovieMainBanner'
import { SheetMoviePreview } from '@/components/SheetMoviePreview'

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
      const response = await api.get(`/discover/movie?with_genres=${genreId}`)

      return response.data.results
    },
    { initialData: props.initialMovies },
  )

  return (
    <>
      <Head>
        <title>Descobrir | Muvis</title>
      </Head>

      <MovieMainBanner movie={movies.data[0]} />

      <section className="flex w-full flex-col gap-8 px-16 pb-16">
        <div className="grid grid-cols-5 gap-5">
          {movies.data?.map((movie) => {
            return movies.isLoading || movies.isFetching ? (
              <div className="flex h-[500px] items-center justify-center">
                <Loader className="animate-spin" />
              </div>
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

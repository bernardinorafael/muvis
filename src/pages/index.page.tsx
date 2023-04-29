import Head from 'next/head'
import Link from 'next/link'
import { GetServerSideProps } from 'next/types'
import { cn } from '@/utils/cn'

import { Movie } from '@/types/movie'
import { MOVIES } from '@/config/movies'
import { api } from '@/lib/axios'
import { CarouselCardMovie } from '@/components/CarouselCardMovie'
import { Hero } from '@/components/Hero'
import { MovieCard } from '@/components/MovieCard'
import { SheetMoviePreview } from '@/components/SheetMoviePreview'

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await api.get('/movie/upcoming', {
    params: { language: 'pt-BR' },
  })

  const upcomingMovies = response.data.results.map((movie: Movie) => {
    return {
      id: movie.id,
      backdrop_path: movie.backdrop_path,
      poster_path: movie.poster_path,
    }
  })

  return {
    props: {
      upcomingMovies,
    },
  }
}

type PickedMovie = Pick<Movie, 'id' | 'backdrop_path' | 'poster_path'>

interface HomeProps {
  upcomingMovies: PickedMovie[]
}

export default function Home({ upcomingMovies }: HomeProps) {
  return (
    <>
      <Head>
        <title>Home | Muvis</title>
      </Head>

      <Hero />

      <section className="flex flex-col gap-10 px-10 py-5">
        <div className="flex items-center gap-5 ">
          <h2 className="text-4xl font-bold">Em cartaz no cinema</h2>
          <Link
            className={cn(
              'pt-2 text-xl font-semibold text-violet-800',
              'hover:text-violet-700 hover:transition-colors',
            )}
            href=""
          >
            Ver mais
          </Link>
        </div>

        <CarouselCardMovie>
          <div
            className={cn('grid h-[60vh] grid-cols-6 gap-4', 'keen-slider__slide')}
          >
            {upcomingMovies.slice(6, 12).map((movie, i) => {
              return (
                <SheetMoviePreview movieId={movie.id}>
                  <MovieCard
                    key={i}
                    image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  />
                </SheetMoviePreview>
              )
            })}
          </div>

          <div
            className={cn('grid h-[60vh] grid-cols-6 gap-4', 'keen-slider__slide')}
          >
            {upcomingMovies.slice(0, 6).map((movie, i) => {
              return (
                <SheetMoviePreview movieId={movie.id}>
                  <MovieCard
                    key={i}
                    image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  />
                </SheetMoviePreview>
              )
            })}
          </div>
        </CarouselCardMovie>
      </section>

      <section className="flex flex-col gap-10 px-10 py-5">
        <div className="flex items-center gap-5 ">
          <h2 className="text-4xl font-bold">Horror</h2>
          <Link
            className={cn(
              'pt-2 text-xl font-semibold text-violet-800',
              'hover:text-violet-700 hover:transition-colors',
            )}
            href=""
          >
            Ver mais
          </Link>
        </div>

        <div className="grid h-[60vh] grid-cols-6 gap-4">
          {MOVIES.map((movie, i) => {
            return <MovieCard key={i} image={movie} />
          })}
        </div>
      </section>

      <section className="flex flex-col gap-10 px-10 py-5">
        <div className="flex items-center gap-5 ">
          <h2 className="text-4xl font-bold">Family friendly</h2>
          <Link
            className={cn(
              'pt-2 text-xl font-semibold text-violet-800',
              'hover:text-violet-700 hover:transition-colors',
            )}
            href=""
          >
            Ver mais
          </Link>
        </div>

        <div className="grid h-[60vh] grid-cols-6 gap-4">
          {MOVIES.map((movie, i) => {
            return <MovieCard key={i} image={movie} />
          })}
        </div>
      </section>
    </>
  )
}

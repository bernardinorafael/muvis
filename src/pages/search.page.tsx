import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { cn } from '@/utils/cn'
import { useQuery } from '@tanstack/react-query'

import { Movie } from '@/types/movie'
import { api } from '@/lib/axios'
import { MovieMainBanner } from '@/components/MovieMainBanner'
import { SheetMoviePreview } from '@/components/SheetMoviePreview'

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await api.get('/discover/movie', {
    params: { include_video: true },
  })

  return {
    props: {
      initialMovies: response.data.results,
      heroBannerMovie: response.data.results[6],
    },
  }
}

interface SearchPageProps {
  initialMovies: Movie[]
  heroBannerMovie: Movie
}

export default function SearchPage(props: SearchPageProps) {
  const router = useRouter()
  const query = router.query.query

  const movies = useQuery(
    ['movies-search', query],
    async (): Promise<Movie[]> => {
      const response = await api.get('/search/movie', {
        params: { query },
      })
      return response.data.results
    },
    { initialData: props.initialMovies },
  )

  return (
    <>
      <Head>
        <title>Descobrir | Muvis</title>
      </Head>

      <MovieMainBanner movie={props.heroBannerMovie} />

      <section className="flex w-full flex-col gap-8 px-16 pb-16">
        <div className="my-4 flex">
          <h2 className="text-3xl font-bold">Você pesquisou por: {query}</h2>
        </div>

        <div className="grid grid-cols-5 gap-5">
          {movies.data?.map((movie) => {
            return (
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

import { GetServerSideProps } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { cn } from '@/utils/cn'
import { useQuery } from '@tanstack/react-query'

import { Movie } from '@/types/movie'
import { api } from '@/lib/axios'
import { Hero } from '@/components/Hero'
import { SheetMoviePreview } from '@/components/SheetMoviePreview'

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await api.get('/discover/movie', {
    params: { include_video: true },
  })

  return {
    props: {
      initialMovies: response.data.results,
      heroBannerMovie: response.data.results[8],
    },
  }
}

interface SearchPageProps {
  initialMovies: Movie[]
  heroBannerMovie: Movie
}

export default function SearchPage({
  initialMovies,
  heroBannerMovie,
}: SearchPageProps) {
  const router = useRouter()
  const query = router.query.query

  console.log(initialMovies[2].id)

  const movies = useQuery(
    ['movies-search', query],
    async (): Promise<Movie[]> => {
      const response = await api.get('/search/movie', {
        params: { query },
      })
      return response.data.results
    },
    { initialData: initialMovies },
  )

  return (
    <>
      <Hero movie={heroBannerMovie} />

      <section className="flex w-full flex-col gap-8 px-16 pb-16">
        <div className="my-4 flex">
          <h2 className="text-3xl font-bold">Você pesquisou por: {query}</h2>
        </div>

        <div className="grid grid-cols-5 gap-5">
          {movies.data?.map((movie) => {
            return (
              <SheetMoviePreview movieId={movie.id}>
                <div className="group relative aspect-square bg-opacity-40 shadow-4xl">
                  <Image
                    className={cn(
                      'rounded-lg object-cover opacity-60',
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

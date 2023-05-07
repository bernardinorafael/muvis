import Head from 'next/head'
import { GetStaticProps } from 'next/types'
import { cn } from '@/utils/cn'

import { Movie } from '@/types/movie'
import { api } from '@/lib/axios'
import { CarouselCardMovies } from '@/components/CarouselCardMovies'
import { HeaderCarouselMovies } from '@/components/HeaderCarouselMovies'
import { MovieCard } from '@/components/MovieCard'
import { MovieMainBanner } from '@/components/MovieMainBanner'
import { SheetMoviePreview } from '@/components/SheetMoviePreview'

export const getStaticProps: GetStaticProps = async () => {
  const { data: nowPlayingRaw } = await api.get('/movie/now_playing')

  const { data: horrorMoviesRaw } = await api.get('/discover/movie', {
    params: { with_genres: '27' },
  })

  const { data: animationMoviesRaw } = await api.get('/discover/movie', {
    params: { with_genres: '16' },
  })

  const { data: crimeMoviesRaw } = await api.get('/discover/movie', {
    params: { with_genres: '80' },
  })

  const { data: discoverMoviesRaw } = await api.get('/discover/movie', {
    params: { include_video: true },
  })

  const filteredMovies = (movies: any) => {
    const moviesFiltered = movies.results.map((movie: Movie) => {
      return {
        id: movie.id,
        backdrop_path: movie.backdrop_path,
        poster_path: movie.poster_path,
      }
    })

    return moviesFiltered
  }

  return {
    props: {
      nowPlayingMovies: filteredMovies(nowPlayingRaw),
      horrorMovies: filteredMovies(horrorMoviesRaw),
      animationMovies: filteredMovies(animationMoviesRaw),
      crimeMovies: filteredMovies(crimeMoviesRaw),
      discoverMoviesHero: discoverMoviesRaw.results[0],
    },

    revalidate: 60 * 60 * 24, // 1 day
  }
}

type PickedMovie = Pick<Movie, 'id' | 'backdrop_path' | 'poster_path'>

interface HomeProps {
  nowPlayingMovies: PickedMovie[]
  horrorMovies: PickedMovie[]
  animationMovies: PickedMovie[]
  crimeMovies: PickedMovie[]
  discoverMoviesHero: Movie
}

export default function Home(props: HomeProps) {
  return (
    <>
      <Head>
        <title>Home | Muvis</title>
      </Head>

      <MovieMainBanner movie={props.discoverMoviesHero} />

      <section className="flex flex-col gap-10 py-5 pl-10">
        <HeaderCarouselMovies description="Em cartaz no cinema" />

        <CarouselCardMovies>
          {props.nowPlayingMovies.map((movie) => {
            return (
              <div
                className={cn('grid h-full grid-cols-1', 'keen-slider__slide')}
                key={movie.id}
              >
                <SheetMoviePreview movieId={movie.id}>
                  <MovieCard
                    key={movie.id}
                    image={`https://image.tmdb.org/t/p/w780/${movie.poster_path}`}
                  />
                </SheetMoviePreview>
              </div>
            )
          })}
        </CarouselCardMovies>
      </section>

      <section className="flex flex-col gap-10 py-5 pl-10">
        <HeaderCarouselMovies description="Horror" />

        <CarouselCardMovies>
          {props.horrorMovies.map((movie) => {
            return (
              <div
                className={cn('grid h-full grid-cols-1', 'keen-slider__slide')}
                key={movie.id}
              >
                <SheetMoviePreview movieId={movie.id}>
                  <MovieCard
                    key={movie.id}
                    image={`https://image.tmdb.org/t/p/w780/${movie.poster_path}`}
                  />
                </SheetMoviePreview>
              </div>
            )
          })}
        </CarouselCardMovies>
      </section>

      <section className="flex flex-col gap-10 py-5 pl-10">
        <HeaderCarouselMovies description="Crimes" />

        <CarouselCardMovies>
          {props.crimeMovies.map((movie) => {
            return (
              <div
                className={cn('grid h-full grid-cols-1', 'keen-slider__slide')}
                key={movie.id}
              >
                <SheetMoviePreview movieId={movie.id}>
                  <MovieCard
                    key={movie.id}
                    image={`https://image.tmdb.org/t/p/w780/${movie.poster_path}`}
                  />
                </SheetMoviePreview>
              </div>
            )
          })}
        </CarouselCardMovies>
      </section>

      <section className="flex flex-col gap-10 py-5 pl-10">
        <HeaderCarouselMovies description="Para as crianças" />

        <CarouselCardMovies>
          {props.animationMovies.map((movie) => {
            return (
              <div
                className={cn('grid h-full grid-cols-1', 'keen-slider__slide')}
                key={movie.id}
              >
                <SheetMoviePreview movieId={movie.id}>
                  <MovieCard
                    key={movie.id}
                    image={`https://image.tmdb.org/t/p/w780/${movie.poster_path}`}
                  />
                </SheetMoviePreview>
              </div>
            )
          })}
        </CarouselCardMovies>
      </section>
    </>
  )
}

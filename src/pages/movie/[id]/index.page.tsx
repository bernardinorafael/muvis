import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import LayoutRoot from '@/Layouts/LayoutRoot'
import Balancer from 'react-wrap-balancer'

import { Cast as CastType } from '@/types/cast'
import { MovieDetailed } from '@/types/movie-detailed'
import { api } from '@/lib/axios'
import { Button } from '@/components/Button'
import { Cast } from '@/components/Cast'
import { ImageOverlay } from '@/components/ImageOverlay'
import { RatedMovie } from '@/components/RatedMovie'

import { GenresCompoent } from './components/GenresComponent'

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const movieId = String(ctx.params!.id)

  const movieResponse = await api.get(`/movie/${movieId}`)
  const castResponse = await api.get(`/movie/${movieId}/credits`)

  return {
    props: {
      movie: movieResponse.data,
      cast: castResponse.data.cast.slice(0, 20),
    },
  }
}

interface MovieProps {
  movie: MovieDetailed
  cast: CastType[]
}

export default function MoviePage({ cast, movie }: MovieProps) {
  return (
    <>
      <Head>
        <title>{movie.title} | Muvis</title>
      </Head>

      <div className="relative h-screen w-full">
        <Image
          className="object-cover object-top"
          fill
          src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
          alt={movie.title}
        />

        <ImageOverlay />
      </div>

      <section className="z-40 mx-auto flex w-full max-w-7xl flex-col gap-4 p-8">
        <div className="flex flex-col gap-6">
          <h1 className="font-cursive text-8xl">
            <Balancer>{movie.title}</Balancer>
          </h1>

          <div className="flex w-full items-baseline justify-between">
            <p className="text-lg font-medium leading-normal text-zinc-500">
              <Balancer>{movie.overview}</Balancer>
            </p>

            <div className="flex flex-col gap-4">
              <RatedMovie
                vote_average={movie.vote_average}
                vote_count={movie.vote_count}
              />

              <Button>Ver trailer</Button>
            </div>
          </div>
        </div>

        <GenresCompoent genres={movie.genres} />

        <div className="mt-4 flex select-none flex-col gap-8 rounded border border-zinc-800 p-6 shadow-4xl">
          <strong className="text-2xl font-extrabold">Elenco</strong>

          <div className="grid w-full grid-cols-5 gap-6">
            {cast.map((actor) => {
              return (
                <Cast
                  key={actor.id}
                  character={actor.character}
                  name={actor.name}
                  profile_path={actor.profile_path}
                />
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}

MoviePage.PageLayout = LayoutRoot

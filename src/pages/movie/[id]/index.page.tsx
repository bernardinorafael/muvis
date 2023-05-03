import type { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import LayoutRoot from '@/Layouts/LayoutRoot'
import Balancer from 'react-wrap-balancer'

import { Movie } from '@/types/movie'
import { api } from '@/lib/axios'
import { ImageOverlay } from '@/components/ImageOverlay'

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const movieId = String(ctx.params!.id)

  const movieResponse = await api.get(`/movie/${movieId}`)

  return {
    props: {
      movie: movieResponse.data,
    },
  }
}

interface MovieProps {
  movie: Movie
}

export default function MoviePage({ movie }: MovieProps) {
  return (
    <>
      <Head>
        <title>{movie.title} | Muvis</title>
      </Head>

      <div className="relative h-[740px] w-full">
        <Image
          className="object-cover object-top"
          fill
          src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
          alt={movie.title}
        />

        <ImageOverlay />
      </div>

      <section className="z-40 h-screen w-full px-4 py-8">
        <div className="z-[1000] flex flex-col items-center gap-6">
          <h1 className="text-center font-cursive text-9xl">
            <Balancer>{movie.title}</Balancer>
          </h1>

          <p className="text-2xl font-medium leading-normal text-zinc-500">
            <Balancer>{movie.overview}</Balancer>
          </p>
        </div>
      </section>
    </>
  )
}

MoviePage.PageLayout = LayoutRoot

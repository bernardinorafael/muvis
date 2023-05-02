import { GetServerSideProps } from 'next'
import Head from 'next/head'
import LayoutRoot from '@/Layouts/LayoutRoot'

import { Movie } from '@/types/movie'
import { api } from '@/lib/axios'

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const movieId = String(ctx.query.id)

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

      <section className="h-screen w-full px-4 py-8">TODO</section>
    </>
  )
}

MoviePage.PageLayout = LayoutRoot

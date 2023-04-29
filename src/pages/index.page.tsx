import Head from 'next/head'
import Link from 'next/link'
import { cn } from '@/utils/cn'

import { MOVIES } from '@/config/movies'
import { Hero } from '@/components/Hero'
import { MovieCard } from '@/components/MovieCard'

// export const getServerSideProps: GetServerSideProps = async () => {
//   const response = await api.get('/3/movie/popular', {
//     params: { language: 'pt-BR' },
//   })

//   return {
//     props: {},
//   }
// }

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Muvis</title>
      </Head>

      <Hero />

      <section className="flex flex-col gap-10 px-10 py-5">
        <div className="flex items-center gap-5 ">
          <h2 className="text-4xl font-bold">Novidades</h2>
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

        <div className={cn('grid h-[60vh] grid-cols-6 gap-4')}>
          {MOVIES.map((movie, i) => {
            return <MovieCard key={i} image={movie} />
          })}
        </div>
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

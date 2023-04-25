import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { cn } from '@/utils/cn'
import Head from 'next/head'

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

      <div className={cn('w-full h-screen bg-zinc-900 text-white')}>
        <Header />

        <Hero />
      </div>
    </>
  )
}

import Head from 'next/head'
import { cn } from '@/utils/cn'

import { Hero } from '@/components/Hero'

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

      <div className={cn('h-screen w-full bg-zinc-900 text-white')}>
        <Hero />
      </div>
    </>
  )
}

import { ReactNode } from 'react'
import { Inter } from 'next/font/google'
import { cn } from '@/utils/cn'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export default function LayoutRoot({ children }: { children: ReactNode }) {
  return (
    <main className={cn('h-full w-full bg-zinc-900 text-white', inter.className)}>
      <Header />

      {children}

      <Footer />
    </main>
  )
}

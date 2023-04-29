import { ReactNode } from 'react'
import { cn } from '@/utils/cn'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

export default function LayoutRoot({ children }: { children: ReactNode }) {
  return (
    <main className={cn('w-full bg-zinc-900 text-white')}>
      <Header />
      {children}
      <Footer />
    </main>
  )
}

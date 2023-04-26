import '@/styles/globals.css'
import { ComponentType, ReactNode } from 'react'
import type { AppProps } from 'next/app'
import { QueryClientProvider } from '@tanstack/react-query'

import { queryClient } from '@/lib/react-query'
import LayoutRoot from '@/components/Layouts/LayoutRoot'

type ComponentLayout = AppProps & {
  Component: AppProps['Component'] & {
    Layout?: ComponentType<{ children: ReactNode }>
  }
}

export default function App({ Component, pageProps }: ComponentLayout) {
  return (
    <QueryClientProvider client={queryClient}>
      {Component.Layout ? (
        <Component.Layout>
          <Component {...pageProps} />
        </Component.Layout>
      ) : (
        <LayoutRoot>
          <Component {...pageProps} />
        </LayoutRoot>
      )}
    </QueryClientProvider>
  )
}

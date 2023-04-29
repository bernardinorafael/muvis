import { ComponentType, ReactNode } from 'react'
import type { AppProps } from 'next/app'
import LayoutRoot from '@/Layouts/LayoutRoot'
import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import { queryClient } from '@/lib/react-query'

import '@/styles/globals.css'
import '@/lib/dayjs'

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

      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

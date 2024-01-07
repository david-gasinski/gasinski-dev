import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import { Providers } from './providers'
import { Container } from '@chakra-ui/react'

const jetbrains_mono = JetBrains_Mono({ 
  subsets: ['latin'], 
})

export const metadata: Metadata = {
  title: 'David Gasinski',
  description: 'Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={jetbrains_mono.className} >
        <Providers>
            {children}
        </Providers>
        </body>
    </html>
  )
}

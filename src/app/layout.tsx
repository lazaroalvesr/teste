import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import Header from './components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'FinVue',
  description: 'learn and manage your money',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html lang="pt-br">
        <head>
          <link rel="shortcut icon" href="icone.png" type="image/x-icon" />
        </head>
        <body className={inter.className}>
          <Header />
          {children}
        </body>
      </html>
  )
}

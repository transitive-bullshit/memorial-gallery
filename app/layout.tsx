import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'

import './globals.css'

function getMetadataBase() {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ??
    process.env.VERCEL_PROJECT_PRODUCTION_URL ??
    process.env.VERCEL_URL

  if (!siteUrl) {
    return new URL('http://localhost:3000')
  }

  return new URL(siteUrl.startsWith('http') ? siteUrl : `https://${siteUrl}`)
}

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
})

export const metadata: Metadata = {
  metadataBase: getMetadataBase(),
  title: 'memories of mum',
  description: 'A quiet collection of moments with Mum.',
  alternates: {
    canonical: '/'
  },
  openGraph: {
    type: 'website',
    title: 'memories of mum',
    description: 'A quiet collection of moments with Mum.',
    url: '/',
    siteName: 'memories of mum'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'memories of mum',
    description: 'A quiet collection of moments with Mum.'
  }
}

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang='en'
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className='min-h-full'>{children}</body>
    </html>
  )
}

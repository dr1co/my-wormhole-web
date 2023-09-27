import './globals.css'
import type { Metadata } from 'next'
import { Roboto_Flex as Roboto, Bai_Jamjuree as BaiJamjuree } from 'next/font/google'
import { ReactNode } from 'react'

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto'
})
const baiJamjuree = BaiJamjuree({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-baijamjuree'
})

export const metadata: Metadata = {
  title: 'My Wormhole',
  description: 'A time machine created with React, Next.JS, TailwindCSS and TypeScript',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${baiJamjuree.variable} bg-gray-900 text-gray-100 font-sans`}>{children}</body>
    </html>
  )
}

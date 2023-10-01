import './globals.css'
import type { Metadata } from 'next'
import { Roboto_Flex as Roboto, Bai_Jamjuree as BaiJamjuree } from 'next/font/google'
import { ReactNode } from 'react'
import { cookies } from 'next/headers'

import { Copyright } from '../components/Copyright'
import { Hero } from '../components/Hero'
import { Signin } from '../components/Signin'
import { Profile } from '../components/Profile'

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
  const isAuthenticated = cookies().has('token')

  return (
    <html lang="en">
      <body className={`${roboto.variable} ${baiJamjuree.variable} bg-gray-900 text-gray-100 font-sans`}>
        <main className="grid grid-cols-2 min-h-screen">
          <div className="flex flex-col items-start justify-between px-28 py-56 relative overflow-hidden border-r border-white/10">
            <div className="absolute right-0 top-1/2 h-[288px] w-[526px] bg-redspecial opacity-50 -translate-y-1/2 translate-x-1/2 rounded-full blur-full" />

            <div className="absolute right-1 top-0 bottom-0 w-2 bg-stripes " />

            {isAuthenticated ? <Profile /> : <Signin />}
            <Hero />
            <Copyright />
          </div>

          <div className="flex flex-col max-h-screen overflow-y-scroll">
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}

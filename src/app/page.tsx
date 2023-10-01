import { api } from '@/lib/api'
import dayjs from 'dayjs'
import { cookies } from 'next/headers'
import Image from 'next/image'
import Link from 'next/link'

import { EmptyMemories } from '../components/EmptyMemories'
import { ArrowRight } from 'lucide-react'

interface MemoryInterface {
  id: string
  coverUrl: string
  excerpt: string
  createdAt: string
}

export default async function Home() {
  const isAuthenticated = cookies().has('token')

  if (!isAuthenticated) {
    return <EmptyMemories />
  }

  const token = cookies().get('token')?.value
  const response = await api.get('/memories', {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })

  const memories: MemoryInterface[] = response.data

  if (memories.length === 0) {
    return <EmptyMemories />
  }

  return (
    <div className="flex flex-col gap-10 p-8">
      {memories.map((memory) => {
        return (
          <div key={memory.id} className="space-y-4">
            <time className="flex items-center gap-2 text-sm text-gray-100 -ml-8 before:h-px before:w-5 before:bg-gray-50">
              {dayjs(memory.createdAt).format("MMMM[ ]D[, ]YYYY")}
            </time>

            <Image
              src={memory.coverUrl}
              width={592}
              height={280}
              className="aspect-video w-full object-cover rounded-lg"
              alt="imagem"
            />

            <p className="text-lg leading-relaxed text-gray-100">
              {memory.excerpt}
            </p>

            <Link href={`/memories/${memory.id}`} className="flex items-center gap-2 text-sm text-gray-200 hover:text-gray-100 transition-colors">
              Read more
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )
      })}
    </div>
  )
}

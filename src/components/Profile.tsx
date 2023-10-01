import { getUser } from '../lib/auth'
import Image from 'next/image'

export function Profile() {
  const { name, avatarUrl } = getUser()
  return (
    <div
      className="flex items-center gap-3 text-left"
    >
      <Image
        src={avatarUrl}
        width={40}
        height={40}
        alt={name}
        className="w-10 h-10 rounded-full"
      />

      <p className="text-sm leading-snug max-w-[240px]">
        Olá, {name}!
        <a
          href="/api/auth/logout"
          className="block text-red-400 hover:text-red-300 transition:colors"
        >
          Sair
        </a>
      </p>
    </div>
  )
}
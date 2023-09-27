import { User } from 'lucide-react'

export default function Home() {
  return (
    <main className="grid grid-cols-2 min-h-screen">
      <div className="flex flex-col items-start justify-between px-28 py-56 relative overflow-hidden border-r border-white/10">
        <div className="absolute right-0 top-1/2 h-[288px] w-[526px] bg-redspecial opacity-50 -translate-y-1/2 translate-x-1/2 rounded-full blur-full" />

        <div className="absolute right-1 top-0 bottom-0 w-2 bg-stripes " />

        <a href="" className="flex items-center gap-3 text-left hover:text-gray-50 transition-colors">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400">
            <User className="h-5 w-5 text-gray-500" />
          </div>

          <p className="text-sm leading-snug max-w-[160px]"> <span className="underline">Create your account</span> and save your memories!</p>
        </a>

        <div className="space-y-5">
          <div className="flex flex-col justify-center">
            <div className="flex items-center justify-center w-fit p-1 pr-3 pl-3 rounded-full bg-logo1 text-xl text-gray-900 text-bold font-alt"> MY </div>
            <div className="flex items-center justify-center w-fit p-1 pr-3 pl-3 rounded-full bg-logo1 text-xl text-gray-900 text-bold font-alt"> WORMHOLE </div>
          </div>

          <div className="max-w-[420px] space-y-1">
            <h1 className="text-4xl font-bold leading-tight text-gray-50">
              Your Wormhole is here!
            </h1>

            <p className="text-lg leading-relaxed">
              Collect remarkable moments of your journey and share them (if you want) with the world!
            </p>
          </div>

          <a href="" className="inline-block rounded-full bg-green-500 px-5 py-3 font-alt text-sm uppercase leading-none text-black hover:bg-green-600 transition-colors">
            CREATE MEMORY
          </a>
        </div>

        <div className="text-sm text-gray-200 leading-relaxed">
            Made with 💜 @ NLW. Powered by{' '}
            <a
              href="https://rocketseat.com.br"
              rel="noreferrer"
              target="_blank"
              className="underline hover:text-gray-100 transition-colors"
            >
              Rocketseat
            </a>
          </div>
      </div>

      <div className="flex flex-col p-16">
        <div className="flex flex-1 items-center justify-center">
          <p className="text-center leading-relaxed w-[360px]">
            You haven't added any memory yet,{' '}<a href="" className="underline hover:text-gray-50">create now</a>!
          </p>
        </div>
      </div>
    </main>
  )
}

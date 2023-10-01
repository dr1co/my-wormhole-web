export function Hero() {
  return (
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

      <a
        href="/memories/new"
        className="inline-block rounded-full bg-green-500 px-5 py-3 font-alt text-sm uppercase leading-none text-black hover:bg-green-600 transition-colors"
      >
        CREATE MEMORY
      </a>
    </div>
  )
}
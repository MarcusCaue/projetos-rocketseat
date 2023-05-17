export default function Home() {
  return (
    <main className="grid min-h-screen grid-cols-2">
      {/* Left */}
      <div></div>
      {/* Right */}
      <div className="flex flex-col p-16">
        <div className="flex flex-1 items-center justify-center">
          <p className="w-[360px] text-center leading-relaxed">
            Você ainda não registrou nenhuma memória, comece a{' '}
            <a href="">criar uma agora</a>! :){' '}
          </p>
        </div>
      </div>
    </main>
  )
}

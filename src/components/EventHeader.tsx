export default function EventHeader() {
  return (
    <div className="mb-8 text-center">
      <h1 className="animate-pulse-slow mb-4 flex items-center justify-center gap-2 text-3xl font-bold text-orange-200 md:gap-4 md:text-5xl">
        <span className="animate-bounce-spooky">🎃</span>{' '}
        <span>SPOOKY BIRTHDAY PARTY!</span>{' '}
        <span className="animate-bounce-spooky animate-delay-500">🎃</span>{' '}
      </h1>
      <p className="animate-fade-in text-xl text-orange-200 md:text-2xl">
        E você está convidado(a) para celebrar comigo! 👻
      </p>
    </div>
  )
}

import { useCallback, useState } from 'react'

export default function AppContainer() {
  const [copiedAddress, setCopiedAddress] = useState<string | null>(null)

  const handleCopyAddress = (address: string, location: string) => {
    navigator.clipboard.writeText(address)
    setCopiedAddress(location)
    setTimeout(() => setCopiedAddress(null), 2000)
  }

  const handlePollResponse = useCallback((response: string) => {
    const phoneNumber = import.meta.env.VITE_PHONE_NUMBER || '5519999999999'
    const message = encodeURIComponent(response)
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank')
  }, [])

  const barAddress = 'Dr. Francisco Pompeu, 482 - São Bernardo, Campinas - SP'
  const ameAddress = 'Rod. Dom Pedro I, KM 118 - 1 - Dos Lopes, Valinhos - SP'

  return (
    <div className="app-container relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-gradient-to-br from-orange-950 via-purple-950 to-gray-950 p-4">
      {/* Elementos decorativos animados */}
      <div className="animate-float absolute top-10 left-10 h-20 w-20 rounded-full bg-orange-500/10"></div>
      <div className="animate-float-delayed absolute top-40 right-20 h-16 w-16 rounded-full bg-purple-500/10"></div>
      <div className="animate-float absolute bottom-20 left-1/4 h-24 w-24 rounded-full bg-orange-400/10"></div>
      <div className="animate-float-delayed absolute right-1/3 bottom-40 h-12 w-12 rounded-full bg-purple-400/10"></div>

      <div className="animate-fade-in-up animate-spooky-glow relative z-10 w-full max-w-4xl rounded-3xl border border-orange-600/30 bg-black/40 p-8 shadow-2xl backdrop-blur-lg md:p-12">
        {/* Título */}
        <div className="mb-8 text-center">
          <h1 className="animate-pulse-slow mb-4 flex items-center justify-center gap-2 text-3xl font-bold text-orange-200 md:gap-4 md:text-5xl">
            <span className="animate-bounce-spooky">🎃</span>{' '}
            <span>SPOOKY BIRTHDAY PARTY!</span>{' '}
            <span className="animate-wiggle">🎃</span>
          </h1>
          <p className="animate-fade-in text-xl text-orange-200 md:text-2xl">
            E você está convidado(a) para celebrar comigo! 👻
          </p>
        </div>

        {/* Data do Evento */}
        <div className="animate-fade-in-delayed mb-8 text-center">
          <div className="mb-4 inline-block rounded-lg border border-amber-400/50 bg-gradient-to-r from-amber-500/20 to-orange-500/20 px-8 py-4 backdrop-blur-sm">
            <p className="text-xl font-bold text-amber-200 md:text-3xl">
              📅 01 de Novembro - Sábado
            </p>
          </div>
          <div className="inline-block rounded-lg border border-orange-400/30 bg-orange-500/10 px-4 py-2">
            <p className="text-sm text-orange-200 md:text-base">
              🎃 Meu aniversário é no Dia das Bruxas (31/10), mas a festa será
              no sábado!
            </p>
          </div>
        </div>

        {/* Descrição */}
        <div className="animate-fade-in-delayed mb-10 text-center">
          <p className="text-lg leading-relaxed text-orange-100">
            Estou completando mais um ano no dia mais assombrado do ano! 🎃👻
            <br />
            Preparei{' '}
            <span className="font-bold text-orange-300">
              DOIS MOMENTOS ESPECIAIS
            </span>{' '}
            no mesmo dia para celebrarmos juntos!
            <br />
            Escolha qual combina mais com você, ou ainda melhor: vem nos dois!
            🧙‍♀️✨
          </p>
        </div>

        {/* Eventos */}
        <div className="mb-10 grid gap-6 md:grid-cols-2">
          {/* Bar do Fumagalli */}
          <div className="animate-slide-in-left transform rounded-lg border border-orange-600/50 bg-orange-900/30 p-6 backdrop-blur-sm transition-transform duration-300 hover:scale-105 hover:bg-orange-900/40">
            <h3 className="mb-3 text-2xl font-bold text-orange-100">
              🍺🎃 Bar do Fumagalli
            </h3>
            <div className="mb-4 space-y-2 text-orange-200">
              <p className="flex items-center gap-2">
                <span className="text-2xl">🕐</span>
                <span className="font-semibold">12:00h - Almoço/Boteco</span>
              </p>
              <p className="text-sm text-orange-300">{barAddress}</p>
            </div>
            <button
              onClick={() => handleCopyAddress(barAddress, 'bar')}
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-orange-700 px-4 py-2 font-semibold text-white transition-colors duration-200 hover:bg-orange-600"
            >
              {copiedAddress === 'bar' ? (
                <>✓ Copiado!</>
              ) : (
                <>📋 Copiar Endereço</>
              )}
            </button>
          </div>

          {/* AME Club */}
          <div className="animate-slide-in-right transform rounded-lg border border-purple-600/50 bg-purple-900/30 p-6 backdrop-blur-sm transition-transform duration-300 hover:scale-105 hover:bg-purple-900/40">
            <h3 className="mb-3 text-2xl font-bold text-purple-100">
              🎵👻 AME Club
            </h3>
            <div className="mb-4 space-y-2 text-purple-200">
              <p className="flex items-center gap-2">
                <span className="text-2xl">🕘</span>
                <span className="font-semibold">21:00h - Balada</span>
              </p>
              <p className="text-sm text-purple-300">{ameAddress}</p>
            </div>
            <button
              onClick={() => handleCopyAddress(ameAddress, 'ame')}
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-purple-700 px-4 py-2 font-semibold text-white transition-colors duration-200 hover:bg-purple-600"
            >
              {copiedAddress === 'ame' ? (
                <>✓ Copiado!</>
              ) : (
                <>📋 Copiar Endereço</>
              )}
            </button>
          </div>
        </div>

        {/* Enquete */}
        <div className="animate-fade-in-up-delayed rounded-lg border border-orange-600/50 bg-black/20 p-6 backdrop-blur-sm">
          <h3 className="mb-6 text-center text-2xl font-bold text-orange-100">
            Qual evento você vai escolher? 🧙‍♀️🔮
          </h3>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <button
              onClick={() =>
                handlePollResponse('Vou no Bar do Fumagalli às 12h!')
              }
              className="transform rounded-lg bg-gradient-to-r from-orange-600 to-orange-500 px-6 py-4 font-bold text-white shadow-lg transition-all duration-200 hover:scale-105 hover:from-orange-700 hover:to-orange-600 hover:shadow-xl"
            >
              🍺🎃 Vou no Bar
            </button>
            <button
              onClick={() => handlePollResponse('Vou no AME Club às 21h!')}
              className="transform rounded-lg bg-gradient-to-r from-purple-600 to-purple-500 px-6 py-4 font-bold text-white shadow-lg transition-all duration-200 hover:scale-105 hover:from-purple-700 hover:to-purple-600 hover:shadow-xl"
            >
              🎵👻 Vou na AME
            </button>
            <button
              onClick={() => handlePollResponse('Vou nos 2 eventos!')}
              className="transform rounded-lg bg-gradient-to-r from-emerald-600 to-teal-600 px-6 py-4 font-bold text-white shadow-lg transition-all duration-200 hover:scale-105 hover:from-emerald-600 hover:to-teal-600 hover:shadow-xl"
            >
              ✨ Vou nos 2
            </button>
            <button
              onClick={() => handlePollResponse('Não vou poder ir :(')}
              className="transform rounded-lg bg-gradient-to-r from-gray-600 to-gray-700 px-6 py-4 font-bold text-white shadow-lg transition-all duration-200 hover:scale-105 hover:from-gray-700 hover:to-gray-800 hover:shadow-xl"
            >
              😢 Não vou poder ir :(
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="animate-fade-in mt-8 text-center text-sm text-orange-300">
          <p>
            Clique na poção e me mande uma mensagem mágica no WhatsApp! 🔮💬
          </p>
        </div>
      </div>
    </div>
  )
}

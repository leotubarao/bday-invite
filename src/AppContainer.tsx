import { useCallback, useState } from 'react'
import { FaInstagram, FaCopy, FaClock } from 'react-icons/fa'

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

  const eventAddress = 'R. Pirajú, 43 - Jardim Leonor, Campinas - SP'

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
            <span className="animate-bounce-spooky animate-delay-500">
              🎃
            </span>{' '}
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
              UM MOMENTO ESPECIAL
            </span>{' '}
            para celebrarmos juntos! 🧙‍♀️✨
          </p>
        </div>

        {/* Evento */}
        <div className="mb-10 flex justify-center">
          <div className="animate-slide-in-left w-full max-w-md transform rounded-2xl border border-orange-600/50 bg-orange-900/30 p-6 backdrop-blur-sm transition-transform duration-300 hover:scale-105 hover:bg-orange-900/40">
            <h3 className="mb-3 text-center text-2xl font-bold text-orange-100">
              🍺 Pirajú Botequim
            </h3>
            <div className="mb-4 space-y-2 text-orange-200">
              <p className="flex items-center justify-center gap-2">
                <FaClock className="text-xl text-orange-300" />
                <span className="font-semibold">12:00h - Almoço/Boteco</span>
              </p>
              <p className="text-center text-sm text-orange-300">
                {eventAddress}
              </p>
              <p className="flex items-center justify-center gap-1 text-center text-sm text-orange-300">
                <FaInstagram className="text-white" />{' '}
                <a
                  href="https://instagram.com/pirajubotequim"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-200 hover:text-orange-200"
                >
                  @pirajubotequim
                </a>
              </p>
            </div>
            <button
              onClick={() => handleCopyAddress(eventAddress, 'event')}
              className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-orange-700 px-4 py-2 font-semibold text-white transition-colors duration-200 hover:bg-orange-600"
            >
              {copiedAddress === 'event' ? (
                <>✓ Copiado!</>
              ) : (
                <>
                  <FaCopy className="text-sm" /> Copiar Endereço
                </>
              )}
            </button>
          </div>
        </div>

        {/* Enquete */}
        <div className="animate-fade-in-up-delayed rounded-2xl border border-orange-600/50 bg-black/20 p-6 backdrop-blur-sm">
          <h3 className="mb-4 text-center text-2xl font-bold text-orange-100">
            Posso contar com você? 🧙‍♀️🔮
          </h3>

          {/* Disclaimer */}
          <div className="mb-6 rounded-lg border border-orange-500/30 bg-orange-900/20 p-4">
            <p className="text-center text-sm text-orange-200 md:text-base">
              <span className="font-semibold">🎃 Por favor, responda! 🎃</span>
              <br />
              Sua resposta me ajuda muito no planejamento e organização do
              evento.
              <br />
              Mesmo que não possa vir, clique no botão para me avisar! 💬
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <button
              onClick={() =>
                handlePollResponse('Estarei no Pirajú Botequim às 12h!')
              }
              className="transform cursor-pointer rounded-xl bg-gradient-to-r from-orange-600 to-orange-500 px-6 py-4 font-bold text-white shadow-lg transition-all duration-200 hover:scale-105 hover:from-orange-700 hover:to-orange-600 hover:shadow-xl"
            >
              Estarei lá!
            </button>
            <button
              onClick={() =>
                handlePollResponse('Não vou poder ir... a bruxa me prendeu!')
              }
              className="transform cursor-pointer rounded-xl bg-gradient-to-r from-gray-600 to-gray-700 px-6 py-4 font-bold text-white shadow-lg transition-all duration-200 hover:scale-105 hover:from-gray-700 hover:to-gray-800 hover:shadow-xl"
            >
              Não vou poder ir
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="animate-fade-in mt-8 text-center text-sm text-orange-300">
          <p>
            Clique no botão da enquete e me mande uma mensagem no WhatsApp! 🔮💬
          </p>
        </div>
      </div>
    </div>
  )
}

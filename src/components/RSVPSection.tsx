import { useCallback } from 'react'

export default function RSVPSection() {
  const handlePollResponse = useCallback((response: string) => {
    const phoneNumber = import.meta.env.VITE_PHONE_NUMBER || '5519999999999'
    const message = encodeURIComponent(response)
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank')
  }, [])

  return (
    <div className="animate-fade-in-up-delayed mt-10 rounded-2xl border border-orange-600/50 bg-black/20 p-6 backdrop-blur-sm">
      <h3 className="mb-4 text-center text-2xl font-bold text-orange-100">
        Posso contar com você? 🧙‍♀️🔮
      </h3>

      {/* Disclaimer */}
      <div className="mb-6 rounded-lg border border-orange-500/30 bg-orange-900/20 p-4">
        <p className="text-center text-sm text-orange-200 md:text-base">
          <span className="font-semibold">🎃 Por favor, responda! 🎃</span>
          <br />
          Sua resposta me ajuda muito no planejamento e organização do evento.
          <br />
          Mesmo que não possa vir, clique no botão para me avisar! 💬
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <button
          className="transform cursor-pointer rounded-lg border-2 border-orange-400 bg-orange-600 px-6 py-3 text-lg font-semibold text-white shadow-lg transition-all duration-200 hover:scale-105 hover:bg-orange-700 hover:shadow-xl"
          onClick={() =>
            handlePollResponse('Estarei no Pirajú Botequim às 12h!')
          }
        >
          🎃 Vou estar lá!
        </button>
        <button
          onClick={() =>
            handlePollResponse('Não vou poder ir... a bruxa me prendeu!')
          }
          className="transform cursor-pointer rounded-lg bg-gradient-to-r from-gray-600 to-gray-700 px-6 py-4 font-bold text-white shadow-lg transition-all duration-200 hover:scale-105 hover:from-gray-700 hover:to-gray-800 hover:shadow-xl"
        >
          👻 Não posso ir
        </button>
      </div>
    </div>
  )
}

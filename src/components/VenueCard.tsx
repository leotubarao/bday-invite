import { useCallback, useState } from 'react'
import { FaClock, FaInstagram, FaCopy } from 'react-icons/fa'

const data = {
  title: 'Pirajú Botequim',
  eventTime: '12:00h - Almoço/Boteco',
  address: 'R. Pirajú, 43 - Jardim Leonor, Campinas - SP',
  instagramHandle: '@pirajubotequim',
  instagramUrl: 'https://instagram.com/pirajubotequim',
}

export default function VenueCard() {
  const [copiedAddress, setCopiedAddress] = useState<boolean>(false)

  const handleCopyAddress = useCallback(() => {
    navigator.clipboard.writeText(data.address)
    setCopiedAddress(true)
    setTimeout(() => setCopiedAddress(false), 2000)
  }, [])

  return (
    <div className="mt-10 flex justify-center">
      <div className="animate-slide-in-left w-full max-w-md transform rounded-2xl border border-orange-600/50 bg-orange-900/30 p-6 backdrop-blur-sm transition-transform duration-300 hover:scale-105 hover:bg-orange-900/40">
        <h3 className="mb-3 text-center text-2xl font-bold text-orange-100">
          🍺 {data.title}
        </h3>
        <div className="mb-4 space-y-2 text-orange-200">
          <p className="flex items-center justify-center gap-2">
            <FaClock className="text-xl text-orange-300" />
            <span className="font-semibold">{data.eventTime}</span>
          </p>
          <p className="text-center text-sm text-orange-300">{data.address}</p>
          <p className="flex items-center justify-center gap-1 text-center text-sm text-orange-300">
            <FaInstagram className="text-white" />{' '}
            <a
              href={data.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-200 hover:text-orange-200"
            >
              {data.instagramHandle}
            </a>
          </p>
        </div>
        <button
          onClick={handleCopyAddress}
          className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-orange-700 px-4 py-2 font-semibold text-white transition-colors duration-200 hover:bg-orange-600"
        >
          {copiedAddress ? (
            <>✓ Copiado!</>
          ) : (
            <>
              <FaCopy className="text-sm" /> Copiar Endereço
            </>
          )}
        </button>
      </div>
    </div>
  )
}

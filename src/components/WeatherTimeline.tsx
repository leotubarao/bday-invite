import { getWeatherIcon } from '../utils/getWeatherIcon'
import { useWeather } from '../hooks/useWeather'

export default function WeatherTimeline() {
  const eventLocation = 'Campinas, SP, Brazil'
  const eventDate = '2025-11-01' // Event date (November 1st, 2025)

  const { weatherData, weatherLoading, weatherError } = useWeather(
    eventLocation,
    eventDate
  )

  return (
    <div className="animate-fade-in-up-delayed mt-10 rounded-2xl border border-purple-600/50 bg-purple-900/20 p-6 backdrop-blur-sm">
      <h3 className="text-center text-xl font-bold text-purple-100">
        🌤️ Previsão do Tempo - 01/11
      </h3>

      {weatherLoading ? (
        <div className="text-center text-purple-200">
          <div className="mb-2 inline-block h-6 w-6 animate-spin rounded-full border-b-2 border-purple-300"></div>
          <p>Buscando previsão do tempo... ✨</p>
        </div>
      ) : weatherData.length === 0 && weatherError ? (
        <div className="mt-4 rounded-lg border border-yellow-500/30 bg-yellow-900/20 p-3">
          <p className="text-center text-xs text-yellow-200">
            ⚠️ Não foi possível carregar os dados do tempo
          </p>
        </div>
      ) : (
        <div className="weather-timeline-scroll overflow-x-auto">
          <div className="mt-6 flex gap-4 pb-2">
            {weatherData.map((hour, index) => (
              <div
                key={index}
                className="flex min-w-[80px] flex-col items-center gap-2 rounded-lg border border-purple-400/30 bg-purple-800/20 p-3 transition-colors hover:bg-purple-700/30"
              >
                <span className="text-xs font-semibold text-purple-200">
                  {hour.time}
                </span>
                <div className="text-lg">{getWeatherIcon(hour.condition)}</div>
                <span className="text-sm font-bold text-white">
                  {hour.temperature}°C
                </span>
                <span className="text-center text-xs text-purple-300">
                  {hour.condition}
                </span>
                {hour.humidity && (
                  <span className="text-xs text-purple-400">
                    💧 {hour.humidity}%
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="mt-4 text-center text-xs text-purple-300">
        🎃 Dados atualizados para o dia do evento
      </div>
    </div>
  )
}

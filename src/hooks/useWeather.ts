import { useState, useEffect, useCallback } from 'react'

import { weatherService, type WeatherHour } from '../services/weatherService'

export function useWeather(location: string, date: string) {
  const [weatherData, setWeatherData] = useState<WeatherHour[]>([])
  const [weatherLoading, setWeatherLoading] = useState(true)
  const [weatherError, setWeatherError] = useState<boolean>(false)

  const fetchWeather = useCallback(async () => {
    try {
      setWeatherLoading(true)
      setWeatherError(false)

      const realWeatherData = await weatherService.getForecast(location, date)

      setWeatherData(realWeatherData)
    } catch (error) {
      console.error('Failed to fetch weather data:', error)
      setWeatherError(true)
    } finally {
      setWeatherLoading(false)
    }
  }, [location, date])

  const refetch = useCallback(() => fetchWeather(), [fetchWeather])

  useEffect(() => {
    fetchWeather()
  }, [fetchWeather])

  return {
    weatherData,
    weatherLoading,
    weatherError,
    refetch,
  }
}

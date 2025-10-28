import axios from 'axios'

export interface WeatherHour {
  time: string
  temperature: number
  condition: string
  icon: string
  humidity?: number
  windSpeed?: number
}

// Open-Meteo API response interfaces (used with Google Cloud integration)
interface OpenMeteoResponse {
  hourly: {
    time: string[]
    temperature_2m: number[]
    relative_humidity_2m: number[]
    wind_speed_10m: number[]
    weather_code: number[]
  }
}

class WeatherService {
  private readonly GOOGLE_API_KEY: string

  constructor() {
    this.GOOGLE_API_KEY = import.meta.env.VITE_GOOGLE_API_KEY || ''

    if (!this.GOOGLE_API_KEY) {
      console.warn(
        'Google API key not found. Weather data will be unavailable.'
      )
    }
  }

  /**
   * Fetches weather forecast for a specific location and date
   * @param location - Location name (e.g., "Campinas, SP")
   * @param date - Date in YYYY-MM-DD format
   * @returns Promise with weather data for hours 12-21
   */
  async getForecast(location: string, date: string): Promise<WeatherHour[]> {
    if (!this.GOOGLE_API_KEY) {
      throw new Error('Google API key not configured')
    }

    try {
      return await this.getGoogleCloudForecast(location, date)
    } catch (error) {
      console.error('Google Cloud Weather failed:', error)
      throw error
    }
  }

  /**
   * Fetches weather using Google Cloud integration with Open-Meteo
   * (Google doesn't have a direct weather API, so we use Open-Meteo with Google Geocoding)
   */
  private async getGoogleCloudForecast(
    location: string,
    date: string
  ): Promise<WeatherHour[]> {
    if (!this.GOOGLE_API_KEY) {
      throw new Error('Google API key not configured')
    }

    // Get coordinates using Google Geocoding API
    const coordinates = await this.getCoordinates(location)

    // Use Open-Meteo for weather data (free and reliable)
    const response = await axios.get<OpenMeteoResponse>(
      'https://api.open-meteo.com/v1/forecast',
      {
        params: {
          latitude: coordinates.lat,
          longitude: coordinates.lng,
          hourly:
            'temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code',
          timezone: 'America/Sao_Paulo',
          start_date: date,
          end_date: date,
        },
        timeout: 10000,
      }
    )

    const hourlyData = response.data.hourly
    const eventHours: WeatherHour[] = []

    // Filter for hours 12-21 on the event date
    for (let i = 0; i < hourlyData.time.length; i++) {
      const timeStr = hourlyData.time[i]
      const hour = new Date(timeStr).getHours()

      if (hour >= 12 && hour <= 21 && timeStr.startsWith(date)) {
        eventHours.push({
          time: `${hour.toString().padStart(2, '0')}:00`,
          temperature: Math.round(hourlyData.temperature_2m[i]),
          condition: this.translateWeatherCode(hourlyData.weather_code[i]),
          icon: this.mapWeatherCodeToIcon(hourlyData.weather_code[i]),
          humidity: hourlyData.relative_humidity_2m[i],
          windSpeed: Math.round(hourlyData.wind_speed_10m[i] * 3.6), // Convert m/s to km/h
        })
      }
    }

    return eventHours
  }

  /**
   * Get coordinates using Google Geocoding API
   */
  private async getCoordinates(
    location: string
  ): Promise<{ lat: number; lng: number }> {
    if (!this.GOOGLE_API_KEY) {
      // Default coordinates for Campinas, SP if no API key
      return { lat: -22.9056, lng: -47.0608 }
    }

    try {
      const response = await axios.get(
        'https://maps.googleapis.com/maps/api/geocode/json',
        {
          params: {
            address: location,
            key: this.GOOGLE_API_KEY,
          },
          timeout: 5000,
        }
      )

      if (response.data.results && response.data.results.length > 0) {
        const geocodeLocation = response.data.results[0].geometry.location
        return { lat: geocodeLocation.lat, lng: geocodeLocation.lng }
      }
    } catch (error) {
      console.warn('Geocoding failed, using default coordinates:', error)
    }

    // Fallback to Campinas coordinates
    return { lat: -22.9056, lng: -47.0608 }
  }

  /**
   * Translates WMO weather codes to Portuguese conditions
   * https://open-meteo.com/en/docs
   */
  private translateWeatherCode(code: number): string {
    const codes: Record<number, string> = {
      0: 'Céu limpo',
      1: 'Predominantemente limpo',
      2: 'Parcialmente nublado',
      3: 'Nublado',
      45: 'Nevoeiro',
      48: 'Nevoeiro com geada',
      51: 'Garoa fraca',
      53: 'Garoa moderada',
      55: 'Garoa intensa',
      56: 'Garoa congelante fraca',
      57: 'Garoa congelante intensa',
      61: 'Chuva fraca',
      63: 'Chuva moderada',
      65: 'Chuva intensa',
      66: 'Chuva congelante fraca',
      67: 'Chuva congelante intensa',
      71: 'Neve fraca',
      73: 'Neve moderada',
      75: 'Neve intensa',
      77: 'Granizo',
      80: 'Pancadas de chuva fracas',
      81: 'Pancadas de chuva moderadas',
      82: 'Pancadas de chuva intensas',
      85: 'Pancadas de neve fracas',
      86: 'Pancadas de neve intensas',
      95: 'Trovoada',
      96: 'Trovoada com granizo fraco',
      99: 'Trovoada com granizo intenso',
    }

    return codes[code] || 'Condição desconhecida'
  }

  /**
   * Maps WMO weather codes to icon identifiers
   */
  private mapWeatherCodeToIcon(code: number): string {
    if (code === 0 || code === 1) return 'sunny'
    if (code === 2) return 'partly-cloudy'
    if (code === 3) return 'cloudy'
    if (code === 45 || code === 48) return 'foggy'
    if (code >= 51 && code <= 67) return 'rainy'
    if (code >= 71 && code <= 86) return 'snowy'
    if (code >= 95 && code <= 99) return 'stormy'
    if (code >= 80 && code <= 82) return 'rainy'

    return 'partly-cloudy' // default
  }
}

export const weatherService = new WeatherService()

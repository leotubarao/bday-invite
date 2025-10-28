import { FaCloud, FaSun, FaCloudRain, FaBolt, FaEye } from 'react-icons/fa'

export function getWeatherIcon(condition: string) {
  const lowerCondition = condition.toLowerCase()

  if (
    lowerCondition.includes('sun') ||
    lowerCondition.includes('clear') ||
    lowerCondition.includes('ensolarado')
  )
    return <FaSun className="text-yellow-400" />

  if (
    lowerCondition.includes('rain') ||
    lowerCondition.includes('shower') ||
    lowerCondition.includes('chuva') ||
    lowerCondition.includes('garoa')
  )
    return <FaCloudRain className="text-blue-400" />

  if (
    lowerCondition.includes('thunder') ||
    lowerCondition.includes('storm') ||
    lowerCondition.includes('trovoada')
  )
    return <FaBolt className="text-yellow-300" />

  if (
    lowerCondition.includes('fog') ||
    lowerCondition.includes('mist') ||
    lowerCondition.includes('nevoeiro') ||
    lowerCondition.includes('neblina')
  )
    return <FaEye className="text-gray-300" />

  return <FaCloud className="text-gray-400" />
}

export interface WeatherData {
  city: string
  temp: string
  description: string
  icon: string
}

export interface WeatherState {
  history: WeatherData[]
  weatherData: WeatherData | undefined
  error: string | undefined
  isLoading: boolean
}

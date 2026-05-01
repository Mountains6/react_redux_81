import { PayloadAction } from "@reduxjs/toolkit"
import { createAppSlice } from "../../createAppSlice"
import type { WeatherData, WeatherState } from "./types"

const weatherInitialState: WeatherState = {
  history: [],
  weatherData: undefined,
  error: undefined,
  isLoading: false,
}

export const weatherSlice = createAppSlice({
  name: "WEATHER",
  initialState: weatherInitialState,
  reducers: create => ({
    fetchWeather: create.asyncThunk<WeatherData, string>(
      async (city: string) => {
        const API_KEY = "fe2116ace6051e5aaec5b2b37cad6b1a"
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`,
        )

        if (!response.ok) {
          throw new Error("City not found")
        }

        const result = await response.json()

        return {
          city: result.name,
          temp: `${Math.round(result.main.temp)}°`,
          description: result.weather[0].description,
          icon: result.weather[0].icon,
        }
      },
      {
        pending: state => {
          state.isLoading = true
          state.error = undefined
        },
        fulfilled: (state, action: PayloadAction<WeatherData>) => {
          state.isLoading = false
          state.history.unshift(action.payload)
        },
        rejected: (state, action) => {
          state.isLoading = false
          state.error = action.error.message || "An error occurred"
        },
      },
    ),

    clearHistory: create.reducer(state => {
      state.history = []
      state.error = undefined
    }),

    clearError: create.reducer(state => {
      state.error = undefined
    }),
  }),
  selectors: {
    weatherData: state => state,
  },
})

export const weatherActions = weatherSlice.actions
export const weatherSelectors = weatherSlice.selectors

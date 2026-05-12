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
    fetchStart: create.reducer(state => {
      state.isLoading = true
      state.error = undefined
    }),
    fetchSuccess: create.reducer(
      (state, action: PayloadAction<WeatherData>) => {
        state.isLoading = false
        state.history.unshift(action.payload)
        state.weatherData = action.payload
      },
    ),
    fetchError: create.reducer((state, action: PayloadAction<string>) => {
      state.isLoading = false
      state.error = action.payload
    }),
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

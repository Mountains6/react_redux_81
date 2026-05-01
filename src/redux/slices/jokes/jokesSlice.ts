import { createAppSlice } from "../../createAppSlice"
import { JokesState } from "./types"

const jokesInitialState: JokesState = {
  data: "",
  error: undefined,
  isLoading: false,
}

export const jokesSlice = createAppSlice({
  name: "JOKES",
  initialState: jokesInitialState,
  reducers: create => ({
    setJoke: create.reducer((state: JokesState, action: { payload: string; type: string }) => {
      state.data = action.payload
    }),
    setError: create.reducer((state: JokesState, action: any) => {
      state.error = action.payload
    }),
    fetchStart: create.reducer((state: JokesState) => {
      state.isLoading = true
    }),
    fetchEnd: create.reducer((state: JokesState) => {
      state.isLoading = false
    }),
    clear: create.reducer(() => jokesInitialState),
  }),
  selectors: {
    jokesData: (state: JokesState) => state,
  },
})

export const jokesSliceActions = jokesSlice.actions;
export const jokesSliceSelectors = jokesSlice.selectors;
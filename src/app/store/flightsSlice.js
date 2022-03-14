import { createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit"
import useFlightsServices from "../services/FlightsServices"


const flightsAdapter = createEntityAdapter({
  sortComparer: (a, b) => a.price - b.price
})

const initialState = flightsAdapter.getInitialState({
  flightsLoadingStatus: "loading",
  sort: "ascending",
  filter: null,
  sortByPrice: null,
  activeAirline: null
})

export const fetchFlights = createAsyncThunk(
  "flights/fetchFlights",
  () => {
    const { getAllFlights } = useFlightsServices()
    return getAllFlights()
  }
)

const flightsSlice = createSlice({
  name: "flights",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchFlights.pending, state => {
        state.flightsLoadingStatus = "loading"
      })
      .addCase(fetchFlights.fulfilled, (state, action) => {
        flightsAdapter.setAll(state, action.payload)
        state.flightsLoadingStatus = "success"
      })
      .addCase(fetchFlights.rejected, state => {
        state.flightsLoadingStatus = "error"
      })
  }
})

const { reducer } = flightsSlice


export default reducer


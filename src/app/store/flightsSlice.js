import { createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit"
import useFlightsServices from "../services/FlightsServices"


const flightsAdapter = createEntityAdapter({
  sortComparer: (a, b) => a.price - b.price
})

const initialState = flightsAdapter.getInitialState({
  flightsLoadingStatus: "loading",
  sort: "ascending",
  filterTransfer: null,
  sortByPrice: null,
  selectedAirline: null
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
  reducers: {
    sortChanged: (state, action) => {
      state.sort = action.payload
    },
    filterTransferChange: (state, action) => {
      state.filterTransfer = action.payload
    },
    selectedAirlineChanged: (state, action) => {
      state.selectedAirline = action.payload
    }
  },
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

const { reducer, actions } = flightsSlice
export const { sortChanged, filterTransferChange, selectedAirlineChanged } = actions


export default reducer


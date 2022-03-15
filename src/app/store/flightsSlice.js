import { createAsyncThunk, createEntityAdapter, createSelector, createSlice } from "@reduxjs/toolkit"
import useFlightsServices from "../services/FlightsServices"
import { flightSorting } from "../helpers/flightSorting"


const flightsAdapter = createEntityAdapter({
  sortComparer: (a, b) => a.price - b.price
})

const initialState = flightsAdapter.getInitialState({
  flightsLoadingStatus: "loading",
  sort: "ascending",
  filterTransfer: null,
  sortByPrice: null,
  selectedAirline: null,
  countFlights: 2
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
    sortByPriceChanged: (state, action) => {
      state.sortByPrice = action.payload
    },
    selectedAirlineChanged: (state, action) => {
      state.selectedAirline = action.payload
    },
    setCountFlights: (state) => {
      state.countFlights += 2
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
export const { sortChanged, filterTransferChange, sortByPriceChanged, selectedAirlineChanged, setCountFlights } = actions

export const { selectAll: getFlights } = flightsAdapter.getSelectors(state => state.flights)
export const getMaxPriceFlight = createSelector(getFlights, state => {
  return state.map(item => item.price).pop()
})
export const getFilterFlights = createSelector(
  getFlights,
  state => state.flights.sort,
  (flights, sortStatus) => {
    return flightSorting(flights, sortStatus)
  })

export const getCountFlights = createSelector(
  getFilterFlights,
  state => state.flights.countFlights,
  (flights, count) => {
    return flights.slice(0, count)
  }
)

export default reducer


import { createAsyncThunk, createEntityAdapter, createSelector, createSlice } from "@reduxjs/toolkit"
import useFlightsServices from "../services/FlightsServices"
import { flightSorting } from "../helpers/flightSorting"


const flightsAdapter = createEntityAdapter({
  sortComparer: (a, b) => a.price - b.price
})

const initialState = flightsAdapter.getInitialState({
  flightsLoadingStatus: "loading",
  sort: "ascending",
  filterTransfer: {
    oneChange: false,
    nonStop: false
  },
  sortByPrice: {
    min: "",
    max: ""
  },
  selectedAirline: [],
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
export const {
  sortChanged,
  filterTransferChange,
  sortByPriceChanged,
  selectedAirlineChanged,
  setCountFlights
} = actions

export const { selectAll: getFlights } = flightsAdapter.getSelectors(state => state.flights)
export const getMaxPriceFlight = createSelector(getFlights, state => {
  return state.map(item => item.price).pop()
})
const getFilterFlights = createSelector(
  getFlights,
  state => state.flights.sort,
  (flights, sortStatus) => {
    return flightSorting(flights, sortStatus)
  })

const getFilterTransfer = createSelector(
  getFilterFlights,
  state => state.flights.filterTransfer,
  (flights, filterTransfer) => {
    if (filterTransfer.oneChange && !filterTransfer.nonStop) {
      return flights.filter(item => item.flightBack.transfers === 1 && item.flightThere.transfers === 1)
    } else if (filterTransfer.nonStop && !filterTransfer.oneChange) {
      return flights.filter(item => item.flightBack.transfers === 0 && item.flightThere.transfers === 0)
    } else if (filterTransfer.oneChange && filterTransfer.nonStop) {
      return flights.filter(item => (
        (item.flightBack.transfers === 1 && item.flightThere.transfers === 0)
        || (item.flightBack.transfers === 0 && item.flightThere.transfers === 1)
      ))
    } else {
      return [...flights]
    }
  }
)

const getFilterByPrice = createSelector(
  getFilterTransfer,
  state => state.flights.sortByPrice,
  (flights, price) => {
    if (!price.min && !price.max) {
      return [...flights]
    }
    return flights.filter(item => item.price >= price.min && item.price <= price.max)
  }
)

const getFilterByAirlines = createSelector(
  getFilterByPrice,
  state => state.flights.selectedAirline,
  (flights, airlines) => {
    if (!airlines.length) {
      return [...flights]
    }

    let newArr = []
    airlines.forEach(airline => {
      flights.forEach(flight => {
        if ((flight.flightBack.carrier || flight.flightThere.carrier) === airline) {
          newArr.push(flight)
        }
      })
    })
    return newArr
  }
)

export const getCountFlights = createSelector(
  getFilterByAirlines,
  state => state.flights.countFlights,
  (flights, count) => {
    return [...flights].slice(0, count)
  }
)

export default reducer


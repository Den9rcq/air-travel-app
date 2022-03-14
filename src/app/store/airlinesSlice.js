import { createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit"
import useFlightsServices from "../services/FlightsServices"


const airlinesAdapter = createEntityAdapter({
  selectId: airline => airline.name
})
const initialState = airlinesAdapter.getInitialState({
  airlinesLoadingStatus: "loading"
})

export const fetchAirlines = createAsyncThunk(
  "airlines/fetchAirlines",
  () => {
    const { getAllAirlines } = useFlightsServices()
    return getAllAirlines()
  }
)

const airlinesSlice = createSlice({
  name: "airlines",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchAirlines.pending, state => {
        state.flightsLoadingStatus = "loading"
      })
      .addCase(fetchAirlines.fulfilled, (state, action) => {
        airlinesAdapter.setAll(state, action.payload)
        state.flightsLoadingStatus = "success"
      })
      .addCase(fetchAirlines.rejected, state => {
        state.flightsLoadingStatus = "error"
      })
  }
})

const { reducer } = airlinesSlice


export default reducer

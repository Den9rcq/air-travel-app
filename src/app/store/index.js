import { configureStore } from "@reduxjs/toolkit"
import flights from "./flightsSlice"
import airlines from "./airlinesSlice"

const store = configureStore({
  reducer: { flights, airlines },
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== "production"
})

export default store

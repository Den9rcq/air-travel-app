import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import "./normalize.css"
import "./index.css"
import "react-toastify/dist/ReactToastify.css"
import App from "./app/components/App"
import store from "./app/store"
import { ToastContainer } from "react-toastify"

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    <ToastContainer
      position="top-center"
      autoClose={2000} />
  </React.StrictMode>,
  document.getElementById("root")
)

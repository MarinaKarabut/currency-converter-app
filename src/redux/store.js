import { configureStore } from "@reduxjs/toolkit"

import currenciesReducer from "./currencies/currencies-reducer"

const store = configureStore({
  reducer: {
    currencies: currenciesReducer,
  },
})

export default store

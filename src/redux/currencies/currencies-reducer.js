import { combineReducers } from "redux"
import { createReducer } from "@reduxjs/toolkit"
import {
  getAllCurrenciesRequest,
  getAllCurrenciesSuccess,
  getAllCurrenciesError,
  getAllCurrenciesRatesRequest,
  getAllCurrenciesRatesSuccess,
  getAllCurrenciesRatesError,
} from "./currencies-actions"

const initialStateCurrencies = []

const initialStateCurrenciesRates = {}

const initialStateError = null

const currencies = createReducer(initialStateCurrencies, {
  [getAllCurrenciesSuccess]: (_, { payload }) => payload,
})

const rates = createReducer(initialStateCurrenciesRates, {
  [getAllCurrenciesRatesSuccess]: (_, { payload }) => payload.rates,
})

const loading = createReducer(false, {
  [getAllCurrenciesRequest]: () => true,
  [getAllCurrenciesSuccess]: () => false,
  [getAllCurrenciesError]: () => false,

  [getAllCurrenciesRatesRequest]: () => true,
  [getAllCurrenciesRatesSuccess]: () => false,
  [getAllCurrenciesRatesError]: () => false,
})

const error = createReducer(initialStateError, {
  [getAllCurrenciesError]: (_, { payload }) => payload,
  [getAllCurrenciesSuccess]: () => initialStateError,

  [getAllCurrenciesRatesError]: (_, { payload }) => payload,
  [getAllCurrenciesRatesSuccess]: () => initialStateError,
})

export default combineReducers({
  currencies,
  rates,
  loading,
  error,
})

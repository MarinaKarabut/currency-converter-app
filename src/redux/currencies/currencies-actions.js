import { createAction } from "@reduxjs/toolkit"

export const getAllCurrenciesRequest = createAction(
  "currencies/getAllCurrenciesRequest"
)
export const getAllCurrenciesSuccess = createAction(
  "currencies/getAllCurrenciesSuccess"
)
export const getAllCurrenciesError = createAction(
  "currencies/getAllCurrenciesError"
)

export const getAllCurrenciesRatesRequest = createAction(
  "currencies/getAllCurrenciesRatesRequest"
)
export const getAllCurrenciesRatesSuccess = createAction(
  "currencies/getAllCurrenciesRatesSuccess"
)
export const getAllCurrenciesRatesError = createAction(
  "currencies/getAllCurrenciesRatesError"
)

const actions = {
  getAllCurrenciesRequest,
  getAllCurrenciesSuccess,
  getAllCurrenciesError,
  getAllCurrenciesRatesRequest,
  getAllCurrenciesRatesSuccess,
  getAllCurrenciesRatesError,
}

export default actions

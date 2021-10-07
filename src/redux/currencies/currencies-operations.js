import axios from "axios"

import {
  getAllCurrenciesRequest,
  getAllCurrenciesSuccess,
  getAllCurrenciesError,
  getAllCurrenciesRatesRequest,
  getAllCurrenciesRatesSuccess,
  getAllCurrenciesRatesError,
} from "./currencies-actions"

export const getAllCurrencies = () => async (dispatch) => {
  dispatch(getAllCurrenciesRequest())

  try {
    const { data } = await axios.get(
      "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5"
    )
    dispatch(getAllCurrenciesSuccess(data))
  } catch (error) {
    dispatch(getAllCurrenciesError(error))
  }
}

const API_KEY = "b74981cbf36c59859fe02a7431a612cc"

export const getAllCurrenciesRates = () => async (dispatch) => {
  dispatch(getAllCurrenciesRatesRequest())

  try {
    const { data } = await axios.get(
      `http://api.exchangeratesapi.io/v1/latest?access_key=${API_KEY}&symbols=USD,UAH,RUB,EUR&format=1`
    )
    dispatch(getAllCurrenciesRatesSuccess(data))
  } catch (error) {
    dispatch(getAllCurrenciesRatesError(error))
  }
}

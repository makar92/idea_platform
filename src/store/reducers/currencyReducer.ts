export const SET_CURRENCY = "SET_CURRENCY"

interface Action {type: string, payload?: any}
interface CurrencyState { 
  currency: string
}

const initialState: CurrencyState = {
  currency: "RUB"
}

export const currencyReducer = (state = initialState, action: Action): CurrencyState => {
  switch (action.type) {
    case SET_CURRENCY:
      return { ...state, currency: action.payload.curency}
    default:
      return state
  } 
}
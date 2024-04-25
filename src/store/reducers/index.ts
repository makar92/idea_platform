import { combineReducers } from "redux";
import { currencyReducer } from "./currencyReducer";
import { stopsReducer } from "./stopsReducer";

export const rootReducer = combineReducers({
  currencyReducer: currencyReducer,
  stopsReducer: stopsReducer
})

export type RootState = ReturnType<typeof rootReducer>

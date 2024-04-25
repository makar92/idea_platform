
export const CHANGE_STOPS = "CHANGE_STOPS"
export const SET_ALL_STOPS = "SET_ALL_STOPS"
export const SET_FALSE_ALL_STOPS = "SET_FALSE_ALL_STOPS"

interface Action {type: string, payload?: any}
interface StopsState { 
  stops: {
    all: boolean,
    oneStop: boolean,
    twoStops: boolean,
    threeStops: boolean,
  }
}

const initialState: StopsState = {
  stops: {
    all: true,
    oneStop: true,
    twoStops: true,
    threeStops: true,
  }
}

export const stopsReducer = (state = initialState, action: Action): StopsState => {
  switch (action.type) {
    case CHANGE_STOPS:

    const { oneStop, twoStops, threeStops } = action.payload || {};

    if (oneStop !== undefined || twoStops !== undefined || threeStops !== undefined) {
      const stops = { ...state.stops, ...(action.payload || {}) };
      const all = oneStop !== false && twoStops !== false && threeStops !== false;
      return { ...state, stops: { ...stops, all } };
    }

    return state;

    case SET_ALL_STOPS: {
      if (action.payload.all === true) {
        return { ...state, stops: { all: true,
          oneStop: true,
          twoStops: true,
          threeStops: true, } };
      } else {
        return { ...state, stops: { all: false,
          oneStop: false,
          twoStops: false,
          threeStops: false, } };
      }
    }

    default:
      return state
  } 
}
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { bookingReducer } from "../reducers/bookingReducer";

const composeEnhancers =
  process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    : compose;

export default () => {
  const configureStore = createStore(
    combineReducers({
      booking: bookingReducer,
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return configureStore;
};

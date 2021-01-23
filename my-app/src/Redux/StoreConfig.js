import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';

import thunk from "redux-thunk";
import RootReducer from "./RootReducer";


export const StoreConfig = () => {
  const middlewares = [thunk];

  const composedEnhancer = composeWithDevTools(
    applyMiddleware(...middlewares)
  );

  const store = createStore(RootReducer, composedEnhancer);

  return store;
};



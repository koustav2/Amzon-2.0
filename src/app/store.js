import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "../slices/basketSlice";

export const store = configureStore({
  reducer: {
    basket: basketReducer,
  },
  devTools:" window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()"
  
});

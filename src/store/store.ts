import { configureStore } from "@reduxjs/toolkit";
import coffeeReducer from "./coffeesSlice";
import deliversReducer from "./deliversSlice";

export const store = configureStore({
  reducer: {
    coffees: coffeeReducer,
    delivers: deliversReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

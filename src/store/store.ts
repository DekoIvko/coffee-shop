import { configureStore } from '@reduxjs/toolkit';
import coffeeReducer from './coffeesSlice';

export const store = configureStore({
  reducer: {
    coffees: coffeeReducer,
    //   category: categoryReducer,
    //   product: productReducer,
    //   cart: cartReducer,
    //   search: searchReducer,
  },
});

// export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

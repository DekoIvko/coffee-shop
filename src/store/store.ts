import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    //   sidebar: sidebarReducer,
    //   category: categoryReducer,
    //   product: productReducer,
    //   cart: cartReducer,
    //   search: searchReducer,
  },
});

export default store;

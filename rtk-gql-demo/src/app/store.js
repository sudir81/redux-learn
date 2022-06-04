import { configureStore } from "@reduxjs/toolkit";
import { filmsSlice } from "../features/filmSlice";

const store = configureStore({
  reducer: {
    [filmsSlice.reducerPath]: filmsSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(filmsSlice.middleware),
});

export default store;

import { configureStore } from "@reduxjs/toolkit";
import { articleApi } from "./network/mostPopularArticles";

export const store = configureStore({
  reducer: {
    [articleApi.reducerPath]: articleApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(articleApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = ReturnType<typeof store.dispatch>;

export const setupStore = () => {
  return configureStore({
    reducer: {
      [articleApi.reducerPath]: articleApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(articleApi.middleware),
  });
};
export type AppStore = typeof store;

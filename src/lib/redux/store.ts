import { configureStore } from "@reduxjs/toolkit";

import layout from "src/lib/redux/features/layout";
import products from "src/lib/redux/features/products";
export const store = configureStore({
  reducer: {
    layout,
    products,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import { configureStore } from "@reduxjs/toolkit";
import { heroesSlice } from "./heroes/heroesSlice";

export const store = configureStore({
  reducer: { heroes: heroesSlice.reducer },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

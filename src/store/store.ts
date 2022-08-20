import { configureStore } from "@reduxjs/toolkit";
import eventsReducer from "./reducers/events/events.reducer";

export const store = configureStore({
  reducer: {
    events: eventsReducer,
  },
});

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 } from "uuid";
import { RootState } from "store/store.interface";
import { EventBase, Event, EventsState } from "./events.reducer.interface";

const initialState: EventsState = {
  eventsList: [],
};

const eventsSlice = createSlice({
  name: "eventsList",
  initialState: initialState,
  reducers: {
    createEvent: (state, action: PayloadAction<EventBase>) => {
      const newEvent: Event = {
        id: v4(),
        ...action.payload,
      };
      state.eventsList.push(newEvent);
    },
    removeEvent: (state, action: PayloadAction<{ id: string }>) => {
      state.eventsList = state.eventsList.filter(
        (event: Event) => event.id !== action.payload.id
      );
    },
    updateEvent: (state, action: PayloadAction<Event>) => {
      const eventIndex = state.eventsList.findIndex(
        (event: Event) => event.id === action.payload.id
      );
      state.eventsList[eventIndex] = action.payload;
    },
  },
});

export const { createEvent, removeEvent, updateEvent } = eventsSlice.actions;

export const selectEvents = (state: RootState) => state.events.eventsList;

export const selectEvent = (state: RootState, id?: string) =>
  id ? state.events.eventsList.find((event: Event) => event.id === id) : null;

export default eventsSlice.reducer;

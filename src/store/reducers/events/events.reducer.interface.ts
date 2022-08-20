export interface EventBase {
  name: string;
  startDateTimeStamp: number;
  endDateTimeStamp: number;
}

export interface Event extends EventBase {
  id: string;
}

export interface EventsState {
  eventsList: Event[];
}

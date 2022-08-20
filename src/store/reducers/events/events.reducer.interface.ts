export interface EventBase {
  name: string;
  startDate: Date;
  endDate: Date;
}

export interface Event extends EventBase {
  id: string;
}

export interface EventsState {
  eventsList: Event[];
}

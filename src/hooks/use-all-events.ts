import { useAppSelector } from "./use-app-selector";
import { selectEvents } from "store/reducers";

export const useAllEvents = (searchPhrase: string | undefined) => {
  const events = useAppSelector((state) => selectEvents(state, searchPhrase));

  return events.map((event) => {
    const { id, name, startDateTimeStamp, endDateTimeStamp } = event;
    const startDate = new Date(startDateTimeStamp);
    const endDate = new Date(endDateTimeStamp);

    return {
      id,
      name,
      startDate,
      endDate,
    };
  });
};

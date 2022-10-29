import { useAppSelector } from "hooks";
import { selectEvent } from "store/reducers";

export const useEvent = (eventId: string | undefined) =>
  useAppSelector((state) => selectEvent(state, eventId));

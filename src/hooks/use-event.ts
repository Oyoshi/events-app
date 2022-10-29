import { useAppSelector } from "./use-app-selector";
import { selectEvent } from "store/reducers";

export const useEvent = (eventId: string | undefined) =>
  useAppSelector((state) => selectEvent(state, eventId));

import { useAppSelector } from "hooks";
import { selectEvents } from "store/reducers";
import PageTemplate from "templates/page-template";
import EventsTable from "components/events-table";

export default function AllEventsPage() {
  const events = useAppSelector(selectEvents);

  return (
    <PageTemplate wide>
      <EventsTable events={events} />
    </PageTemplate>
  );
}

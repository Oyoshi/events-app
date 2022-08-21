import { useState } from "react";
import { useAppSelector } from "hooks";
import { selectEvents } from "store/reducers";
import PageTemplate from "templates/page-template";
import EventsTable from "components/events-table";

export default function AllEventsPage() {
  const [searchPhrase, setSearchPhrase] = useState<string>();

  const events = useAppSelector((state) =>
    selectEvents(state, searchPhrase)
  ).map((event) => {
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

  return (
    <PageTemplate wide onSearch={setSearchPhrase}>
      <EventsTable events={events} />
    </PageTemplate>
  );
}

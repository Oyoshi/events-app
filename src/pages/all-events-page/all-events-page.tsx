import { useState } from "react";
import { useAllEvents } from "hooks";
import PageTemplate from "templates/page-template";
import EventsTable from "components/events-table";

export default function AllEventsPage() {
  const [searchPhrase, setSearchPhrase] = useState<string>();

  const events = useAllEvents(searchPhrase);

  return (
    <PageTemplate wide onSearch={setSearchPhrase}>
      <EventsTable events={events} />
    </PageTemplate>
  );
}

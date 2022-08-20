import PageTemplate from "templates/page-template";
import EventsTable from "components/events-table";

export default function AllEventsPage() {
  const events = [
    {
      id: 123,
      name: "My Event 1",
      startDate: new Date(),
      endDate: new Date(),
    },
    {
      id: 456,
      name: "My Event 2",
      startDate: new Date(),
      endDate: new Date(),
    },
  ];
  return (
    <PageTemplate wide>
      <EventsTable events={events} />
    </PageTemplate>
  );
}

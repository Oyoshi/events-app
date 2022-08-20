import PageTemplate from "templates/page-template";
import EventForm, { EventFormData } from "components/event-form";

export default function EventPage() {
  const onSubmit = (data: EventFormData) => {
    console.log(data);
  };

  return (
    <PageTemplate>
      <EventForm onSubmit={onSubmit} />
    </PageTemplate>
  );
}

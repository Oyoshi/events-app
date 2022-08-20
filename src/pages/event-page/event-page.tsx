import PageTemplate from "templates/page-template";
import EventForm, { FormData } from "components/event-form";

export default function EventPage() {
  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <PageTemplate>
      <EventForm onSubmit={onSubmit} />
    </PageTemplate>
  );
}

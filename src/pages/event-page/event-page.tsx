import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch } from "hooks";
import { createEvent, updateEvent } from "store/reducers";
import PageTemplate from "templates/page-template";
import EventForm, { EventFormData } from "components/event-form";

export default function EventPage() {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const params = useParams();

  const handleOnSubmit = (data: EventFormData) => {
    const { id } = params;
    if (id) {
      dispatch(updateEvent({ id, ...createEventObject(data) }));
    } else {
      dispatch(createEvent(createEventObject(data)));
    }
    navigate("/events");
  };

  const createEventObject = (data: EventFormData) => ({
    name: data.name,
    startDateTimeStamp: data.startDate.getTime(),
    endDateTimeStamp: data.endDate.getTime(),
  });

  return (
    <PageTemplate>
      <EventForm onSubmit={handleOnSubmit} eventId={params.id} />
    </PageTemplate>
  );
}

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
      dispatch(updateEvent({ id, ...data }));
    } else {
      dispatch(createEvent(data));
    }
    navigate("/events");
  };

  return (
    <PageTemplate>
      <EventForm onSubmit={handleOnSubmit} />
    </PageTemplate>
  );
}

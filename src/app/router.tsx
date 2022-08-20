import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllEventsPage from "pages/all-events-page";
import EventPage from "pages/event-page";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="events">
          <Route index element={<AllEventsPage />} />
          <Route path="new" element={<EventPage />} />
          <Route path=":id" element={<EventPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

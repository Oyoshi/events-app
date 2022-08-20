import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageTemplate from "templates/page-template";
import EventPage from "pages/event-page";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="events">
          <Route
            index
            element={
              <PageTemplate fullWidth>
                <h2>Events Page</h2>
              </PageTemplate>
            }
          />
          <Route path="new" element={<EventPage />} />
          <Route path=":id" element={<EventPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

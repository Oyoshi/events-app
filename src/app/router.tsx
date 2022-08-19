import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageTemplate from "templates/page-template";

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
          <Route
            path="new"
            element={
              <PageTemplate>
                <h2>New Event Page</h2>
              </PageTemplate>
            }
          />
          <Route
            path=":id"
            element={
              <PageTemplate>
                <h2>Edit Event Page</h2>
              </PageTemplate>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="events">
          <Route index element={<div />} />
          <Route path="new" element={<div />} />
          <Route path=":id" element={<div />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

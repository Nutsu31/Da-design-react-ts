import {
  Route,
  RouterProvider,
  createRoutesFromElements,
  createBrowserRouter,
} from "react-router-dom";

import "./App.css";
import ContactPage from "./page/ContactPage";
import List from "./Components/List";
import MainPage from "./page/MainPage";
import Root from "./page/Root";
import SalesPage from "./page/SalesPage";
import ServicePage from "./page/ServicePage";
import AdminLogin from "./page/AdminLogin";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<MainPage />} />
      <Route path="/:path" element={<List />} />
      <Route path="admin-panel" element={<AdminLogin />} />
      <Route path="contact" element={<ContactPage />} />
      <Route path="service" element={<ServicePage />} />
      <Route path="sales" element={<SalesPage />} />
    </Route>
  )
);
function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

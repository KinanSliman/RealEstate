import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "./routes/App.jsx";
import About from "./routes/About.jsx";
import "./SCSS/style.css";
import RentPage from "./routes/RentPage.jsx";
import { PropertiesProvider } from "./routes/PropertiesContext.jsx";
import { FilterProvider } from "./routes/FilterProvider.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about-us",
    element: <About />,
  },
  ,
  {
    path: "/properties-page",
    element: <RentPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PropertiesProvider>
      <FilterProvider>
        <RouterProvider router={router} />
      </FilterProvider>
    </PropertiesProvider>
  </React.StrictMode>
);

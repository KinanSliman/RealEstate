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
import BuyPage from "./routes/BuyPage.jsx";
import OffPlan from "./routes/OffPlan.jsx";

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
    path: "/rent-page",
    element: <RentPage />,
  },
  {
    path: "/buy-page",
    element: <BuyPage />,
  },
  {
    path: "/offplan-page",
    element: <OffPlan />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PropertiesProvider>
      <RouterProvider router={router} />
    </PropertiesProvider>
  </React.StrictMode>
);

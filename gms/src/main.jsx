import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Pricing from "./components/Pricing.jsx";
import Plans from "./components/Plans.jsx";
import Layout from "./Layout.jsx";
import Home from "./components/Home.jsx";
import Servicesland from "./components/Servicesland.jsx";
import Footer from "./components/Footer.jsx";
import OneTervices from "./components/OneTservices.jsx";
import MonthlyServices from "./components/MonthlyServices.jsx";
import Areas from "./components/Areas/Areas.jsx";
import Lahore from "./components/Areas/Cities/Lahore.jsx";
import Islamabad from "./components/Areas/Cities/Islamabad.jsx";
import Karachi from "./components/Areas/Cities/Karachi.jsx";
import Rawalpindi from "./components/Areas/Cities/Rawalpindi.jsx";
import Multan from "./components/Areas/Cities/Multan.jsx";
import Peshawar from "./components/Areas/Cities/Peshawar.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />

      <Route path="services" element={<Servicesland />}></Route>

      <Route path="pricing" element={<Pricing />} />
      <Route path="plans" element={<Plans />} />
      <Route path="onetime" element={<OneTervices />} />
      <Route path="monthly" element={<MonthlyServices />} />
      <Route path="areas" element={<Areas />} />
      <Route path="lahore" element={<Lahore />} />
      <Route path="islamabad" element={<Islamabad />} />
      <Route path="karachi" element={<Karachi />} />
      <Route path="rawalpindi" element={<Rawalpindi />} />
      <Route path="multan" element={<Multan />} />
      <Route path="peshawar" element={<Peshawar />} />

    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

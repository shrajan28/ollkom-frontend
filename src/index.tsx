import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import AppRouter from "./AppRouter";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import {
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
  createHashRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { AuthProvider } from "./context/AuthProvider";

const router = createHashRouter([
  {
    path: "/*",
    element: (
      <AuthProvider>
        <Header title="" />
        <Routes>
          <Route path="/*" element={<AppRouter />} />
        </Routes>
        <Footer title="" />
      </AuthProvider>
    ),
  },
]);
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

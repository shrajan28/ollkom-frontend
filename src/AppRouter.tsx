import { Route, Routes } from "react-router-dom";
import Subscription from "./Desktop/Subscription";
import Home from "./Home";
import ThemeListing, { themeListingLoader } from "./Components/ThemeListing";
import ThemeDetail from "./Components/ThemeDetail";
import Layout from "./Components/Layout";
import Missing from "./Components/Missing";
import Login from "./Components/Login";
import Register from "./Components/Register";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route path="/" element={<Home title="" />}></Route>
        <Route
          path="/subscription"
          element={<Subscription title={""} />}
        ></Route>
        <Route
          path="/themes"
          element={<ThemeListing />}
          loader={async ({ request }) => {
            // loaders can be async functions
            const res = await fetch(
              "https://jsonplaceholder.typicode.com/users",
              {
                signal: request.signal,
              }
            );
            const user = await res.json();
            return user;
          }}
        />
        <Route path="/themedetail/:id" element={<ThemeDetail />}></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* catch all */}
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );
}

export default AppRouter;

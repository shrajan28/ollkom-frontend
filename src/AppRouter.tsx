import { Route, Routes } from "react-router-dom";
import Subscription from "./Desktop/Subscription";
import Home from "./Home";
import ThemeListing from "./Components/ThemeListing";
import ThemeDetail from "./Components/ThemeDetail";
import Layout from "./Components/Layout";
import Missing from "./Components/Missing";

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
        <Route path="/themes" element={<ThemeListing />} />
        <Route path="/themedetail/:id" element={<ThemeDetail />}></Route>

        {/* catch all */}
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );
}

export default AppRouter;

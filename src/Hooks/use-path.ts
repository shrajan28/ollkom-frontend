import { matchPath, useLocation } from "react-router-dom";

const routes = [
  { path: "/subscription" },
  { path: "/" },
  { path: "/themes" },
  { path: "/themedetail/:id" },
];

export const useCurrentPath = () => {
  const { pathname } = useLocation();
  return routes.find((route) => matchPath(route, pathname))?.path;
};

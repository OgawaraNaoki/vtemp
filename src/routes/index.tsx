import { useRoutes } from "react-router-dom";
import { publicRoutes } from "./public";
import { Landing } from "@/features/misc";

export const AppRoutes = () => {
  const routes = publicRoutes;
  const commonRoutes = [{ path: "/", element: <Landing /> }];

  return useRoutes([...routes, ...commonRoutes]);
};

import { Outlet } from "react-router-dom";
import { PostsRoutes } from "@/features/posts";
export const publicRoutes = [
  {
    path: "/app/*",
    element: <PostsRoutes />,
  },
];

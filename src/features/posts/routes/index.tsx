import { Route, Routes } from "react-router-dom";

import { Posts } from "./Posts";

export const PostsRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<Posts />} />
    </Routes>
  );
};

import { apiFetch } from "@/lib/ohmyfetch";

import { Post } from "../types";

export const listPost = (): Promise<Post[]> => {
  return apiFetch("/posts");
};

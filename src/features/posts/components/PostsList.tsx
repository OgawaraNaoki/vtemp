import { useState } from "react";
import { Post } from "../types";
import { listPost } from "../api/listPost";

export const PostsList = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const fetchPosts = async () => {
    setIsLoading(true);
    const posts = await listPost();
    setPosts(posts);

    setIsLoading(false);
  };

  return (
    <>
      <h1>MSW Testing Library Example</h1>
      {isLoading && <span aria-label="loading">Loading...</span>}
      {posts.length > 0 &&
        posts.map((post) => (
          <div className="ring gap-4">
            <article key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </article>
          </div>
        ))}
      <button onClick={() => fetchPosts()}>Fetch Posts</button>
    </>
  );
};

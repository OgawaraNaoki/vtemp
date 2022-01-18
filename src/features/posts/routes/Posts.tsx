import { PostsList } from "@/features/posts/components/PostsList";
import { ContentLayout } from "@/components/Layout";

export const Posts = () => {
  return (
    <ContentLayout title="Posts">
      <div className="mt-4">
        <PostsList></PostsList>
      </div>
    </ContentLayout>
  );
};

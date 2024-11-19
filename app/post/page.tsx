"use client";

import { Post } from "@prisma/client";
import { useGetPostsQuery } from "@/store/apiSlice";

const PostPage = () => {
  const { data: posts, isLoading } = useGetPostsQuery({});
  if (isLoading) return <div>Loading...</div>;
  return (
    <div>
      {posts.post?.map((item: Post) => (
        <div key={item.id}>{item.title}</div>
      ))}
    </div>
  );
};
export default PostPage;

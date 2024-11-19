"use client";

import { Post } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import { getPostsActions } from "../action";

const PostPage = () => {
  const { data: posts, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: getPostsActions,
  });

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      {posts?.map((item: Post) => (
        <div key={item.id}>{item.title}</div>
      ))}
    </div>
  );
};
export default PostPage;

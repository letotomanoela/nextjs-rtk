"use client";

import { Post } from "@prisma/client";
import { useEffect, useState } from "react";

const PostPage = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const getPosts = async () => {
      const res = await fetch("/api/post");
      const data = await res.json();
      setPosts(data.post);
    };
    getPosts();
  }, []);
  return (
    <div>
      {posts?.map((item) => (
        <div key={item.id}>{item.title}</div>
      ))}
    </div>
  );
};
export default PostPage;

"use client";

import { Post, User } from "@prisma/client";
import {
  useGetPostsQuery,
  useGetAuthorsQuery,
  useCreatePostMutation,
} from "@/store/apiSlice";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  SelectLabel,
} from "@/components/ui/select";
import { useState } from "react";

const PostPage = () => {
  const { data: posts, isLoading } = useGetPostsQuery({});
  const { data: authors } = useGetAuthorsQuery({});
  const [createPost, { isLoading: isPending }] = useCreatePostMutation();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [authorId, setAuthorId] = useState("");
  const onSubmit = async () => {
    try {
      const res = await createPost({ title, content, authorId }).unwrap();
    } catch (error) {
      console.log(error);
    }
  };
  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="p-12 w-full grid gap-x-16 grid-cols-2">
      <div className="space-y-5">
        <h1>Add post</h1>
        <Input
          disabled={isPending}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="title"
        />
        <Input
          disabled={isPending}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="content"
        />
        <Select onValueChange={(e) => setAuthorId(e)} defaultValue={authorId}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select Author" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Select Author</SelectLabel>
              {authors?.user?.map((item: User) => (
                <SelectItem key={item.id} value={item.id}>
                  {item.name}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        <Button onClick={onSubmit} disabled={isPending}>
          {isPending ? "Loading..." : "Add Post"}
        </Button>
      </div>
      <div>
        <h1>List of posts</h1>
        {posts?.post?.map((item: Post) => (
          <div key={item.id}>{item.title}</div>
        ))}
      </div>
    </div>
  );
};
export default PostPage;

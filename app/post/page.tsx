"use client";

import { Post } from "@prisma/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createPost, getAuthor, getPostsActions } from "../action";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

const PostPage = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const { data: posts, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: getPostsActions,
  });

  const { data: authors, isLoading: loadingAuthor } = useQuery({
    queryKey: ["author"],
    queryFn: getAuthor,
  });

  const { mutateAsync, isPending } = useMutation({
    mutationFn: createPost,
    mutationKey: ["create-post"],
  });

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [authorId, setAuthorId] = useState("");

  const onSubmit = async () => {
    try {
      await mutateAsync({
        title,
        content,
        authorId: authorId,
      });
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      toast({
        title: "Post created",
        variant: "default",
      });
      setTitle("");
      setContent("");
      setAuthorId("");
    } catch (error) {
      toast({
        title: "Something went wrong",
        variant: "destructive",
      });
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (loadingAuthor) return <div>Loading Author...</div>;

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
              {authors?.map((item) => (
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
        {posts?.map((item: Post) => (
          <div key={item.id}>{item.title}</div>
        ))}
      </div>
    </div>
  );
};
export default PostPage;

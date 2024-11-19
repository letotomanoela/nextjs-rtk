"use server";
import prisma from "@/config/db";

export const getPostsActions = async () => {
  const posts = await prisma.post.findMany();
  return posts;
};

type PostBody = {
  title: string;
  content: string;
  authorId: string;
};
export const createPost = async (body: PostBody) => {
  const post = await prisma.post.create({
    data: {
      ...body,
    },
  });
  return post;
};

export const getAuthor = async () => {
  const author = await prisma.user.findMany();
  return author;
};

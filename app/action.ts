"use server";
import prisma from "@/config/db";

export const getPostsActions = async () => {
  const posts = await prisma.post.findMany();
  return posts;
};

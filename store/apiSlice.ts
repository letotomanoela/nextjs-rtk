import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({ baseUrl: "" });

const apiSlice = createApi({
  reducerPath: "api",
  baseQuery,

  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => ({
        url: "/api/post",
      }),
      providesTags: ["Posts"],
    }),
    getAuthors: builder.query({
      query: () => ({
        url: "/api/user",
      }),
    }),
    createPost: builder.mutation({
      query: (body) => ({
        url: "/api/post",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Posts"],
    }),
  }),
});

export const { useGetPostsQuery, useGetAuthorsQuery, useCreatePostMutation } =
  apiSlice;

export default apiSlice;

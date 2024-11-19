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
    }),
  }),
});

export const { useGetPostsQuery } = apiSlice;

export default apiSlice;

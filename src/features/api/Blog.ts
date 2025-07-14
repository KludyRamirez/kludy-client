import { createApi } from "@reduxjs/toolkit/query/react";
import { BaseQueryWithReAuth } from "./ReAuth";
import { Blog as BlogType } from "../../types/Blog";

export const Blog = createApi({
  reducerPath: "Blog",
  baseQuery: BaseQueryWithReAuth,
  tagTypes: ["Blog"],

  endpoints: (builder) => ({
    createBlog: builder.mutation<BlogType, Partial<BlogType>>({
      query: (newBlog) => ({
        url: "blog",
        method: "POST",
        body: newBlog,
      }),
      invalidatesTags: ["Blog"],
    }),

    getBlogs: builder.query<BlogType[], void>({
      query: () => "blog",
      providesTags: ["Blog"],
    }),

    getBlogById: builder.query<BlogType, string>({
      query: (id) => `blog/${id}`,
      providesTags: (_result, _error, id) => [{ type: "Blog", id }],
    }),

    updateBlog: builder.mutation<
      BlogType,
      { id: string; data: Partial<BlogType> }
    >({
      query: ({ id, data }) => ({
        url: `blog/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: (_result, _error, { id }) => [{ type: "Blog", id }],
    }),

    deleteBlog: builder.mutation<void, string>({
      query: (id) => ({
        url: `blog/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (_result, _error, id) => [{ type: "Blog", id }],
    }),
  }),
});

export const {
  useCreateBlogMutation,
  useGetBlogsQuery,
  useGetBlogByIdQuery,
  useUpdateBlogMutation,
  useDeleteBlogMutation,
} = Blog;

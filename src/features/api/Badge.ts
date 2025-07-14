import { createApi } from "@reduxjs/toolkit/query/react";
import { BaseQueryWithReAuth } from "./ReAuth";
import { Badge as BadgeType } from "../../types/Badge";

export const Badge = createApi({
  reducerPath: "Badge",
  baseQuery: BaseQueryWithReAuth,
  tagTypes: ["Badge"],
  endpoints: (builder) => ({
    createBadge: builder.mutation<BadgeType, Partial<BadgeType>>({
      query: (newBadge) => ({
        url: "badge",
        method: "POST",
        body: newBadge,
      }),
      invalidatesTags: ["Badge"],
    }),

    getBadges: builder.query<BadgeType[], void>({
      query: () => "badge",
      providesTags: ["Badge"],
    }),

    getBadgeById: builder.query<BadgeType, string>({
      query: (id) => `badge/${id}`,
      providesTags: (_result, _error, id) => [{ type: "Badge", id }],
    }),

    updateBadge: builder.mutation<
      BadgeType,
      { id: string; data: Partial<BadgeType> }
    >({
      query: ({ id, data }) => ({
        url: `badge/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: (_result, _error, { id }) => [{ type: "Badge", id }],
    }),

    deleteBadge: builder.mutation<void, string>({
      query: (id) => ({
        url: `badge/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (_result, _error, id) => [{ type: "Badge", id }],
    }),
  }),
});

export const {
  useCreateBadgeMutation,
  useGetBadgesQuery,
  useGetBadgeByIdQuery,
  useUpdateBadgeMutation,
  useDeleteBadgeMutation,
} = Badge;

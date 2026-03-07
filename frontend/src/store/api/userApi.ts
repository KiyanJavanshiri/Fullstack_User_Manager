import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URL } from "@/config/api";
import type { TUser, TApiResponse } from "@/utils/types";

export const userApi = createApi({
  reducerPath: "user",
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_URL}/api/users`,
  }),
  tagTypes: ["CREATE", "DELETE"],
  endpoints: (builder) => ({
    getUsers: builder.query<TUser[], void>({
      query: () => "/",
      transformResponse: (resp: TApiResponse<TUser[]>) => {
        return resp.data;
      },
      providesTags: ["CREATE", "DELETE"],
    }),
    getUser: builder.query<TUser, { id: string }>({
      query: ({ id }) => `/${id}`,
      transformResponse: (resp: TApiResponse<TUser>) => {
        return resp.data;
      },
    }),
    createUser: builder.mutation<
      boolean,
      Omit<TUser, "createdAt" | "updatedAt" | "_id">
    >({
      query: (body) => ({
        url: "/",
        method: "POST",
        body,
      }),
      transformResponse: (resp: TApiResponse<TUser>) => {
        return resp.success;
      },
      invalidatesTags: ["CREATE"],
    }),
  }),
});

export const { useGetUsersQuery, useCreateUserMutation } = userApi;

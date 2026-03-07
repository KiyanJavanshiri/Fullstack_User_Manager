import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URL } from "@/config/api";
import type { TUser, TApiResponse } from "@/utils/types";

export const userApi = createApi({
  reducerPath: "user",
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_URL}/api/users`,
  }),
  tagTypes: ["CREATE", "DELETE", "UPDATE"],
  endpoints: (builder) => ({
    getUsers: builder.query<TUser[], void>({
      query: () => "/",
      transformResponse: (resp: TApiResponse<TUser[]>) => {
        return resp.data;
      },
      providesTags: ["CREATE", "DELETE", "UPDATE"],
    }),
    getUser: builder.query<TUser, string>({
      query: (id) => `/${id}`,
      transformResponse: (resp: TApiResponse<TUser>) => {
        return resp.data;
      },
      providesTags: ["UPDATE"]
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
    deleteUser: builder.mutation<boolean, string>({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
      transformResponse: (resp: TApiResponse<TUser>) => {
        return resp.success;
      },
      invalidatesTags: ["DELETE"],
    }),
    updateUser: builder.mutation<
      boolean,
      { id: string; body: Omit<TUser, "createdAt" | "updatedAt" | "_id"> }
    >({
      query: ({ id, body }) => ({
        url: `/${id}`,
        method: "PATCH",
        body,
      }),
      transformResponse: (resp: TApiResponse<TUser>) => {
        return resp.success;
      },
      invalidatesTags: ["UPDATE"],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useCreateUserMutation,
  useDeleteUserMutation,
  useUpdateUserMutation,
  useGetUserQuery
} = userApi;

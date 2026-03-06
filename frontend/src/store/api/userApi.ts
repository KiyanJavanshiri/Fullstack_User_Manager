import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URL } from "@/config/api";
import type { TUser, TApiResponse } from "@/utils/types";

export const userApi = createApi({
  reducerPath: "user",
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_URL}/api/users`,
  }),
  endpoints: (builder) => ({
    getUsers: builder.query<TUser[], void>({
      query: () => "/",
      transformResponse: (resp: TApiResponse<TUser[]>) => {
        return resp.data;
      },
    }),
    getUser: builder.query<TUser, { id: string }>({
      query: ({ id }) => `/${id}`,
      transformResponse: (resp: TApiResponse<TUser>) => {
        return resp.data;
      },
    }),
  }),
});

export const { useGetUsersQuery } = userApi;

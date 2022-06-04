import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://react-rtk-demo.firebaseio.com/films.json",
  }),
  tagTypes: ["Film"],
  endpoints: (builder) => ({}),
});

import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

export const mainApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3002/" }),
  endpoints: () => ({}),
});

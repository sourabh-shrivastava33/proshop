import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../constants";
const baseQuery = { baseUrl: BASE_URL };

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery(baseQuery),
  tagTypes: ["Product", "Order", "User"],
  endpoints: (builder) => ({}),
});

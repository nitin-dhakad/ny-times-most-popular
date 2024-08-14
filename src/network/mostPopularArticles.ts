import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import ENV from "../env.json";
import API from "./apis";
import { ArticleResponse } from "./mostPopularArticles.type";
import { updateURLParams } from "../helpers";

export const articleApi = createApi({
  reducerPath: "articleApi",
  baseQuery: fetchBaseQuery({ baseUrl: ENV.BaseUrl, timeout: ENV.APITimeout }),
  endpoints: (builder) => ({
    getArticleByDays: builder.query<ArticleResponse, string>({
      query: (day) =>
        updateURLParams(API.GET_ARTICLES, day) +
        "?api-key=" +
        ENV.NYTimesAPIKey,
    }),
  }),
});

export const { useGetArticleByDaysQuery } = articleApi;

export const setUpCreateAPi = (baseQuery: any) => {
  return createApi({
    reducerPath: "articleApi",
    baseQuery: baseQuery(),
    endpoints: (builder) => ({
      getArticleByDays: builder.query<ArticleResponse, string>({
        query: (day) =>
          updateURLParams(API.GET_ARTICLES, day) +
          "?api-key=" +
          ENV.NYTimesAPIKey,
      }),
    }),
  });
};

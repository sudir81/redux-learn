import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { request, gql, ClientError } from "graphql-request";
import { createSelector, createEntityAdapter } from "@reduxjs/toolkit";
import { graphqlRequestBaseQuery } from "@rtk-query/graphql-request-base-query";

const graphqlBaseQuery =
  ({ baseUrl }) =>
  async ({ body }) => {
    try {
      const result = await request(baseUrl, body);
      return { data: result };
    } catch (error) {
      if (error instanceof ClientError) {
        return { error: { status: error.response.status, data: error } };
      }
      return { error: { status: 500, data: error } };
    }
  };
const FilmsAdapter = createEntityAdapter();

const initialState = FilmsAdapter.getInitialState();

export const filmsSlice = createApi({
  reducerPath: "films",
  baseQuery: graphqlBaseQuery({
    baseUrl: "https://swapi-graphql.netlify.app/.netlify/functions/index",
  }),
  endpoints: (builder) => ({
    getFilms: builder.query({
      query: () => ({
        body: gql`
          query {
            allFilms {
              totalCount
              films {
                created
                id
                director
                title
              }
            }
          }
        `,
      }),
    }),
    getFilmById: builder.query({
      query: (filmId) => ({
        body: gql`
          query {
            film(id: ${filmId}) {
              id
              title
              created
              director
              releaseDate
              episodeID
              openingCrawl
              producers
            }
          }
        `,
      }),
    }),
  }),
});

export const { useGetFilmsQuery, useGetFilmByIdQuery } = filmsSlice;

export const selectFilmsResult = filmsSlice.endpoints.getFilms.select();

const selectFilmsData = createSelector(
  selectFilmsResult,
  (filmsResult) => filmsResult.data // normalized state object with ids & entities
);

export const {
  selectAll: selectAllFilms,
  selectById: selectFilmById,
  selectIds: selectFilmIds,
} = FilmsAdapter.getSelectors(
  (state) => selectFilmsData(state) ?? initialState
);

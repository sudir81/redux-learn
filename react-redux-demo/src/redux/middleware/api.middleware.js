import { GET_ALL_FILMS, GET_FILM_BY_ID } from "../../graphql/query";
import { apiSuccess, apiFailure } from "../actions/api";
import { API_REQUEST, FETCH_FILMS, FETCH_FILM } from "../constants";

const queryActionMap = new Map();
queryActionMap.set(FETCH_FILMS, GET_ALL_FILMS);
queryActionMap.set(FETCH_FILM, GET_FILM_BY_ID);

export const apiMiddleware =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    next(action);

    if (action.type.includes(API_REQUEST)) {
      const { feature, variables } = action.meta;
      const queryAction = action.payload;
      let query = queryActionMap.get(queryAction);

      if (!query)
        apiFailure({
          error: `Failed to fetch query for action [${queryAction}]`,
          feature,
          queryAction,
        });

      fetch("https://swapi-graphql.netlify.app/.netlify/functions/index", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          query,
          variables,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          dispatch(apiSuccess({ data, feature }));
        })
        .catch((error) => {
          dispatch(apiFailure({ error: error.message, feature }));
        });
    }
  };

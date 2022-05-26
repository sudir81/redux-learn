import { SET_FILM, SET_FILMS } from "../constants";

const initState = {
  allFilms: {
    totalCount: null,
    films: [],
  },
};

export const filmsReducer = (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_FILMS:
      return payload;
    case SET_FILM:
      const index = state.films.findIndex((f) => f.id === payload.id);
      const newArray = [...state.films];
      newArray[index] = payload;
      return {
        ...state,
        films: newArray,
      };
    default:
      return state;
  }
};

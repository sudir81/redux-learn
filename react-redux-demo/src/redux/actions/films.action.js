import {
  FILM,
  FILMS,
  FETCH_FILMS,
  SET_FILMS,
  FETCH_FILM,
  SET_FILM,
} from "../constants";

export const fetchFilms = () => {
  return {
    type: FETCH_FILMS,
    meta: { feature: FILMS },
  };
};

export const setFilms = (films) => {
  return {
    type: SET_FILMS,
    payload: films,
    meta: { feature: FILMS },
  };
};

export const fetchFilmById = (id) => {
  return {
    type: FETCH_FILM,
    payload: id,
    meta: { feature: FILM },
  };
};

export const setFilm = (film) => {
  return {
    type: SET_FILM,
    payload: film,
    meta: { feature: FILM },
  };
};

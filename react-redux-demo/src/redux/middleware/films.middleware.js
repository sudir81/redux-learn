import {
  FILMS,
  FETCH_FILMS,
  FETCH_FILM,
  FILM,
  API_SUCCESS,
  API_FAILURE,
} from "../constants";
import { apiRequest } from "../actions/api";
import { setFilms, setFilm } from "../actions/films.action";

export const filmsMiddleware = () => (next) => (action) => {
  next(action);
  const { type, payload } = action;

  switch (type) {
    case FETCH_FILMS:
      next(
        apiRequest({
          payload: FETCH_FILMS,
          feature: FILMS,
        })
      );
      break;
    case FETCH_FILM:
      next(
        apiRequest({
          payload: FETCH_FILM,
          variables: action.payload,
          feature: FILM,
        })
      );
      break;
    case `${FILMS}/${API_SUCCESS}`:
      const {
        data: { allFilms },
      } = payload;
      next(setFilms(allFilms));
      break;
    case `${FILMS}/${API_FAILURE}`:
      next(setFilms({}));
      break;
    case `${FILM}/${API_SUCCESS}`:
      const {
        data: { film },
      } = payload;
      next(setFilm(film));
      break;
    case `${FILM}/${API_FAILURE}`:
      console.log(type, JSON.stringify(payload));
      break;
    default:
      break;
  }
};

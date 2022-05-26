import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { apiMiddleware } from "./middleware/api.middleware";
import { filmsMiddleware } from "./middleware/films.middleware";
import { createLogger } from "redux-logger";

import rootReducer from "./reducers";

const logger = createLogger();
const featureMiddlewares = [filmsMiddleware];

const coreMiddleware = [apiMiddleware];

export const middlewares = [...featureMiddlewares, ...coreMiddleware];

export const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(...middlewares, logger))
);

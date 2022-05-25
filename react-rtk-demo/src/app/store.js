import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from "./features/cake/cakeSlice";
import icecreamReducer from "./features/icecream/icecreamSlice";
import userReducer from "./features/user/userSlice";

const reduxLogger = require("redux-logger");

const logger = reduxLogger.createLogger();

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    iceCream: icecreamReducer,
    user: userReducer,
  },
  // middleware: [logger],
});

export default store;

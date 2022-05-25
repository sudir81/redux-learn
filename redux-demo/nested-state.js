const redux = require("redux");
const produce = require("immer").produce;
const reduxLogger = require("redux-logger");

const createStore = redux.createStore;
const bindActionCreators = redux.bindActionCreators;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger();

const initialState = {
  name: "sudheer",
  address: {
    street: "24 McChurch St",
    city: "Baltimore",
    state: "MD",
  },
};

const STREET_UPDATE = "STREET_UPDATE";
const streetUpdate = (street) => {
  return {
    type: STREET_UPDATE,
    payload: street,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case STREET_UPDATE:
      //   return {
      //     ...state,
      //     address: {
      //       ...state.address,
      //       street: action.payload,
      //     },
      //   };
      return produce(state, (draft) => {
        draft.address.street = action.payload;
      });
    default:
      return state;
  }
};

const store = createStore(reducer, applyMiddleware(logger));
console.log("initial store", store.getState());
const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

const actions = bindActionCreators({ streetUpdate }, store.dispatch);
actions.streetUpdate("24 Mc Church Ct");

unsubscribe();

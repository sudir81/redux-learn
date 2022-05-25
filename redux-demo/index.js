const redux = require("redux");
const createStore = redux.createStore;
const bindActionCreators = redux.bindActionCreators;

const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCKED = "CAKE_RESTOCKED";

const orderCake = (quantity) => ({
  type: CAKE_ORDERED,
  payload: quantity,
});

const restockCake = (quantity) => ({
  type: CAKE_RESTOCKED,
  payload: quantity,
});

const initState = {
  numOfCakes: 10,
};

const cakeReducer = (state = initState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        numOfCakes: state.numOfCakes - action.payload,
      };
    case CAKE_RESTOCKED:
      return {
        ...state,
        numOfCakes: state.numOfCakes + action.payload,
      };
    default:
      return state;
  }
};

const store = createStore(cakeReducer);
console.log("initial store", store.getState());

const unsubscribe = store.subscribe(() =>
  console.log("updated store", store.getState())
);
// store.dispatch(orderCake(1));
// store.dispatch(orderCake(1));
// store.dispatch(orderCake(1));

// store.dispatch(restockCake(5));
const actions = bindActionCreators({ orderCake, restockCake }, store.dispatch);
actions.orderCake(1);
actions.orderCake(1);
actions.restockCake(5);
unsubscribe();

const redux = require("redux");
const createStore = redux.createStore;
const bindActionCreators = redux.bindActionCreators;

const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCKED = "CAKE_RESTOCKED";

const ICECREAM_ORDERED = "ICECREAM_ORDERED";
const ICECREAM_RESTOCKED = "ICECREAM_RESTOCKED";

const orderCake = (quantity) => ({
  type: CAKE_ORDERED,
  payload: quantity,
});

const restockCake = (quantity) => ({
  type: CAKE_RESTOCKED,
  payload: quantity,
});

const orderIceCream = (quantity) => ({
  type: ICECREAM_ORDERED,
  payload: quantity,
});

const restockIceCream = (quantity) => ({
  type: ICECREAM_RESTOCKED,
  payload: quantity,
});

const initState = {
  numOfCakes: 10,
  iceCreams: 10,
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
    case ICECREAM_ORDERED:
      return {
        ...state,
        iceCreams: state.iceCreams - action.payload,
      };
    case ICECREAM_RESTOCKED:
      return {
        ...state,
        iceCreams: state.iceCreams + action.payload,
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
const actions = bindActionCreators(
  { orderCake, restockCake, orderIceCream, restockIceCream },
  store.dispatch
);
actions.orderCake(1);
actions.orderCake(1);
actions.restockCake(5);

actions.orderIceCream(3);
actions.restockIceCream(2);
unsubscribe();

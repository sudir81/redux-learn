const store = require("./app/store");
const cakeActions = require("./features/cake/cakeSlice").cakeActions;
const icecreamActions =
  require("./features/icecream/icecreamSlice").iceCreamActions;

console.log("Init state:", store.getState());
const unsubscribe = store.subscribe(() => {
  console.log("Updated state:", store.getState());
});

store.dispatch(cakeActions.ordered(1));
store.dispatch(cakeActions.ordered(2));
store.dispatch(cakeActions.restocked(5));

store.dispatch(icecreamActions.ordered(3));
store.dispatch(icecreamActions.restocked(2));
unsubscribe();

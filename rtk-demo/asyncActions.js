const store = require("./app/store");
const fetchUsers = require("./features/user/userSlice").fetchUsers;

console.log("Init state:", store.getState());
const unsubscribe = store.subscribe(() => {
  console.log("Updated state:", store.getState());
});

store.dispatch(fetchUsers());

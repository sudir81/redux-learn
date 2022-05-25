const createSlice = require("@reduxjs/toolkit").createSlice;
const cakeActions = require("../cake/cakeSlice").cakeActions;

const icecreamSlice = createSlice({
  name: "icecream",
  initialState: {
    numOfIceCreams: 10,
  },
  reducers: {
    ordered: (state, action) => {
      state.numOfIceCreams -= action.payload;
    },
    restocked: (state, action) => {
      state.numOfIceCreams += action.payload;
    },
  },
  //   extraReducers: {
  //     ["cake/ordered"]: (state) => {
  //       state.numOfIceCreams -= 1;
  //     },
  //   },
  extraReducers: (builder) => {
    builder.addCase(cakeActions.ordered, (state) => {
      state.numOfIceCreams -= 1;
    });
  },
});

module.exports = icecreamSlice.reducer;
module.exports.iceCreamActions = icecreamSlice.actions;

import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchFilms = createAsyncThunk("films", async (thunkAPI) => {
  const response = await fetch(
    "https://react-rtk-demo.firebaseio.com/films.json"
  );
  return response;
});

export default fetchFilms;

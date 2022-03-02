import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  uptMovies: [],
};
export const fetchuptMovies = createAsyncThunk(
  "uptMovies/fetchuptMovies",
  async (id) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=512527e45f78c9fe542face1e16e9ad9&page=1`
      );
      
    //console.log(res.data.results);
    return res.data.results
  }
);

const topMovieSlice = createSlice({
  name: "uptMovies",
  initialState,
  extraReducers: {
    [fetchuptMovies.pending]: () => {
      //console.log("pendding");
    },
    [fetchuptMovies.fulfilled]: (state, { payload }) => {
      //console.log("fulfilled");
      return { ...state, uptMovies: payload };
    },
    [fetchuptMovies.rejected]: () => {
      //console.log("rejected");
    },
  },
});

export default topMovieSlice.reducer;

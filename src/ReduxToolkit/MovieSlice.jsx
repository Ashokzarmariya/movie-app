import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  movies: [],
};

export const fetchAsyncMovies = createAsyncThunk(
    "movies/fetchAsyncMovies",
    async (genre,count) => {
      
      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=512527e45f78c9fe542face1e16e9ad9&with_genres=${genre}&page=${count}`
      );
      return response.data.results;
    }
  );

export const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
      getMovies: (store, { payload }) => {
          store.movies = payload
          
      }
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: () => {
 
    },
      [fetchAsyncMovies.fulfilled]: (store, { payload }) => {
        
      return {...store, movies:payload}
      },
      [fetchAsyncMovies.rejected]: () => {
          console.log("request rejected")
      }
  },
});

export const { getMovies } = movieSlice.actions;
export default movieSlice.reducer;

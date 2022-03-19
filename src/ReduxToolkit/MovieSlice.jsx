import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  movies: [],
  loading: true,
};

//console.log(store);
export const fetchAsyncMovies = createAsyncThunk(
  
    "movies/fetchAsyncMovies",
    async (genre) => {
      //const store = useSelector((store) => store)
      //console.log("store",store)
      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=512527e45f78c9fe542face1e16e9ad9&with_genres=${genre.genre}&page=${genre.count}`
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
    [fetchAsyncMovies.pending]: (store) => {
 return {...store, loading:true}
    },
      [fetchAsyncMovies.fulfilled]: (store, { payload }) => {
        
      return {...store, movies:payload, loading:false}
      },
      [fetchAsyncMovies.rejected]: () => {
          console.log("request rejected")
      }
  },
});

export const { getMovies } = movieSlice.actions;
export default movieSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    trendingMovies:[],
}
export const fetchTrendingMovies = createAsyncThunk(
    "trendingMovies/fetchTrendingMovies",
    async () => {
        const res = await axios.get(
            `https://api.themoviedb.org/3/trending/all/day?api_key=512527e45f78c9fe542face1e16e9ad9`
        );
        console.log(res.data.results)
        return res.data.results
    }
)
const trendingSlice = createSlice({
    name: "trendingMovies",
    initialState,
    extraReducers: {
        [fetchTrendingMovies.pending]: () => {
            console.log("trending movies pending")
        },
        [fetchTrendingMovies.fulfilled]: (state, {payload}) => {
            return {...state, trendingMovies:payload}
        },
        [fetchTrendingMovies.rejected]: () => {
            console.log("trending movie rejected")
        }
    }
})

export default trendingSlice.reducer
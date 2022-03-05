import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    movieDetail: {},
    movieVideo: {},
    loding:true,
}

export const fetchSingleMovie = createAsyncThunk(
    "movieDetail/fetchSingleMovie",
    async (id) => {
        const res = await axios.get(
            `https://api.themoviedb.org/3/movie/${id}?api_key=512527e45f78c9fe542face1e16e9ad9`);
        //console.log("id",id)
        console.log("movie details",res.data)
        return res.data;
    }
)

export const fetchMovieVideo = createAsyncThunk(
    "movieDetail/fetchMovieVideo",
    async (id) => {
        const res = await axios.get(
            `https://api.themoviedb.org/3/movie/${id}/videos?api_key=512527e45f78c9fe542face1e16e9ad9`);
        //console.log("id",id)
        console.log("video",res.data.results)
        return res.data.results;
    }
)

const movieDetailSlice = createSlice({
    name: "movieDetail",
    initialState,
    extraReducers: {
        [fetchSingleMovie.pending]: () => {
            //console.log("single move pending")
        },
        [fetchSingleMovie.fulfilled]: (state, { payload }) => {
            //console.log("single Movie fullfiled")
            return { ...state, movieDetail: payload, loding:false }
        },
        [fetchSingleMovie.rejected]: () => {
            //console.log("single movie rejected")
        },

        [fetchMovieVideo.pending]: () => {
            //console.log("movie video details")
        },
        [fetchMovieVideo.fulfilled]: (state,{payload}) => {
            //console.log("movie video fullfilled")
            return {...state, movieVideo:payload}
        }
    }
});

export default movieDetailSlice.reducer;
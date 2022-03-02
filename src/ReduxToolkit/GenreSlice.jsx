import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchGenre = createAsyncThunk ("genre/fetchGenre",
    async () => {
        const res = await axios.get("https://api.themoviedb.org/3/genre/movie/list?api_key=512527e45f78c9fe542face1e16e9ad9");
        return res.data.genres
    }
)

const initialState = {
    genre: [],
}
const genreSlice = createSlice({
    name: "genre",
    initialState,
    extraReducers: {
        [fetchGenre.pending]: () => {
            console.log("pending")
        },
        [fetchGenre.fulfilled]: (state, { payload }) => {
            console.log("genre fulfilled")
            return { ...state, genre: payload }
        }
    }
});

export default genreSlice.reducer;
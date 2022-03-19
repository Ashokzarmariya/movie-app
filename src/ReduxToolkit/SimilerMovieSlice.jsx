

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    similerMovie: {},
    loading:true
}

export const fetchSimilerMovie = createAsyncThunk("similerMovie/fetchSimilerMovie",
    async (movie_id) => {
        const res = await axios.get(`https://api.themoviedb.org/3/movie/${movie_id}/similar?api_key=512527e45f78c9fe542face1e16e9ad9&page=1`)
        
        //console.log("similar movie", res.data);

        return res.data
    }
)



const similerMovieSlice = createSlice({
    name: "similerMovie",
    initialState,
    extraReducers: {
        [fetchSimilerMovie.pending]: () => {
            console.log("pendding")
        },
        [fetchSimilerMovie.fulfilled]: (state, { payload }) => {
            return { ...state, similerMovie: payload, loading:false }
        },
        [fetchSimilerMovie.rejected]: (state) => {
            console.log("similer movie fetching rejected")
            return {...state, loading:true}
            
        }

    }

});

export default similerMovieSlice.reducer;
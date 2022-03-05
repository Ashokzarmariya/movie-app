import { configureStore } from '@reduxjs/toolkit'
import movieReducer from "./MovieSlice"
import genreReducer from './GenreSlice'
import topMovieReducer from './TopMovieSlice'
import trendingReducer from './TrendingSlice'
import MovieDetailSlice from './MovieDetailSlice'

export const store = configureStore({
    reducer: {
        movie: movieReducer,
        genre: genreReducer,
        TopMovies: topMovieReducer,
        Trending: trendingReducer,
        singleMove:MovieDetailSlice,
    },
})
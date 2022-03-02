import { combineReducers, createStore } from "redux";
import { populerReducer } from "../Populer/Reducer";
import { TrendingMovieReducer } from "../Trending/Reducer";

const rootReducer = combineReducers({
    trendingMovie: TrendingMovieReducer,
    populerMovie: populerReducer,
    
})

export const store=createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
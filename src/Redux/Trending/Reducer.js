import { GET_TRENDING_MOVIE } from "./ActionType";



export const TrendingMovieReducer = (
  store = {data:[],loading:true},
  { type, payload }
) => {
  switch (type) {
    case GET_TRENDING_MOVIE:
      return {
        ...store, 
        data: payload,
        loading: false,
      };

    default:
      return {
        ...store,
      };
  }
};

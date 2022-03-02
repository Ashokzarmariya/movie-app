import { GET_TRENDING_MOVIE } from "./ActionType";

export const getTrendingMovie = (payload) => ({
  type: GET_TRENDING_MOVIE,
  payload,
});

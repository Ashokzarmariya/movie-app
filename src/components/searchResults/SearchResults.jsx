import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import Pagination from "../Pagination/PaginationCard";
import { fetchSearch } from "../../ReduxToolkit/SearchSlice";
import MovieCard from "../MovieCard";

const SearchResults = () => {
  const dispatch = useDispatch();
  const { moviename } = useParams();
  const keyword = moviename || [];
  const searchData = useSelector((store) => store.searchResults.search_results);
  const page = 1;
  console.log("searchData", searchData);

  useEffect(() => {
    dispatch(fetchSearch(keyword));
  }, []);
  return (
    <div>
      <div className="flex flex-wrap justify-center ">
        {searchData.map((item) => {
          return (
            <MovieCard
              id={item.id}
              key={item.id}
              imgUrl={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
            />
          );
        })}
      </div>
      <Pagination
        
        prevPage={() => {
          page(-1);
        }}
        nextPage={() => {
          page(1);
        }}
      />
    </div>
  );
};

export default SearchResults;

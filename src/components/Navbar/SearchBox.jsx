import React, { useState } from "react";
//import DataListInput from "react-datalist-input";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { fetchSearch } from "../../ReduxToolkit/SearchSlice";
import "./SearchCss.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const [keyword, setKeyword] = useState();
  const navigate = useNavigate();
   



  const handleOnChange = () => {
    dispatch(fetchSearch(keyword));
    navigate(`/search/${keyword}`)
  };
  return (
    <div>
      <div className="mt-1 relative rounded-md shadow-sm">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"></div>
        <input
          type="text"
          name="search "
          id="price"
          className="bg-gray-800 text-gray-300 font-medium block w-full pl-1 pr-12 sm:text-xl focus:outline-none  rounded-md big-font"
          placeholder="Search Movie"
          list="data"
          onChange={(e) => {
            setKeyword(e.target.value);
            
          }}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              handleOnChange();
              e.target.value=""
              
            }
          }}
        />

        <hr className="bg-white"></hr>
        
      </div>
     
    </div>
  );
};

export default SearchBox;

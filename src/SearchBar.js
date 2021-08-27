import React, { useState } from "react";
import axios from "axios";
import ResultFor from "./ResultFor";
import "./App.css";
import searchIcon from "./search-solid.svg";

// import { getByTitle } from "@testing-library/react";

// TODO:
// when I fail to search movie getByTitle, handle ERROR!

function SearchBar() {
  const [inputs, setInputs] = useState({
    text: "",
    movies: [],
    find: true,
    nominees: [],
  });

  const { text, movies, find, nominees } = inputs;

  const onChange = (e) => {
    setInputs({
      ...inputs,
      text: e.target.value,
    });
  };

  const API_KEY = "https://www.omdbapi.com/?apikey=9cbee72";

  const fetchMovies = async () => {
    const {
      data: { Search },
    } = await axios.get(`${API_KEY}&&s=${text}`);

    // 검색어를 통해서 불러오는데 시간이 걸려서 movies가 처음에 빈
    // 배열로 나오는게 문제점.
    console.log("=========");
    console.log(Search);
    console.log("=========");
    if (Search === undefined) {
      console.log("ERROR undefined");
      setInputs({
        ...inputs,
        find: false,
      });
    } else {
      setInputs({
        ...inputs,
        movies: Search,
        find: true,
      });
      console.log(movies);
    }
  };

  return (
    <div>
      {/* <Banner /> 여기 배너 들어가야 함 */}
      <h1>Movie_app_02</h1>
      <div>
        <h3>Movie title</h3>
        <input
          style={{ width: "300px" }}
          onChange={onChange}
          value={text}
          placeholder="Enter a title to search"
        />
        <button onClick={fetchMovies}>submit</button>
      </div>
      {/* {find ? (
        <ResultFor api={API_KEY} movies={movies} />
      ) : (
        <h2>We can not find any movie with the title</h2>
      )} */}
      {/* 위처럼 하면 영화를 못 찾았을 때 노미네이션 부분도 같이 사라짐 */}
      <ResultFor api={API_KEY} movies={movies} />
    </div>
  );
}

export default SearchBar;

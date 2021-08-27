import React, { useState } from "react";
import axios from "axios";
import ResultFor from "./ResultFor";
import "./App.css";
// import { getByTitle } from "@testing-library/react";

// TODO:
// when I fail to search movie getByTitle, handle ERROR!

function SearchBar() {
  const [inputs, setInputs] = useState({
    text: "",
    movies: [],
    isLoading: true,
    nominees: [],
  });

  const { text, movies, isLoading, nominees } = inputs;

  const onChange = (e) => {
    setInputs({
      ...inputs,
      text: e.target.value,
    });
  };

  const API_KEY = "http://www.omdbapi.com/?apikey=9cbee72";

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
    } else {
      setInputs({
        ...inputs,
        movies: Search,
        isLoading: false,
      });
      console.log(movies);
    }
  };

  return (
    <div>
      <h1>The Shoppies</h1>
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

      <ResultFor api={API_KEY} movies={movies} />

      <div id="nomination">
        <ul>
          {nominees.map((nomi) => (
            <li>
              nomi
              <button>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SearchBar;

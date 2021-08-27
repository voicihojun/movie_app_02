import axios from "axios";
import React, { useState } from "react";
import SearchBar from "./SearchBar";
import Nominations from "./Nominations";

function ResultFor({ api, movies, onNomination }) {
  return (
    <div id="resultFor">
      <ul>
        {movies.map((movie) => (
          <li key={movie.imdbID}>
            <span className="hidden">{movie.imdbID}</span>
            {movie.Title} ({movie.Year})
            <button onClick={onNomination}>Nominate</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ResultFor;

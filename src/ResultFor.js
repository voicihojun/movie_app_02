import React from "react";

function ResultFor({ api, movies, onNomination }) {
  if (movies.length) {
    return (
      <div className="resultFor">
        <ul>
          {movies.map((movie) => (
            <li key={movie.imdbID}>
              <span className="hidden">{movie.imdbID}</span>
              <span className="li">
                {movie.Title} ({movie.Year})
              </span>
              <button onClick={onNomination}>Nominate</button>
            </li>
          ))}
        </ul>
      </div>
    );
  } else {
    return <div></div>;
  }
}

export default ResultFor;

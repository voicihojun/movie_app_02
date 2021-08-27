import React from "react";

function Movie({ id, year, title, poster }) {
  return (
    <div>
      <img src={poster} alt={title} title={title} />
      <div className="movie__data">
        <h3 className="movie__title">{title}</h3>
        <h5 className="movie__year">{year}</h5>
      </div>
    </div>
  );
}

export default Movie;

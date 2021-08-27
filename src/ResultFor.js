import axios from "axios";
import React, { useState } from "react";
import SearchBar from "./SearchBar";
import Nominations from "./Nominations";

function ResultFor({ api, movies }) {
  const [nominees, setNominees] = useState([]);

  const onNomination = async (e) => {
    const imdbID = e.target.parentElement.firstChild.innerText;
    const API = `${api}&i=${imdbID}`;
    const info = await axios.get(API);

    const id = info.data.imdbID;
    const year = info.data.Year;
    const title = info.data.Title;

    const nominee = {
      id: id,
      year: year,
      title: title,
    };
    // console.log(nominees.filter((id) => id));
    // console.log(nominee.id);

    function Duplicate(nominees) {
      for (let i = 0; i < nominees.length; i++) {
        if (nominees[i]["id"] === nominee["id"]) {
          return true;
        }
      }
      return false;
    }

    if (nominees.length < 5) {
      if (Duplicate(nominees)) {
        console.log(Duplicate(nominees));
        console.log("duplicate!!");
      } else {
        setNominees([...nominees, nominee]);
        // setNominees(nominees.concat(nominee));
        console.log(nominees);
      }
    } else {
      console.log("BANNER!!");
      console.log(nominees);
    }
  };

  return (
    <div id="container">
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
      <Nominations nominees={nominees} setNominees={setNominees} />
    </div>
  );
}

export default ResultFor;

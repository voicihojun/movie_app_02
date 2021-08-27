import React, { useState } from "react";
import axios from "axios";
import ResultFor from "./ResultFor";
import "./App.css";
import Banner from "./Banner";
import Nominations from "./Nominations";

function SearchBar() {
  const [inputs, setInputs] = useState({
    text: "",
    movies: [],
    find: true,
  });
  const [nominees, setNominees] = useState([]);
  const [banner, setBanner] = useState(false);

  const { text, movies, find } = inputs;

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
    if (Search === undefined) {
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
    }
  };

  const onNomination = async (e) => {
    const imdbID = e.target.parentElement.firstChild.innerText;
    const API = `${API_KEY}&i=${imdbID}`;
    const info = await axios.get(API);

    const id = info.data.imdbID;
    const year = info.data.Year;
    const title = info.data.Title;

    const nominee = {
      id: id,
      year: year,
      title: title,
    };

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
      }
    } else {
      setBanner(true);
    }
  };

  return (
    <div>
      {banner && <Banner banner={banner} setBanner={setBanner} />}

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
      <div>
        {find ? (
          <ResultFor
            api={API_KEY}
            movies={movies}
            onNomination={onNomination}
          />
        ) : (
          <h3>We can not find any movie with the offered information</h3>
        )}

        <Nominations nominees={nominees} setNominees={setNominees} />
      </div>
    </div>
  );
}

export default SearchBar;

import SearchBar from "./SearchBar";
import Nominations from "./Nominations";
import ResultFor from "./ResultFor";
import Banner from "./Banner";
import axios from "axios";
import React, { useState, useRef } from "react";

function App() {
  const [inputs, setInputs] = useState({
    text: "",
    movies: [],
    find: true,
  });
  const [nominees, setNominees] = useState([]);
  const [banner, setBanner] = useState(false);
  const { text, movies, find } = inputs;
  const focusInput = useRef();

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
    focusInput.current.focus();
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
      <SearchBar
        focusInput={focusInput}
        text={text}
        onChange={onChange}
        fetchMovies={fetchMovies}
      />
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

export default App;

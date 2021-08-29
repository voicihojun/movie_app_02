import "./App.css";

function SearchBar({ text, focusInput, onChange, fetchMovies }) {
  return (
    <div>
      <h1 className="title">Movie_app_02</h1>
      <div className="search__container">
        <h2>Movie title</h2>
        <input
          onChange={onChange}
          value={text}
          placeholder="Enter a title to search"
          ref={focusInput}
        />
        <button onClick={fetchMovies}>submit</button>
      </div>
    </div>
  );
}

export default SearchBar;

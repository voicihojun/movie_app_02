import "./App.css";

function SearchBar({ text, focusInput, onChange, fetchMovies }) {
  return (
    <div>
      <h1>Movie_app_02</h1>
      <div>
        <h3>Movie title</h3>
        <input
          style={{ width: "300px" }}
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

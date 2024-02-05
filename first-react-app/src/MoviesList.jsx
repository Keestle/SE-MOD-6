import React, { useRef } from "react";
import Movie from "./Movie";

const initialMovies = [
  {
    id: 1,
    title: "The Shawshank Redemption",
    year: 1994,
    synopsis: "Two imprisoned men find redemption.",
  },
  {
    id: 2,
    title: "The Dark Knight",
    year: 2008,
    synopsis: "Batman fights the menace known as the Joker.",
  },
  {
    id: 3,
    title: "Interstellar",
    year: 2014,
    synopsis: "Explorers travel through a wormhole in space.",
  },
];

function MoviesList() {
  const [currentMovies, setCurrentMovies] = React.useState(initialMovies);

  const movieItems = currentMovies.map((movie) => (
    <Movie key={movie.id} title={movie.title} year={movie.year} synopsis={movie.synopsis} />
  ));

  const handleReverseMovies = () => {
    let newMovies = [...currentMovies];
    newMovies.reverse();
    setCurrentMovies(newMovies);
  };

  const handleUpdateMovies = () => {
    let newMovies = currentMovies.map((movie, i) =>
      i === 0 ? { ...movie, title: "New Title" } : movie
    );
    setCurrentMovies(newMovies);
  };

  const addMovieFormRef = useRef(null);

  const handleAddMovie = () => {
    const newMovie = {
      id: currentMovies.length + 1,
      title: addMovieFormRef.current.title.value,
      year: addMovieFormRef.current.year.value,
    };

    setCurrentMovies([...currentMovies, newMovie]);

    // Clear the form fields
    addMovieFormRef.current.title.value = "";
    addMovieFormRef.current.year.value = "";
  };

  return (
    <div className="MoviesList">
      <ul>{movieItems}</ul>
      <button onClick={handleReverseMovies}>Reverse List</button>
      <button onClick={handleUpdateMovies}>Update</button>

      <div className="AddMovieForm componentBox">
        <form onSubmit={(e) => e.preventDefault()}>
          <label>
            Movie Title:
            <input ref={addMovieFormRef} name="title" />
          </label>
          <label>
            Year Released:
            <input ref={addMovieFormRef} name="year" type="number" />
          </label>
          <button onClick={handleAddMovie}>Add Movie</button>
        </form>
      </div>
    </div>
  );
}

export default MoviesList;

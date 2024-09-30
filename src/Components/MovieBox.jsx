import React from "react";

const MovieBox = ({ category, selectMovies, setSelectMovies }) => {
  const handleSelection = (category) => {
    if (selectMovies.includes(category)) {
      setSelectMovies(selectMovies.filter((movie) => movie !== category));
    } else {
      setSelectMovies([...selectMovies, category]);
    }
  };

  const isSelected = selectMovies.includes(category);

  return (
    <div
      className={`movie-box ${isSelected ? "selected" : ""}`}
      onClick={() => handleSelection(category)}
    >
      <h1>{category.movie}</h1>
      <img src={category.img} alt={category.movie} />
    </div>
  );
};

export default MovieBox;


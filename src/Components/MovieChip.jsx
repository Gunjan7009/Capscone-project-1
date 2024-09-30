import React from "react";

const MovieChip = ({ category, setSelectMovies }) => {
  const removeSelection = (category) => {
    setSelectMovies((selectMovies) =>
      selectMovies.filter((movie) => movie !== category)
    );
  };

  return (
    <button>
      {category.movie}{" "}
      <span className="cut" onClick={() => removeSelection(category)}>X</span>
    </button>
  );
};

export default MovieChip;

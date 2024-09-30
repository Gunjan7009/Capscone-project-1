import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MovieBox from "../Components/MovieBox";
import MovieChip from "../Components/MovieChip";
import actionImg from '../assets/Action.png';
import dramaImg from '../assets/Drama.png';
import romanceImg from '../assets/Romance.png';
import thrillerImg from '../assets/Thiller.png';
import horrorImg from '../assets/Horro.png';
import westernImg from '../assets/Western.png';
import fantasyImg from '../assets/Fantasy.png';
import fictionImg from '../assets/Fiction.png';
import musicImg from '../assets/Music.png';

const MOVIES = [
  { id: 0, movie: "Action", img: actionImg },
  { id: 1, movie: "Drama", img: dramaImg },
  { id: 2, movie: "Romance", img: romanceImg },
  { id: 3, movie: "Thriller", img: thrillerImg },
  { id: 4, movie: "Horror", img: horrorImg },
  { id: 5, movie: "Western", img: westernImg },
  { id: 6, movie: "Fantasy", img: fantasyImg },
  { id: 7, movie: "Fiction", img: fictionImg },
  { id: 8, movie: "Music", img: musicImg },
];

const MovieSelection = () => {
  const navigate = useNavigate();
  const [selectMovies, setSelectMovies] = useState([]);

  const moveNext = () => {
    if (selectMovies.length < 3) {
      alert("Please select at least 3 movies");
      return;
    } else {
      localStorage.setItem("selectMovies", JSON.stringify(selectMovies));
      setSelectMovies([]);
      navigate("info");
    }
  };

  return (
    <div className="containerm">
      {/* Left Section */}
      <div className="left-sectionm">
        
        <h1>Choose your entertainment category</h1>

        {/* Selected Movie Chips */}
        <div className="selected-chips">
          {selectMovies.map((category) => (
            <MovieChip
              key={category.id}
              category={category}
              setSelectMovies={setSelectMovies}
            />
          ))}
        </div>

        {/* Error message */}
        {selectMovies.length < 3 && (
          <p className="error-messagem">Minimum 3 categories required</p>
        )}
      </div>

      {/* Right Section */}
      <div className="right-sectionm">
        {MOVIES.map((category) => (
          <MovieBox
            key={category.id}
            selectMovies={selectMovies}
            setSelectMovies={setSelectMovies}
            category={category}
          />
        ))}
        {/* Next Button */}
        <div className="n-button">
          <button className="next"  onClick={moveNext}>
            Next Page
          </button>
        </div>

      </div>
    </div>
  );
};

export default MovieSelection;

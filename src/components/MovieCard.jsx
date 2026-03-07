import React from "react";
import { useState, useEffect } from "react";

const MovieCard = ({ pic, title, rating, release, id }) => {
  const [click, setClick] = useState(false);

  function handleFavorite() {
    const stored = JSON.parse(localStorage.getItem("favorite")) || [];

    const exists = stored.some((movie) => movie.id === id);

    let updatedFavorites;

    if (exists) {
      // remove movie
      updatedFavorites = stored.filter((movie) => movie.id !== id);
      setClick(false);
    } else {
      // add movie
      const newMovie = {
        id,
        pic,
        title,
        rating,
        release,
      };

      updatedFavorites = [...stored, newMovie];
      setClick(true);
    }

    localStorage.setItem("favorite", JSON.stringify(updatedFavorites));
  }

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("favorite")) || [];

    const exists = stored.some((movie) => movie.id === id);

    console.log(exists); // true or false
    setClick(exists);
  }, []);

  return (
    <div className="bg-[#15173D] text-white rounded-lg overflow-hidden w-full">
      <img
        className="w-full aspect-[2/3] object-cover"
        src={
          pic === null
            ? "https://img.freepik.com/premium-vector/movie-night-fun_579077-260.jpg?semt=ais_rp_50_assets&w=740&q=80"
            : `https://image.tmdb.org/t/p/w440_and_h660_face/${pic}`
        }
        alt={title}
      />

      <div className="p-3 flex flex-col gap-1">
        <h1 className="text-sm lg:text-base font-medium line-clamp-2">
          {title}
        </h1>

        <h2 className="text-xs text-gray-300">{release}</h2>

        <div className="flex items-center mt-2 gap-3">
          <div className="size-8 rounded-full text-xs font-medium flex justify-center items-center border-4 border-yellow-500">
            {Number(rating).toFixed(0) * 10}
            <sup>%</sup>
          </div>

          <i
            onClick={() => handleFavorite()}
            className={`fa-${click ? "solid" : "regular"} ${click ? " text-red-500" : ""} cursor-pointer text-xl fa-heart`}></i>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;

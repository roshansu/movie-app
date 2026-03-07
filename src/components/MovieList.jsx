import React, { useRef } from "react";
import MovieCard from "./MovieCard";
import { useState, useEffect } from "react";
import Spinner from "./Spinner";
import api from "../../api";

const MovieList = ({ searchText, mood, setMood }) => {
  const [movieData, setMovieData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const clear = useRef(true);

  console.log("MovieList", searchText);
  async function fetchMovie() {
    setLoading(true);
    let API;
    if (searchText === "") {
      console.log("WIthout search", searchText);
      if (!clear.current) {
        // console.log("clear movie");
        setMovieData([]);
        setPage(1);
        clear.current = true;
      }
      API = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`;
    } else {
      console.log("WIth search", searchText);
      // setClear(true)
      if (clear.current) {
        // console.log("clear movie");
        setMovieData([]);
        setPage(1);
        clear.current = false;
      }
      API = `https://api.themoviedb.org/3/search/movie?query=${searchText}&include_adult=false&language=en-US&page=${page}`;
    }
    const data = await api(API);
    setLoading(false);
    // console.log("waiting");

    // console.log("clear ref", clear, clear.current);

    if(mood){
        setMovieData([]);
        setPage(1);
        setMood(false)
    }
    console.log(data);
    setMovieData((prev) => {
      const newMovies = data.filter(
        (movie) => !prev.some((p) => p.id === movie.id),
      );
      return [...prev, ...newMovies];
    });
  }

  useEffect(() => {
    console.log("executing");
    fetchMovie();
  }, [page, searchText]);

  useEffect(() => {
    if( mood) return
    const element = document.querySelector(".inf-scroll:last-child");
    // console.log("elements", element);
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loading) {
          observer.unobserve(element);
          setPage((prev) => prev + 1);
          // console.log("page no.", page);
        }
      },
      { threshold: 0.5 },
    );

    if (!element) return;

    observer.observe(element);
  }, [movieData]);

  console.log("page no.", page);

  console.log(movieData);
  if ((loading && page === 1))
    return <Spinner />;
  return (
    <div className="mt-26 gap-4 lg:px-10 p-2 items-center grid-cols-2  grid lg:grid-cols-7 ">
      {movieData.map((val) => (
        <div key={val.id} className="inf-scroll">
          <MovieCard
            id={val.id}
            pic={val.backdrop_path}
            title={val.original_title}
            release={val.release_date}
            rating={val.vote_average}
          />
        </div>
      ))}
    </div>
  );
};

export default MovieList;

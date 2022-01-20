import React, { useState, useEffect } from 'react';
import axios from './axios';
import "./Row.css"
import Youtube from "react-youtube"
import movieTrailer from "movie-trailer";

const base_url_img = "https://image.tmdb.org/t/p/original/";

// Destructure prop's title
function Row({ title, fetchUrl, isLargeRow }) {
  // state is like short-term memory
  // state is the way to write vars in React
  // this uses a react hook
  // That empty array is the initial value
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  // A snippet of code which runs based on a specific condition
  // React provides the useEffect hook which
  useEffect(() => {
    // Every time this row loads, this code is runs
    // If we leave the brackets blank, run once when the row loads and don't load again
    // If we pass in movies to [], it runs once when the row loads and every time movies changes
    // Any vars from outside that're included in useEffect HAVE TO BE included in [] bc of dependency. fetchUrl in this case
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      // console.log(request);
      setMovies(request.data.results);
      // We're interested in request.data.results
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  // react-youtube options
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if(trailerUrl) {
      setTrailerUrl('');
    } else {
      movieTrailer(movie?.name || "")
        .then((url) => {
          console.log(url)
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get('v'));
        }).catch(error => console.log(error));

    }
  }


  //console.log(movies);

  // (the h2) Woah! Now the actual titles appear
  // Comments in return get displayed
  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row_posters">
        {movies.map(movie => (
          <img
            key = {movie.id}
            onClick = {() => handleClick(movie)}
            className = {`${isLargeRow ? "row_poster_large" : "row_poster"}`}
            src = {`${base_url_img}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
            alt = {movie.name}
          />
        ))}
      </div>
      {trailerUrl && <Youtube videoId={trailerUrl} opts={opts}/>}
    </div>
  )
}

export default Row

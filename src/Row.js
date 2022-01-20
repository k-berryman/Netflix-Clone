import React, { useState, useEffect } from 'react';
import axios from './axios';
import "./Row.css"

const base_url_img = "https://image.tmdb.org/t/p/original/";

// Destructure prop's title
function Row({ title, fetchUrl, isLargeRow }) {
  // state is like short-term memory
  // state is the way to write vars in React
  // this uses a react hook
  // That empty array is the initial value
  const [movies, setMovies] = useState([])

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
            className={`${isLargeRow ? "row_poster_large" : "row_poster"}`}
            src = {`${base_url_img}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
            alt = {movie.name}
          />
        ))}
      </div>
      {/*container -> posters*/}

    </div>
  )
}

export default Row

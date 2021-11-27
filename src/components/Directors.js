import React from "react";
import { directors } from "../data";


function Directors() {
  const renderDirectors = directors.map(director => {
    return(
      <div key={director.name}>
        <h2>Name: {director.name}</h2>
        <p>Movies: </p>
        <ul>
          {director.movies.map(movie => <li key={director.name + movie}>{movie}</li>)}
        </ul>
      </div>
    )
  })
  return (
  <div>
    <h1>Directors Page</h1>
    {renderDirectors}
  </div>
  );
}

export default Directors;

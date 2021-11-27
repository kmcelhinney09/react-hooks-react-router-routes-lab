import React from "react";
import { actors } from "../data";

function Actors() {
  const renderActors = actors.map(actor => {
    return(
      <div key={actor.name}>
        <h2>Name: {actor.name}</h2>
        <p>Movies: </p>
        <ul>
          {actor.movies.map(movie => <li key={actor.name + movie}>{movie}</li>)}
        </ul>
      </div>
    )
  })
  return (
  <div>
    <h1>Actors Page</h1>
    {renderActors}
  </div>
  );
}

export default Actors;

"use client";
import { useState, useEffect } from "react";

export default function PageDetails({ params }) {
  const { id } = params;
  const [pelicula, setPelicula] = useState([]);

  useEffect(() => {
    fetch(
      "https://mflixbackend.azurewebsites.net/api/movies"
    )
      .then((response) => response.json())
      .then((data) => {
        setPelicula(data.find((pelicula) => pelicula._id === id));
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <img src={pelicula.poster} alt={pelicula.title} />
      <h3>{pelicula.fullplot}</h3>
      <h3>{pelicula.genres["0"]}</h3>
    </>
  );
}
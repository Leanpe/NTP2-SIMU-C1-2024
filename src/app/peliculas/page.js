"use client";
import { useState, useEffect } from "react";
import PeliculaList from "./PeliculaList";
//https://raw.githubusercontent.com/ORT-PabloFernandez/PNTP2-REACT-EJEMPLO/main/src/data/Users.json

export default function UserPage() {
  const [peliculas, setpeliculas] = useState([]);

  useEffect(() => {
    fetch(
      "https://mflixbackend.azurewebsites.net/api/movies?pageSize=10&page=1"
    )
      .then((response) => response.json())
      .then((data) => {
        setpeliculas(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <PeliculaList Peliculas={peliculas} />
    </>
  );
}
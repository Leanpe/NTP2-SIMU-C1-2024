import Pelicula from "./Pelicula";

export default function UserList(props) {
  return (
    <ul>
      {props.Peliculas.map((pelicula) => {
        return (
          <Pelicula
            Id={pelicula._id}
            Title={pelicula.title}
            Poster={pelicula.poster}
          />
        );
      })}
    </ul>
  );
}
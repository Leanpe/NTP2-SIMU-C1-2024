import Link from "next/link";

export default function User(props) {
  return (
    <li>
      <div>
        <Link href={`/peliculas/${props.Id}`}>
          <div>
            <img src={props.Poster} alt="{props.Title}" />
          </div>
          <div>
            <h2>{props.Title}</h2>
          </div>
        </Link>
      </div>
    </li>
  );
}
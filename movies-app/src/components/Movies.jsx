import "../App.css";

function ListMovies({ movies }) {
  return (
    <ul className="movies">
      {movies.map((m) => {
        return (
          <li className="movie" key={m.id}>
            <h3>{m.title}</h3>
            <p>{m.year}</p>
            <img src={m.poster} alt={m.title} />
          </li>
        );
      })}
    </ul>
  );
}

function NoListMovies() {
  return <p>no se encontraron pelicula para esta busqueda</p>;
}

export function Movies({ movies }) {
  const hasMovies = movies?.length > 0;

  return hasMovies ? <ListMovies movies={movies} /> : <NoListMovies />;
}

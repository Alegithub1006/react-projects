import { useState } from "react";
import "./App.css";
import { Movies } from "./components/Movies";
import { useMovies } from "./hooks/useMovies";
import { useSearchMovies } from "./hooks/useSearchMovies";

function App() {
  const [sort, setSort] = useState(false);
  const { query, error, handleChange } = useSearchMovies();
  const {
    movies: sortedMovies,
    getMovies,
    loading,
  } = useMovies({ query, sort });
  const hanldeChangeSort = () => {
    setSort(!sort);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getMovies({ query });
  };
  return (
    <>
      <header>
        <h1>buscardor de peliculas</h1>
        <form onSubmit={handleSubmit}>
          <input value={query} onChange={handleChange} type="text" />
          <input type="checkbox" onChange={hanldeChangeSort} />
          <p style={{ color: "red" }}>{error}</p>
          <button type="submit">buscar</button>
        </form>
      </header>
      {loading && <p>cargando</p>}
      <main>
        <Movies movies={sortedMovies} />
      </main>
    </>
  );
}

export default App;

import { useState, useRef, useMemo, useCallback } from "react";
import { searchMovies } from "../services/movies";

export function useMovies({ query, sort }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const previusSearch = useRef(query);

  const getMovies = useCallback(async ({ query }) => {
    console.log(query);
    console.log(previusSearch);
    if (query === previusSearch.current) return;
    try {
      setLoading(true);
      setError(null);
      previusSearch.current = query;
      const newMovies = await searchMovies({ query });
      setMovies(newMovies);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  const sortedMovies = useMemo(() => {
    console.log("memo render");
    return sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies;
  }, [movies, sort]);

  return { movies: sortedMovies, getMovies, loading, error };
}

const KEY_MOVIES_API = "6ea83b80";

export async function searchMovies({ query }) {
  if (query === "") return null;

  try {
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${KEY_MOVIES_API}&s=${query}`,
    );
    const json = await response.json();
    const movies = json.Search;

    return movies?.map((m) => ({
      title: m.Title,
      year: m.Year,
      id: m.imdbID,
      poster: m.Poster,
      type: m.Type,
    }));
  } catch (e) {
    throw new Error("error to search movies: " + e.message);
  }
}

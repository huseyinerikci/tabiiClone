import { useEffect, useState } from "react";
import Hero from "./Hero";
import api from "../../utils/api";
import Error from "../../components/error";
import MovieList from "./MovieList";

function Home() {
  const [genres, setGenres] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    api
      .get("/genre/movie/list?language=en")
      .then((res) => setGenres(res.data.genres))
      .catch((err) => setError(err));
  }, []);
  return (
    <div>
      <Hero />

      {error ? (
        <Error />
      ) : (
        genres?.map((genre) => <MovieList key={genre.id} genre={genre} />)
      )}
    </div>
  );
}

export default Home;

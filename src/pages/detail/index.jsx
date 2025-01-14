import { useEffect, useState } from "react";
import api from "../../utils/api";
import { useParams } from "react-router-dom";
import Loader from "../../components/loader";
import Buttons from "./Buttons";
import Banner from "./Banner";
import Content from "./Content";
import Actors from "./Actors";
import Trailers from "./Trailers";
import Reviews from "./Reviews";

function Detail() {
  const [error, setError] = useState(null);
  const [movie, setMovie] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    const params = {
      append_to_response: "credits,videos,reviews",
      language: "en",
      region: "US",
    };
    api
      .get(`movie/${id}`, { params })
      .then((res) => setMovie(res.data))
      .catch((err) => setError(err.message));
  }, []);
  if (error) return <Error info={error} />;
  if (!movie) return <Loader />;
  return (
    <div>
      <Buttons movie={movie} />
      <Banner movie={movie} />
      <Content movie={movie} />
      <Actors cast={movie.credits.cast} />
      <Trailers videos={movie.videos.results} />
      <Reviews comments={movie.reviews.results} />
    </div>
  );
}

export default Detail;

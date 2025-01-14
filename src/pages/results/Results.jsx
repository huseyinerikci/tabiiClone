import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import api from "../../utils/api";
import Loader from "../../components/loader";
import Error from "../../components/error";
import { baseImgUrl } from "../../utils/constants";

const Reuslts = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  //url arama parametresine erişmek
  const [params] = useSearchParams();
  const query = params.get("search_query");

  //api dan aratılan kelimeye uygun videoları al

  useEffect(() => {
    if (!query) return;
    const getMovies = async () => {
      try {
        const res = await api.get("/search/movie", { params: { query } });
        setMovies(res.data.results);
      } catch (err) {
        setError(err.message);
      }
    };
    setMovies([]);
    getMovies();
  }, [query]);

  if (!movies) return <Loader />;
  if (error) return <Error info={error} />;
  return (
    <div className="p-4 sm:p-6 md:p-10  ">
      <h2 className="text-xl mb-5">
        <span>
          {movies.length > 0 ? "Results for " : "No results found for "}{" "}
        </span>
        <span className="font-bold me-2">{query}</span>
      </h2>
      <div className="flex flex-wrap gap-5">
        {movies.map((item, key) => (
          <div key={key} className="h-[340px]">
            <Link to={`/movie/${item.id}`}>
              <img
                src={
                  item.poster_path
                    ? baseImgUrl + item.poster_path
                    : "/noPoster.jpg"
                }
                className="w-[250px] h-full cursor-pointer rounded transition hover:scale-[1.01]"
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reuslts;

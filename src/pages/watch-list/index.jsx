import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { baseImgUrl } from "../../utils/constants";
import Loader from "../../components/loader";
import Error from "../../components/error/index";
import { GoBookmarkSlashFill as Remove } from "react-icons/go";
import { toggleMovieList } from "../../redux/actions/listActions";

function WatchList() {
  const { isLoading, error, list } = useSelector((store) => store);
  const dispatch = useDispatch();
  const handleClick = (movie) => {
    dispatch(toggleMovieList(movie, false));
  };

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Error />
      ) : (
        <div>
          <h1 className="text-2xl md:text-3xl font-semibold">İzleme Listesi</h1>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 gap-y-10 my-10">
            {list.length > 0 ? (
              list.map((movie) => (
                <div className="relative" key={movie.id}>
                  <button
                    onClick={() => handleClick(movie)}
                    className="absolute top-3 text-black  end-3 bg-[#00FF99] p-3 rounded hover:bg-[#00ff99a0] transition z-10  shadow"
                  >
                    <Remove />
                  </button>
                  <Link to={`/movie/${movie.id}`}>
                    <img
                      src={baseImgUrl + movie.poster_path}
                      className="rounded"
                    />
                  </Link>

                  <h1 className="text-xl text-center font-semibold mt-3">
                    {movie.title}
                  </h1>
                </div>
              ))
            ) : (
              <div className="text-center mb-10 text-zinc-400">
                No movies have been added to the list yet.
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default WatchList;

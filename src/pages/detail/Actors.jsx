import { baseImgUrl } from "../../utils/constants";
import { Splide, SplideSlide } from "@splidejs/react-splide";

function Actors({ cast }) {
  const getPicture = (actor) => {
    return actor.profile_path
      ? baseImgUrl + actor.profile_path
      : actor.gender === 1
      ? "/mrs.jpg"
      : actor.gender === 2
      ? "/mr.jpg"
      : "/defaultImg.jpg";
  };
  return cast.length > 0 ? (
    <div className="mb-10">
      <h2 className="text-lg font-semibold my-5 md:text-xl">Actors</h2>
      <Splide
        options={{
          autoWidth: true,
          type: "loop",
          gap: "20px",
          pagination: false,
        }}
      >
        {cast.map((actor) => (
          <SplideSlide key={actor.cast_id}>
            <div
              title={actor.name}
              className="w-[160px] h-full flex flex-col  "
            >
              <img
                src={getPicture(actor)}
                className=" h-full object-cover rounded"
              />
              <h2 className="text-center font-semibold line-clamp-1 mt-2">
                {actor.name}
              </h2>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  ) : (
    <div className="mb-10 text-center text-zinc-400">
      No player information found
    </div>
  );
}

export default Actors;

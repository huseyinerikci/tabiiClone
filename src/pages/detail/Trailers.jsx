import { Splide, SplideSlide } from "@splidejs/react-splide";
import ReactPlayer from "react-player";

function Trailers({ videos }) {
  return videos.length > 0 ? (
    <div className="mb-10">
      <h2 className="text-lg font-semibold md:text-xl my-5">Trailers</h2>

      <Splide
        options={{
          type: "loop",
          pagination: false,
        }}
      >
        {videos?.map((video) => (
          <SplideSlide key={video.id}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${video.key}`}
              controls
              width={"100%"}
              height={"400px"}
            />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  ) : (
    <div className="text-center mb-10 text-zinc-400">No videos found</div>
  );
}
export default Trailers;

import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import useMovieTrailer from "../hooks/useMovieTrailer";
import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";

const WatchPage = () => {
  // const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  // useMovieTrailer(movieId);

  const { movieId } = useParams();
  const [movieVideo, setMovieVideo] = useState();

  useEffect(() => {
    const getMovieVideos = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/" +
          movieId +
          "/videos?language=en-US",
        API_OPTIONS
      );
      const json = await data.json();

      const filterData = json?.results?.filter(
        (video) => video.type === "Trailer"
      );
      const trailer = filterData?.length ? filterData[0] : json.results[0];

      setMovieVideo(trailer);
    };
    getMovieVideos();
  }, [movieId]);

  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/home");
  };

  return (
    <div>
      <button
        className="absolute z-30 border border-red-800 bg-red-800 rounded-lg text-white py-3 px-5 mx-3 my-3"
        onClick={handleBackClick}
      >
        <ArrowBackIcon />
      </button>
      {movieVideo && (
        <iframe
          className="w-screen h-screen aspect-video"
          src={
            "https://www.youtube.com/embed/" +
            movieVideo?.key +
            "?autoplay=0&fullscreen=1"
          }
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
      )}
    </div>
  );
};

export default WatchPage;

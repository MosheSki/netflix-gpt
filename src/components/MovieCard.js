import { API_OPTIONS, CDN_URL } from "../utils/constants";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ posterPath, movieId }) => {
  const [movieVideo, setMovieVideo] = useState();
  const navigate = useNavigate();

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

  const handleMovieCardClick = (movieId) => {
    navigate("/watch/" + movieId);
  };

  if (!posterPath) return null;

  return (
    <div className="w-32 md:w-48 pr-4 cursor-pointer">
      <img
        alt="moviecard"
        src={CDN_URL + posterPath}
        onClick={() => handleMovieCardClick(movieId)}
      />
    </div>
  );
};

export default MovieCard;

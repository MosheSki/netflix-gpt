import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { useEffect, useState } from "react";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return;

  // const [mainMovie, setMainMovie] = useState(null);

  // useEffect(() => {
  //   if (movies && movies.length > 0) {
  //     const randomIndex = Math.floor(Math.random() * movies.length);
  //     setMainMovie(movies[randomIndex]);
  //   }
  // }, [movies]);

  // if (!mainMovie) return null;

  const mainMovie = movies[1];

  const { original_title, overview, id } = mainMovie;

  return (
    <div className="pt-[30%] bg-black md:pt-0 ">
      <VideoTitle title={original_title} overview={overview} id={id} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;

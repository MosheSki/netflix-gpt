import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondContainer from "./SecondContainer";

const Home = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondContainer />
    </div>
  );
};

export default Home;

import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const VideoTitle = ({ title, overview, id }) => {
  const navigate = useNavigate();

  const handlePlayClick = () => {
    navigate("/watch/" + id);
  };
  return (
    <div className="w-screen aspect-video pt-[30%] md:pt-[10%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-2xl md:text-6xl font-bold">{title}</h1>
      <p className="hidden md:inline-block py-6 text-l w-1/3">{overview}</p>
      <div className="my-4 md:my-0">
        <button
          className="bg-white text-black py-1 md:py-4 px-6 md:px-12 text-xl  rounded-lg hover:bg-opacity-80"
          onClick={() => handlePlayClick(id)}
        >
          <PlayArrowIcon className="mr-2" style={{ fontSize: 32 }} />
          Play
        </button>
        <button className="hidden md:inline-block bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg mx-2 hover:bg-opacity-80">
          <InfoOutlinedIcon className="mr-2" style={{ fontSize: 32 }} />
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;

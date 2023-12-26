import ListAnime from "../components/home/ListAnime";
import useChangeDocTitle from "../hooks/useChangeDocTitle";

const Trending = () => {
  useChangeDocTitle("Resnime | Trending");

  return <ListAnime path="/trending" titlePage="Trending" />;
};
export default Trending;

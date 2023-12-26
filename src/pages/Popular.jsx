import ListAnime from "../components/home/ListAnime";
import useChangeDocTitle from "../hooks/useChangeDocTitle";

const Popular = () => {
  useChangeDocTitle("Resnime | Popular");

  return <ListAnime path="/popular" titlePage="Popular" />;
};
export default Popular;

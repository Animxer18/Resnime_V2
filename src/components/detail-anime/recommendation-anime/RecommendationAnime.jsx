import { Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import CardData from "../../global/CardData";
import { Carousel } from "react-responsive-carousel";
import BgImage from "../../global/BgImage";
import { useMemo } from "react";
import { Link } from "react-router-dom";
import formatWord from "../../../helpers/formatWord";
import useResponsive from "../../../hooks/useResponsive";

const RecommendationAnime = ({ data }) => {
  const { sm } = useResponsive();

  const dataPerSlide = useMemo(() => {
    return sm ? 2 : 3;
  }, [sm]);

  /** Proses data untuk nampilin 3 or 2 anime per carousel
   * 0 - 3 / 0 -2
   * 3 - 6 / 2 - 4
   */
  const dataCarousel = useMemo(() => {
    const tempData = [];
    data?.recommendations?.forEach((_, idx) => {
      tempData?.push(
        data?.recommendations?.slice(
          idx * dataPerSlide,
          (idx + 1) * dataPerSlide
        )
      );
    });

    return tempData?.filter((d) => d?.length > 0);
  }, [data, sm]);

  return (
    <CardData useDefault header={<Heading>Recommendations</Heading>}>
      <Carousel
        emulateTouch
        showIndicators={false}
        infiniteLoop
        swipeable
        autoPlay
        showStatus={false}
      >
        {dataCarousel?.map((recom) => {
          return (
            <SimpleGrid
              key={recom?.id}
              columns={dataPerSlide}
              spacing={sm ? 5 : 10}
            >
              {recom?.map((r) => (
                <Link key={r?.id} to={`/anime/${r?.id}/${r?.title?.romaji}`}>
                  <BgImage src={r?.cover} useOverlay height={300}>
                    <Stack spacing={2} bottom={5} left={2} pos="absolute">
                      <Heading as="h3" fontSize={sm ? "md" : "xl"}>
                        {r?.title?.romaji}
                      </Heading>
                      <Stack direction="row">
                        <Text>{formatWord(r?.type)}</Text>
                      </Stack>
                    </Stack>
                  </BgImage>
                </Link>
              ))}
            </SimpleGrid>
          );
        })}
      </Carousel>
    </CardData>
  );
};
export default RecommendationAnime;

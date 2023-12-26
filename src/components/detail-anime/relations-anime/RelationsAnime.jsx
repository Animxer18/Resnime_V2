import { Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import CardData from "../../global/CardData";
import BgImage from "../../global/BgImage";
import { Link } from "react-router-dom";
import formatWord from "../../../helpers/formatWord";
import useResponsive from "../../../hooks/useResponsive";

const RelationsAnime = ({ data }) => {
  const { sm } = useResponsive();

  return (
    <CardData useDefault header={<Heading>Relations</Heading>}>
      <SimpleGrid columns={sm ? 2 : 3} spacing={5}>
        {data?.relations?.map((relate) => {
          return (
            <Link
              key={relate?.id}
              to={`/anime/${relate?.id}/${relate?.title?.romaji}`}
            >
              <BgImage src={relate?.image} useOverlay cursor="pointer">
                <Stack spacing={2} bottom={5} left={2} pos="absolute">
                  <Heading as="h3" fontSize={sm ? 16 : "xl"}>
                    {relate?.title?.romaji}
                  </Heading>
                  <Stack direction="row" fontSize={sm ? 12 : "xl"}>
                    <Text>{formatWord(relate?.type)}</Text>
                    <Text>•</Text>
                    <Text>{formatWord(relate?.relationType)}</Text>
                  </Stack>
                </Stack>
              </BgImage>
            </Link>
          );
        })}
      </SimpleGrid>
    </CardData>
  );
};
export default RelationsAnime;

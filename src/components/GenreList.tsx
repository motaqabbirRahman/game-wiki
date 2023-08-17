import {
  HStack,
  Image,
  List,
  ListItem,
  Skeleton,
  SkeletonText,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

const GenreList = () => {
  const { data, error, isLoading } = useGenres();
  const listDummy = [1, 2, 3, 4, 5, 6, 7, 8];

  if (isLoading)
    return (
      <List>
        {listDummy.map((element: number) => (
          <ListItem key={element}>
            <HStack>
              <Skeleton height="32px" width="32px" />
              <SkeletonText width="50px" />
            </HStack>
          </ListItem>
        ))}
      </List>
    );
  return (
    <>
      <List>
        {data.map((genre: Genre) => (
          <ListItem key={genre.id}>
            <HStack paddingY="5px">
              <Image
                boxSize="32px"
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
              ></Image>
              <Text size="lg">{genre.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;

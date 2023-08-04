import {
  Text,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Heading,
} from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={game.background_image}></Image>
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;

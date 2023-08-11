import { Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import { SimpleGrid } from "@chakra-ui/react";
import GameCardSceleton from "./GameCardSceletorn";

const GameGrid = () => {
  //where do I destucture it ?
  const { games, error, loading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 2, md: 2, lg: 3, xl: 5 }}
        padding="10px"
        spacing={10}
      >
        {loading &&
          skeletons.map((skeleton) => <GameCardSceleton key={skeleton} />)}
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;

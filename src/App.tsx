import { Grid, GridItem } from "@chakra-ui/react";

function App() {
  return (
    <Grid templateAreas={`"header header" "aside main"`}>
      <GridItem area="header" bg="coral">
        header
      </GridItem>
      <GridItem area="aside" bg="gold">
        aside
      </GridItem>
      <GridItem area="main" bg="blue ">
        main
      </GridItem>
    </Grid>
  );
}

export default App;

import { Grid, GridItem } from "@chakra-ui/react";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Grid templateAreas={`"header header" "aside main"`}>
      <GridItem area="header">
        <Navbar />
      </GridItem>
      <GridItem area="aside">aside</GridItem>
      <GridItem area="main">main</GridItem>
    </Grid>
  );
}

export default App;

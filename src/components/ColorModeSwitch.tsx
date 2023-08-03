import { Button, Switch } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";

export default function ColorModeSwitch() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <header>
      <Switch onChange={toggleColorMode}></Switch>
    </header>
  );
}

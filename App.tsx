import React, { useEffect } from "react";
import * as Font from "expo-font";
import styled from "styled-components/native";

import { Home } from "./src/components/Home/Home";
import { NavigationBar } from "./src/components/NavigationBar/NavigationBar";

import { mainColorBackground } from "./src/components/Style/colors";

const Container = styled.View`
  flex: 1;
  ${mainColorBackground};
`;

export default function App() {
  /*useEffect(() => {
    Font.loadAsync({
      "Arimo-Regular": require("./assets/fonts/Arimo-Regular.ttf"),
    });
  }, []);*/

  return (
    <Container>
      <Home />
      <NavigationBar />
    </Container>
  );
}

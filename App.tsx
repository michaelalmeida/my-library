import React, { useEffect } from "react";
import * as Font from "expo-font";

import { Home } from "./src/components/Home/Home";
import { NavigationBar } from "./src/components/NavigationBar/NavigationBar";

export default function App() {
  useEffect(() => {
    Font.loadAsync({
      "Arimo-Regular": require("./assets/fonts/Arimo-Regular.ttf"),
    });
  }, []);

  return (
    <>
      <Home />
      <NavigationBar />
    </>
  );
}

import React, { useEffect } from "react";
import * as Font from "expo-font";

import { Home } from "./src/components/home/Home";

export default function App() {
  useEffect(() => {
    Font.loadAsync({
      "Arimo-Regular": require("./assets/fonts/Arimo-Regular.ttf"),
    });
  }, []);

  return (
    <>
      <Home />
    </>
  );
}

import React from "react";

import { Header } from "../Header/Header";
import { CurrentReading } from "./CurrentReading";

const Home = () => {
  return (
    <>
      <Header isHomeScreen />
      <CurrentReading
        currentReadingList={[{ id: 1, author: "J. K.", name: "Harry Potter" }]}
      />
    </>
  );
};

export { Home };

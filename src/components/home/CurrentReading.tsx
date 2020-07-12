import React from "react";

import { Card } from "../ComumComponents/Card";
import { H1 } from "../Style/titles";

interface CurrentReadingItems {
  id: number;
  name: string;
  author: string;
  pages?: number;
  readPages?: number;
}

interface CurrentReadingProps {
  currentReadingList: Array<CurrentReadingItems>;
}

const CurrentReading: React.FC<CurrentReadingProps> = ({
  currentReadingList,
}) => {
  return (
    <>
      <H1>O que estou lendo</H1>
      {currentReadingList.map((book) => (
        <Card>{book.name}</Card>
      ))}
    </>
  );
};

export { CurrentReading };

import React, { Children } from "react";
import styled from "styled-components/native";

interface CardProps {
  horizontal?: boolean;
}

const Card: React.FC<CardProps> = ({ horizontal, children }) => {
  return <>{children}</>;
};

export { Card };

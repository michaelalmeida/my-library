import React from "react";
import styled, { css } from "styled-components/native";

import { secondColorBackground } from "../Style/colors";

const HeaderView = styled.View`
  padding: 30px;
  flex-direction: column;
  flex-wrap: wrap;
  height: 300px;
  ${secondColorBackground}
`;

const TilteSharedStyle = css`
  color: #ffffff;
`;

const Title = styled.Text`
  ${TilteSharedStyle}
  font-size: 48px;
`;

const DailyInfo = styled.Text`
  ${TilteSharedStyle}
  margin-top: 30px;
  font-size: 18px;
`;

interface HeaderProps {
  isHomeScreen: boolean;
}

const Header: React.FC<HeaderProps> = ({ isHomeScreen }) => {
  return (
    <>
      <HeaderView>
        {isHomeScreen && (
          <>
            <Title>Olá,</Title>
            <DailyInfo>
              Você leu 33 páginas esta semana, sua meta é 250
            </DailyInfo>
          </>
        )}
      </HeaderView>
    </>
  );
};

export { Header };

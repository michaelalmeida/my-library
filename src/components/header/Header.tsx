import React from "./node_modules/react";
import styled, { css } from "./node_modules/styled-components/native";

import { mainColorBackground } from "../Style/colors";

const HeaderView = styled.View`
  padding: 30px;
  flex-direction: column;
  flex-wrap: wrap;
  height: 300px;
  ${mainColorBackground}
`;

const TilteSharedStyle = css`
  font-family: "Arimo-Regular";
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

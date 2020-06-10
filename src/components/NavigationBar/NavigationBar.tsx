import React from "react";

import styled, { css } from "styled-components/native";

const NavegationBarView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px 30px;
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 0;
  background: #ffffff;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
`;

interface NavegationIcon {
  custonWidth?: string;
  custonHeight?: string;
}

const NavegationIcon = styled.Image<NavegationIcon>`
  width: ${(props) => props.custonWidth || "26px"};
  height: ${(props) => props.custonHeight || "26px"};
`;

const NavigationBar = () => {
  return (
    <NavegationBarView>
      <NavegationIcon source={require("../../../assets/icons/home_icon.png")} />
      <NavegationIcon
        custonWidth="24px"
        custonHeight="28px"
        source={require("../../../assets/icons/rating_icon.png")}
      />
      <NavegationIcon
        source={require("../../../assets/icons/status_icon.png")}
      />
      <NavegationIcon
        source={require("../../../assets/icons/profile_icon.png")}
      />
    </NavegationBarView>
  );
};

export { NavigationBar };

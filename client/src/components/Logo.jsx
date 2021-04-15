import React from "react";
import styled, { css } from "styled-components";
import ShammaLogo from "../assets/Shamma Qureshi logo.png";

const LogoContainer = styled.div`
  display: flex;
  flex-direction: ${({ inline }) => (inline ? "row" : "column")};
  align-items: center;
`;

const LogoImg = styled.img`
  width: 200px;
  height: 200px;
  ${({ inline }) =>
    inline &&
    css`
      width: 50px;
      height: 50px;
      margin-right: 5px;
    `};
  ${({ small }) =>
    small &&
    css`
      width: 50px;
      height: 50px;
    `};
`;

function Logo(props) {
  const { inline, small } = props;

  return (
    <LogoContainer inline={inline} small={small}>
      <LogoImg src={ShammaLogo} inline={inline} small={small} />
    </LogoContainer>
  );
}

export default Logo;

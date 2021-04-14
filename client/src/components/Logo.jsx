import React from "react";
import styled, { css } from "styled-components";
import ShammaLogo from "../assets/Shamma Qureshi logo.png";

const LogoContainer = styled.div`
  display: flex;
  flex-direction: ${({ inline }) => (inline ? "row" : "column")};
  align-items: center;
`;

const LogoImg = styled.img`
  width: 10em;
  height: 10em;
  ${({ inline }) =>
    inline &&
    css`
      width: 24px;
      height: 24px;
      margin-right: 6px;
    `};
  ${({ small }) =>
    small &&
    css`
      width: 4.8em;
      height: 4.8em;
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

import React from "react";
import styled from "styled-components";
import { Button } from "../components/Button";
import Logo from "../components/Logo";
import { Marginer } from "../components/Marginer";

const NavbarContainer = styled.div`
  width: 100%;
  height: 50px;
  padding: 0 2em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #4a4e69;
`;

const BrandContainer = styled.div``;

const AccessibilityContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const LinkButton = styled(Button)`
  background-color: transparent;
  border: none;
  height: 100%;
  font-weight: 500;
  font-size: 1rem;
  &:hover {
    transition: 0.2s ease-in-out;
    background-color: transparent;
    color: #9a8c98;
  }
`;

export function Navbar(props) {
  return (
    <NavbarContainer>
      <BrandContainer>
        <Logo inline />
      </BrandContainer>
      <AccessibilityContainer>
        <LinkButton small>About Me</LinkButton>
        <Marginer direction="horizontal" margin="8px" />
        <LinkButton small>Developer Projects</LinkButton>
        <Marginer direction="horizontal" margin="8px" />
        <LinkButton small>Resume</LinkButton>
        <Marginer direction="horizontal" margin="8px" />
        <Button small>Contact Me</Button>
      </AccessibilityContainer>
    </NavbarContainer>
  );
}

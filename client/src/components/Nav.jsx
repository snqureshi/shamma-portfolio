import React from "react";
import styled from "styled-components";
import Logo from "../components/Logo";
import { Marginer } from "../components/Marginer";
import { HashLink as Link } from "react-router-hash-link";
import "./Nav.css";

const NavbarContainer = styled.div`
  width: 100%;
  height: 50px;
  padding: 0 2em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #4a4e69;
  position: sticky;
  position: -webkit-sticky;
  top: 0;
`;

const BrandContainer = styled.div``;

const AccessibilityContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const StyledLink = styled.link`
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
        <Link to="/#landing">
          <Logo inline />
        </Link>
      </BrandContainer>
      <AccessibilityContainer>
        <Link to="/#about">
          <h1>About Me</h1>
        </Link>
        <Marginer direction="horizontal" margin="8px" />
        <Link to="/#projects">
          <h1>Projects </h1>
        </Link>
        <Marginer direction="horizontal" margin="8px" />
        <Link to="/#contact">
          <h1>Get In Touch</h1>
        </Link>
        <Marginer direction="horizontal" margin="8px" />
        <a
          href="https://drive.google.com/file/d/1zrxBshPMookGk0ZGZYxEJwKi4kk3y4vD/view?usp=sharing"
          target="_blank"
        >
          <h1 className="resume">Resume</h1>
        </a>
      </AccessibilityContainer>
    </NavbarContainer>
  );
}

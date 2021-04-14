import React from "react";
import Typed from "react-typed";
import styled from "styled-components";
import Logo from "../../components/Logo";
import { Element, scroller } from "react-scroll";

const LandingContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0;
  background-color: #22223b;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function Landing(props) {
  return (
    <LandingContainer>
      <Logo />
      Hi! I'm Shamma Noor Qureshi
      <Typed
        className="typed-text"
        strings={[
          "Full-Stack Software Engineer",
          "Front-End Developer",
          "Back-End Developer",
          "Educator",
          "Cat Mom",
          "Indoor-Plant enthusiast",
          "BTS Army",
        ]}
        typeSpeed={30}
        backSpeed={45}
        loop={true}
      />
    </LandingContainer>
  );
}

export default Landing;

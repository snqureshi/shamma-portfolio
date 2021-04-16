import React from "react";
import Typed from "react-typed";
import styled from "styled-components";
import { Element, scroller } from "react-scroll";
import Logo from "../../components/Logo";
import { Marginer } from "../../components/Marginer";
import { DownArrow } from "../../components/DownArrow";

const LandingContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0;
  background-color: #22223b;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const IntroText = styled.div`
  font-size: 80px;
  font-weight: 500;
  line-height: 1.5;
  color: #f2e9e4;
  margin: 0;
  text-align: center;
`;

const TypedText = styled.div`
  font-size: 50px;
  font-weight: 400;
  line-height: 1.5;
  color: #c9ada7;
  margin: 0;
  text-align: center;
`;

function Landing(props) {
  const scrollToNextSection = () => {
    scroller.scrollTo("#about", { smooth: true, duration: 1500 });
  };

  return (
    <div id="landing" className="projects-container">
      <LandingContainer>
        <Marginer direction="vertical" margin="20px" />
        <Logo />
        <Marginer direction="vertical" margin="20px" />
        <IntroText>Hi, I'm Shamma Noor Qureshi</IntroText>
        <TypedText>
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
              "Foodie",
            ]}
            typeSpeed={30}
            backSpeed={45}
            loop={true}
          />
        </TypedText>
        <Marginer direction="vertical" margin="2em" />
        <Marginer direction="vertical" margin="10em" />
        <DownArrow />
      </LandingContainer>
    </div>
  );
}

export default Landing;

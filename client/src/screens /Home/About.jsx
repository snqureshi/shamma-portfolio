import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";

const AboutContainer = styled(Element)`
  width: 100%;
  min-height: 1100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
`;

const AboutImg = styled.img`
  width: 20em;
  height: 20em;
  border-radius: 50%;
  @media screen and (max-width: 480px) {
    width: 13em;
    height: 13em;
  }
`;

const AboutTitle = styled.h2`
  color: #000;
  font-size: 30px;
  font-weight: 700;
  margin: 5px 0;
  @media screen and (max-width: 480px) {
    margin-top: 1.5em;
  }
`;

const AboutDetails = styled.p`
  color: #7a7a7a;
  font-size: 22px;
  text-align: center;
  max-width: 60%;
  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

const SkillsContainer = styled(Element)`
  width: 100%;
  min-height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SkillsImg = styled.img`
  width: 10em;
  height: 10em;
  border-radius: 50%;
  object-fit: contain;
  @media screen and (max-width: 480px) {
    width: 6em;
    height: 6em;
  }
`;

export function AboutSection(props) {
  return (
    <div id="about" className="about-container">
      <AboutContainer>
        <AboutImg src="https://scontent-lga3-1.xx.fbcdn.net/v/t1.18169-9/22552530_10155772133544603_5883037901754095985_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=84a396&_nc_ohc=o2XcUI-pmDUAX-8mpAs&_nc_ht=scontent-lga3-1.xx&oh=45142005dede78fedca1fda36b0b4402&oe=609E70ED" />
        <AboutTitle>About Me:</AboutTitle>
        <AboutDetails>
          I'm a Full-Stack Developer with a background in Biology and Education.
          Before diving into the world of code, I was spending my time nurturing
          relationships with patients and thier families, ensuring their
          problems are heard and solved. I am seeking to bring the same
          compassionate and collaboration driven mindset to solving problems in
          software developement teams. I am a fast-learner and a team player who
          is motivated by the desire to improve the lives of others & loves to
          take on new challenges. After 12 rigorous weeks and 420+ hours of
          instruction and work, I completed 5 major projects and graduated from
          the General Assembly Software Engineering Immersive. I am seeking an
          engineering role where problem-solving, collaboration, and growth are
          encouraged and where I'll continue to learn and foster new skills.
        </AboutDetails>
        <SkillsContainer>
          <SkillsImg src="https://seeklogo.com/images/H/html5-logo-EF92D240D7-seeklogo.com.png" />
          <SkillsImg src="https://seeklogo.com/images/C/css3-logo-8724075274-seeklogo.com.png" />
          <SkillsImg src="https://seeklogo.com/images/J/javascript-logo-E967E87D74-seeklogo.com.png" />
          <SkillsImg src="https://seeklogo.com/images/N/node-node-js-logo-81A4CC16D2-seeklogo.com.png" />
          <SkillsImg src="https://seeklogo.com/images/R/react-logo-7B3CE81517-seeklogo.com.png" />
          <SkillsImg src="https://seeklogo.com/images/M/mongodb-logo-4A71340576-seeklogo.com.png" />
          <SkillsImg src="https://seeklogo.com/images/P/postgresql-logo-5309879B58-seeklogo.com.png" />
          <SkillsImg src="https://seeklogo.com/images/R/ruby-on-rails-logo-95951CC5FB-seeklogo.com.png" />
        </SkillsContainer>
      </AboutContainer>
    </div>
  );
}

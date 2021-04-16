import React from "react";
import styled from "styled-components";
import Landing from "./Landing";
import { AboutSection } from "./About";
import { ProjectsSection } from "./Projects";
import { ContactSection } from "./Contact";

const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

function Home(props) {
  return (
    <HomeContainer>
      <Landing />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </HomeContainer>
  );
}

export default Home;

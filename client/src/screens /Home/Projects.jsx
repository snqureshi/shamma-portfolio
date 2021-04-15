import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
import { Marginer } from "../../components/Marginer";
import { ProjectCard } from "../../components/ProjectCard";

import Project1Img from "../../assets/whats-for-dinner home.png";
// import Project2Img from "../../assets/best-of-bangtan home.png";
// import Project3Img from "../../assets/pets-r-us home.png";
// import Project4Img from "../../assets/united-motors home.png";

const ProjectsContainer = styled(Element)`
  height: 1000px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

export function ProjectsSection(props) {
  return (
    <ProjectsContainer>
      <h2>My Projects</h2>
      <Marginer direction="vertical" margin="3em" />
      <ProjectCard
        projectImgUrl={Project1Img}
        projectTitle="What's For Dinner?"
        projectDescription="John coner"
      />
    </ProjectsContainer>
  );
}

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  width: 350px;
  height: 430px;
  background-color: #fff;
  box-shadow: 0px 0px 7px rgba(17, 17, 17, 0.2);
  border-radius: 3px;
  margin: 5px 0;
  position: relative;
  padding: 10px 1.2em;
`;

const ProjectTitle = styled.h4`
  font-size: 18px;
  color: #585858;
  font-weight: normal;
  display: flex;
  justify-content: center;
`;

const Line = styled.span`
  min-width: 100%;
  min-height: 1px;
  margin-bottom: 1em;
  background-color: #cdcdcd;
  display: flex;
`;

const ProjectDetails = styled.div`
  display: flex;
  align-items: center;
`;

const ProjectImg = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  margin-right: 10px;
`;

const ProjectDescription = styled.span`
  font-size: 15px;
  color: #000;
`;

export function ProjectCard(props) {
  const { projectTitle, projectDescription, projectImg } = props;

  return (
    <CardContainer>
      <ProjectImg src={projectImg} />
      <ProjectTitle>{projectTitle}</ProjectTitle>
      <Line />
      <ProjectDetails>
        <ProjectTitle>{projectTitle}</ProjectTitle>
        <ProjectDescription>{projectDescription}</ProjectDescription>
      </ProjectDetails>
    </CardContainer>
  );
}

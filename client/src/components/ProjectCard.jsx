import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import { Marginer } from "../components/Marginer";

const CardContainer = styled.div`
  width: 350px;
  height: 500px;
  background-color: #fff;
  box-shadow: 0px 0px 7px rgba(13, 0, 19, 0.2);
  border-radius: 3px;
  margin: 5px 10px;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const ProjectTitle = styled.h3`
  font-family: "Playfair Display", serif;
  font-weight: 800;
  font-size: 18px;
  color: #22223b;
  font-weight: normal;
  display: flex;
  justify-content: center;
`;

const ProjectImg = styled.img`
  width: 300px;
  height: 200px;
`;

const ProjectDescription = styled.span`
  font-size: 15px;
  color: #22223b;
  font-family: "Dosis", sans-serif;
`;

const ButtonContainer = styled.div``;

const ProjectButton = styled.button`
  padding: ${({ small }) => (small ? "5px 10px" : "8px 15px")};
  margin: ${({ small }) => (small ? "20px 10px" : "10px 15px")};
  border-radius: 10px;
  background-color: #4a4e69;
  color: #fff;
  font-weight: bold;
  font-size: ${({ small }) => (small ? "14px" : "18px")};
  outline: none;
  border: 2px solid transparent;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    background-color: transparent;
    border: 2px solid #9a8c98;
  }
`;

export function ProjectCard(props) {
  const {
    projectTitle,
    projectDescription,
    projectImg,
    webLink,
    gitLink,
  } = props;

  return (
    <CardContainer>
      <ProjectImg src={projectImg} />
      <Marginer direction="horizontal" margin="1em" />
      <ProjectTitle>{projectTitle}</ProjectTitle>
      <ProjectDescription>{projectDescription}</ProjectDescription>
      <Marginer direction="horizontal" margin="1em" />
      <ButtonContainer>
        <ProjectButton small>
          <a href={webLink} target="_blank" rel="noreferrer">
            See The Site
          </a>
        </ProjectButton>
        <ProjectButton small>
          <a href={gitLink} target="_blank" rel="noreferrer">
            See The Code
          </a>
        </ProjectButton>
      </ButtonContainer>
    </CardContainer>
  );
}

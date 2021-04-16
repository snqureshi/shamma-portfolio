import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import { Marginer } from "../components/Marginer";
import { Button } from "../components/Button";

const CardContainer = styled.div`
  width: 350px;
  height: 500px;
  background-color: #fff;
  box-shadow: 0px 0px 7px rgba(13, 0, 19, 0.2);
  border-radius: 3px;
  margin: 5px 10px;
  position: relative;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProjectTitle = styled.h4`
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
`;

const ButtonContainer = styled.div``;

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
        <Button small>{webLink}</Button>
        <Marginer direction="vertical" margin="5px" />
        <Button small>{gitLink}</Button>
      </ButtonContainer>
    </CardContainer>
  );
}

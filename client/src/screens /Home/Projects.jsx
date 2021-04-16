import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
import { ProjectCard } from "../../components/ProjectCard";

import Project1Img from "../../assets/whats-for-dinner home.png";
import Project2Img from "../../assets/best-of-bangtan home.png";
import Project3Img from "../../assets/pets-r-us home.png";
import Project4Img from "../../assets/united-motors home.png";

const ProjectsContainer = styled(Element)`
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #c9ada7;
  padding: 100px 0;
`;

const ProjectsHeader = styled.h1`
  font-family: "Playfair Display", serif;
  text-align: center;
  font-size: 40px;
  color: #161627;
`;

const CardsContainer = styled(Element)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  background-color: #c9ada7;
`;

export function ProjectsSection(props) {
  return (
    <div id="projects" className="projects-container">
      <ProjectsContainer>
        <ProjectsHeader>My Projects</ProjectsHeader>
        <CardsContainer>
          <ProjectCard
            projectImg={Project1Img}
            projectTitle="What's For Dinner?"
            projectDescription="For my first ever coding project, I created a responsive app with RESTful API integration in which users could search for recipes by ingredients or choosing a dietary restriction option."
            webLink="https://snqureshi.github.io/whats-for-dinner/"
            gitLink="https://github.com/snqureshi/whats-for-dinner"
          />
          <ProjectCard
            projectImg={Project2Img}
            projectTitle="Best Of Bangtan"
            projectDescription=" Best-of-Bangtan is a front-end only application featuring Airtable and React build where the users will be able to get and post information as well as reviews about their new favorite BTS songs. This app was built with full CRUD and utilizes a custom Airtable RESTful API."
            webLink="https://best-of-bangtan.netlify.app/"
            gitLink="https://github.com/snqureshi/best-of-bangtan"
          />
          <ProjectCard
            projectImg={Project3Img}
            projectTitle="Pets-R-Us"
            projectDescription=" Pets-R-Us was a team project where we built a full MERN stack application that allows local animal adoption agencies to post their adorable animals. The application has full CRUD and user association on the back, and utilizes the React framework on the front end."
            webLink="https://pets-r-us.netlify.app/"
            gitLink="https://github.com/jessicamyee/pets-r-us"
          />
          <ProjectCard
            projectImg={Project4Img}
            projectTitle="United Motors Car Dealership"
            projectDescription="United Motors is a full stack app designed to be utilized by a local car dealership. It was built with React, Ruby on Rails, and RESTful API built by me. The app features user authentication and full CRUD."
            webLink="https://unitedmotors.netlify.app/"
            gitLink="https://github.com/snqureshi/united-motors"
          />
        </CardsContainer>
      </ProjectsContainer>
    </div>
  );
}

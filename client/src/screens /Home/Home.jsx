import React from "react";
import styled from "styled-components";
import Landing from "./Landing";

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
    </HomeContainer>
  );
}

export default Home;

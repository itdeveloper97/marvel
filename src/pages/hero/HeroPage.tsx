import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

export const HeroPage = () => {
  const { heroId } = useParams();

  return (
    <Container>
      <h1>Hero</h1>
      <h1>id: {heroId}</h1>
    </Container>
  );
};

const Container = styled.div`
  padding: 24px;
  background-color: #f2f5f7;
  min-height: 100vh;
`;

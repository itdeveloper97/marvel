import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { HeroCard } from "./components/HeroCard";
import { useAppSelector } from "../../core/hooks/redux";

export const HeroPage = () => {
  const { heroId } = useParams();
  const hero = useAppSelector((state) =>
    state.heroes.items.find((item) => item.id === heroId)
  );

  return <Container>{hero && <HeroCard item={hero} />}</Container>;
};

const Container = styled.div`
  padding: 24px;
  background-color: #f2f5f7;
  min-height: 100vh;
`;

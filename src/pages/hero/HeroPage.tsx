import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../core/redux/store";
import { HeroCard } from "./components/HeroCard";

export const HeroPage = () => {
  const { heroId } = useParams();
  const hero = useSelector((state: RootState) =>
    state.heroes.items.find((item) => item.id === heroId)
  );

  console.log(hero);

  return <Container>{hero && <HeroCard item={hero} />}</Container>;
};

const Container = styled.div`
  padding: 24px;
  background-color: #f2f5f7;
  min-height: 100vh;
`;

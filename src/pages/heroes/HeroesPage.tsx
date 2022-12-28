import { Button, Input, List } from "antd";
import React, { useMemo } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../core/redux/store";
import { heroesSearch } from "../../core/redux/heroes/heroesSlice";
import { HeroCard } from "../hero/components/HeroCard";
import { Link } from "react-router-dom";

export const HeroesPage = () => {
  const dispatch = useDispatch();
  const { heroes, search } = useSelector((state: RootState) => ({
    heroes: state.heroes.items,
    search: state.heroes.search,
  }));

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(heroesSearch(e.target.value));
  };

  const listItems = useMemo(
    () =>
      heroes.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      ),
    [heroes, search]
  );

  return (
    <Container>
      <InputWrapper>
        <Link to={"/add"}>
          <PrimaryButton>Add hero</PrimaryButton>
        </Link>
        <Input placeholder="Search" onChange={handleSearch} value={search} />
      </InputWrapper>

      <ListWrapper>
        <List
          grid={{ gutter: 16, column: 4 }}
          dataSource={listItems}
          renderItem={(item) => (
            <List.Item>
              <HeroCard key={item.id} item={item} />
            </List.Item>
          )}
        />
      </ListWrapper>
    </Container>
  );
};

const PrimaryButton = styled(Button).attrs({ type: "primary" })`
  margin-bottom: 16px;
`;

const InputWrapper = styled.div`
  padding: 0 24px;
`;

const ListWrapper = styled.div`
  width: 100%;
  margin-top: 24px;
`;

const Container = styled.div`
  padding: 24px;
  background-color: #f2f5f7;
`;

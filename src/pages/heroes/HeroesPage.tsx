import { Card, Input, List } from "antd";
import React, { useMemo } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../core/redux/store";
import { heroesSearch } from "../../core/redux/heroes/heroesSlice";

const { Meta } = Card;

export const HeroesPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { heroes, search } = useSelector((state: RootState) => ({
    heroes: state.heroes.items,
    search: state.heroes.search,
  }));

  const handleNavigate = (id: string) => {
    navigate(`heroes/${id}`);
  };

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
      <Title>Heroes</Title>
      <InputWrapper>
        <Input placeholder="Search" onChange={handleSearch} value={search} />
      </InputWrapper>

      <ListWrapper>
        <List
          grid={{ gutter: 16, column: 4 }}
          dataSource={listItems}
          renderItem={(item) => (
            <List.Item>
              <CardStyled
                style={{
                  height: "100%",
                }}
                hoverable
                title={item.name}
                cover={
                  <Img
                    src={item.src}
                    alt={item.name}
                    style={{ width: "200px", margin: "auto" }}
                  />
                }
                onClick={() => {
                  handleNavigate(item.id);
                }}
              >
                <Meta
                  title={"Характеристики"}
                  description={
                    <List
                      dataSource={item.skills}
                      renderItem={(item) => (
                        <List.Item
                          style={{
                            paddingLeft: "0",
                          }}
                        >
                          {item}
                        </List.Item>
                      )}
                    />
                  }
                />
              </CardStyled>
            </List.Item>
          )}
        />
      </ListWrapper>
    </Container>
  );
};

const InputWrapper = styled.div`
  padding: 0 24px;
`;

const Img = styled.img`
  width: 200px;
  height: 300px;
  object-fit: contain;
`;

const ListWrapper = styled.div`
  width: 100%;
  margin-top: 24px;
`;

const CardStyled = styled(Card)`
  padding: 8px;
  width: auto;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 24px;
`;

const Container = styled.div`
  padding: 24px;
  background-color: #f2f5f7;
`;

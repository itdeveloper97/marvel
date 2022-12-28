import { Card, List } from "antd";
import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { HeroType } from "../../../core/redux/heroes/heroesSlice";

const { Meta } = Card;

interface IProps {
  item: HeroType;
}

export const HeroCard = ({ item }: IProps) => {
  const navigate = useNavigate();

  const handleNavigate = (id: string) => {
    navigate(`heroes/${id}`);
  };

  return (
    <CardStyled
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
  );
};

const Img = styled.img`
  width: 200px;
  height: 300px;
  object-fit: contain;
`;

const CardStyled = styled(Card)`
  padding: 8px;
  width: auto;
`;

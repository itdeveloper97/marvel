import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Button } from "antd";

export const GoBack = () => {
  const navigate = useNavigate();

  return <PrimaryButton onClick={() => navigate(-1)}>Go back</PrimaryButton>;
};

const PrimaryButton = styled(Button).attrs({ type: "primary" })`
  margin-bottom: 16px;
`;

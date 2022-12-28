import styled from "styled-components";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import { Button, Input } from "antd";
import {
  heroesAdd,
  HeroSkillType,
  HeroType,
} from "../../core/redux/heroes/heroesSlice";
import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

interface ICreateHero extends Omit<HeroType, "id" | "skills"> {
  skills: { name: HeroSkillType }[];
}

export const AddHero = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { control, handleSubmit, watch } = useForm<ICreateHero>();
  const { fields, append } = useFieldArray({ control, name: "skills" });

  const watchFieldArray = watch("skills");

  const controlledFields = useMemo(
    () =>
      fields.map((field, index) => {
        return {
          ...field,
          ...watchFieldArray[index],
        };
      }),
    [fields, watchFieldArray]
  );

  const arrayFields = useMemo(
    () =>
      controlledFields.map((field, index) => {
        return (
          <Controller
            key={field.id}
            control={control}
            name={`skills.${index}.name`}
            render={({ field: _field }) => (
              <Input placeholder={"Property"} {..._field} />
            )}
          />
        );
      }),
    [control, controlledFields]
  );

  const handleAppend = () => append({ name: "" });
  const onSubmit = (data: ICreateHero) => {
    const res = { ...data, skills: data.skills.map((item) => item.name) };
    dispatch(heroesAdd(res));
    navigate(`/`);
  };

  return (
    <Container>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name={"name"}
          render={({ field }) => <Input placeholder={"Hero name"} {...field} />}
        />
        <Controller
          control={control}
          name={"src"}
          render={({ field }) => (
            <Input placeholder={"Link image"} {...field} />
          )}
        />
        {arrayFields}
        <Button onClick={handleAppend}>Add Property</Button>
        <Button htmlType={"submit"}>Create</Button>
      </StyledForm>
    </Container>
  );
};

const StyledForm = styled.form`
  max-width: 400px;
  input {
    margin-bottom: 16px;
  }
`;
const Container = styled.div`
  min-height: 100vh;
  padding: 24px;
  background-color: #f2f5f7;
  display: flex;
  justify-content: center;
  align-items: center;
`;

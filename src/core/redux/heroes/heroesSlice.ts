import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import uuid from "react-uuid";

type HeroSkillType = string;

type HeroType = {
  id: string;
  name: string;
  src: string;
  skills: HeroSkillType[];
};

type HeroesType = HeroType[];

type HeroesSliceType = {
  search: string;
  items: HeroesType;
};

const initialState: HeroesSliceType = {
  search: "",
  items: [
    {
      id: uuid(),
      name: "Капитан Америка",
      src: "https://i.pinimg.com/originals/1e/27/bc/1e27bc249c2429a93a52b4931a63c3ec.png",
      skills: ["Ближний бой", "Дальний бой", "Сила", "Выносливость"],
    },
    {
      id: uuid(),
      name: "Тор",
      src: "https://kartinkin.net/uploads/posts/2022-03/1646191056_6-kartinkin-net-p-kartinki-geroev-marvel-7.png",
      skills: ["Ближний бой", "Дальний бой", "Сила", "Стихия молнии"],
    },
    {
      id: uuid(),
      name: "Железный человек",
      src: "https://kartinkin.net/uploads/posts/2022-02/1644998308_63-kartinkin-net-p-kartinki-geroi-marvel-70.png",
      skills: ["Ближний бой", "Дальний бой", "Сила", "Деньги"],
    },
  ],
};

export const heroesSlice = createSlice({
  name: "heroes",
  initialState,
  reducers: {
    search(state, { payload }: PayloadAction<string>) {
      state.search = payload;
    },
  },
});

export const { search: heroesSearch } = heroesSlice.actions;

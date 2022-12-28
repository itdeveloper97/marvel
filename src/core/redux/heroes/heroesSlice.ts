import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import uuid from "react-uuid";
import { storage } from "../../storage";

export type HeroSkillType = string;

export type HeroType = {
  id: string;
  name: string;
  src: string;
  skills: HeroSkillType[];
};

type HeroesSliceType = {
  search: string;
  items: HeroType[];
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
      src: "https://pngfolio.com/images/all_img/copy/1657962224Thor%20Loki%20Marvel%20-%20Thor%20Marvel%20Avengers%20Alliance,%20HD%20Png%20Download.png",
      skills: ["Ближний бой", "Дальний бой", "Сила", "Стихия молнии"],
    },
    {
      id: uuid(),
      name: "Железный человек",
      src: "https://cdn.vegaoo.es/images/rep_art/gra/318/3/318370/decoracion-mural-articulada-iron-man-1-m.jpg",
      skills: ["Ближний бой", "Дальний бой", "Сила", "Деньги"],
    },
    ...((storage.get("heroes") as HeroType[]) || []),
  ],
};

export const heroesSlice = createSlice({
  name: "heroes",
  initialState,
  reducers: {
    search(state, { payload }: PayloadAction<string>) {
      state.search = payload;
    },
    add(state, { payload }: PayloadAction<Omit<HeroType, "id">>) {
      const hero = { ...payload, id: uuid() };
      storage.set("heroes", [hero]);
      console.log(storage.get("heroes"));
      state.items = [...state.items, hero];
    },
  },
});

export const { search: heroesSearch, add: heroesAdd } = heroesSlice.actions;

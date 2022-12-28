import { createBrowserRouter } from "react-router-dom";
import { ErrorPage } from "../pages/error/ErrorPage";
import { HeroPage } from "../pages/hero/HeroPage";
import { App } from "../App";
import { AddHero } from "../pages/addHero/AddHero";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/heroes/:heroId",
    element: <HeroPage />,
  },
  {
    path: "/add",
    element: <AddHero />,
  },
]);

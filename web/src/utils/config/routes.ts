import { IRoute } from "../types/Route";
import { Home, Feed, Canvas, Login } from "../../pages";

export const routes: IRoute[] = [
  {
    name: "Home",
    path: "/",
    exact: true,
    component: Home,
  },
  {
    name: "Feed",
    path: "/feed",
    exact: true,
    component: Feed,
  },
  {
    name: "Canvas",
    path: "/canvas",
    component: Canvas,
    exact: true,
  },
  {
    name: "Login",
    path: "/login",
    component: Login,
    exact: true,
  },
];

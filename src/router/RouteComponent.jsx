import { AboutMePage, ArticlePage, CoursePage, HomePage } from "../page";
import { Path } from "./path";

export const RouteComponent = [
  {
    path: Path.Home,
    component: HomePage,
    exact: true,
  },
  {
    path: Path.Courses,
    component: CoursePage,
    exact: true,
  },
  {
    path: Path.Articles,
    component: ArticlePage,
    exact: true,
  },
  {
    path: Path.AboutMe,
    component: AboutMePage,
    exact: true,
  },
];

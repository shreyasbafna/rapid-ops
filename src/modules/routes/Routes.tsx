import { Route, Routes } from "react-router-dom";
import App from "../../App";
import { Header } from "../../components/Header/Header";
import NotFound from "./NotFound";
import ProjectDetails from "../app/Projects/ProjectDetails";
import Home from "../app/Home/Home";

export interface RouteDefinition {
  path: string;
  component: any;
  routes?: RouteDefinition[];
  title?: string;
  protected?: boolean;
}

const NotFoundRoute: RouteDefinition = {
  path: "*",
  component: NotFound,
  protected: false,
  title: "",
};

export const routes: RouteDefinition[] = [
  {
    path: "/",
    component: Home,
    protected: false,
    title: "Home",
  },
  {
    path: "/project/:id",
    component: ProjectDetails,
    protected: false,
    title: "Project",
  },
].concat(NotFoundRoute as any);

const RoutePath = () => {
  return (
    <div>
      <Header />
      <Routes>
        {routes.map((route, i) => {
          return (
            <Route key={i} path={route.path} element={<route.component />} />
          );
        })}
      </Routes>
    </div>
  );
};
export default RoutePath;

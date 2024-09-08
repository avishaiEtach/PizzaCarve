import "./AppHeader.scss";
import { routes, routesPath } from "../../routes";
import { NavLink, useNavigate } from "react-router-dom";

export const AppHeader = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="main-header-container">
        <div
          onClick={() => {
            navigate(routesPath.home);
          }}
          className="logo"
        >
          Pizza Carve
        </div>
        <nav className={"navbar"}>
          {routes.map((route) => {
            return (
              <NavLink key={route.path} to={route.path}>
                {route.label}
              </NavLink>
            );
          })}
        </nav>
      </div>
    </>
  );
};

import "./AppHeader.scss";
import logo from "../../assets/images/logo.png";
import { routes, routesPath } from "../../routes";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

export const AppHeader = () => {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => {
          setOpen(false);
        }}
        className={`screen ${open ? "open" : ""}`}
      ></div>
      <div
        className="hamburger"
        onClick={() => {
          setOpen(true);
        }}
      >
        ☰
      </div>
      <div className={`main-header-container ${open ? "open" : ""}`}>
        <div
          onClick={() => {
            setOpen(false);
          }}
          className="close"
        >
          X
        </div>
        <div
          onClick={() => {
            navigate(routesPath.home);
          }}
          className="logo"
        >
          Pizza Carve
        </div>
        <nav className="navbar">
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

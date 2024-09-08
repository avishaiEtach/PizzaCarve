import React from "react";
import "./AppFooter.scss";
import { routes } from "../../routes";
import { NavLink } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export const AppFooter = () => {
  return (
    <footer className="app-footer full main-container">
      <div className="flex g30 space-between">
        <div>
          <div className="footer__logo">
            <span>Pizza Carve</span>
          </div>
          <div className="footer__details flex column g30">
            <div>
              <h5>Address:</h5>
              <span className="footer__details__text">
                88 Fulton St, New York, NY 10038, USA
              </span>
            </div>
            <div>
              <h5>Phone:</h5>
              <span className="footer__details__text">+1 (908) 087-7947</span>
            </div>
            <div>
              <h5>Opening Hours:</h5>
              <span className="footer__details__text">
                Sunday-Thursday 8:00am - 9:00pm
              </span>
            </div>
            <div>
              <h5>Contact:</h5>
              <span className="footer__details__text">
                PizzaCarve@gmail.com
              </span>
            </div>
            <div className="footer__icons flex g10">
              <FaFacebook />
              <FaInstagram />
              <FaXTwitter />
              <FaLinkedin />
              <FaYoutube />
            </div>
          </div>
        </div>
        <div className="flex column g20 footer__links">
          {routes.map((route) => {
            return (
              <NavLink key={route.path} to={route.path}>
                {route.label}
              </NavLink>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

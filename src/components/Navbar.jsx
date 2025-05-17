import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageButtons from "./LanguageButtons";
import { useState } from "react";
import {FaBars, FaTimes,FaMapMarkerAlt} from "react-icons/fa";
import cozumLogo from "../assets/machine/cozumLogo.png";
import { FiMail } from "react-icons/fi";
import { configs } from "../config";

function Navbar({ isMobile }) {
  const { t } = useTranslation();

  const [navOpen, setNavOpen] = useState("");

  const handleMenuToggle = function (scroll = true) {
    navOpen === "" ? setNavOpen("nav-open") : setNavOpen("");
    if (scroll) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className={`${navOpen} header`}>
      <div className="navTop">
        <div className="navTopLeft">
          <div className="navTopLeftEmail">
            <FiMail color="#fff" />
            <p>{configs.email}</p>
          </div>
          <div className="navTopLeftAddress">
            <FaMapMarkerAlt color="#fff" />
            <p>{configs.address} </p>
          </div>
        </div>
        <div className="navTopCenter">
         
        </div>
      </div>
      <nav className="nav">
        <div className="navLogo">
          <img src={cozumLogo} alt="berko logo" />
        </div>
        <div className="navLeft">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "navLink")}
            onClick={handleMenuToggle}
          >
            {t("Home")}
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active" : "navLink")}
            onClick={handleMenuToggle}
          >
            {t("About")}
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "active" : "navLink")}
            onClick={handleMenuToggle}
          >
            {t("Contact")}
          </NavLink>
          {isMobile && <LanguageButtons />}
        </div>

        <div className="navRight">
          <LanguageButtons />
        </div>
        <div className="iconContainer" onClick={() => handleMenuToggle(false)}>
          <FaBars className="menuIcon" />
          <FaTimes className="closeIcon" />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;

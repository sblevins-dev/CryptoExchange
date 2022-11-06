import "./nav.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShop,
  faBell,
  faArrowRightArrowLeft,
  faNewspaper,
  faIdCard,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

export const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(true);

  return (
    <div className="nav-wrapper" style={{ width: menuOpen ? "220px" : "80px" }}>
      <div className="profile-header">
        <div className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
          <FontAwesomeIcon icon={menuOpen ? faChevronLeft : faChevronRight} />
        </div>
        <div className="avatar">
          <img src="" alt="profile" />
        </div>
        <span className="name" style={{ display: menuOpen ? "block" : "none" }}>
          Placeholder
        </span>
      </div>
      <ul className="main-options-wrapper">
        <li>
          <Link to="/">
            <FontAwesomeIcon icon={faShop} className="icon" />
            <label style={{ display: menuOpen ? "block" : "none" }}>
              Market
            </label>
          </Link>
        </li>
        <li>
          <Link>
            <FontAwesomeIcon icon={faBell} className="icon" />
            <label style={{ display: menuOpen ? "block" : "none" }}>
              Notifications
            </label>
          </Link>
        </li>
        <li>
          <Link to="/dashboard">
            <FontAwesomeIcon icon={faShop} className="icon" />
            <label style={{ display: menuOpen ? "block" : "none" }}>
              Dashboard
            </label>
          </Link>
        </li>
        <li>
          <Link to="/transactions">
            <FontAwesomeIcon icon={faArrowRightArrowLeft} className="icon" />
            <label style={{ display: menuOpen ? "block" : "none" }}>
              Transactions
            </label>
          </Link>
        </li>
        <li>
          <Link to="/portfolio">
            <FontAwesomeIcon icon={faIdCard} className="icon" />
            <label style={{ display: menuOpen ? "block" : "none" }}>
              Portfolio
            </label>
          </Link>
        </li>
        <li>
          <Link to="/news">
            <FontAwesomeIcon icon={faNewspaper} className="icon" />
            <label style={{ display: menuOpen ? "block" : "none" }}>News</label>
          </Link>
        </li>
      </ul>
    </div>
  );
};

import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import logoImage from "../../assets/images/logo.png"
import "../../styles/header.scss"
import { Link } from 'react-router-dom';


const Header = () => {
  document.title = "Javascript Notes";
  const [isActive, setIsActive] = useState(false);

  const toggleBurgerMenu = () => {
    setIsActive(!isActive);
  };

  return (
    
    <nav className="navbar header" role="navigation" aria-label="main navigation">
      <div className="navbar-brand navbar-logout">
        <Link to={"/"}>
          <img src={logoImage} alt="Logo" />
        </Link>

        <a
          role="button"
          className={`navbar-burger burger ${isActive ? 'is-active' : ''}`}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          onClick={toggleBurgerMenu}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <Link to={"/register"}>
                <a className="button is-primary has-text-custom-purple">
                  Register
                </a>
              </Link>
              <Link to={"/login"}>
                <a className="button is-light">
                  Login
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;

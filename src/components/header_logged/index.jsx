import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import logoImage from "../../assets/images/logo-white.png";
import "../../styles/header.scss";
import UsersService from '../../services/users';
import { Link, Navigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';

function HeaderLogged(props) {
    const [redirectToHome, setRedirectToHome] = useState(false);
    const [isDropdownActive, setIsDropdownActive] = useState(false);
    const [isMenuActive, setIsMenuActive] = useState(false);

    const logOut = async () => {
        await UsersService.logout();
        setRedirectToHome(true);
    }

    const toggleDropdown = () => {
        setIsDropdownActive(!isDropdownActive);
    }

    const toggleMenu = () => {
        setIsMenuActive(!isMenuActive);
    }

    if (redirectToHome) {
        return <Navigate to={{ pathname: "/" }} />;
    }

    return (
        <nav className="navbar has-background navbar-logged">
            <div className="navbar-brand">
                <div className="column is-offset-1">
                    <Link to={"/notes"}>
                        <img src={logoImage} alt="Logo" />
                    </Link>
                </div>
                <div className={`navbar-burger burger navbar-logged ${isMenuActive ? 'is-active' : ''}`} onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>

            <div className={`navbar-menu ${isMenuActive ? 'is-active' : ''} logged`}>
                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className={`dropdown is-right ${isDropdownActive ? 'is-active' : ''}`}>
                            <div className="dropdown-trigger">
                                <button
                                    className="button is-white is-outlined"
                                    aria-haspopup="true"
                                    aria-controls="dropdown-menu"
                                    onClick={toggleDropdown}
                                >
                                    <span>Wallace ▼</span>
                                </button>
                            </div>
                            <div className="dropdown-menu" id="dropdown-menu" role="menu">
                                <div className="dropdown-content">
                                    <Link to="/users/edit" className='logged dropdown-item'>
                                        User Edit
                                    </Link>

                                    <hr className="dropdown-divider" />
                                    <a href="#" className="logged dropdown-item" onClick={e => { e.preventDefault(); logOut(); }}>
                                        LogOut
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default HeaderLogged;

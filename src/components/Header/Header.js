import React from 'react';
import {Link, NavLink} from "react-router-dom";
import {FiSearch} from "react-icons/fi";

const Header = ({menu, setMenu}) => {

    const clickMenu = () => {
        setMenu(!menu)
    }
    return (
        <div id="header">
            <div className="container">
                <div className="header">
                    <h1 className="header--logo">
                        <NavLink to={"/"}>
                            <h1>Restaurant</h1>
                        </NavLink>
                    </h1>
                    <div className="header--navbar">
                        <a href="#modern">interior</a>
                        <a href="#about">About Us</a>
                        <a href="#mainMenu">Menu</a>
                        <a href="#contacts">Contacts</a>
                        <div className="header--navbar__search">
                            <input type="text" placeholder="Search"/>
                            <FiSearch className="header--navbar__search--icon"/>
                        </div>
                        <select>
                            <option>EN</option>
                            <option>RU</option>
                            <option>KG</option>
                        </select>
                    </div>
                    <div className="headerMenu">
                        <div
                            onClick={() => clickMenu()}
                            className="header--menu">
                            <div className="header--menu__small">
                                <div className="header--menu__small--line"/>
                                <div className="header--menu__small--line"/>
                            </div>
                            <div className="header--menu__big">
                                <div className="header--menu__big--line"/>
                                <div className="header--menu__big--line"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
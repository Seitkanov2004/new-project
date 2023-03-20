import React from 'react';
import {NavLink} from "react-router-dom";
import {FiSearch} from "react-icons/fi";

const Header = () => {
    return (
        <div id="header">
            <div className="container">
                <div className="header">
                    <h1 className="header--logo">
                        <h1>Restaurant</h1>
                    </h1>
                    <div className="header--navbar">
                        <NavLink to={"/"}>interior</NavLink>
                        <NavLink to={"/"}>About Us</NavLink>
                        <NavLink to={"/"}>Menu</NavLink>
                        <NavLink to={"/"}>Contacts</NavLink>
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

                </div>
            </div>
        </div>
    );
};

export default Header;
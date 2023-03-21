import React from 'react';
import {NavLink} from "react-router-dom";
import {FaTelegramPlane} from "react-icons/fa";
import {AiFillInstagram} from "react-icons/ai";

const Footer = () => {
    return (
        <div id="footer">
            <div className="container">
                <div className="footer">
                    <h1 className="footer--logo">Restaurant</h1>
                    <div className="footer--navbar">
                        <NavLink to={"/"}>interior</NavLink>
                        <NavLink to={"/"}>About us</NavLink>
                        <NavLink to={"/"}>Menu</NavLink>
                        <NavLink to={"/"}>Contacts</NavLink>
                    </div>
                    <div className="footer--allIcons">
                        <FaTelegramPlane className="footer--allIcons__icon"/>
                        <AiFillInstagram className="footer--allIcons__icon"/>
                    </div>
                </div>
                <hr/>
                <h4 className="footer--end">c 2023 Motion Study LLC</h4>
            </div>
        </div>
    );
};

export default Footer;
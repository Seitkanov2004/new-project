import React from 'react';
import {FaTelegramPlane} from "react-icons/fa";
import {AiFillInstagram} from "react-icons/ai";

const Footer = () => {
    return (
        <div id="footer">
            <div className="container">
                <div className="footer">
                    <h1 className="footer--logo">Restaurant</h1>
                    <div className="footer--navbar">
                        <a href="#modern">interior</a>
                        <a href="#about">About Us</a>
                        <a href="#mainMenu">Menu</a>
                        <a href="#contacts">Contacts</a>
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
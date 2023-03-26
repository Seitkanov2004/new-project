import React from 'react';
import "./Menu.scss"

const BurMenu = ({menu}) => {
    return (
        <div className="menu" style={{
            display: menu ? "block" : "none"
        }}>
            <a href="#modern">interior</a>
            <a href="#about">About Us</a>
            <a href="#mainMenu">Menu</a>
            <a href="#contacts">Contacts</a>
            <div>
                <span>EN</span>
                <span>RU</span>
                <span>KG</span>
            </div>
        </div>
    );
};

export default BurMenu;